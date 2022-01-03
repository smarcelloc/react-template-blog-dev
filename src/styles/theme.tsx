import * as React from 'react';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { useSettings } from '../context/SettingsContext';
import { SettingsProps } from '../entities';
import componentsTheme from './components';
import paletteTheme from './palette';

interface Props {
  children: React.ReactNode;
}

const themeConfig = (settings: SettingsProps) => {
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

  return theme;
};

const Theme: React.FC<Props> = ({ children }: Props) => {
  const context = useSettings();

  return (
    <ThemeProvider theme={themeConfig(context.settings)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
