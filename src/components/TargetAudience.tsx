import React from 'react';
import { UserCheck, Building2, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  onOpenPaymentModal: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenPaymentModal }) => {
  const audiences = [
    {
      icon: <UserCheck className="w-8 h-8 text-blue-400" />,
      badge: 'PROFISSIONAL INDEPENDENTE',
      title: 'Contabilistas e Fiscalistas',
      hook: 'Passe menos tempo a procurar dados e mais tempo a analisar.',
      description: 'Acelere a análise dos ficheiros SAF-T, reduza tarefas manuais e tenha a informação organizada para apoiar o seu trabalho com rigor técnico.',
      benefits: [
        'Validação imediata antes do envio à AGT',
        'Conferência rápida dos mapas de IVA (Modelo 7)',
        'Deteção de anomalias em séries e faturas canceladas',
        'Maior valor percebido pelos seus clientes'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      badge: 'GESTÃO E DIRETORIA',
      title: 'Empresas',
      hook: 'Controlo total sobre a informação e visão organizada para a gestão fiscal.',
      description: 'Tenha maior controlo sobre a informação dos seus ficheiros e uma visão organizada dos dados relevantes para a gestão fiscal da sua organização.',
      benefits: [
        'Auditoria interna contínua aos sistemas de faturação',
        'Garantia de conformidade com o Decreto Presidencial',
        'Redução drástica do risco de multas e coimas tributárias',
        'Visibilidade clara sobre o volume real de IVA liquidado'
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-400" />,
      badge: 'ESCRITÓRIOS & EQUIPAS',
      title: 'Escritórios de Contabilidade',
      hook: 'Mais produtividade para a equipa. Mais organização para o escritório.',
      description: 'Centralize e agilize a análise dos SAF-T de múltiplos clientes. Elimine gargalos no encerramento mensal de contas.',
      benefits: [
        'Padronização no tratamento de ficheiros de múltiplos clientes',
        'Produtividade escalável para todos os membros da equipa',
        'Histórico organizado de análises e relatórios',
        'Atendimento mais ágil aos requisitos fiscais de Angola'
      ]
    }
  ];

  return (
    <section id="para-quem" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <span>Segmentos Especializados</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            FEITO PARA QUEM TRABALHA COM FISCALIDADE
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Uma ferramenta moldada especificamente para as necessidades práticas da realidade tributária angolana.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((aud, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/30 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {aud.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {aud.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {aud.title}
                </h3>

                <p className="text-xs font-semibold text-blue-400 mb-4 leading-relaxed font-mono">
                  {aud.hook}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {aud.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {aud.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={onOpenPaymentModal}
                  className="cursor-pointer w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600/20 text-slate-200 hover:text-blue-300 border border-slate-800 hover:border-blue-500/40 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>OBTER O PROGEST SAFT PRO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
