import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

import Register from './Register';
import SignIn from './SignIn';

const Login: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={5}>
      <Avatar
        sx={{ bgcolor: (theme) => theme.palette.primary.main }}
        aria-label="authentication icon">
        <LockOpenOutlinedIcon />
      </Avatar>
      <Typography variant="h5" component="h1">
        <Routes>
          <Route path="*" element="Sign In" />
          <Route path="/register" element="Register" />
        </Routes>
      </Typography>
      <Container maxWidth="sm">
        <Box my={5}>
          <Routes>
            <Route path="*" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
        <Typography textAlign="center">
          Copyright © {new Date().getFullYear()} &nbsp;
          <Link
            target="_blank"
            href="https://github.com/smarcelloc/connect-dev">
            Connect DEV
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Login;
