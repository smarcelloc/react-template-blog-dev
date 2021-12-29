import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Popover from '@mui/material/Popover';

import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GroupIcon from '@mui/icons-material/GroupOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import PostAddIcon from '@mui/icons-material/PostAddOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';

import ButtonMore from '../../components/ButtonMore';
import { NotificationProps } from '../../interfaces';
import notificationsAction from '../../store/actions/notificationsAction';

const IconsNotification = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const IconNotification = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'reviews':
      return <VisibilityIcon />;
    case 'new_comment':
      return <PostAddIcon />;
    case 'like':
      return <FavoriteIcon />;
    case 'connection':
      return <GroupIcon />;
    default:
      return <NotificationsIcon />;
  }
};

const ItemNotification = (notification: NotificationProps) => {
  return (
    <ListItem dense>
      <ListItemAvatar>
        <IconsNotification>
          <IconNotification icon={notification.type} />
        </IconsNotification>
      </ListItemAvatar>
      <ListItemText
        primary={notification.title}
        primaryTypographyProps={{
          variant: 'subtitle2',
          color: 'text.primary',
        }}
        secondary={notification.description}
      />
    </ListItem>
  );
};

const PopoverNotifications: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  React.useEffect(() => {
    dispatch(notificationsAction.getData());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isOpen = !!anchorEl;

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="show notifications"
        color="inherit"
        aria-controls="popover-notifications"
        aria-haspopup="true"
        onClick={handleOpen}>
        <Badge variant="dot" color="error" invisible={false}>
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <List disablePadding>
          <ListSubheader color="inherit">Notifications</ListSubheader>
          <Divider />
          {notifications &&
            notifications.map((props) => (
              <ItemNotification key={props.id} {...props} />
            ))}
        </List>
        <ButtonMore>View more notifications</ButtonMore>
      </Popover>
    </div>
  );
};

export default PopoverNotifications;
