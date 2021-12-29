import moment from 'moment';

import { NotificationProps } from '../interfaces';
import mock from '../utils/mock';

const notifications: NotificationProps[] = [
  {
    id: '5e8883f1b51cc1956a5a1ec0',
    title: 'New ratings received',
    description: 'You received 1 new review',
    type: 'reviews',
    createdAt: moment().subtract(2, 'hours').toDate().getTime(),
  },
  {
    id: '5e8883f7ed1486d665d8be1e',
    title: 'New comments received',
    description: 'You received 1 new comment',
    type: 'new_comment',
    createdAt: moment().subtract(1, 'day').toDate().getTime(),
  },
  {
    id: '5e8883fca0e8612044248ecf',
    title: 'New likes received',
    description: 'You received 1 new like',
    type: 'like',
    createdAt: moment().subtract(3, 'days').toDate().getTime(),
  },
  {
    id: '5e8883fca0e8612044248ecf',
    title: 'New followers',
    description: '2 devs started following you',
    type: 'connection',
    createdAt: moment().subtract(3, 'days').toDate().getTime(),
  },
];

mock.onGet('/api/notifications').reply(200, { notifications });
