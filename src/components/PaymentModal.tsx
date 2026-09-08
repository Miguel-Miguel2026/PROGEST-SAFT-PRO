import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  Copy, 
  Check, 
  MessageCircle, 
  ShieldCheck, 
  Smartphone,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { WHATSAPP_PHONE, WHATSAPP_INTERNATIONAL, PLANS } from '../data/saftDemoData';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId = 'profissional'
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'multicaixa' | 'upload'>('multicaixa');
  const [attachedReceiptName, setAttachedReceiptName] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentPlan = PLANS.find((p) => p.id === selectedPlanId) || PLANS[1];

  const handleCopy = () => {
    navigator.clipboard.writeText(WHATSAPP_PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedReceiptName(e.target.files[0].name);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse na licença do *Progest SAFT PRO* (Plano: ${currentPlan.name} - ${currentPlan.price || 'Sob Consulta'}).\n\nAcabei de preparar o pagamento pelo Multicaixa Express (924 508 205). Gostaria de confirmar a ativação e suporte.`
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl shadow-blue-950/60 overflow-hidden text-slate-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-800 bg-slate-950 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs font-mono font-bold mb-2">
              <CreditCard className="w-3.5 h-3.5" />
              <span>PROCESSO DE ADQUISIÇÃO OFICIAL</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Adquira o Progest SAFT PRO
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Plano Selecionado: <strong className="text-blue-400">{currentPlan.name}</strong> • {currentPlan.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Plan Summary Pill */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Valor da Licença</span>
              <div className="text-2xl font-black text-white font-mono">{currentPlan.price || 'Sob Consulta'}</div>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Entrega Rápida por WhatsApp
            </span>
          </div>

          {/* Multicaixa Box */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              PAGAMENTO VIA MULTICAIXA EXPRESS
            </span>

            <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 ring-1 ring-emerald-500/20 shadow-inner">
              <div className="text-[11px] font-mono text-slate-400 mb-1">
                Número para Pagamento (Multicaixa Express):
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-widest">
                  924 508 205
                </span>
                <button
                  onClick={handleCopy}
                  className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shrink-0 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-[10px] text-slate-400 mt-2">
                Destinatário associado ao suporte oficial do Progest SAFT PRO em Angola.
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span>Abra a aplicação <strong>Multicaixa Express</strong> no telemóvel.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span>Faça o envio/transferência para o número <strong className="text-white font-mono">924 508 205</strong>.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span>Envie o comprovativo pelo botão abaixo para confirmação imediata.</span>
            </div>
          </div>

          {/* Optional Attach receipt test */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
            <label className="block text-slate-400 font-medium mb-1.5">
              Já tem o comprovativo no dispositivo?
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                id="receipt-file"
                accept="image/*,.pdf"
                onChange={handleFileDrop}
                className="hidden"
              />
              <label
                htmlFor="receipt-file"
                className="cursor-pointer px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                Anexar Comprovativo (Opcional)
              </label>
              <span className="text-[11px] text-slate-400 truncate max-w-xs">
                {attachedReceiptName ? (
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {attachedReceiptName}
                  </span>
                ) : (
                  'Ou envie diretamente no chat do WhatsApp.'
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 sm:p-7 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ativação garantida e suporte</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>ENVIAR COMPROVATIVO NO WHATSAPP →</span>
          </a>
        </div>
      </div>
    </div>
  );
};
