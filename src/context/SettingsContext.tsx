import * as React from 'react';

import { SettingsProps } from '../entities';
import settingsService from '../services/settingsService';

interface Props {
  children: React.ReactNode;
  settings?: SettingsProps;
}

interface SettingsProviderProps {
  settings: SettingsProps;
  saveSettings: (newSettings: SettingsProps) => void;
}

const defaultSettings: SettingsProps = {
  darkMode: false,
};

const SettingsContext = React.createContext<SettingsProviderProps>({
  saveSettings: () => {},
  settings: defaultSettings,
});

const SettingsProvider: React.FC<Props> = ({ children, settings }: Props) => {
  const [currentSettings, setCurrentSettings] = React.useState(settings);

  const handleSave = (newSettings: SettingsProps) => {
    const mergedSettings = {
      ...currentSettings,
      ...newSettings,
    };

    setCurrentSettings(mergedSettings);
    settingsService.setSettings(mergedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings ?? defaultSettings,
        saveSettings: handleSave,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => React.useContext(SettingsContext);

export { SettingsProvider, useSettings };
