import * as React from 'react';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Popover from '@mui/material/Popover';

import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';

import ButtonMore from '../../components/ButtonMore';

const PopoverNotifications: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isOpen = !!anchorEl;

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="show notifications"
        color="inherit"
        aria-controls="popover-notifications"
        aria-haspopup="true"
        onClick={handleOpen}>
        <Badge variant="dot" overlap="circular" color="error" invisible={false}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id="popover-notifications"
        anchorEl={anchorEl}
        keepMounted
        open={isOpen}
        onClose={handleClose}
        PaperProps={{ sx: { width: 280 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <List disablePadding>
          <ListSubheader color="inherit">Notifications</ListSubheader>
        </List>
        <ButtonMore>View more notifications</ButtonMore>
      </Popover>
    </>
  );
};

export default PopoverNotifications;
