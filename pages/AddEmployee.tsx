
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-2xl bg-white dark:bg-[#1a242f] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Cadastro de Colaborador</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Insira as informações básicas para o controle de férias.</p>
          </div>
          <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
            <span className="material-icons">close</span>
          </button>
        </div>
        
        <form 
          className="p-8 space-y-6" 
          onSubmit={(e) => { e.preventDefault(); navigate('/vacation-board'); }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Nome do Colaborador</label>
              <div className="relative">
                <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-lg">person</span>
                <input 
                  className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:text-white outline-none transition-all" 
                  placeholder="Digite o nome completo" 
                  type="text"
                  required
                />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Função</label>
              <div className="relative">
                <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-lg">work</span>
                <input 
                  className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:text-white outline-none transition-all" 
                  placeholder="Ex: Analista de RH Sênior" 
                  type="text"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Unidade</label>
              <select className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none dark:text-white">
                <option value="matriz">Matriz (São Paulo)</option>
                <option value="filial-rj">Filial (Rio de Janeiro)</option>
                <option value="filial-pr">Filial (Curitiba)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Estado</label>
              <select className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none dark:text-white">
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="PR">Paraná</option>
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col-reverse sm:flex-row justify-end gap-3">
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className="px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <span className="material-icons text-sm">save</span> Salvar Colaborador
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
