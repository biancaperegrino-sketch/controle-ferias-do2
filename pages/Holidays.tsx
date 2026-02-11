
import React, { useState } from 'react';
import Header from '../components/Header';

const HolidaysPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  
  const [holidays, setHolidays] = useState([
    { id: '1', name: 'Ano Novo', date: '01/01/2024', type: 'Nacional', state: '—' },
    { id: '2', name: 'Carnaval', date: '12/02/2024', type: 'Nacional', state: '—' },
    { id: '3', name: 'Dia da Consciência Negra', date: '20/11/2024', type: 'Estadual', state: 'RJ' },
    { id: '4', name: 'Aniversário de São Paulo', date: '25/01/2024', type: 'Municipal', state: 'SP' },
  ]);

  const handleImportHolidays = () => {
    setIsImporting(true);
    
    // Simulando uma busca em API de feriados oficiais
    setTimeout(() => {
      const officialHolidays = [
        { id: '101', name: 'Sexta-feira Santa', date: '29/03/2024', type: 'Nacional', state: '—' },
        { id: '102', name: 'Tiradentes', date: '21/04/2024', type: 'Nacional', state: '—' },
        { id: '103', name: 'Dia do Trabalhador', date: '01/05/2024', type: 'Nacional', state: '—' },
        { id: '104', name: 'Corpus Christi', date: '30/05/2024', type: 'Nacional', state: '—' },
        { id: '105', name: 'Independência do Brasil', date: '07/09/2024', type: 'Nacional', state: '—' },
        { id: '106', name: 'Nossa Sra Aparecida', date: '12/10/2024', type: 'Nacional', state: '—' },
        { id: '107', name: 'Finados', date: '02/11/2024', type: 'Nacional', state: '—' },
        { id: '108', name: 'Proclamação da República', date: '15/11/2024', type: 'Nacional', state: '—' },
        { id: '109', name: 'Natal', date: '25/12/2024', type: 'Nacional', state: '—' },
        { id: '110', name: 'Revolução Constitucionalista', date: '09/07/2024', type: 'Estadual', state: 'SP' },
      ];

      // Mesclando e removendo duplicatas por data (simplificado)
      setHolidays(prev => {
        const existingDates = new Set(prev.map(h => h.date));
        const uniqueNew = officialHolidays.filter(h => !existingDates.has(h.date));
        return [...prev, ...uniqueNew].sort((a, b) => {
          const dateA = a.date.split('/').reverse().join('');
          const dateB = b.date.split('/').reverse().join('');
          return dateA.localeCompare(dateB);
        });
      });
      
      setIsImporting(false);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <Header title="Cadastro de Feriados" />
      <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
        
        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" 
              placeholder="Buscar feriado por nome..." 
              type="text"
            />
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleImportHolidays}
              disabled={isImporting}
              className={`px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all border ${
                isImporting 
                ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-white dark:bg-slate-800 border-primary/30 text-primary hover:bg-primary/5'
              }`}
            >
              <span className={`material-icons text-lg ${isImporting ? 'animate-spin' : ''}`}>
                {isImporting ? 'sync' : 'cloud_download'}
              </span> 
              {isImporting ? 'Importando...' : 'Importar Oficiais'}
            </button>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-icons text-lg">add</span> Incluir Novo Feriado
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-6 flex items-center gap-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 p-4 rounded-xl">
          <span className="material-icons text-amber-500">lightbulb</span>
          <p className="text-sm text-amber-800 dark:text-amber-200/70">
            Você pode importar feriados nacionais e estaduais automaticamente. Feriados municipais devem ser cadastrados manualmente para cada unidade.
          </p>
        </div>

        {/* Holidays Table */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <tr className="text-xs font-bold uppercase text-slate-500">
                  <th className="px-6 py-4">Nome do Feriado</th>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">Tipo</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {holidays.map(holiday => (
                  <tr key={holiday.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium dark:text-white">{holiday.name}</td>
                    <td className="px-6 py-4 dark:text-slate-300">{holiday.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        holiday.type === 'Nacional' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' :
                        holiday.type === 'Estadual' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' :
                        'bg-amber-100 dark:bg-amber-900/30 text-amber-600'
                      }`}>
                        {holiday.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 dark:text-slate-300">
                      <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                        {holiday.state}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/5">
                          <span className="material-icons text-lg">edit</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-500/5">
                          <span className="material-icons text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {holidays.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                      Nenhum feriado cadastrado. Clique em importar ou adicionar novo.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Holiday Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <h2 className="text-xl font-bold dark:text-white">Incluir Novo Feriado</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }}>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 dark:text-slate-300">Nome do Feriado</label>
                  <input 
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 outline-none dark:text-white focus:ring-2 focus:ring-primary" 
                    type="text"
                    placeholder="Ex: Natal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 dark:text-slate-300">Data</label>
                  <input 
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 outline-none dark:text-white focus:ring-2 focus:ring-primary dark:[color-scheme:dark]" 
                    type="date"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 dark:text-slate-300">Tipo de Feriado</label>
                    <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 outline-none dark:text-white focus:ring-2 focus:ring-primary">
                      <option>Nacional</option>
                      <option>Estadual</option>
                      <option>Municipal</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 dark:text-slate-300">UF (Se Estadual)</label>
                    <input 
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 outline-none dark:text-white focus:ring-2 focus:ring-primary" 
                      type="text"
                      placeholder="Ex: SP"
                      maxLength={2}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex gap-3 justify-end">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)} 
                  className="px-4 py-2 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold shadow-lg shadow-primary/20 transition-all"
                >
                  Salvar Feriado
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolidaysPage;
