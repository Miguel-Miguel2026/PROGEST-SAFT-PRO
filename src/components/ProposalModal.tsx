import React, { useState } from 'react';
import { X, Building2, MessageCircle, Send, ShieldCheck, Users } from 'lucide-react';
import { WHATSAPP_INTERNATIONAL } from '../data/saftDemoData';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [userCount, setUserCount] = useState('3 a 5 utilizadores');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*PEDIDO DE PROPOSTA EMPRESARIAL - PROGEST SAFT PRO*\n\n` +
      `• *Empresa:* ${companyName || 'Não especificada'}\n` +
      `• *Contacto:* ${contactName || 'Não especificado'}\n` +
      `• *Dimensão da Equipa:* ${userCount}\n` +
      `• *Observações:* ${notes || 'Solicito detalhes sobre licenças multi-postos e suporte dedicado.'}\n\n` +
      `Gostaria de receber uma proposta personalizada para a nossa equipa.`
    );
    window.open(`https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl shadow-blue-950/60 overflow-hidden text-slate-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-800 bg-slate-950 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs font-mono font-bold mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>LICENÇA EMPRESARIAL</span>
            </div>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Pedir Proposta para Equipas
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Condições sob medida para escritórios de contabilidade e empresas com múltiplos postos.
            </p>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1.5">Nome da Empresa ou Escritório *</label>
            <input
              type="text"
              required
              placeholder="Ex: Consultoria Fiscal & Contabilidade Lda"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1.5">Nome do Responsável / Cargo</label>
            <input
              type="text"
              placeholder="Ex: Dr. Silva (Diretor Financeiro)"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1.5">Número de Postos / Utilizadores Previstos</label>
            <select
              value={userCount}
              onChange={(e) => setUserCount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="2 a 3 utilizadores">2 a 3 utilizadores</option>
              <option value="4 a 6 utilizadores">4 a 6 utilizadores</option>
              <option value="7 a 15 utilizadores">7 a 15 utilizadores</option>
              <option value="Mais de 15 utilizadores / Rede corporativa">Mais de 15 utilizadores / Rede corporativa</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1.5">Requisitos ou Dúvidas Específicas</label>
            <textarea
              rows={3}
              placeholder="Ex: Precisamos de integração para múltiplos clientes e formação para a equipa..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="cursor-pointer w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ENVIAR PEDIDO DE PROPOSTA VIA WHATSAPP →</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resposta rápida com estimativa formal e condições de pagamento</span>
          </div>
        </form>
      </div>
    </div>
  );
};
