import { Plan, SaftAlert, SaftInvoice, FaqItem } from '../types';

export const WHATSAPP_PHONE = '924508205';
export const WHATSAPP_INTERNATIONAL = '244924508205';

export const PLANS: Plan[] = [
  {
    id: 'essencial',
    name: 'ESSENCIAL',
    subtitle: 'Licença Individual',
    price: '45.000 Kz',
    pricePeriod: '/ licença',
    description: 'Uma solução para quem precisa das funções essenciais de leitura e análise.',
    features: [
      'Leitor SAF-T AO completo',
      'Análise detalhada de dados',
      'Relatórios fiscais estruturados',
      'Interface simples e intuitiva',
      'Exportação rápida para Excel/PDF',
      'Leitura de faturas e recibos'
    ],
    ctaText: 'SABER MAIS →'
  },
  {
    id: 'profissional',
    name: 'PROFISSIONAL',
    subtitle: 'PROGEST SAFT PRO',
    badge: 'RECOMENDADO',
    popular: true,
    price: '85.000 Kz',
    pricePeriod: '/ licença profissional',
    description: 'A escolha para profissionais que querem mais controlo, alertas automáticos e máxima produtividade.',
    paymentMethodText: 'PAGAMENTO VIA MULTICAIXA EXPRESS',
    features: [
      'Tudo do plano Essencial',
      'Leitor SAF-T AO avançado',
      'Análise detalhada e profunda',
      'Relatórios profissionais de auditoria',
      'Indicadores e alertas de inconsistência',
      'Verificação de assinaturas e hash AGT',
      'Validação de códigos de isenção de IVA',
      'Suporte prioritário ao utilizador'
    ],
    ctaText: 'QUERO O PROGEST SAFT PRO →'
  },
  {
    id: 'empresarial',
    name: 'EMPRESARIAL',
    subtitle: 'Para equipas e organizações',
    badge: 'MULTI-POSTO',
    price: 'Sob Consulta',
    pricePeriod: 'Condições personalizadas',
    description: 'Uma solução pensada para operações que precisam de maior produtividade, múltiplos utilizadores e utilização empresarial contínua.',
    features: [
      'Uso empresarial multi-postos',
      'Produtividade máxima da equipa fiscal',
      'Relatórios consolidados e múltiplos clientes',
      'Indicadores gerenciais avançados',
      'Treinamento e onboarding de equipa',
      'Suporte dedicado com gestor de conta',
      'Condições e personalizações à medida'
    ],
    ctaText: 'PEDIR PROPOSTA →'
  }
];

export const DEMO_ALERTS: SaftAlert[] = [
  {
    id: '1',
    type: 'danger',
    code: 'AGT-ERR-104',
    title: 'Divergência de Taxa de IVA vs Motivo de Isenção',
    description: '2 faturas com taxa de 0% sem preenchimento do código de isenção exigido pela AGT (ex: M02, M04).',
    affectedCount: 2
  },
  {
    id: '2',
    type: 'warning',
    code: 'AGT-WRN-022',
    title: 'Validação de NIF de Clientes Nacionais',
    description: '4 clientes registados com 9 dígitos sem validação estrutural do dígito de controlo do NIF.',
    affectedCount: 4
  },
  {
    id: '3',
    type: 'info',
    code: 'AGT-INF-009',
    title: 'Verificação da Sequência Numérica da Série',
    description: 'Série FT 2025/1 com 1.482 documentos processados sequencialmente sem saltos detetados.',
    affectedCount: 0
  },
  {
    id: '4',
    type: 'success',
    code: 'AGT-VAL-001',
    title: 'Criptografia e Encadeamento de Chave Hash',
    description: 'Todos os hashes dos documentos foram gerados e validados em conformidade com o algoritmo RSA da AGT.',
    affectedCount: 0
  }
];

export const DEMO_INVOICES: SaftInvoice[] = [
  {
    number: 'FT 2025/1482',
    date: '28/02/2025',
    customerName: 'Kero Hipermercados S.A.',
    customerNif: '5417082910',
    netTotal: 4850000,
    vatTotal: 679000,
    grossTotal: 5529000,
    vatRate: 14,
    status: 'valid',
    hashStatus: 'Assinatura Válida (Chave Privada AGT)'
  },
  {
    number: 'FT 2025/1481',
    date: '28/02/2025',
    customerName: 'Sociedade Mineira de Catoca',
    customerNif: '5403198422',
    netTotal: 12400000,
    vatTotal: 1736000,
    grossTotal: 14136000,
    vatRate: 14,
    status: 'valid',
    hashStatus: 'Assinatura Válida (Chave Privada AGT)'
  },
  {
    number: 'FT 2025/1480',
    date: '27/02/2025',
    customerName: 'Distribuidora Aliança Lda',
    customerNif: '5420019283',
    netTotal: 1950000,
    vatTotal: 0,
    grossTotal: 1950000,
    vatRate: 0,
    status: 'warning',
    hashStatus: 'Assinatura Válida (Chave Privada AGT)'
  },
  {
    number: 'FT 2025/1479',
    date: '27/02/2025',
    customerName: 'PetroGás Serviços Angola Lda',
    customerNif: '5489110294',
    netTotal: 8320000,
    vatTotal: 1164800,
    grossTotal: 9484800,
    vatRate: 14,
    status: 'valid',
    hashStatus: 'Assinatura Válida (Chave Privada AGT)'
  },
  {
    number: 'FT 2025/1478',
    date: '26/02/2025',
    customerName: 'Banco Comercial Angolano',
    customerNif: '5401092837',
    netTotal: 3400000,
    vatTotal: 476000,
    grossTotal: 3876000,
    vatRate: 14,
    status: 'valid',
    hashStatus: 'Assinatura Válida (Chave Privada AGT)'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O Progest SAFT PRO trabalha com SAF-T AO?',
    answer: 'Sim. O produto foi desenvolvido especificamente para leitura, validação e análise de ficheiros SAF-T no contexto fiscal angolano (SAF-T AO), respeitando as normas da Administração Geral Tributária (AGT), Regime Jurídico das Faturas e Documentos Equivalentes e estrutura do IVA em Angola.'
  },
  {
    question: 'Quem pode utilizar o Progest SAFT PRO?',
    answer: 'Contabilistas, fiscalistas, auditores, consultores financeiros, diretores financeiros, empresas de qualquer dimensão e escritórios de contabilidade que necessitem de auditar, validar ou extrair dados cruciais dos ficheiros SAF-T AO antes ou após o envio.'
  },
  {
    question: 'Preciso de conhecimentos técnicos avançados para usar a plataforma?',
    answer: 'Não. A interface foi cuidadosamente desenhada para simplificar o seu dia a dia. Basta importar o ficheiro XML do SAF-T AO e a plataforma organiza instantaneamente tudo em gráficos, tabelas pesquisáveis, resumos executivos e relatórios claros.'
  },
  {
    question: 'O sistema apresenta relatórios prontos a imprimir ou exportar?',
    answer: 'Sim. A solução inclui relatórios completos de faturação, mapas de IVA, análise de clientes e fornecedores e, na versão Profissional, um módulo detalhado de auditoria com indicadores de risco e alertas de possíveis inconformidades fiscais.'
  },
  {
    question: 'Como funciona a ativação após o pagamento por Multicaixa Express?',
    answer: 'O processo é imediato e descomplicado: faz o pagamento através do Multicaixa Express para o número 924 508 205, envia o comprovativo diretamente para o nosso WhatsApp e a nossa equipa disponibiliza a sua chave de ativação e link de instalação em poucos minutos.'
  },
  {
    question: 'Os meus dados fiscais e os ficheiros dos meus clientes estão seguros?',
    answer: 'Totalmente. O Progest SAFT PRO foi concebido com uma arquitetura estrita de segurança e privacidade. Os ficheiros processados permanecem sob seu controlo restrito, garantindo total sigilo profissional e conformidade legal.'
  }
];
