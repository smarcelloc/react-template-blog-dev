import faker from 'faker';
import moment from 'moment';

import {
  NotificationProps,
  PostProps,
  TagsProps,
  UserProps,
} from '../interfaces';
import contentMarkdown from './content';

const maxGenerate = {
  users: 4,
  tags: 10,
  posts: 30,
};

const imageAvatar = [
  require('../assets/img/avatar/01.jpg'),
  require('../assets/img/avatar/02.jpg'),
  require('../assets/img/avatar/03.jpg'),
  require('../assets/img/avatar/04.jpg'),
];
const imagePost = [
  require('../assets/img/post/01.webp'),
  require('../assets/img/post/02.webp'),
  require('../assets/img/post/03.webp'),
  require('../assets/img/post/04.webp'),
  require('../assets/img/post/05.webp'),
];

const users: UserProps[] = [];

const userCurrent: UserProps = {
  id: 1,
  name: 'John Joe',
  username: 'johnjoe12',
  email: 'john@example.com',
  password: 'password@123',
  avatar: imageAvatar[0],
  joinedIn: '06 de jan, 2020',
  work: 'Software developer',
  totalPost: 30,
};

users.push(userCurrent);

for (let i = 0; i < maxGenerate.users; i++) {
  const user: UserProps = {
    id: 2 + i,
    name: faker.name.findName(),
    username: faker.unique(faker.internet.userName),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    avatar: imageAvatar[1 + i] ?? '',
    joinedIn: faker.date.between('2018-01-01', '2021-01-05'),
    work: faker.company.companyName(),
    totalPost: faker.datatype.number({ min: 1, max: 100 }),
  };

  users.push(user);
}

const tags: TagsProps[] = [];
for (let i = 1; i < maxGenerate.tags; i++) {
  const tag: TagsProps = {
    id: i,
    title: faker.unique(faker.git.branch),
  };

  tags.push(tag);
}

const posts: PostProps[] = [];
for (let i = 1; i < maxGenerate.posts; i++) {
  //const postTags: TagsProps[] = [];

  // for (
  //   let i = 0;
  //   i < faker.datatype.number({ min: 1, max: maxGenerate.tags });
  //   i++
  // ) {
  //   const tag =
  //     tags[
  //       faker.datatype.number({
  //         min: 0,
  //         max: maxGenerate.tags,
  //       })
  //     ];

  //   postTags.push(tag);
  // }

  const post: PostProps = {
    id: i,
    title: faker.lorem.sentences(2),
    image:
      imagePost[faker.datatype.number({ min: 0, max: imagePost.length - 1 })],
    content: contentMarkdown,
    author: users[faker.datatype.number({ min: 0, max: maxGenerate.users })],
    time: moment()
      .subtract(faker.datatype.number({ min: 1, max: 370 }), 'days')
      .toDate()
      .getTime(),
    isFavorite: faker.datatype.boolean(),
    tags: [],
  };

  posts.push(post);
}

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
    id: '5e8883fca4e8612045278ecf',
    title: 'New followers',
    description: '2 devs started following you',
    type: 'connection',
    createdAt: moment().subtract(3, 'days').toDate().getTime(),
  },
];

export { users, notifications, tags, posts, userCurrent };
