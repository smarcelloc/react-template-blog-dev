import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import MyLink from '../../components/Link';
import accountAction from '../../store/actions/accountAction';
import { isRequestError } from '../../utils/request';

interface FormValues {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = React.useState('');
  const errorMessageRef = React.useRef<HTMLElement | null>(null);

  const initialValues: FormValues = {
    email: 'john@example.com',
    password: 'password@123',
  };

  const validationSchema: Yup.SchemaOf<FormValues> = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email address.')
      .max(255)
      .required('Please inform the email'),
    password: Yup.string().max(25).required('Please enter the password'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          try {
            await dispatch(accountAction.signIn(values.email, values.password));
            navigate('/');
          } catch (error: any) {
            const message = isRequestError(error)
              ? error.response.data.message
              : error.message;

            errorMessageRef.current?.scrollIntoView();

            setErrorMessage(message);
            setStatus({ success: false });
            setSubmitting(false);
          }
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
              id="email"
              name="email"
              autoComplete="email"
              label="Email"
              variant="outlined"
              fullWidth
              autoFocus
              type="email"
              margin="normal"
              error={!!errors.email}
              helperText={errors.email}
              value={values.email}
              onChange={handleChange}
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
              error={!!errors.password}
              helperText={errors.password}
              value={values.password}
              onChange={handleChange}
            />

            <FormControlLabel
              control={
                <Checkbox defaultChecked id="remember" name="remember" />
              }
              label="Remember me"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={isSubmitting}
              sx={{ marginY: 3 }}>
              {isSubmitting ? 'Loading ...' : 'Sign In'}
            </Button>
          </form>
        )}
      </Formik>

      <MyLink to="/login/register">Create a account</MyLink>
    </>
  );
};

export default SignIn;
