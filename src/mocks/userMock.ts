import mock from '../utils/mock';
import { posts, userCurrent as user } from './data';

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

mock.onGet('/api/user/posts').reply((req) => {
  const user_id = parseInt(req.params.user_id);

  if (user_id <= 0) {
    return [
      400,
      {
        message: 'User not found! Check if your email or password is correct.',
      },
    ];
  }

  //posts.find(post => post.author.username)

  return [200, { posts: [posts[1], posts[3], posts[5]] }];
});
