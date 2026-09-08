export interface Plan {
  id: 'essencial' | 'profissional' | 'empresarial';
  name: string;
  subtitle: string;
  badge?: string;
  price?: string;
  pricePeriod?: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
  paymentMethodText?: string;
}

export interface SaftAlert {
  id: string;
  type: 'danger' | 'warning' | 'info' | 'success';
  code: string;
  title: string;
  description: string;
  affectedCount: number;
}

export interface SaftInvoice {
  number: string;
  date: string;
  customerName: string;
  customerNif: string;
  netTotal: number;
  vatTotal: number;
  grossTotal: number;
  vatRate: number;
  status: 'valid' | 'warning';
  hashStatus: 'Assinatura Válida (Chave Privada AGT)' | 'Pendente';
}

export interface FaqItem {
  question: string;
  answer: string;
}
