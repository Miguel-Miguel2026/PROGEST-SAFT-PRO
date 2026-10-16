# Radar Cripto — alertas de mercado com gráficos interativos

Duas peças:

| Peça | O que faz |
|---|---|
| `dashboard.html` | Painel interativo: preços em tempo real (atualiza a cada 60 s), gráfico de preço + volume com zoom de 24h a 1 ano, tooltip com variação desde o início do período, mini-gráficos de 7 dias, capitalização total, dominância do BTC, índice de Medo & Ganância e **alertas de preço** com notificação no ambiente de trabalho. Tema claro/escuro, USD/EUR/BRL. |
| `alerta_matinal.py` | Resumo diário do mercado enviado **todas as manhãs** por email e/ou Telegram, com gráfico do Bitcoin, mini-gráficos por moeda, maiores subidas/quedas e alertas automáticos. |

O agendamento é feito pelo GitHub Actions (`.github/workflows/crypto-alerta-matinal.yml`): todos os dias às **07:45 (hora de Luanda)**.

## 1. Painel interativo

Abrir `dashboard.html` no navegador (duplo clique). Não precisa de instalação.
Clique numa moeda da tabela para ver o gráfico dela; use os botões 24h / 7d / 30d / 90d / 1a para mudar o período.
Para receber alertas de preço no ambiente de trabalho, clique em **Ativar notificações** e crie os alertas no painel lateral.

## 2. Alerta matinal

### Testar já, sem configurar nada

```bash
python3 crypto-alertas/alerta_matinal.py --demo      # dados fictícios, gera relatorio.html
python3 crypto-alertas/alerta_matinal.py --preview   # dados reais, gera relatorio.html sem enviar
```

### Ativar o envio automático

No GitHub: **Settings → Secrets and variables → Actions**.

**Secrets** (configure pelo menos um canal):

| Secret | Exemplo |
|---|---|
| `SMTP_HOST` | `smtp-mail.outlook.com` (Outlook) ou `smtp.gmail.com` (Gmail) |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | o seu email |
| `SMTP_PASS` | palavra-passe de aplicação (não a palavra-passe normal) |
| `EMAIL_PARA` | destinatário(s), separados por vírgula |
| `TELEGRAM_BOT_TOKEN` | token dado pelo @BotFather |
| `TELEGRAM_CHAT_ID` | o seu chat id (envie uma mensagem ao bot e consulte `https://api.telegram.org/bot<TOKEN>/getUpdates`) |

**Variables** (opcionais):

| Variable | Padrão | Função |
|---|---|---|
| `CRYPTO_MOEDAS` | bitcoin, ethereum, bnb, solana, xrp, cardano, dogecoin, tron, avalanche, chainlink | IDs da CoinGecko separados por vírgula |
| `MOEDA_BASE` | `usd` | `usd`, `eur`, `brl`… |
| `LIMIAR_ALERTA` | `5` | alerta quando uma moeda varia ≥ X% em 24h |
| `ALERTAS_PRECO` | — | alvos de preço, ex.: `bitcoin>70000,ethereum<2500` |
| `DASHBOARD_URL` | — | link do painel, para o botão "Abrir gráficos interativos" |

Para testar logo: **Actions → Alerta matinal cripto → Run workflow**.

Para mudar a hora, edite o `cron` no workflow (está em UTC; Luanda = UTC+1).

> Dados: CoinGecko (API pública gratuita) e alternative.me. Informação de mercado, não é aconselhamento de investimento.
