import mock from '../utils/mock';
import data from './data.json';

const { notifications } = data;

mock.onGet('/api/notifications').reply(200, { notifications });
