import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { UserProps } from '../../interfaces';

interface Props {
  user: UserProps;
}

const AccountInfo: React.FC<Props> = ({ user }: Props) => {
  return (
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
  );
};

export default AccountInfo;
