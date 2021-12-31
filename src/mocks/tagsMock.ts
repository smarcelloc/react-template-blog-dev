import mock from '../utils/mock';
import { tags } from './data';

mock.onGet('/api/tags').reply(200, { tags });

mock
  .onGet('/api/tags/top')
  .reply(200, { tags: [tags[0], tags[1], tags[2], tags[3], tags[4]] });
