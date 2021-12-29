import * as React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';

import AvatarProfile from '../AvatarProfile';
import Logo from './Logo';

const Header: React.FC = () => {
  const account = useSelector((state) => state.account);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Logo />
        <Box flexGrow={1} />
        <Button>New Post</Button>
        <Box mx={1} />
        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit">
          <Badge variant="dot" overlap="circular" color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Box mx={1} />
        <IconButton sx={{ p: 0 }}>
          <AvatarProfile
            user={{
              name: account.user?.name ?? '',
              avatar: account.user?.avatar,
            }}
            alt="Remy Sharp"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
