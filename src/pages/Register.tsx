import * as React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Register: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <form>
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
          value={name}
          onChange={(event) => setName(event.target.value)}
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

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          required
          type="password"
          margin="normal"
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          sx={{ marginY: 3 }}
          onClick={handleSubmit}>
          Register
        </Button>
      </form>

      <Link to="/login">Back to Login</Link>
    </>
  );
};

export default Register;
