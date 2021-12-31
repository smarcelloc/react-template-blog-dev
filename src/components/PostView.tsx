import * as React from 'react';

import { Link, styled } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import moment from 'moment';

import Markdown from '../components/Markdown';
import { PostProps } from '../interfaces';
import AvatarProfile from './AvatarProfile';

interface Props {
  post: PostProps;
}

const ImagePost = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  maxHeight: 450,
  marginBottom: theme.spacing(2),
}));

const PostView: React.FC<Props> = ({ post }: Props) => {
  return (
    <Container maxWidth="md">
      <ImagePost src={post.image} alt={`image post of ${post.title}`} />
      <Typography fontWeight="bold" variant="h4" component="h2">
        {post.title}
      </Typography>

      <Grid container spacing={1} marginY={3} flexWrap="nowrap">
        <Grid item>
          <AvatarProfile user={post.author} />
        </Grid>
        <Grid item zeroMinWidth>
          <Typography
            variant="subtitle1"
            component="h3"
            noWrap
            children={post.author.name}
          />
          <Typography
            variant="body2"
            component="h4"
            color="text.secondary"
            noWrap
            children={moment(post.time).fromNow()}
          />
        </Grid>
      </Grid>

      {post.tags &&
        post.tags.map(({ title, id }) => (
          <Link href="#" key={id} mr={2}>
            {title}
          </Link>
        ))}

      <Markdown text={post.content ?? ''} />
    </Container>
  );
};

export default PostView;
