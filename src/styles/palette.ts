import { colors, PaletteOptions } from '@mui/material';

const paletteTheme = (isDark: boolean = false): PaletteOptions => {
  if (isDark) {
    return paletteDark;
  }

  return paletteLight;
};

const paletteDark: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: colors.indigo.A100,
    light: colors.indigo[300],
    dark: colors.indigo.A400,
  },
  secondary: {
    main: colors.yellow.A200,
    light: colors.yellow.A100,
    dark: colors.yellow.A400,
  },
};

const paletteLight: PaletteOptions = {
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
};

export default paletteTheme;
