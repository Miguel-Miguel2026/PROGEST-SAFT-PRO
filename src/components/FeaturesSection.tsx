import React from 'react';
import { 
  FileSearch, 
  BarChart4, 
  CheckCircle2, 
  FileText, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Flame
} from 'lucide-react';

interface FeaturesSectionProps {
  onOpenPaymentModal: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenPaymentModal }) => {
  const features = [
    {
      icon: <FileSearch className="w-6 h-6 text-blue-400" />,
      tag: 'PROCESSAMENTO ESTRUTURADO',
      title: 'LEITURA DO SAF-T AO',
      description: 'Importe e processe os seus ficheiros SAF-T de forma simples e estruturada.',
      details: 'Descompactação ultrarrápida do XML, suporte a múltiplos exercícios e compatibilidade com a estrutura fiscal definida pela AGT.',
      accent: 'border-blue-500/30'
    },
    {
      icon: <BarChart4 className="w-6 h-6 text-cyan-400" />,
      tag: 'DIAGNÓSTICO PROFUNDO',
      title: 'ANÁLISE DETALHADA',
      description: 'Explore os dados e identifique informações, inconsistências, alertas e pontos que merecem atenção.',
      details: 'Filtros dinâmicos por clientes, fornecedores, tipos de documentos (FT, FR, NC, ND) e verificação cruzada de valores.',
      accent: 'border-cyan-500/30'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      tag: 'RIGOR LEGAL',
      title: 'CONFORMIDADE FISCAL',
      description: 'Tenha uma visão organizada das informações relevantes para o seu trabalho fiscal.',
      details: 'Validação de motivos de isenção de IVA (M00 a M99), integridade do algoritmo de assinatura da AGT e conferência de taxas.',
      accent: 'border-emerald-500/30'
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-400" />,
      tag: 'COMUNICAÇÃO EXECUTIVA',
      title: 'RELATÓRIOS PROFISSIONAIS',
      description: 'Organize os resultados da análise e prepare informação útil para o seu trabalho.',
      details: 'Gere mapas de suporte prontos a apresentar à gerência, a auditores externos ou à própria equipa contábil.',
      accent: 'border-indigo-500/30'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      tag: 'TEMPO OTIMIZADO',
      title: 'RAPIDEZ E PRODUTIVIDADE',
      description: 'Reduza tarefas manuais e acelere o processo de análise.',
      details: 'O que demorava horas de cruzamentos manuais agora é concluído em segundos com máxima precisão computacional.',
      accent: 'border-amber-500/30'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      tag: 'PRIVACIDADE GARANTIDA',
      title: 'SEGURANÇA E CONFIANÇA',
      description: 'Uma experiência desenvolvida para profissionais que trabalham diariamente com informação fiscal.',
      details: 'Os dados da sua carteira de clientes mantêm-se totalmente confidenciais, com estrita observância do sigilo fiscal.',
      accent: 'border-blue-500/30'
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>O seu SAF-T. Agora sob controlo.</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Recursos concebidos para quem precisa de rigor fiscal
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Com o <span className="text-white font-semibold">Progest SAFT PRO</span>, pode transformar um ficheiro XML complexo numa visão organizada e profissional dos seus dados.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-950/70 border ${f.accent} hover:border-blue-400/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {f.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {f.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight flex items-center gap-2">
                  {f.title}
                </h3>

                <p className="text-sm font-semibold text-slate-200 mb-3 leading-snug">
                  {f.description}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {f.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-blue-400 font-medium group-hover:text-blue-300">
                <span>Módulo Integrado</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="text-center">
          <button
            onClick={onOpenPaymentModal}
            className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200"
          >
            <span>COMEÇAR A ANALISAR COM O PROGEST SAFT PRO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
