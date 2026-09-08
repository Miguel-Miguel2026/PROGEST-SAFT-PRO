import React from 'react';
import { Check, Star, ArrowRight, ShieldCheck, CreditCard, Sparkles, Building2 } from 'lucide-react';
import { PLANS } from '../data/saftDemoData';

interface PricingSectionProps {
  onSelectPlan: (planId: 'essencial' | 'profissional' | 'empresarial') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-24 bg-slate-950 border-t border-b border-slate-800/80 relative">
      {/* Glow behind popular plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Licenciamento Oficial Progest SAFT PRO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            ESCOLHA A LICENÇA CERTA PARA SI
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Investimento único com retorno imediato em horas poupadas e conformidade fiscal garantida.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative shadow-xl ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950/60 border-2 border-blue-500 shadow-2xl shadow-blue-950/50 lg:-translate-y-3'
                    : 'bg-slate-950/80 border border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-extrabold tracking-wider uppercase shadow-lg shadow-blue-600/40 border border-blue-400/30">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ESCOLHA RECOMENDADA
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Subtitle & Name */}
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400">
                      {plan.subtitle}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight mt-1">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                        {plan.price}
                      </span>
                      {plan.pricePeriod && (
                        <span className="text-xs text-slate-400 font-medium">
                          {plan.pricePeriod}
                        </span>
                      )}
                    </div>
                    {plan.paymentMethodText && (
                      <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>{plan.paymentMethodText}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      O que está incluído:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isPopular ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`cursor-pointer w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 border border-blue-400/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-3 text-center">
                    <span className="text-[10px] text-slate-500 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      Ativação rápida e suporte garantido
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom guarantee badge */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            Dúvidas sobre a compatibilidade com a sua empresa?{' '}
            <a
              href="#multicaixa"
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4"
            >
              Consulte as instruções do Multicaixa Express
            </a>{' '}
            ou fale connosco pelo WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};
