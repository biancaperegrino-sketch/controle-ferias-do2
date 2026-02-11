
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const VacationBoard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <Header title="Quadro Geral de Férias" />
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
        
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">Quadro Geral de Férias</h1>
            <p className="text-slate-500 dark:text-slate-400">Gerenciamento centralizado de solicitações e saldos de férias.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/add-employee')} 
              className="bg-primary/10 text-primary hover:bg-primary/20 transition-all px-4 py-2.5 rounded-lg flex items-center gap-2 font-semibold text-sm border border-primary/20"
            >
              <span className="material-icons text-lg">person_add</span>
              Incluir Novo Colaborador
            </button>
            <button 
              onClick={() => navigate('/add-vacation')} 
              className="bg-primary hover:bg-primary/90 text-white transition-all px-4 py-2.5 rounded-lg shadow-lg shadow-primary/20 flex items-center gap-2 font-semibold text-sm"
            >
              <span className="material-icons text-lg">add_circle</span>
              Incluir Férias
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Unidade</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 focus:ring-primary focus:border-primary">
                <option>Todas as Unidades</option>
                <option>Matriz - São Paulo</option>
                <option>Filial - Rio de Janeiro</option>
                <option>Filial - Curitiba</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Estado</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 focus:ring-primary focus:border-primary">
                <option>Todos os Estados</option>
                <option>Ativo</option>
                <option>Em Férias</option>
                <option>Agendado</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Colaborador</label>
              <div className="relative">
                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                <input 
                  className="w-full pl-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 focus:ring-primary focus:border-primary" 
                  placeholder="Pesquisar por nome ou CPF..." 
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Colaborador</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Unidade / Estado</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Solicitação</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Início / Fim</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Dias (C/Ú/F)</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Saldo Atual</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr 
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer" 
                  onClick={() => navigate('/dashboard/1')}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">RS</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-white">Ricardo Silva</p>
                        <p className="text-xs text-slate-500">Desenvolvedor Sênior</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="text-slate-800 dark:text-slate-200">Matriz - SP</p>
                      <p className="text-xs text-slate-500">São Paulo</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      Férias Integrais
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm font-medium">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-slate-800 dark:text-slate-200">01/02/2024</span>
                        <span className="material-icons text-slate-400 text-xs">east</span>
                        <span className="text-slate-800 dark:text-slate-200">01/03/2024</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm font-medium">
                      <div className="text-slate-800 dark:text-slate-200">30</div>
                      <div className="text-primary font-bold">22</div>
                      <div className="text-amber-500">1</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">15 dias</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons text-lg">edit</span>
                    </button>
                  </td>
                </tr>
                {/* Sample Row 2 */}
                <tr 
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
                  onClick={() => navigate('/dashboard/2')}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-xs">AM</div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-white">Ana Martins</p>
                        <p className="text-xs text-slate-500">Coord. Financeiro</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="text-slate-800 dark:text-slate-200">Filial - RJ</p>
                      <p className="text-xs text-slate-500">Rio de Janeiro</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                      Abono Pecuniário
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-sm font-medium">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-slate-800 dark:text-slate-200">10/03/2024</span>
                        <span className="material-icons text-slate-400 text-xs">east</span>
                        <span className="text-slate-800 dark:text-slate-200">19/03/2024</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm font-medium">
                      <div className="text-slate-800 dark:text-slate-200">10</div>
                      <div className="text-primary font-bold">8</div>
                      <div className="text-amber-500">0</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">40 dias</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons text-lg">edit</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-xs text-slate-500 dark:text-slate-400">Mostrando 1-2 de 42 colaboradores</p>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-400"><span className="material-icons text-sm">chevron_left</span></button>
              <button className="px-3 py-1 rounded-md bg-primary text-white text-xs font-bold">1</button>
              <button className="px-3 py-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold transition-colors">2</button>
              <button className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-400"><span className="material-icons text-sm">chevron_right</span></button>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-6 items-center px-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Legenda:</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-400/50"></div>
            <span className="text-xs text-slate-500 dark:text-slate-400">Dias Corridos (C)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-xs text-slate-500 dark:text-slate-400">Dias Úteis (Ú)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-xs text-slate-500 dark:text-slate-400">Feriados (F)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationBoard;
