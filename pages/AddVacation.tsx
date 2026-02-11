
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const AddVacation: React.FC = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [days, setDays] = useState({ total: 0, business: 0, holidays: 0 });

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      
      // Mock calculation for demo purposes
      setDays({
        total: diffDays > 0 ? diffDays : 0,
        business: Math.ceil(diffDays * 0.7),
        holidays: Math.floor(Math.random() * 2)
      });
    }
  }, [startDate, endDate]);

  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark custom-scrollbar">
      <Header title="Inclusão de Férias" />
      <main className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Solicitar Novas Férias</h2>
          <p className="text-slate-500 mt-2">Preencha os dados abaixo para registrar ou agendar o período de descanso do colaborador.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); navigate('/vacation-board'); }} className="space-y-8">
          <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Colaborador</label>
                  <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white">
                    <option>Selecione um colaborador</option>
                    <option>Ricardo Silva</option>
                    <option>Ana Martins</option>
                    <option>Carlos Eduardo Mendes</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Tipo de solicitação</label>
                  <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white">
                    <option>Férias agendadas no RH</option>
                    <option>Férias Integrais</option>
                    <option>Abono Pecuniário</option>
                    <option>Saldo Inicial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Data de início</label>
                  <input 
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all dark:[color-scheme:dark] dark:text-white" 
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Data de fim</label>
                  <input 
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all dark:[color-scheme:dark] dark:text-white" 
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl">
                  <p className="text-xs font-semibold text-primary uppercase">Dias corridos</p>
                  <p className="text-2xl font-bold">{days.total} <span className="text-sm font-normal text-slate-500">dias</span></p>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl">
                  <p className="text-xs font-semibold text-emerald-500 uppercase">Dias úteis</p>
                  <p className="text-2xl font-bold">{days.business} <span className="text-sm font-normal text-slate-500">dias</span></p>
                </div>
                <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl">
                  <p className="text-xs font-semibold text-amber-500 uppercase">Feriados</p>
                  <p className="text-2xl font-bold">{days.holidays} <span className="text-sm font-normal text-slate-500">feriado</span></p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/80 px-8 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-end gap-3">
              <button 
                type="button" 
                onClick={() => navigate(-1)} 
                className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-icons text-sm">save</span> Salvar registro
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddVacation;
