import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import PostCard from '../../components/PostCard';
import { PostProps } from '../../interfaces';
import request from '../../utils/request';
import AccountInfo from './AccountInfo';
import AccountProfile from './AccountProfile';

interface RequestProps {
  posts: PostProps[];
}

const Profile: React.FC = () => {
  const [posts, setPosts] = React.useState<PostProps[]>([]);
  const user = useSelector((state) => state.account.user);

  const getPosts = useCallback(async () => {
    if (user) {
      const response = await request.get<RequestProps>('/api/user/posts', {
        params: { user_id: `${user.id}` },
      });
      setPosts(response.data.posts);
    }
  }, [setPosts, user]);

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (!user) {
    return <>Loading...</>;
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item container md={4} flexDirection="column" rowSpacing={2}>
          <Grid item>
            <AccountProfile user={user} />
          </Grid>
          <Grid item>
            <AccountInfo user={user} />
          </Grid>
        </Grid>
        <Grid item container md={8} spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom component="h2" variant="h4">
              My Posts
            </Typography>
          </Grid>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
