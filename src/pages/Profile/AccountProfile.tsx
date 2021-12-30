import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import AvatarProfile from '../../components/AvatarProfile';
import { UserProps } from '../../interfaces';

interface Props {
  user: UserProps;
}

const AccountProfile: React.FC<Props> = ({ user }: Props) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <AvatarProfile user={user} size="large" />
          <Typography gutterBottom variant="h5">
            {`@${user.username}`}
          </Typography>
        </Box>
        <Typography color="textSecondary" variant="caption" gutterBottom>
          Published posts
        </Typography>
        <Typography variant="body1" gutterBottom>
          {user.totalPost}
        </Typography>
        <Typography color="textSecondary" variant="caption" gutterBottom>
          Followers
        </Typography>
        <Typography variant="body1" gutterBottom>
          23.5k
        </Typography>
        <Typography color="textSecondary" variant="caption" gutterBottom>
          Following
        </Typography>
        <Typography variant="body1" gutterBottom>
          105
        </Typography>
        <Typography color="textSecondary" variant="caption" gutterBottom>
          Reviews received
        </Typography>
        <Typography variant="body1" gutterBottom>
          388
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="inherit" variant="text">
          change photo
        </Button>
        <Button variant="text" color="inherit">
          Remove photo
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
