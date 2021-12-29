import { colors, createTheme } from '@mui/material';

import componentsTheme from './components';

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
  palette: {
    mode: 'light',
    primary: {
      main: colors.indigo.A400,
      light: colors.indigo.A200,
      dark: colors.indigo.A700,
    },
    secondary: {
      main: colors.orange.A700,
      light: colors.orange.A200,
      dark: colors.orange[900],
    },
  },
  shape: {
    borderRadius: 12,
  },
});

theme.components = componentsTheme(theme);

export default theme;
