import * as React from 'react';

import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Popover from '@mui/material/Popover';
import Switch from '@mui/material/Switch';

import SettingsIcon from '@mui/icons-material/SettingsOutlined';

import { useSettings } from '../../context/SettingsContext';

const Settings: React.FC = () => {
  const context = useSettings();

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isOpen = !!anchorEl;

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsDarkMode = () => {
    context.saveSettings({ darkMode: !context.settings.darkMode });
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="show settings"
        color="inherit"
        aria-controls="popover-settings"
        aria-haspopup="true"
        onClick={handleOpen}>
        <SettingsIcon />
      </IconButton>
      <Popover
        id="popover-settings"
        anchorEl={anchorEl}
        keepMounted
        open={isOpen}
        onClose={handleClose}
        PaperProps={{ sx: { width: 280 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <List disablePadding>
          <ListSubheader color="inherit">Settings</ListSubheader>
          <Divider />
          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    onChange={handleSettingsDarkMode}
                    checked={context.settings.darkMode ?? false}
                  />
                }
                label="Theme Dark"
              />
            </FormGroup>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default Settings;
