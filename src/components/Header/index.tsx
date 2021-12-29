import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import Logo from './Logo';
import MenuProfile from './MenuProfile';
import PopoverNotifications from './PopoverNotifications';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const handleClickNewPost = () => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Logo />
        <Box flexGrow={1} />
        <Button onClick={handleClickNewPost}>New Post</Button>
        <Box mx={1} />
        {isAuthenticated && <PopoverNotifications />}
        <Box mx={1} />
        <MenuProfile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
