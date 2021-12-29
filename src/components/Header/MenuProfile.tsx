import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import PersonIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';

import accountAction from '../../store/actions/accountAction';
import AvatarProfile from '../AvatarProfile';

const MenuProfile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (isAuthenticated) {
      setAnchorEl(event.currentTarget);
    } else {
      navigate('/login');
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    handleClose();
    await dispatch(accountAction.signOut());
    navigate('/');
  };

  return (
    <>
      <IconButton
        sx={{ p: 0 }}
        aria-label="account of current user"
        aria-controls="menu-profile"
        aria-haspopup="true"
        onClick={handleOpen}>
        <AvatarProfile
          user={{
            name: account.user?.name || '',
            avatar: account.user?.avatar,
          }}
        />
      </IconButton>
      <Menu
        id="menu-profile"
        keepMounted
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuProfile;
