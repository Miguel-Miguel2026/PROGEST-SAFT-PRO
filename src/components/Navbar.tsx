import React, { useState, useEffect } from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, Menu, X, FileSpreadsheet } from 'lucide-react';
import { WHATSAPP_INTERNATIONAL } from '../data/saftDemoData';

interface NavbarProps {
  onOpenPaymentModal: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPaymentModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visão Geral', href: '#visao-geral' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Para Quem É', href: '#para-quem' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Planos & Licenças', href: '#planos' },
    { label: 'Multicaixa Express', href: '#multicaixa' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-600/30 border border-blue-400/30 group-hover:scale-105 transition-transform duration-200">
              <FileSpreadsheet className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                PROGEST <span className="text-blue-400">SAFT</span> <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono font-semibold border border-blue-500/30">PRO</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                SAF-T AO Intelligence Platform
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-150 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-link"
              href={`https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent('Olá! Tenho interesse no Progest SAFT PRO e gostaria de mais informações.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold transition-all duration-200"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp:</span>
              <span className="font-mono">924 508 205</span>
            </a>

            <button
              id="nav-cta-btn"
              onClick={() => onOpenPaymentModal('profissional')}
              className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wide shadow-md shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 border border-blue-400/20 active:scale-95"
            >
              <span>QUERO O PROGEST SAFT PRO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-3 border-t border-slate-800/80 flex flex-col gap-3 bg-slate-950/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white px-2 py-1.5 text-sm font-medium rounded-lg hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent('Olá! Tenho interesse no Progest SAFT PRO.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: 924 508 205
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPaymentModal('profissional');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wide"
              >
                QUERO O PROGEST SAFT PRO →
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
