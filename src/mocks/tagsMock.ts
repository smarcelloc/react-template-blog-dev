import { TagsProps } from '../interfaces';
import mock from '../utils/mock';

const tags: TagsProps[] = [
  {
    id: 1,
    title: 'react-js',
  },
  {
    id: 2,
    title: 'node',
  },
  {
    id: 3,
    title: 'next-js',
  },
  {
    id: 4,
    title: 'js',
  },
  {
    id: 5,
    title: 'material-ui',
  },
  {
    id: 6,
    title: 'postgresql',
  },
  {
    id: 7,
    title: 'php',
  },
  {
    id: 8,
    title: 'mysql',
  },
  {
    id: 9,
    title: 'mongodb',
  },
  {
    id: 10,
    title: 'sql',
  },
];

mock.onGet('/api/tags').reply(200, { tags });

mock
  .onGet('/api/tags/top')
  .reply(200, { tags: [tags[0], tags[1], tags[2], tags[3], tags[4]] });
