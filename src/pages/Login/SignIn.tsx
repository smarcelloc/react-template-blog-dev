import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import MyLink from '../../components/Link';
import accountAction from '../../store/actions/accountAction';
import { isRequestError } from '../../utils/request';

interface FormValues {
  email: string;
  password: string;
  submit?: {
    message: string;
  };
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorMessageRef = React.useRef<HTMLElement | null>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: 'john@example.com',
      password: 'password@123',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email address.')
        .max(255)
        .required('Please inform the email'),
      password: Yup.string().max(25).required('Please enter the password'),
    }),
    onSubmit: async (values, { setStatus, setSubmitting, setErrors }) => {
      try {
        await dispatch(accountAction.signIn(values.email, values.password));
        navigate('/');
      } catch (error: any) {
        const message = isRequestError(error)
          ? error.response.data.message
          : error.message;

        setErrors({ submit: message });
        setStatus({ success: false });
        setSubmitting(false);
      }
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
          id="email"
          name="email"
          autoComplete="email"
          label="Email"
          variant="outlined"
          fullWidth
          autoFocus
          type="email"
          margin="normal"
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          autoComplete="password"
          variant="outlined"
          fullWidth
          type="password"
          margin="normal"
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <FormControlLabel
          control={<Checkbox defaultChecked id="remember" name="remember" />}
          label="Remember me"
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          disabled={formik.isSubmitting}
          sx={{ marginY: 3 }}>
          {formik.isSubmitting ? 'Loading ...' : 'Sign In'}
        </Button>
      </form>

      <MyLink to="/login/register">Create a account</MyLink>
    </>
  );
};

export default SignIn;
