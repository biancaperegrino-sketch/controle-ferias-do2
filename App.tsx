
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import VacationBoardPage from './pages/VacationBoard';
import AddEmployeePage from './pages/AddEmployee';
import AddVacationPage from './pages/AddVacation';
import IndividualDashboardPage from './pages/IndividualDashboard';
import HolidaysPage from './pages/Holidays';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/vacation-board" replace />} />
          <Route path="/vacation-board" element={<VacationBoardPage />} />
          <Route path="/add-employee" element={<AddEmployeePage />} />
          <Route path="/add-vacation" element={<AddVacationPage />} />
          <Route path="/dashboard/:id?" element={<IndividualDashboardPage />} />
          <Route path="/employees" element={<VacationBoardPage />} /> {/* Reusing board for demo */}
          <Route path="/holidays" element={<HolidaysPage />} />
          <Route path="/settings" element={<div className="p-8">Configurações (Em desenvolvimento)</div>} />
          <Route path="*" element={<Navigate to="/vacation-board" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
