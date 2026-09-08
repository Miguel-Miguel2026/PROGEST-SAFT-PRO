import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_PHONE, WHATSAPP_INTERNATIONAL } from '../data/saftDemoData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 max-w-xs animate-fade-in">
          <div>
            <p className="font-semibold text-white">Dúvidas sobre o SAF-T AO?</p>
            <p className="text-[11px] text-emerald-400">Atendimento via Multicaixa & WhatsApp: 924 508 205</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1"
            title="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(
          'Olá! Estou a ver a página do Progest SAFT PRO e gostaria de tirar uma dúvida sobre a licença e a leitura de ficheiros SAF-T AO.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-xl shadow-emerald-900/40 border border-emerald-300/30 transition-all duration-300 hover:scale-105 active:scale-95"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-semibold">Falar no WhatsApp</span>
      </a>
    </div>
  );
};
