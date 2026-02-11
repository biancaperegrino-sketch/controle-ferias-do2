
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white dark:bg-background-dark sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <span className="text-slate-400 text-sm">Portal</span>
        <span className="material-icons text-slate-400 text-sm leading-none">chevron_right</span>
        <span className="text-slate-800 dark:text-white font-medium text-sm">{title}</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-primary transition-colors relative">
            <span className="material-icons">notifications</span>
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
          </button>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-icons">search</span>
          </button>
        </div>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-primary transition-colors">Admin RH</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Gestor Global</p>
          </div>
          <img 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-primary/30" 
            src="https://picsum.photos/seed/rh-admin/100/100"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
