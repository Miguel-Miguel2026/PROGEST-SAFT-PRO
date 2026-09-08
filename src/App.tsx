import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { TargetAudience } from './components/TargetAudience';
import { AllInOneSection } from './components/AllInOneSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { PricingSection } from './components/PricingSection';
import { MulticaixaSection } from './components/MulticaixaSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { PaymentModal } from './components/PaymentModal';
import { ProposalModal } from './components/ProposalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('profissional');

  const handleOpenPayment = (planId: string = 'profissional') => {
    if (planId === 'empresarial') {
      setProposalModalOpen(true);
    } else {
      setSelectedPlanId(planId);
      setPaymentModalOpen(true);
    }
  };

  const handleSelectPlan = (planId: 'essencial' | 'profissional' | 'empresarial') => {
    if (planId === 'empresarial') {
      setProposalModalOpen(true);
    } else {
      setSelectedPlanId(planId);
      setPaymentModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenPaymentModal={handleOpenPayment} />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Hero Section & Interactive SAFT Preview */}
        <Hero onOpenPaymentModal={handleOpenPayment} />

        {/* 2. Problem Statement / Manual vs Progest */}
        <ProblemSection onOpenPaymentModal={() => handleOpenPayment('profissional')} />

        {/* 3. Core Features / O seu SAF-T sob controlo */}
        <FeaturesSection onOpenPaymentModal={() => handleOpenPayment('profissional')} />

        {/* 4. How It Works / 4 Passos */}
        <HowItWorks onOpenPaymentModal={() => handleOpenPayment('profissional')} />

        {/* 5. Target Audience / Contabilistas, Empresas, Escritórios */}
        <TargetAudience onOpenPaymentModal={() => handleOpenPayment('profissional')} />

        {/* 6. All in One & Manifesto */}
        <AllInOneSection onOpenPaymentModal={() => handleOpenPayment('profissional')} />

        {/* 7. Why Choose Progest & Time Savings Calculator */}
        <WhyChooseSection onOpenPaymentModal={() => handleOpenPayment('profissional')} />

        {/* 8. Pricing Tiers */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 9. Dedicated Multicaixa Express Section */}
        <MulticaixaSection />

        {/* 10. FAQ Accordion */}
        <FaqSection />

        {/* 11. Final CTA & Footer */}
        <FinalCta onOpenPaymentModal={() => handleOpenPayment('profissional')} />
      </main>

      {/* Interactive Modals */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        selectedPlanId={selectedPlanId}
      />

      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
      />

      {/* Floating Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
