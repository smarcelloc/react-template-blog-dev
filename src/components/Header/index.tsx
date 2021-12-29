import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import Logo from './Logo';
import MenuProfile from './MenuProfile';
import PopoverNotifications from './PopoverNotifications';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Logo />
        <Box flexGrow={1} />
        <Button>New Post</Button>
        <Box mx={1} />
        <PopoverNotifications />
        <Box mx={1} />
        <MenuProfile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
