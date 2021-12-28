import { colors, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans, Arial, sans-serif',
    h1: {
      fontFamily: 'bold',
    },
    h2: {
      fontFamily: 'bold',
    },
    h3: {
      fontFamily: 'bold',
    },
    h4: {
      fontFamily: 'bold',
    },
    h5: {
      fontFamily: 'bold',
    },
    h6: {
      fontFamily: 'bold',
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
    borderRadius: 2,
  },
});

export default theme;
