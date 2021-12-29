import * as React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <Typography variant="h6" component="h1">
        Connect DEV
      </Typography>
    </Link>
  );
};

export default Logo;
