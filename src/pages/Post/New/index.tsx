import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';

import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import Tab from '../../../components/Tab';
import TabPanel from '../../../components/TabPanel';
import { TagsProps } from '../../../entities';
import Form from './Form';
import Preview from './Preview';

export interface FormValue {
  title: string;
  content: string;
  image: string;
  tags?: TagsProps[];
}

const PostNew: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const formik = useFormik<FormValue>({
    initialValues: {
      title: '',
      content: '',
      image: '',
      tags: [],
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required().max(255),
      content: Yup.string().required().max(1500),
      image: Yup.string().required(),
    }),
    onSubmit: () => {},
  });

  return (
    <FormikProvider value={formik}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Container maxWidth="md">
          <Paper sx={{ borderRadius: 0 }}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="tabs new post">
              <Tab label="Editor" index={0} />
              <Tab label="Preview" index={1} />
            </Tabs>
          </Paper>
          <Box mt={2}>
            <TabPanel value={value} index={0}>
              <Form />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Preview />
            </TabPanel>
          </Box>
        </Container>
      </form>
    </FormikProvider>
  );
};

export default PostNew;
