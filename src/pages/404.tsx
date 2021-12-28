import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Page404: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center">
        <Typography component="h1" variant="h1">
          404
        </Typography>
        <Typography gutterBottom component="h2" variant="h5">
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          The page you requested could not be found. Try using the navigation or
          search to find what you are looking for or click on the button below
          to back home page.
        </Typography>
        <Link to="/">
          <Button sx={{ mt: 3 }}>Home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Page404;
