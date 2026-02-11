
export interface Employee {
  id: string;
  name: string;
  role: string;
  unit: string;
  state: string;
  initials: string;
  colorClass: string;
}

export interface VacationRequest {
  id: string;
  employeeId: string;
  type: string;
  startDate: string;
  endDate: string;
  status: 'concluido' | 'agendado' | 'em_ferias';
  daysTotal: number;
  daysBusiness: number;
  daysHolidays: number;
}

export interface Holiday {
  id: string;
  name: string;
  date: string;
  type: 'Nacional' | 'Estadual' | 'Municipal';
  state?: string;
}
