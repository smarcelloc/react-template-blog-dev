import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import MyLink from '../../components/Link';

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register: React.FC = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const errorMessageRef = React.useRef<HTMLElement | null>(null);

  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const validationSchema: Yup.SchemaOf<FormValues> = Yup.object({
    name: Yup.string().max(255).required('Please enter you name full'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .max(255)
      .required('Please inform the email'),
    password: Yup.string().min(8).max(25).required('Please enter the password'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please password confirm'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          setErrorMessage('Ops! We cannot save any data as it is a demo site.');
          setStatus({ success: false });
          setSubmitting(false);

          errorMessageRef.current?.scrollIntoView();
        }}>
        {({
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
          values,
        }: FormikProps<FormValues>) => (
          <form noValidate onSubmit={handleSubmit}>
            {errorMessage && (
              <Typography ref={errorMessageRef} gutterBottom color="error.main">
                {errorMessage}
              </Typography>
            )}
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              autoFocus
              required
              type="text"
              margin="normal"
              value={values.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />

            <TextField
              id="email"
              name="email"
              autoComplete="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              margin="normal"
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              autoComplete="password"
              variant="outlined"
              fullWidth
              required
              type="password"
              margin="normal"
              value={values.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />

            <TextField
              id="passwordConfirm"
              name="passwordConfirm"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              required
              type="password"
              margin="normal"
              value={values.passwordConfirm}
              onChange={handleChange}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={isSubmitting}
              sx={{ marginY: 3 }}>
              {isSubmitting ? 'Loading ...' : 'Register'}
            </Button>
          </form>
        )}
      </Formik>

      <MyLink to="/login">Back to Login</MyLink>
    </>
  );
};

export default Register;
