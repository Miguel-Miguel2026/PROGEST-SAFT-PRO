import React, { useState } from 'react';
import { 
  CreditCard, 
  Copy, 
  Check, 
  MessageCircle, 
  ArrowRight, 
  Smartphone, 
  ShieldCheck, 
  FileCheck 
} from 'lucide-react';
import { WHATSAPP_PHONE, WHATSAPP_INTERNATIONAL } from '../data/saftDemoData';

export const MulticaixaSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(WHATSAPP_PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(
    'Olá! Acabei de efetuar o pagamento do Progest SAFT PRO via Multicaixa Express para o número 924 508 205. Segue em anexo o comprovativo para emissão e confirmação da minha licença.'
  )}`;

  return (
    <section id="multicaixa" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <CreditCard className="w-4 h-4" />
              <span>Método Oficial de Pagamento em Angola</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              PAGAMENTO SIMPLES PELO MULTICAIXA EXPRESS
            </h2>

            <p className="text-base sm:text-lg text-slate-300">
              Adquira o <span className="text-white font-semibold">Progest SAFT PRO</span> de forma simples, rápida e 100% segura.
            </p>
          </div>

          {/* Central Payment Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Ambient decorative blur */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Multicaixa Badge & Number */}
              <div className="md:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                      Canal Multicaixa Express
                    </span>
                    <h3 className="text-xl font-bold text-white">Transferência Express</h3>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Número de Telefone / Destinatário:
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-white tracking-wider">
                      924 508 205
                    </span>
                    <button
                      onClick={handleCopyNumber}
                      className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shrink-0 active:scale-95"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 block">
                    Rede Multicaixa Express • Angola (+244)
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confirmação e ativação da licença após validação do comprovativo.</span>
                </div>
              </div>

              {/* Right Column: 3 Steps & WhatsApp Button */}
              <div className="md:col-span-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="text-xs text-slate-300">
                      <strong className="text-white">Efetue o pagamento</strong> pelo seu aplicativo Multicaixa Express para o número <span className="text-blue-400 font-mono">924 508 205</span>.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="text-xs text-slate-300">
                      <strong className="text-white">Guarde o comprovativo</strong> de transferência (PDF ou captura de ecrã do app).
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="text-xs text-slate-300">
                      <strong className="text-white">Envie pelo WhatsApp</strong> para confirmação imediata da sua licença e envio das credenciais.
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  Depois do pagamento, envie o comprovativo pelo WhatsApp para confirmação da sua licença.
                </p>

                <a
                  id="btn-enviar-comprovativo"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ENVIAR COMPROVATIVO PELO WHATSAPP →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
