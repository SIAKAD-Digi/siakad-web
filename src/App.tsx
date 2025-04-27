import { ThemeProvider } from '@mui/material';

import { theme } from './config/theme-config';
import Router from './router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/id';

export default function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="id">
        <Router />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
