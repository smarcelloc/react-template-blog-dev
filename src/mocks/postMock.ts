import mock from '../utils/mock';
import posts from './postData';

mock.onGet('/api/posts').reply(200, { posts });
