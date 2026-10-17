import { BusinessHoursRow } from '../models/business-hours.model';

export const BUSINESS_HOURS: readonly BusinessHoursRow[] = [
  { days: 'Segunda a sexta', hours: '07:00 às 17:20' },
  { days: 'Sábado', hours: null },
  { days: 'Domingo', hours: null },
];
