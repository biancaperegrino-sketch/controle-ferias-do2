
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';

const IndividualDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock employee data based on ID
  const employee = id === '2' ? { name: "Ana Martins", role: "Coord. Financeiro" } : { name: "Ricardo Silva", role: "Desenvolvedor Sênior" };

  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark custom-scrollbar">
      <Header title="Dashboard Individual" />
      <main className="max-w-7xl mx-auto p-6 space-y-8">
        
        {/* Selection Bar */}
        <section className="flex flex-col md:flex-row items-end gap-4 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
          <div className="w-full md:w-1/3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Selecionar Colaborador</label>
            <div className="relative">
              <select 
                defaultValue={id || "1"}
                onChange={(e) => navigate(`/dashboard/${e.target.value}`)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg focus:ring-2 focus:ring-primary appearance-none text-sm cursor-pointer dark:text-white"
              >
                <option value="1">Ricardo Silva - Engenharia de Software</option>
                <option value="2">Ana Martins - Financeiro</option>
              </select>
              <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-sm">person_search</span>
              <span className="material-icons absolute right-3 top-2.5 text-slate-400 text-sm pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-4 bg-primary/10 border border-primary/20 p-2.5 rounded-lg">
              <span className="material-icons text-primary">info</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Período Aquisitivo: <span className="font-semibold text-primary">12/05/2023 - 11/05/2024</span>
              </p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/add-vacation')} 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all w-full md:w-auto"
          >
            <span className="material-icons text-sm">add</span> Nova Solicitação
          </button>
        </section>

        {/* Status Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-colors shadow-sm">
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Saldo Inicial</h3>
            <p className="text-3xl font-bold mt-1">30 <span className="text-sm font-normal text-slate-500">dias</span></p>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-colors shadow-sm">
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Dias Descontados</h3>
            <p className="text-3xl font-bold mt-1">15 <span className="text-sm font-normal text-slate-500">dias</span></p>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-colors shadow-sm">
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Agendadas no RH</h3>
            <p className="text-3xl font-bold mt-1">05 <span className="text-sm font-normal text-slate-500">dias</span></p>
          </div>
          <div className="bg-primary p-6 rounded-xl border border-primary shadow-lg shadow-primary/20 relative overflow-hidden group">
            <h3 className="text-white/80 text-sm font-medium relative z-10">Saldo Atual (Úteis)</h3>
            <p className="text-3xl font-bold text-white mt-1 relative z-10">10 <span className="text-sm font-normal text-white/70">dias</span></p>
            {/* Visual background effect */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </section>

        {/* History and Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-border-dark flex items-center justify-between">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <span className="material-icons text-primary">history</span> Histórico de Solicitações
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-background-dark/50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Período</th>
                    <th className="px-6 py-4">Duração</th>
                    <th className="px-6 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-border-dark">
                  <tr>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium dark:text-white">10/01/2024 - 19/01/2024</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold dark:text-white">10 dias</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                        Concluído
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium dark:text-white">15/05/2024 - 19/05/2024</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold dark:text-white">5 dias</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        Agendado
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark flex flex-col items-center justify-center shadow-sm">
            <h3 className="font-bold text-sm self-start mb-6 uppercase tracking-wider text-slate-500">Utilização de Saldo</h3>
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle className="text-slate-100 dark:text-slate-800" cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" strokeWidth="12"></circle>
                <circle 
                  className="text-primary transition-all duration-1000" 
                  cx="80" 
                  cy="80" 
                  r="70" 
                  fill="transparent" 
                  stroke="currentColor" 
                  strokeDasharray="439.6" 
                  strokeDashoffset="145" 
                  strokeWidth="12"
                  strokeLinecap="round"
                ></circle>
              </svg>
              <div className="absolute text-center">
                <span className="text-3xl font-extrabold dark:text-white block">67%</span>
                <span className="text-[10px] uppercase font-bold text-slate-500">Consumido</span>
              </div>
            </div>
            <div className="mt-8 space-y-2 w-full">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 font-medium">Utilizado</span>
                <span className="font-bold dark:text-white">20 dias</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[67%]"></div>
              </div>
              <div className="flex justify-between text-xs pt-1">
                <span className="text-slate-500 font-medium">Restante</span>
                <span className="font-bold text-emerald-500">10 dias</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndividualDashboard;
