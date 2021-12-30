import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Profile: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item md={4} width="100%">
          Account Profile
        </Grid>
        <Grid item md={8} width="100%">
          My Post
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
