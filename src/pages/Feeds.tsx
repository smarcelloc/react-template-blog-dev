import * as React from 'react';
import { useSelector } from 'react-redux';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

import PostCard from '../components/PostCard';
import ProfileBar from '../components/ProfileBar';
import TagsBar from '../components/TagsBar';
import { PostProps } from '../interfaces';
import request from '../utils/request';

interface RequestProps {
  posts: PostProps[];
}

const Feeds: React.FC = () => {
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const [posts, setPosts] = React.useState<PostProps[]>([]);

  const getPosts = React.useCallback(async () => {
    const response = await request.get<RequestProps>('/api/posts');
    setPosts(response.data.posts);
  }, [setPosts]);

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container>
      <Grid container columnSpacing={2}>
        <Hidden mdDown>
          <Grid container item md={3} direction="column" rowSpacing={2}>
            {isAuthenticated && (
              <Grid item>
                <ProfileBar />
              </Grid>
            )}
            <Grid item>
              <TagsBar />
            </Grid>
          </Grid>
        </Hidden>
        <Grid container item xs={12} md={9} spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feeds;
