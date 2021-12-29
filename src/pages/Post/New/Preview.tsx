import * as React from 'react';

import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import MyLink from '../../../components/Link';
import Markdown from '../../../components/Markdown';
import { usePost } from '../../../context/PostContext';

const PostImage = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  maxHeight: 450,
  marginBottom: theme.spacing(3),
}));

const Preview: React.FC = () => {
  const context = usePost();

  return (
    <>
      {context.image && (
        <PostImage src={context.image.toString()} alt="post image" />
      )}

      {context.title && (
        <Typography gutterBottom variant="h3" component="h2">
          {context.title}
        </Typography>
      )}

      {context.tags.map(({ title }: { title: string }, idx: number) => (
        <MyLink to="#" key={idx} material={{ mr: 2 }}>
          {title}
        </MyLink>
      ))}

      {context.markdown && <Markdown text={context.markdown} />}
    </>
  );
};

export default Preview;
