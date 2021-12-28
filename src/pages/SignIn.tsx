import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('john@example.com');
  const [password, setPassword] = React.useState('password@123');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <>
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

      <Link to="/login/register">Create a account</Link>
    </>
  );
};

export default SignIn;
