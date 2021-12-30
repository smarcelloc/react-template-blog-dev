import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import AvatarProfile from '../../components/AvatarProfile';

const AccountProfile: React.FC = () => {
  const user = useSelector((state) => state.account.user);

  if (!user) {
    return <Navigate to="/404" />;
  }

  return (
    <>
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
      <Box my={2} />
      <Card>
        <CardContent>
          <Typography gutterBottom color="textSecondary" variant="caption">
            Name
          </Typography>
          <Typography gutterBottom variant="body1">
            {user.name}
          </Typography>

          <Typography gutterBottom color="textSecondary" variant="caption">
            Email
          </Typography>
          <Typography gutterBottom variant="body1">
            {user.email}
          </Typography>

          <Typography color="textSecondary" variant="caption">
            Bio
          </Typography>
          <Typography gutterBottom variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
          <Typography gutterBottom color="textSecondary" variant="caption">
            Registration Date
          </Typography>
          <Typography gutterBottom variant="body1">
            {user.joinedIn}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AccountProfile;
