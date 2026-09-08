import React, { useState } from 'react';
import { Upload, Cpu, SearchCheck, FileCheck2, ArrowRight, Check } from 'lucide-react';

interface HowItWorksProps {
  onOpenPaymentModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenPaymentModal }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      action: 'IMPORTE',
      title: 'Selecione o seu ficheiro SAF-T AO',
      subtitle: 'Sem complicações ou conversões manuais',
      icon: <Upload className="w-6 h-6 text-blue-400" />,
      description: 'Basta carregar o ficheiro XML exportado diretamente pelo seu software de faturação ou contabilidade certificado pela AGT. Aceita qualquer tamanho sem travamentos.',
      highlight: 'Formatos aceites: .xml padrão SAF-T AO'
    },
    {
      step: '02',
      action: 'LEIA',
      title: 'Processamento e organização automática',
      subtitle: 'O motor decifra a estrutura complexa',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      description: 'O Progest SAFT PRO processa e organiza automaticamente a informação em fracções de segundo: cabeçalho, tabelas mestre, clientes, produtos e linhas de imposto.',
      highlight: 'Tempo médio: Menos de 2 segundos'
    },
    {
      step: '03',
      action: 'ANALISE',
      title: 'Explore documentos, indicadores e alertas',
      subtitle: 'Identificação imediata de inconformidades',
      icon: <SearchCheck className="w-6 h-6 text-amber-400" />,
      description: 'Navegue por faturas, filtre por NIF, confira o valor de IVA liquidado, verifique a continuidade da numeração sequencial e receba alertas de irregularidades fiscais.',
      highlight: 'Verificação de regras fiscais de Angola'
    },
    {
      step: '04',
      action: 'RELATE',
      title: 'Utilize os resultados para apoiar o seu trabalho',
      subtitle: 'Decisões embasadas e relatórios executivos',
      icon: <FileCheck2 className="w-6 h-6 text-emerald-400" />,
      description: 'Exporte relatórios estruturados para apoiar a declaração periódica de IVA, reuniões de fecho mensal com clientes ou auditorias tributárias.',
      highlight: 'Relatórios claros prontos a partilhar'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-slate-950 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <span>Fluxo de Trabalho Descomplicado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            COMO FUNCIONA?
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-medium">
            Do SAF-T ao resultado em apenas <span className="text-blue-400 font-bold">4 passos</span>.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-widest uppercase mt-3">
            Simples. Rápido. Profissional.
          </p>
        </div>

        {/* 4 Steps Horizontal Chain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item, index) => {
            const isSelected = selectedStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setSelectedStep(index)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-950/40 ring-1 ring-blue-500/30'
                    : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-blue-400">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-2">
                    {item.action}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Preparado para simplificar a sua rotina fiscal?</h4>
            <p className="text-xs text-slate-400">Sem manuais complicados. Comece a usar em menos de 5 minutos.</p>
          </div>
          <button
            onClick={onOpenPaymentModal}
            className="cursor-pointer shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-colors"
          >
            <span>QUERO EXPERIMENTAR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
