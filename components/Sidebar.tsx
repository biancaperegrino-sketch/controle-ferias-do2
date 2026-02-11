
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { path: "/vacation-board", label: "Quadro de Férias", icon: "calendar_month" },
    { path: "/employees", label: "Colaboradores", icon: "people" },
    { path: "/holidays", label: "Feriados", icon: "public" },
    { path: "/settings", label: "Configurações", icon: "settings" },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard' && location.pathname.startsWith('/dashboard')) return true;
    return location.pathname === path;
  };

  return (
    <aside className="w-64 bg-slate-50 dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 flex flex-col hidden lg:flex">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="material-icons text-white text-lg">flight_takeoff</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white uppercase">RH Manager</span>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map(item => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg ${
              isActive(item.path) 
                ? 'bg-primary/10 text-primary border-r-4 border-primary' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <span className="material-icons">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
          <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Suporte</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Precisa de ajuda com o sistema?</p>
          <button className="mt-3 text-xs font-bold text-primary flex items-center gap-1 hover:underline">
            Central de Ajuda <span className="material-icons text-[14px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
