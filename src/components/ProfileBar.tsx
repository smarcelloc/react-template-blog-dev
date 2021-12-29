import * as React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import AvatarProfile from './AvatarProfile';
import ButtonMore from './ButtonMore';

const ProfileBar: React.FC = () => {
  const account = useSelector((state) => state.account);

  return (
    <Paper>
      <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <AvatarProfile
          size="large"
          user={{
            name: account.user?.name || '',
            avatar: account.user?.avatar,
          }}
          aria-label="account of current user"
        />
        <Typography gutterBottom color="primary">
          {`@${account.user?.username}`}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {account.user?.work}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {account.user?.totalPost} Post made
        </Typography>
      </Box>
      <ButtonMore>My Account</ButtonMore>
    </Paper>
  );
};

export default ProfileBar;
