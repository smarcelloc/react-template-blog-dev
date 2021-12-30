import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './App';
import Auth from './components/Auth';
import { SettingsProvider } from './context/SettingsContext';
import settingsService from './services/settingsService';
import store from './store';
import theme from './styles/theme';

const settings = settingsService.getSettings();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SettingsProvider settings={settings}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Auth>
            <App />
          </Auth>
        </ThemeProvider>
      </SettingsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
