import mock from '../utils/mock';
import posts from './postData';

mock.onGet('/api/posts').reply(200, { posts });

mock.onGet('/api/post').reply((request) => {
  const { id } = request.params;

  if (Number.isInteger(id) || id < 0) {
    return [400, { message: 'This post was not found' }];
  }

  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    return [400, { message: 'This post was not found' }];
  }

  return [200, { post }];
});
