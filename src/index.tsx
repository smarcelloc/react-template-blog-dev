import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Auth from './components/Auth';
import { SettingsProvider } from './context/SettingsContext';
import settingsService from './services/settingsService';
import store from './store';
import Theme from './styles/theme';

const settings = settingsService.getSettings();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SettingsProvider settings={settings}>
        <Theme>
          <Auth>
            <App />
          </Auth>
        </Theme>
      </SettingsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
