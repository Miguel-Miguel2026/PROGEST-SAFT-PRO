#!/usr/bin/env python3
"""Alerta matinal de criptomoedas.

Recolhe preços (CoinGecko), o índice de Medo & Ganância (alternative.me),
gera um relatório com gráficos e envia-o por email e/ou Telegram.

Só usa a biblioteca padrão do Python 3.9+. Configuração por variáveis de
ambiente (ver README.md). Opções:
    --preview   gera relatorio.html sem enviar nada
    --demo      usa dados fictícios (sem internet) e implica --preview
"""

import argparse
import html
import json
import math
import os
import random
import smtplib
import sys
import time
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

API = "https://api.coingecko.com/api/v3"
FNG_API = "https://api.alternative.me/fng/?limit=2"
QUICKCHART = "https://quickchart.io/chart"

DEFAULT_COINS = "bitcoin,ethereum,binancecoin,solana,ripple,cardano,dogecoin,tron,avalanche-2,chainlink"
FNG_PT = {
    "Extreme Fear": "Medo extremo",
    "Fear": "Medo",
    "Neutral": "Neutro",
    "Greed": "Ganância",
    "Extreme Greed": "Ganância extrema",
}
UP, DOWN, BLUE = "#0a7d0a", "#d03b3b", "#2a78d6"
LUANDA = timezone(timedelta(hours=1))
DIAS = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"]


def env(name, default=""):
    return (os.environ.get(name) or "").strip() or default


# ---------------------------------------------------------------- dados

def get_json(url, tries=4):
    req = urllib.request.Request(url, headers={"User-Agent": "radar-cripto/1.0", "Accept": "application/json"})
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except Exception as exc:  # 429 / rede: tenta de novo com espera crescente
            if attempt == tries - 1:
                raise RuntimeError(f"Falha ao obter {url}: {exc}") from exc
            time.sleep(2 ** (attempt + 1))


def fetch_data(coins, currency):
    q = urllib.parse.urlencode({
        "vs_currency": currency,
        "ids": ",".join(coins),
        "order": "market_cap_desc",
        "sparkline": "true",
        "price_change_percentage": "1h,24h,7d",
    })
    markets = get_json(f"{API}/coins/markets?{q}")
    try:
        glob = get_json(f"{API}/global")["data"]
    except RuntimeError:
        glob = None
    try:
        fng = get_json(FNG_API)["data"]
    except RuntimeError:
        fng = None
    return markets, glob, fng


def demo_data(coins, currency):
    random.seed(42)
    base = {"bitcoin": 67000, "ethereum": 3400, "binancecoin": 590, "solana": 155, "ripple": 0.58,
            "cardano": 0.45, "dogecoin": 0.13, "tron": 0.16, "avalanche-2": 28, "chainlink": 14}
    markets = []
    for cid in coins:
        p0 = base.get(cid, 10.0)
        series, p = [], p0
        for _ in range(168):
            p *= 1 + random.gauss(0, 0.006)
            series.append(p)
        markets.append({
            "id": cid, "name": cid.replace("-2", "").title(), "symbol": cid[:3],
            "current_price": series[-1], "market_cap": series[-1] * random.uniform(1e8, 2e10),
            "total_volume": series[-1] * random.uniform(1e6, 1e9),
            "price_change_percentage_1h_in_currency": random.gauss(0, 0.6),
            "price_change_percentage_24h_in_currency": (series[-1] / series[-25] - 1) * 100,
            "price_change_percentage_7d_in_currency": (series[-1] / series[0] - 1) * 100,
            "sparkline_in_7d": {"price": series},
        })
    glob = {"total_market_cap": {currency: 2.4e12}, "total_volume": {currency: 9.1e10},
            "market_cap_percentage": {"btc": 54.3}, "market_cap_change_percentage_24h_usd": 1.8}
    fng = [{"value": "62", "value_classification": "Greed"}, {"value": "55", "value_classification": "Greed"}]
    return markets, glob, fng


# ---------------------------------------------------------------- análise

def pct(m, key):
    v = m.get(f"price_change_percentage_{key}_in_currency")
    return None if v is None else float(v)


def parse_price_targets(spec):
    """'bitcoin>70000,ethereum<2500' -> [(id, '>', 70000.0), ...]"""
    out = []
    for item in filter(None, (s.strip() for s in spec.split(","))):
        op = ">" if ">" in item else "<" if "<" in item else None
        if not op:
            continue
        cid, val = item.split(op, 1)
        try:
            out.append((cid.strip().lower(), op, float(val)))
        except ValueError:
            pass
    return out


def build_alerts(markets, threshold, targets):
    alerts = []
    by_id = {m["id"]: m for m in markets}
    for m in markets:
        d24 = pct(m, "24h")
        if d24 is not None and abs(d24) >= threshold:
            verbo = "subiu" if d24 > 0 else "caiu"
            alerts.append(f"{m['name']} {verbo} {abs(d24):.1f}% nas últimas 24h")
    for cid, op, val in targets:
        m = by_id.get(cid)
        if not m:
            continue
        p = m["current_price"]
        if (op == ">" and p >= val) or (op == "<" and p <= val):
            cond = "acima" if op == ">" else "abaixo"
            alerts.append(f"{m['name']} está {cond} do alvo {val:,.2f} (atual {p:,.2f})")
    return alerts


def downsample(series, n=42):
    if len(series) <= n:
        return series
    step = len(series) / n
    return [series[int(i * step)] for i in range(n)] + [series[-1]]


# ---------------------------------------------------------------- formatação

def money(v, cur, compact=False):
    if v is None:
        return "—"
    sym = {"usd": "$", "eur": "€", "brl": "R$"}.get(cur, cur.upper() + " ")
    if compact:
        for div, suf in ((1e12, " bi"), (1e9, " mM"), (1e6, " M")):
            if abs(v) >= div:
                return f"{sym}{v / div:,.2f}{suf}"
    decimals = 2 if abs(v) >= 1 else 6
    return f"{sym}{v:,.{decimals}f}"


def pct_html(v):
    if v is None or (isinstance(v, float) and math.isnan(v)):
        return '<span style="color:#898781">—</span>'
    color, arrow = (UP, "▲") if v >= 0 else (DOWN, "▼")
    return f'<span style="color:{color};font-weight:600">{arrow} {abs(v):.2f}%</span>'


def pct_txt(v):
    if v is None:
        return "—"
    return f"{'🟢' if v >= 0 else '🔴'} {v:+.2f}%"


def chart_url(series, label, color, width=560, height=220):
    data = [round(x, 6) for x in downsample(series)]
    cfg = {
        "type": "line",
        "data": {"labels": list(range(len(data))), "datasets": [{
            "label": label, "data": data, "borderColor": color, "borderWidth": 2,
            "backgroundColor": color + "1a", "fill": True, "pointRadius": 0, "lineTension": 0.2}]},
        "options": {
            "legend": {"display": False},
            "title": {"display": True, "text": label, "fontColor": "#0b0b0b"},
            "scales": {
                "xAxes": [{"display": False}],
                "yAxes": [{"position": "right", "gridLines": {"color": "#e1e0d9"}, "ticks": {"fontColor": "#898781"}}],
            },
        },
    }
    q = urllib.parse.urlencode({"w": width, "h": height, "bkg": "white", "c": json.dumps(cfg, separators=(",", ":"))})
    return f"{QUICKCHART}?{q}"


def spark_url(series, up):
    data = [round(x, 6) for x in downsample(series, 28)]
    cfg = {"type": "sparkline", "data": {"datasets": [{"data": data, "borderColor": UP if up else DOWN,
                                                        "borderWidth": 2, "fill": False}]}}
    q = urllib.parse.urlencode({"w": 110, "h": 32, "bkg": "white", "c": json.dumps(cfg, separators=(",", ":"))})
    return f"{QUICKCHART}?{q}"


def build_html(markets, glob, fng, alerts, cur, dashboard_url, now):
    e = html.escape
    rows = []
    for m in markets:
        spark = m.get("sparkline_in_7d", {}).get("price") or []
        d7 = pct(m, "7d")
        img = f'<img src="{e(spark_url(spark, (d7 or 0) >= 0))}" width="110" height="32" alt="">' if spark else ""
        rows.append(f"""
        <tr>
          <td style="padding:8px 6px;border-bottom:1px solid #e1e0d9"><b>{e(m['name'])}</b>
            <span style="color:#898781;text-transform:uppercase;font-size:12px">{e(m['symbol'])}</span></td>
          <td style="padding:8px 6px;border-bottom:1px solid #e1e0d9;text-align:right">{money(m['current_price'], cur)}</td>
          <td style="padding:8px 6px;border-bottom:1px solid #e1e0d9;text-align:right">{pct_html(pct(m, '24h'))}</td>
          <td style="padding:8px 6px;border-bottom:1px solid #e1e0d9;text-align:right">{pct_html(d7)}</td>
          <td style="padding:8px 6px;border-bottom:1px solid #e1e0d9;text-align:right">{img}</td>
        </tr>""")

    ranked = sorted((m for m in markets if pct(m, "24h") is not None), key=lambda m: pct(m, "24h"))
    best = ranked[-1] if ranked else None
    worst = ranked[0] if ranked else None

    tiles = []
    if glob:
        tiles.append(("Capitalização total", money(glob["total_market_cap"].get(cur), cur, True),
                      pct_html(glob.get("market_cap_change_percentage_24h_usd"))))
        tiles.append(("Dominância BTC", f"{glob['market_cap_percentage']['btc']:.1f}%", ""))
    if fng:
        v = int(fng[0]["value"])
        prev = f" (ontem {fng[1]['value']})" if len(fng) > 1 else ""
        tiles.append(("Medo & Ganância", f"{v}/100", e(FNG_PT.get(fng[0]["value_classification"], "")) + prev))
    tiles_html = "".join(
        f'<td style="padding:12px;border:1px solid #e1e0d9;border-radius:8px;background:#fcfcfb;width:33%">'
        f'<div style="font-size:12px;color:#52514e">{e(t)}</div>'
        f'<div style="font-size:20px;font-weight:700;margin:2px 0">{v}</div>'
        f'<div style="font-size:12px">{d}</div></td>'
        for t, v, d in tiles)

    alerts_html = ""
    if alerts:
        items = "".join(f"<li style='margin:4px 0'>{e(a)}</li>" for a in alerts)
        alerts_html = (f'<div style="border-left:4px solid #fab219;background:#fff8e6;padding:12px 16px;'
                       f'border-radius:6px;margin:16px 0"><b>⚠ Alertas de hoje</b><ul style="margin:6px 0 0;'
                       f'padding-left:18px">{items}</ul></div>')

    btc = next((m for m in markets if m["id"] == "bitcoin"), markets[0] if markets else None)
    hero = ""
    if btc and btc.get("sparkline_in_7d", {}).get("price"):
        url = chart_url(btc["sparkline_in_7d"]["price"], f"{btc['name']} — últimos 7 dias", BLUE)
        hero = f'<img src="{e(url)}" width="560" style="max-width:100%;height:auto;margin:8px 0" alt="Gráfico 7 dias">'

    movers = ""
    if best and worst:
        movers = (f"<p style='margin:12px 0'>🏆 Maior subida: <b>{e(best['name'])}</b> {pct_html(pct(best, '24h'))}"
                  f" &nbsp;·&nbsp; 📉 Maior queda: <b>{e(worst['name'])}</b> {pct_html(pct(worst, '24h'))}</p>")

    cta = ""
    if dashboard_url:
        cta = (f'<p style="margin:20px 0"><a href="{e(dashboard_url)}" style="background:{BLUE};color:#fff;'
               f'padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:600">'
               f'Abrir gráficos interativos</a></p>')

    return f"""<!doctype html>
<html lang="pt"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Radar Cripto — {now:%d/%m/%Y}</title></head>
<body style="margin:0;background:#f9f9f7;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#0b0b0b">
<div style="max-width:640px;margin:0 auto;padding:24px 16px">
  <h1 style="font-size:22px;margin:0">☀️ Bom dia — Radar Cripto</h1>
  <div style="color:#52514e;font-size:13px">{DIAS[now.weekday()].capitalize()}, {now:%d/%m/%Y · %H:%M} (Luanda) · valores em {cur.upper()}</div>
  {alerts_html}
  <table role="presentation" cellspacing="8" style="width:100%;margin:8px -8px"><tr>{tiles_html}</tr></table>
  {movers}
  {hero}
  <table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:8px">
    <thead><tr style="color:#898781;font-size:12px">
      <th style="text-align:left;padding:6px">Moeda</th><th style="text-align:right;padding:6px">Preço</th>
      <th style="text-align:right;padding:6px">24h</th><th style="text-align:right;padding:6px">7d</th>
      <th style="text-align:right;padding:6px">7 dias</th></tr></thead>
    <tbody>{''.join(rows)}</tbody>
  </table>
  {cta}
  <p style="color:#898781;font-size:11px;margin-top:24px">Dados: CoinGecko e alternative.me. Informação de mercado,
  não constitui aconselhamento de investimento.</p>
</div></body></html>"""


def build_text(markets, glob, fng, alerts, cur, dashboard_url, now):
    lines = [f"☀️ *Radar Cripto* — {now:%d/%m/%Y %H:%M}", ""]
    if alerts:
        lines += ["⚠️ *Alertas*"] + [f"• {a}" for a in alerts] + [""]
    if glob:
        lines.append(f"Cap. total: {money(glob['total_market_cap'].get(cur), cur, True)} "
                     f"({pct_txt(glob.get('market_cap_change_percentage_24h_usd'))})")
        lines.append(f"Dominância BTC: {glob['market_cap_percentage']['btc']:.1f}%")
    if fng:
        lines.append(f"Medo & Ganância: {fng[0]['value']}/100 — {FNG_PT.get(fng[0]['value_classification'], '')}")
    lines.append("")
    for m in markets:
        lines.append(f"*{m['symbol'].upper()}* {money(m['current_price'], cur)}  24h {pct_txt(pct(m, '24h'))}  "
                     f"7d {pct_txt(pct(m, '7d'))}")
    if dashboard_url:
        lines += ["", f"📊 Gráficos interativos: {dashboard_url}"]
    return "\n".join(lines)


# ---------------------------------------------------------------- envio

def send_email(subject, html_body, text_body):
    host, user, pwd, to = env("SMTP_HOST"), env("SMTP_USER"), env("SMTP_PASS"), env("EMAIL_PARA")
    if not (host and user and pwd and to):
        print("Email: não configurado (SMTP_HOST, SMTP_USER, SMTP_PASS, EMAIL_PARA) — ignorado.")
        return False
    port = int(env("SMTP_PORT", "587"))
    msg = MIMEMultipart("alternative")
    msg["Subject"], msg["From"], msg["To"] = subject, env("EMAIL_DE", user), to
    msg.attach(MIMEText(text_body, "plain", "utf-8"))
    msg.attach(MIMEText(html_body, "html", "utf-8"))
    recipients = [a.strip() for a in to.split(",") if a.strip()]
    if port == 465:
        with smtplib.SMTP_SSL(host, port, timeout=30) as s:
            s.login(user, pwd)
            s.sendmail(msg["From"], recipients, msg.as_string())
    else:
        with smtplib.SMTP(host, port, timeout=30) as s:
            s.starttls()
            s.login(user, pwd)
            s.sendmail(msg["From"], recipients, msg.as_string())
    print(f"Email enviado para {to}.")
    return True


def send_telegram(text, photo_url=None):
    token, chat = env("TELEGRAM_BOT_TOKEN"), env("TELEGRAM_CHAT_ID")
    if not (token and chat):
        print("Telegram: não configurado (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID) — ignorado.")
        return False
    base = f"https://api.telegram.org/bot{token}"

    def post(method, payload):
        data = urllib.parse.urlencode(payload).encode()
        with urllib.request.urlopen(urllib.request.Request(f"{base}/{method}", data=data), timeout=30) as r:
            return json.load(r)

    if photo_url:
        try:
            post("sendPhoto", {"chat_id": chat, "photo": photo_url, "caption": "Bitcoin — últimos 7 dias"})
        except Exception as exc:
            print(f"Telegram: gráfico não enviado ({exc}).")
    post("sendMessage", {"chat_id": chat, "text": text, "parse_mode": "Markdown", "disable_web_page_preview": "true"})
    print("Telegram enviado.")
    return True


# ---------------------------------------------------------------- main

def main():
    ap = argparse.ArgumentParser(description="Alerta matinal de criptomoedas")
    ap.add_argument("--preview", action="store_true", help="gera relatorio.html sem enviar")
    ap.add_argument("--demo", action="store_true", help="dados fictícios, sem internet (implica --preview)")
    ap.add_argument("--out", default="relatorio.html", help="ficheiro de pré-visualização")
    args = ap.parse_args()

    coins = [c.strip().lower() for c in env("CRYPTO_MOEDAS", DEFAULT_COINS).split(",") if c.strip()]
    cur = env("MOEDA_BASE", "usd").lower()
    threshold = float(env("LIMIAR_ALERTA", "5"))
    targets = parse_price_targets(env("ALERTAS_PRECO"))
    dashboard_url = env("DASHBOARD_URL")
    now = datetime.now(LUANDA)

    markets, glob, fng = demo_data(coins, cur) if args.demo else fetch_data(coins, cur)
    if not markets:
        print("Sem dados de mercado.", file=sys.stderr)
        return 1

    alerts = build_alerts(markets, threshold, targets)
    html_body = build_html(markets, glob, fng, alerts, cur, dashboard_url, now)
    text_body = build_text(markets, glob, fng, alerts, cur, dashboard_url, now)

    if args.preview or args.demo:
        with open(args.out, "w", encoding="utf-8") as f:
            f.write(html_body)
        print(text_body)
        print(f"\nPré-visualização gravada em {args.out}")
        return 0

    btc = next((m for m in markets if m["id"] == "bitcoin"), None)
    photo = chart_url(btc["sparkline_in_7d"]["price"], "Bitcoin — 7 dias", BLUE) if btc else None
    subject = f"☀️ Radar Cripto {now:%d/%m}" + (f" — {len(alerts)} alerta(s)" if alerts else "")

    sent = []
    for name, fn in (("email", lambda: send_email(subject, html_body, text_body)),
                     ("telegram", lambda: send_telegram(text_body, photo))):
        try:
            if fn():
                sent.append(name)
        except Exception as exc:
            print(f"Erro no envio por {name}: {exc}", file=sys.stderr)
    if not sent:
        print("Nenhum canal enviou o alerta. Configure email ou Telegram.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
