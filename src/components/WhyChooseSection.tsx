import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Target, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles,
  Zap
} from 'lucide-react';

interface WhyChooseSectionProps {
  onOpenPaymentModal: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenPaymentModal }) => {
  const [saftCount, setSaftCount] = useState<number>(8);

  // Time calculation: manual takes ~4 hours per SAF-T (reading, crosschecking, verifying VAT, client queries).
  // With Progest SAFT PRO, takes ~20 minutes (0.33 hours).
  const hoursManual = saftCount * 4;
  const hoursWithProgest = Math.round(saftCount * 0.35);
  const hoursSaved = hoursManual - hoursWithProgest;

  const checklistItems = [
    { title: 'Leitura profissional de SAF-T AO', desc: 'Processamento nativo de todas as estruturas fiscais angolanas.' },
    { title: 'Análise detalhada', desc: 'Cruzamento dinâmico de faturas, recibos e notas de crédito/débito.' },
    { title: 'Indicadores e alertas', desc: 'Deteção precoce de falhas de isenção de IVA e saltos de séries.' },
    { title: 'Relatórios profissionais', desc: 'Exportações limpas para auditoria, gerência e suporte fiscal.' },
    { title: 'Interface simples e intuitiva', desc: 'Sem menus confusos. Tudo acessível em poucos cliques.' },
    { title: 'Redução do trabalho manual', desc: 'Elimina a necessidade de abrir ficheiros XML ou blocos de notas.' },
    { title: 'Maior produtividade', desc: 'Poupe dezenas de horas por mês no fecho de contas de cada cliente.' },
    { title: 'Suporte ao utilizador', desc: 'Equipa disponível para o apoiar na utilização da sua licença.' },
  ];

  return (
    <section id="vantagens" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Diferenciais Exclusivos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            POR QUE ESCOLHER O PROGEST SAFT PRO?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Criado a pensar nas exigências reais de quem lida com prazos fiscais e precisa de respostas imediatas.
          </p>
        </div>

        {/* 8-Item High-Contrast Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all group shadow-md"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Savings Simulator */}
        <div className="mb-20 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40 border border-blue-600/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>Simulador de Produtividade</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Quantos ficheiros SAF-T AO analisa ou audita por mês?
              </h3>
              <p className="text-sm text-slate-300">
                Ajuste o número abaixo para ver a estimativa de horas poupadas com a automação do Progest SAFT PRO:
              </p>

              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>1 ficheiro</span>
                  <span className="text-blue-400 font-bold text-base">{saftCount} ficheiros / mês</span>
                  <span>30 ficheiros</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={saftCount}
                  onChange={(e) => setSaftCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs text-slate-400 mb-1">Método Manual</div>
                <div className="text-3xl font-extrabold text-rose-400 font-mono">{hoursManual}h</div>
                <div className="text-[11px] text-slate-500 mt-1">gastas a procurar dados</div>
              </div>

              <div className="p-5 rounded-xl bg-blue-950/50 border border-blue-500/40 text-center ring-1 ring-blue-500/30">
                <div className="text-xs text-blue-300 mb-1">Tempo Poupado</div>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">+{hoursSaved}h</div>
                <div className="text-[11px] text-emerald-300/80 mt-1">livres para faturar mais</div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout: TENHA MAIS CONTROLO */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6">
            <Target className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            TENHA MAIS CONTROLO SOBRE OS SEUS DADOS FISCAIS
          </h3>

          <div className="space-y-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            <p className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              <span>Não espere até precisar de encontrar uma informação urgente dentro de milhares de registos.</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              <span>Não dependa apenas de processos manuais lentos e sujeitos a falhas.</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              <span>Não desperdice horas a procurar informação que pode estar organizada em segundos.</span>
            </p>
          </div>

          <p className="text-lg sm:text-xl font-bold text-white mb-3">
            Comece a trabalhar de forma mais inteligente.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-blue-400 font-bold uppercase tracking-wider mb-8">
            <span>PROGEST SAFT PRO</span>
            <span>•</span>
            <span>Leitor</span>
            <span>•</span>
            <span>Análise</span>
            <span>•</span>
            <span>Conformidade</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-8 italic">
            "A ferramenta profissional para quem leva a análise do SAF-T AO a sério."
          </p>

          <button
            onClick={onOpenPaymentModal}
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200"
          >
            <span>ESCOLHER A MINHA LICENÇA AGORA</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
