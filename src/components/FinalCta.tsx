import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  MessageCircle, 
  Sparkles, 
  Lock, 
  FileSpreadsheet,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import { WHATSAPP_INTERNATIONAL } from '../data/saftDemoData';

interface FinalCtaProps {
  onOpenPaymentModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenPaymentModal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 relative overflow-hidden">
      {/* High-Impact Final Call To Action */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-blue-950/60 via-slate-900 to-slate-950 border border-blue-600/40 p-8 sm:p-14 lg:p-20 text-center shadow-2xl overflow-hidden">
          {/* Background aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>⚡ QUER COMEÇAR AGORA?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              ADQUIRA O PROGEST SAFT PRO
            </h2>

            <p className="text-base sm:text-xl text-slate-300 font-medium mb-6 leading-relaxed">
              Não deixe os seus ficheiros SAF-T continuarem a ser apenas ficheiros XML difíceis de interpretar.
            </p>

            {/* 3 Transformation Triplet */}
            <div className="space-y-2 text-sm sm:text-base font-semibold text-slate-200 mb-8 max-w-xl mx-auto">
              <p className="flex items-center justify-center gap-2 text-blue-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Transforme os seus dados em informação organizada.</span>
              </p>
              <p className="flex items-center justify-center gap-2 text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Transforme informação em análise.</span>
              </p>
              <p className="flex items-center justify-center gap-2 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transforme análise em melhores decisões.</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono text-blue-400 font-bold uppercase tracking-wider mb-8">
              <span>Leitor</span>
              <span>•</span>
              <span>Análise</span>
              <span>•</span>
              <span>Conformidade</span>
            </div>

            <p className="text-lg sm:text-xl font-bold text-white mb-8">
              O seu SAF-T AO. Sob controlo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="footer-main-cta"
                onClick={onOpenPaymentModal}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-blue-600/40 hover:shadow-blue-500/50 transition-all duration-200 active:scale-95 border border-blue-400/30"
              >
                <span>QUERO O PROGEST SAFT PRO</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipa sobre o Progest SAFT PRO.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>FALAR COM A EQUIPA →</span>
              </a>
            </div>

            {/* Security Assurance Pill */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">🔐 O SEU SAF-T EM BOAS MÃOS</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>Mais controlo. Menos tempo. Melhores decisões.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Footer / Links & Credits */}
      <div className="border-t border-slate-900 bg-black/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-lg tracking-tight text-white">
                  PROGEST <span className="text-blue-400">SAFT</span> PRO
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                Não deixe o seu SAF-T parado num ficheiro XML. Comece a analisá-lo como um profissional.
              </p>
              <div className="text-[11px] font-mono text-slate-500">
                PROGEST SAFT PRO • SAF-T AO Intelligence Platform • Angola
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 text-xs text-slate-400">
              <div>
                <span>Pagamento Multicaixa Express: </span>
                <strong className="text-white font-mono">924 508 205</strong>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_INTERNATIONAL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} PROGEST SAFT PRO. Todos os direitos reservados.</p>
            <p>Conformidade e auditoria segundo os padrões da Administração Geral Tributária (AGT).</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
