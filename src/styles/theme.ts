import { createTheme } from '@mui/material';

import settingsService from '../services/settingsService';
import componentsTheme from './components';
import paletteTheme from './palette';

const settings = settingsService.getSettings();

const theme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans, Arial, sans-serif',
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
  },
  palette: paletteTheme(settings.darkMode),
  shape: {
    borderRadius: 12,
  },
});

theme.components = componentsTheme(theme);

export default theme;
