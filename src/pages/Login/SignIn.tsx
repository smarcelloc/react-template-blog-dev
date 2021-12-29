import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import MyLink from '../../components/Link';
import accountAction from '../../store/actions/accountAction';
import { isRequestError } from '../../utils/request';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('john@example.com');
  const [password, setPassword] = React.useState('password@123');
  const [messageError, setMessageError] = React.useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      await dispatch(accountAction.signIn(email, password));
      navigate('/');
    } catch (error: any) {
      if (isRequestError(error)) {
        setMessageError(error.response.data.message);
      } else {
        setMessageError(error.message);
      }
    }
  };

  return (
    <>
      <Typography color="error.main">{messageError}</Typography>
      <form>
        <TextField
          id="email"
          name="email"
          autoComplete="email"
          label="Email"
          variant="outlined"
          fullWidth
          autoFocus
          required
          type="email"
          margin="normal"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
          sx={{ marginY: 3 }}
          onClick={handleSubmit}>
          Sign In
        </Button>
      </form>

      <MyLink to="/login/register">Create a account</MyLink>
    </>
  );
};

export default SignIn;
