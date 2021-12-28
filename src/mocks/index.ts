import mock from '../utils/mock';

mock.onGet('/api/test').reply(200, { message: 'Hello World' });
