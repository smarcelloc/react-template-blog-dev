import { UserProps } from '../interfaces';
import mock from '../utils/mock';

const user: UserProps = {
  id: 1,
  name: 'John Joe',
  username: 'johnjoe12',
  email: 'john@example.com',
  password: 'password@123',
  avatar: 'https://mui.com/static/images/avatar/1.jpg',
  joinedIn: '06 de jan, 2020',
  work: 'Software developer',
  totalPost: 30,
};

mock.onPost('/api/auth').reply((req) => {
  const { email, password } = JSON.parse(req.data);

  if (user.email !== email || user.password !== password) {
    return [
      400,
      {
        message: 'User not found! Check if your email or password is correct.',
      },
    ];
  }

  return [200, { user }];
});

mock.onPost('/api/auth/token').reply(200, { user });
