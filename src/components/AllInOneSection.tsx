import React from 'react';
import { 
  Users, 
  FileText, 
  Layers, 
  TrendingUp, 
  AlertTriangle, 
  PieChart, 
  FileSpreadsheet,
  Check,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

interface AllInOneSectionProps {
  onOpenPaymentModal: () => void;
}

export const AllInOneSection: React.FC<AllInOneSectionProps> = ({ onOpenPaymentModal }) => {
  const items = [
    { title: 'Clientes', icon: <Users className="w-5 h-5 text-blue-400" />, desc: 'Histórico, NIFs e volume comercial' },
    { title: 'Documentos', icon: <FileText className="w-5 h-5 text-cyan-400" />, desc: 'Faturas, recibos, notas de crédito e débito' },
    { title: 'Registos', icon: <Layers className="w-5 h-5 text-indigo-400" />, desc: 'Linhas detalhadas de produtos e serviços' },
    { title: 'Indicadores', icon: <TrendingUp className="w-5 h-5 text-emerald-400" />, desc: 'Métricas de desempenho e totais consolidados' },
    { title: 'Alertas', icon: <AlertTriangle className="w-5 h-5 text-amber-400" />, desc: 'Divergências fiscais e riscos identificados' },
    { title: 'Análises', icon: <PieChart className="w-5 h-5 text-blue-400" />, desc: 'Cruzamento dinâmico de taxas de imposto' },
    { title: 'Relatórios', icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />, desc: 'Documentos prontos para suporte fiscal' },
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-b border-slate-800/80 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <span>Visão Centralizada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            IMAGINE TER TUDO NUM SÓ LUGAR
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tudo organizado numa única solução moderna e pensada para transformar informação complexa em informação que pode ser compreendida e utilizada rapidamente.
          </p>
        </div>

        {/* 7 Modules Bento Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5 mb-16">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900 transition-all flex flex-col items-center text-center group shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {it.icon}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{it.title}</h4>
              <p className="text-[10px] text-slate-400 leading-tight">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Manifesto / Philosophy Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 border border-blue-600/30 max-w-4xl mx-auto shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>

            <div className="space-y-4">
              <div className="inline-block px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                💡 O Verdadeiro Diferencial
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                NÃO É APENAS UM LEITOR DE SAF-T.
                <span className="block text-blue-400 font-semibold text-lg sm:text-xl mt-1">
                  É uma ferramenta para transformar dados em informação útil.
                </span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                O objetivo do Progest SAFT PRO não é simplesmente abrir um ficheiro XML bruto.
                É permitir que o profissional consiga <strong className="text-white">entender, analisar e trabalhar melhor</strong> com a informação contida no SAF-T AO, com a máxima segurança tributária antes da submissão à AGT.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenPaymentModal}
                  className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-all"
                >
                  <span>GARANTIR MINHA LICENÇA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
