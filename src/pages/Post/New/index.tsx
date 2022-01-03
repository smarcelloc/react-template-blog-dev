import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

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
  submit?: {
    message: string;
  };
}

const PostNew: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const errorMessageRef = React.useRef<HTMLElement | null>(null);

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
    onSubmit: (values, { setStatus, setSubmitting, setErrors }) => {
      const message = 'Ops! We cannot save any data as it is a demo site.';

      setErrors({ submit: message });
      setStatus({ success: false });
      setSubmitting(false);

      errorMessageRef.current?.scrollIntoView();
      const appBarHeight = 64;
      const marginTop = 20;
      window.scroll({
        top: window.scrollY - appBarHeight - marginTop,
        left: 0,
      });
    },
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
              {formik.errors.submit && (
                <Typography
                  ref={errorMessageRef}
                  gutterBottom
                  color="error.main">
                  {formik.errors.submit}
                </Typography>
              )}
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
