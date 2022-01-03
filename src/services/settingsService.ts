import { SettingsProps } from '../entities';

const SETTINGS_KEY = 'settingsApp';

class SettingsService {
  getSettings = (): SettingsProps => {
    const data = localStorage.getItem(SETTINGS_KEY);
    return data ? JSON.parse(data) : {};
  };

  setSettings = (data: SettingsProps) => {
    const settings = JSON.stringify(data);
    localStorage.setItem(SETTINGS_KEY, settings);
  };
}

const settingsService = new SettingsService();

export default settingsService;
