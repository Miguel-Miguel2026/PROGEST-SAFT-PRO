import React from 'react';
import { ArrowRight, Zap, BarChart3, CheckCircle2, Shield, Sparkles, MessageCircle } from 'lucide-react';
import { InteractiveDashboardPreview } from './InteractiveDashboardPreview';
import { WHATSAPP_INTERNATIONAL } from '../data/saftDemoData';

interface HeroProps {
  onOpenPaymentModal: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPaymentModal }) => {
  return (
    <section id="visao-geral" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blue-600/20 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm shadow-blue-500/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>PROGEST SAFT PRO • Plataforma de Inteligência Fiscal Angolana</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            O seu SAF-T AO deixou de ser um ficheiro complicado.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl leading-relaxed mb-4">
            Transforme ficheiros SAF-T AO em informação clara, organizada e pronta para análise profissional.
          </p>

          {/* Action words */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-bold text-blue-400 font-mono mb-6">
            <span>Leia.</span>
            <span className="text-slate-600">•</span>
            <span>Analise.</span>
            <span className="text-slate-600">•</span>
            <span>Valide.</span>
            <span className="text-slate-600">•</span>
            <span>Identifique alertas.</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400">Gere informação útil.</span>
          </div>

          {/* Target Audience Intro */}
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed mb-8">
            O <strong className="text-white font-semibold">Progest SAFT PRO</strong> é uma solução profissional desenvolvida para contabilistas, fiscalistas, empresas e escritórios de contabilidade que precisam de analisar ficheiros SAF-T AO de forma rápida, simples e organizada.
          </p>

          {/* 3 Pillars Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mb-10">
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </span>
              <span>Menos tempo a procurar informação</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4" />
              </span>
              <span>Mais controlo sobre os seus dados</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Mais confiança nas suas análises</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <button
              id="hero-primary-cta"
              onClick={() => onOpenPaymentModal('profissional')}
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 active:scale-95 border border-blue-400/30"
            >
              <span>QUERO O PROGEST SAFT PRO</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent('Olá! Gostaria de esclarecer dúvidas sobre o Progest SAFT PRO antes de adquirir a minha licença.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar no WhatsApp (924 508 205)</span>
            </a>
          </div>
        </div>

        {/* Live Interactive Product Preview */}
        <div className="relative mt-2">
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold font-mono">
              ★ Demonstração Interativa do Software
            </span>
          </div>
          <InteractiveDashboardPreview />
        </div>
      </div>
    </section>
  );
};
