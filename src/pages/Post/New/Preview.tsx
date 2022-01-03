import * as React from 'react';

import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useFormikContext } from 'formik';

import { FormValue } from '.';
import MyLink from '../../../components/Link';
import Markdown from '../../../components/Markdown';

const PostImage = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  maxHeight: 450,
  marginBottom: theme.spacing(3),
}));

const Preview: React.FC = () => {
  const formik = useFormikContext<FormValue>();
  return (
    <>
      {formik.values.image && (
        <PostImage src={formik.values.image.toString()} alt="post image" />
      )}

      {formik.values.title && (
        <Typography gutterBottom variant="h3" component="h2">
          {formik.values.title}
        </Typography>
      )}

      {formik.values.tags &&
        formik.values.tags.map(({ title }: { title: string }, idx: number) => (
          <MyLink to="#" key={idx} material={{ mr: 2 }}>
            {title}
          </MyLink>
        ))}

      {formik.values.content && <Markdown text={formik.values.content} />}
    </>
  );
};

export default Preview;
