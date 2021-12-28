import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

import PostCard from '../components/PostCard';
import TagsBar from '../components/TagsBar';

const Feeds: React.FC = () => {
  return (
    <Container>
      <Grid container columnSpacing={2}>
        <Hidden mdDown>
          <Grid container item md={3} direction="column" rowSpacing={2}>
            <Grid item>
              <TagsBar />
            </Grid>
          </Grid>
        </Hidden>
        <Grid container item xs={12} md={9} spacing={2}>
          <Grid item sm={6}>
            <PostCard />
          </Grid>
          <Grid item sm={6}>
            <PostCard />
          </Grid>
          <Grid item sm={6}>
            <PostCard />
          </Grid>
          <Grid item sm={6}>
            <PostCard />
          </Grid>
          <Grid item sm={6}>
            <PostCard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feeds;
