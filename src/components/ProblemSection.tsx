import React from 'react';
import { Clock, AlertOctagon, FileWarning, CheckCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProblemSectionProps {
  onOpenPaymentModal: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenPaymentModal }) => {
  return (
    <section className="py-24 bg-slate-950 border-t border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-4">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>O Desafio Diário dos Profissionais Fiscais</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-5">
            Você ainda perde horas a analisar SAF-T manualmente?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Ficheiros SAF-T podem conter milhares de registos, documentos, clientes, produtos e movimentos.
            Encontrar uma informação específica manualmente pode consumir tempo e aumentar o risco de deixar passar inconsistências ou informações importantes.
          </p>
        </div>

        {/* Side-by-Side Reality Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Without Progest SAFT PRO */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/90 relative group hover:border-rose-900/50 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <FileWarning className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Análise Manual de Ficheiros XML</h3>
                  <span className="text-xs text-rose-400 font-medium">Lento, exaustivo e vulnerável a erros</span>
                </div>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span>Ficheiros XML gigantescos impossíveis de ler com clareza em editores de texto tradicionais.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span>Horas gastas na tentativa de cruzar faturas com as regras do Regime Geral do IVA em Angola.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span>Risco contínuo de deixar passar faturas com taxas a 0% sem o código de isenção exigido pela AGT.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</span>
                <span>Incerteza no momento do envio e retrabalho sob a pressão de prazos fiscais apertados.</span>
              </li>
            </ul>
          </div>

          {/* With Progest SAFT PRO */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-blue-600/40 relative shadow-xl shadow-blue-950/30">
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-bold uppercase tracking-wider">
                Com o Progest SAFT PRO
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">Informação Clara e Organizada</h3>
                <span className="text-xs text-emerald-400 font-medium">Controlo total e agilidade imediata</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Leitura instantânea de ficheiros SAF-T AO com estruturação automática dos dados.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Identificação automática de inconsistências, avisos de taxas de IVA e validação de NIFs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Resumos executivos preparados para apoiar a conferência do Modelo 7 e mapas fiscais.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Segurança e confiança para responder a auditorias da Administração Geral Tributária.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Central Transformational Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900/90 to-blue-950/40 border border-blue-500/30 text-center max-w-4xl mx-auto shadow-2xl">
          <p className="text-lg sm:text-xl text-white font-medium mb-4">
            O <span className="text-blue-400 font-bold">Progest SAFT PRO</span> muda essa realidade.
          </p>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Importe o seu ficheiro e deixe o sistema organizar a informação para que possa concentrar-se no que realmente importa:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xl sm:text-3xl font-extrabold tracking-widest text-white font-mono mb-8">
            <span className="text-blue-400 hover:scale-105 transition-transform">ANALISAR.</span>
            <span className="text-slate-600">/</span>
            <span className="text-amber-400 hover:scale-105 transition-transform">IDENTIFICAR.</span>
            <span className="text-slate-600">/</span>
            <span className="text-emerald-400 hover:scale-105 transition-transform">DECIDIR.</span>
          </div>

          <button
            onClick={onOpenPaymentModal}
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200"
          >
            <span>TRANSFORMAR MEUS FICHEIROS SAF-T AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
