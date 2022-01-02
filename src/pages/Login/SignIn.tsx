import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import { Formik, FormikProps } from 'formik';

import MyLink from '../../components/Link';
import accountAction from '../../store/actions/accountAction';

interface FormValues {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    email: 'john@example.com',
    password: 'password@123',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          try {
            await dispatch(accountAction.signIn(values.email, values.password));
            navigate('/');
          } catch (error: any) {
            setStatus({ success: false });
            setSubmitting(false);
          }
        }}>
        {({
          handleChange,
          handleSubmit,
          isSubmitting,
          values,
        }: FormikProps<FormValues>) => (
          <form noValidate onSubmit={handleSubmit}>
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
              Sign In
            </Button>
          </form>
        )}
      </Formik>

      <MyLink to="/login/register">Create a account</MyLink>
    </>
  );
};

export default SignIn;
