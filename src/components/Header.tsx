import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';

import AvatarProfile from './AvatarProfile';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="h1">
          Connect DEV
        </Typography>
        <Box flexGrow={1} />
        <Button>New Post</Button>
        <Box mx={2}>
          <IconButton
            size="large"
            aria-label="show new notifications"
            color="inherit">
            <Badge variant="dot" overlap="circular" color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
        <IconButton sx={{ p: 0 }}>
          <AvatarProfile alt="Remy Sharp" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
