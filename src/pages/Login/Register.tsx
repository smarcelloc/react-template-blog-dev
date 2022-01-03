import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import MyLink from '../../components/Link';

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  submit?: {
    message: string;
  };
}

const Register: React.FC = () => {
  const errorMessageRef = React.useRef<HTMLElement | null>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required('Please enter you name full'),
      email: Yup.string()
        .email('Please enter a valid email address.')
        .max(255)
        .required('Please inform the email'),
      password: Yup.string()
        .min(8)
        .max(25)
        .required('Please enter the password'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please password confirm'),
    }),
    onSubmit: (values, { setStatus, setSubmitting, setErrors }) => {
      const message = 'Ops! We cannot save any data as it is a demo site.';

      setErrors({ submit: message });
      setStatus({ success: false });
      setSubmitting(false);

      errorMessageRef.current?.scrollIntoView();
      const marginTop = 20;
      window.scrollTo({ top: window.scrollY - marginTop, left: 0 });
    },
  });

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        {formik.errors.submit && (
          <Typography ref={errorMessageRef} gutterBottom color="error.main">
            {formik.errors.submit}
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
          value={formik.values.name}
          onChange={formik.handleChange}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
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
          value={formik.values.email}
          onChange={formik.handleChange}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
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
          value={formik.values.password}
          onChange={formik.handleChange}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
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
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          error={!!formik.errors.passwordConfirm}
          helperText={formik.errors.passwordConfirm}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          disabled={formik.isSubmitting}
          sx={{ marginY: 3 }}>
          {formik.isSubmitting ? 'Loading ...' : 'Register'}
        </Button>
      </form>

      <MyLink to="/login">Back to Login</MyLink>
    </>
  );
};

export default Register;
