import * as React from 'react';
import { Link } from 'react-router-dom';

import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <Hidden smDown>
        <Typography variant="h6" component="h1">
          Connect DEV
        </Typography>
      </Hidden>
      <Hidden smUp>
        <Typography variant="body1" fontWeight="bold" component="h1">
          Connect DEV
        </Typography>
      </Hidden>
    </Link>
  );
};

export default Logo;
