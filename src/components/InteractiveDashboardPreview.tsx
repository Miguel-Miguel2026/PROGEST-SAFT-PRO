import React, { useState } from 'react';
import { 
  FileCode, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle, 
  Search, 
  Download, 
  FileCheck, 
  BarChart3, 
  Filter, 
  Layers, 
  RefreshCw,
  Building2,
  Calendar,
  KeyRound,
  FileSpreadsheet
} from 'lucide-react';
import { DEMO_ALERTS, DEMO_INVOICES } from '../data/saftDemoData';

export const InteractiveDashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'invoices' | 'alerts' | 'vat'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSimulatingUpload, setIsSimulatingUpload] = useState(false);
  const [fileName, setFileName] = useState('SAFT_AO_2025_Q4_ANGOLA.xml');

  const filteredInvoices = DEMO_INVOICES.filter(
    (inv) =>
      inv.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.customerNif.includes(searchTerm)
  );

  const handleSimulateLoad = () => {
    setIsSimulatingUpload(true);
    setTimeout(() => {
      setIsSimulatingUpload(false);
      setFileName('SAFT_AO_NOVO_AUDITADO_2025.xml');
    }, 1200);
  };

  const formatKz = (val: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val) + ' Kz';
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-2xl shadow-blue-950/40 overflow-hidden backdrop-blur-xl">
      {/* App Header Bar (Mock Window) */}
      <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* macOS style window dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/60" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/60" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/60" />
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-white font-medium">{fileName}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              SAF-T AO 1.01_01
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span>NIF: 5418029108 • LUBANGO DISTRIBUIÇÃO S.A.</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateLoad}
            disabled={isSimulatingUpload}
            className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-colors"
            title="Simular leitura de novo ficheiro"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSimulatingUpload ? 'animate-spin text-blue-400' : ''}`} />
            <span>{isSimulatingUpload ? 'A processar XML...' : 'Simular Leitura SAF-T'}</span>
          </button>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
            <CheckCircle2 className="w-3 h-3" />
            Auditado com Sucesso
          </span>
        </div>
      </div>

      {/* Navigation Sub-Header */}
      <div className="bg-slate-950/40 px-4 pt-3 border-b border-slate-800 flex items-center justify-between overflow-x-auto">
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`cursor-pointer px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-t-lg transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-slate-800/80 text-blue-400 border-blue-500 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Visão Geral & Indicadores
          </button>

          <button
            onClick={() => setActiveTab('invoices')}
            className={`cursor-pointer px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-t-lg transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'invoices'
                ? 'bg-slate-800/80 text-blue-400 border-blue-500 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <Layers className="w-4 h-4" />
            Faturas & Documentos (1.482)
          </button>

          <button
            onClick={() => setActiveTab('alerts')}
            className={`cursor-pointer px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-t-lg transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'alerts'
                ? 'bg-slate-800/80 text-blue-400 border-blue-500 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Alertas & Auditoria AGT
            <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-300 text-[10px] flex items-center justify-center font-bold">
              2
            </span>
          </button>

          <button
            onClick={() => setActiveTab('vat')}
            className={`cursor-pointer px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-t-lg transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'vat'
                ? 'bg-slate-800/80 text-blue-400 border-blue-500 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            Quadro Resumo de IVA
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 pb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Exercício Fiscal: 2025 (4º Trimestre)</span>
        </div>
      </div>

      {/* Main Dashboard Canvas */}
      <div className="p-4 sm:p-6 bg-slate-900/60 min-h-[380px]">
        {isSimulatingUpload ? (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 animate-pulse">
              <RefreshCw className="w-7 h-7 animate-spin" />
            </div>
            <h4 className="text-white font-bold text-lg mb-1">A Descompactar e Auditar SAF-T AO...</h4>
            <p className="text-slate-400 text-sm max-w-md">
              A validar estrutura XML, assinaturas criptográficas de faturas e integridade dos códigos de isenção AGT.
            </p>
          </div>
        ) : (
          <>
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* 4 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1.5">
                      <span>Total Faturação Ilíquida</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">100% Auditado</span>
                    </div>
                    <div className="text-xl font-extrabold text-white tracking-tight">
                      148.920.450,00 <span className="text-xs text-slate-400 font-normal">Kz</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-2">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>1.482 documentos comerciais</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1.5">
                      <span>Total IVA Liquidado (14%)</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">AGT Modelo 7</span>
                    </div>
                    <div className="text-xl font-extrabold text-white tracking-tight">
                      19.420.800,00 <span className="text-xs text-slate-400 font-normal">Kz</span>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-2">
                      <span>Base de Incidência: 138.720.000 Kz</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1.5">
                      <span>Operações Isentas (0%)</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400">Regime Geral</span>
                    </div>
                    <div className="text-xl font-extrabold text-white tracking-tight">
                      10.200.450,00 <span className="text-xs text-slate-400 font-normal">Kz</span>
                    </div>
                    <div className="text-[11px] text-amber-400/90 flex items-center gap-1 mt-2">
                      <AlertCircle className="w-3 h-3" />
                      <span>2 registos requerem atenção de motivo</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1.5">
                      <span>Índice de Conformidade</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">Filtro AGT</span>
                    </div>
                    <div className="text-xl font-extrabold text-emerald-400 tracking-tight flex items-center gap-2">
                      98.8%
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-normal">
                        Nível Alto
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-2">
                      <span>Pronto para submissão fiscal</span>
                    </div>
                  </div>
                </div>

                {/* Sub section: Executive Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Left 2 cols: Activity & Invoices snippet */}
                  <div className="lg:col-span-2 p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-white">Últimas Faturas Importadas do SAF-T AO</h4>
                        <p className="text-xs text-slate-400">Verificação automática de chaves hash e integridade de série</p>
                      </div>
                      <button
                        onClick={() => setActiveTab('invoices')}
                        className="text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                      >
                        Ver todas (1.482) →
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-slate-300">
                        <thead className="bg-slate-900/80 text-slate-400 uppercase text-[10px] font-mono border-b border-slate-800">
                          <tr>
                            <th className="py-2.5 px-3">Documento</th>
                            <th className="py-2.5 px-3">Data</th>
                            <th className="py-2.5 px-3">Cliente / Adquirente</th>
                            <th className="py-2.5 px-3 text-right">Valor Total</th>
                            <th className="py-2.5 px-3 text-center">Status AGT</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {DEMO_INVOICES.slice(0, 3).map((inv) => (
                            <tr key={inv.number} className="hover:bg-slate-800/30 transition-colors">
                              <td className="py-2.5 px-3 font-mono font-medium text-white">{inv.number}</td>
                              <td className="py-2.5 px-3 text-slate-400">{inv.date}</td>
                              <td className="py-2.5 px-3 font-medium">
                                <div>{inv.customerName}</div>
                                <div className="text-[10px] font-mono text-slate-500">NIF: {inv.customerNif}</div>
                              </td>
                              <td className="py-2.5 px-3 text-right font-mono font-semibold text-white">
                                {formatKz(inv.grossTotal)}
                              </td>
                              <td className="py-2.5 px-3 text-center">
                                {inv.status === 'valid' ? (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <CheckCircle2 className="w-3 h-3" /> Válido
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                    <AlertTriangle className="w-3 h-3" /> Isenção S/ Código
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right 1 col: Alerts Summary Widget */}
                  <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-400" />
                          Auditoria em Tempo Real
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                          2 Alertas
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-4">
                        O Progest SAFT PRO cruzou as regras fiscais vigentes em Angola e identificou:
                      </p>

                      <div className="space-y-2.5">
                        <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs">
                          <div className="font-bold text-rose-300 flex items-center justify-between">
                            <span>Taxa 0% sem Isenção</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 bg-rose-500/20 rounded">2 Doc</span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-1">
                            Faturas emitidas com valor de IVA a zero sem menção do motivo legal (M02/M04).
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs">
                          <div className="font-bold text-amber-300 flex items-center justify-between">
                            <span>Formato de NIF Suspeito</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 bg-amber-500/20 rounded">4 Clientes</span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-1">
                            Clientes com padrão não padronizado pela AGT.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab('alerts')}
                      className="mt-4 w-full py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-colors text-center cursor-pointer"
                    >
                      Ver Detalhes dos Alertas →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: INVOICES EXPLORER */}
            {activeTab === 'invoices' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="relative w-full sm:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Pesquisar por nº fatura, cliente ou NIF..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Filtrar por:</span>
                    <button className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700">
                      Todas as Séries
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700">
                      Com Alertas (1)
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] font-mono border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4">Documento</th>
                        <th className="py-3 px-4">Data Emissão</th>
                        <th className="py-3 px-4">Adquirente (Cliente)</th>
                        <th className="py-3 px-4">NIF</th>
                        <th className="py-3 px-4 text-right">Incidência (Kz)</th>
                        <th className="py-3 px-4 text-right">IVA (Kz)</th>
                        <th className="py-3 px-4 text-right">Total (Kz)</th>
                        <th className="py-3 px-4 text-center">Assinatura Chave</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredInvoices.map((inv) => (
                        <tr key={inv.number} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-white">{inv.number}</td>
                          <td className="py-3 px-4 text-slate-400">{inv.date}</td>
                          <td className="py-3 px-4 font-medium text-slate-200">{inv.customerName}</td>
                          <td className="py-3 px-4 font-mono text-slate-400">{inv.customerNif}</td>
                          <td className="py-3 px-4 text-right font-mono">{formatKz(inv.netTotal)}</td>
                          <td className="py-3 px-4 text-right font-mono font-semibold text-emerald-400">
                            {formatKz(inv.vatTotal)}
                          </td>
                          <td className="py-3 px-4 text-right font-mono font-bold text-white">
                            {formatKz(inv.grossTotal)}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono">
                              <KeyRound className="w-3 h-3 text-blue-400" /> RSA Hash OK
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: AUDIT & ALERTS */}
            {activeTab === 'alerts' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Auditoria Fiscal Automática com Regras AGT</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      O motor inteligente do Progest SAFT PRO valida os 4 principais pilares do ficheiro:
                      Integridade de hash criptográfico, numeração contínua sem quebras, validação de NIFs e aplicação correta de taxas e isenções.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {DEMO_ALERTS.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-xl border transition-all ${
                        alert.type === 'danger'
                          ? 'bg-rose-950/20 border-rose-800/60'
                          : alert.type === 'warning'
                          ? 'bg-amber-950/20 border-amber-800/60'
                          : alert.type === 'success'
                          ? 'bg-emerald-950/20 border-emerald-800/60'
                          : 'bg-blue-950/20 border-blue-800/60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          {alert.type === 'danger' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                          {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
                          {alert.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                          {alert.type === 'info' && <FileCode className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />}

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                                [{alert.code}]
                              </span>
                              <h5 className="text-sm font-bold text-white">{alert.title}</h5>
                            </div>
                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">{alert.description}</p>
                          </div>
                        </div>

                        {alert.affectedCount > 0 ? (
                          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 border border-slate-700 text-slate-200 shrink-0">
                            {alert.affectedCount} ocorrências
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                            Conforme
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: VAT BREAKDOWN */}
            {activeTab === 'vat' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-2">Mapa Consolidado de IVA (Regime Geral de Angola)</h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Resumo preparado para preenchimento ou conferência com a Declaração Periódica do IVA (Modelo 7 da AGT).
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900/80 text-slate-400 uppercase text-[10px] font-mono border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-3">Taxa / Descrição</th>
                          <th className="py-2.5 px-3">Código Fiscal</th>
                          <th className="py-2.5 px-3 text-right">Base Incidência (Kz)</th>
                          <th className="py-2.5 px-3 text-right">Imposto Liquidado (Kz)</th>
                          <th className="py-2.5 px-3 text-center">Nº Documentos</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-mono">
                        <tr className="hover:bg-slate-800/30">
                          <td className="py-2.5 px-3 font-sans font-medium text-white">Taxa Normal (14%)</td>
                          <td className="py-2.5 px-3 text-blue-400">NOR (14.00%)</td>
                          <td className="py-2.5 px-3 text-right">138.720.000,00 Kz</td>
                          <td className="py-2.5 px-3 text-right text-emerald-400 font-bold">19.420.800,00 Kz</td>
                          <td className="py-2.5 px-3 text-center font-sans">1.340</td>
                        </tr>
                        <tr className="hover:bg-slate-800/30">
                          <td className="py-2.5 px-3 font-sans font-medium text-white">Taxa Reduzida (7% / 5%)</td>
                          <td className="py-2.5 px-3 text-blue-400">RED (7.00%)</td>
                          <td className="py-2.5 px-3 text-right">0,00 Kz</td>
                          <td className="py-2.5 px-3 text-right text-emerald-400 font-bold">0,00 Kz</td>
                          <td className="py-2.5 px-3 text-center font-sans">0</td>
                        </tr>
                        <tr className="hover:bg-slate-800/30">
                          <td className="py-2.5 px-3 font-sans font-medium text-white">Isenção (Artigo 12º CIVA)</td>
                          <td className="py-2.5 px-3 text-amber-400">ISE (M02 / M04)</td>
                          <td className="py-2.5 px-3 text-right">10.200.450,00 Kz</td>
                          <td className="py-2.5 px-3 text-right text-slate-400">0,00 Kz</td>
                          <td className="py-2.5 px-3 text-center font-sans">142</td>
                        </tr>
                        <tr className="bg-slate-900/60 font-bold border-t border-slate-700 text-white">
                          <td className="py-3 px-3 font-sans">TOTAL GERAL DO PERÍODO</td>
                          <td className="py-3 px-3 font-sans text-slate-400">4º Trimestre</td>
                          <td className="py-3 px-3 text-right">148.920.450,00 Kz</td>
                          <td className="py-3 px-3 text-right text-emerald-400 text-sm">19.420.800,00 Kz</td>
                          <td className="py-3 px-3 text-center font-sans">1.482</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer Bar */}
      <div className="bg-slate-950 px-4 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Motor de Análise SAF-T AO Ativo</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Tempo de processamento: <strong>0.84s</strong></span>
          <span>•</span>
          <span>Compatível com todos os softwares certificados pela AGT</span>
        </div>
      </div>
    </div>
  );
};
