import moment from 'moment';

import { PostProps } from '../interfaces';
import contentMarkdown from './content';

const posts: PostProps[] = [
  {
    id: 1,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: moment().subtract(2, 'hours').toDate().getTime(),
    content: contentMarkdown,
    image:
      'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg',
    author: {
      name: 'Taylor Crus',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Lorem Ipsum is simply dummy text.',
    time: moment().subtract(7, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg',
    author: {
      name: 'Julian Sian',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    },
    tags: ['js', 'nextjs'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 3,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    time: moment().subtract(20, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg',
    author: {
      name: 'Philipe Cunha',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
    },
    tags: ['php', 'laravel'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 4,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: moment().subtract(2, 'hours').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg',
    author: {
      name: 'Taylor Crus',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 5,
    title: 'Lorem Ipsum is simply dummy text.',
    time: moment().subtract(7, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg',
    author: {
      name: 'Julian Sian',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 6,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    time: moment().subtract(20, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg',
    author: {
      name: 'Philipe Cunha',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: true,
    content: contentMarkdown,
  },
  {
    id: 7,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: moment().subtract(2, 'hours').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg',
    author: {
      name: 'Taylor Crus',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 8,
    title: 'Lorem Ipsum is simply dummy text.',
    time: moment().subtract(7, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg',
    author: {
      name: 'Julian Sian',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: true,
    content: contentMarkdown,
  },
  {
    id: 9,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    time: moment().subtract(20, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg',
    author: {
      name: 'Philipe Cunha',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 10,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: moment().subtract(2, 'hours').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg',
    author: {
      name: 'Taylor Crus',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 11,
    title: 'Lorem Ipsum is simply dummy text.',
    time: moment().subtract(7, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg',
    author: {
      name: 'Julian Sian',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 12,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    time: moment().subtract(20, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg',
    author: {
      name: 'Philipe Cunha',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 13,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: moment().subtract(2, 'hours').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg',
    author: {
      name: 'Taylor Crus',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: true,
    content: contentMarkdown,
  },
  {
    id: 14,
    title: 'Lorem Ipsum is simply dummy text.',
    time: moment().subtract(7, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg',
    author: {
      name: 'Julian Sian',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 15,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    time: moment().subtract(20, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg',
    author: {
      name: 'Philipe Cunha',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: true,
    content: contentMarkdown,
  },
  {
    id: 16,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: moment().subtract(2, 'hours').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg',
    author: {
      name: 'Taylor Crus',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: true,
    content: contentMarkdown,
  },
  {
    id: 17,
    title: 'Lorem Ipsum is simply dummy text.',
    time: moment().subtract(7, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg',
    author: {
      name: 'Julian Sian',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 18,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    time: moment().subtract(20, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg',
    author: {
      name: 'Philipe Cunha',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: true,
    content: contentMarkdown,
  },
  {
    id: 19,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: moment().subtract(2, 'hours').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg',
    author: {
      name: 'Taylor Crus',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
  {
    id: 20,
    title: 'Lorem Ipsum is simply dummy text.',
    time: moment().subtract(7, 'days').toDate().getTime(),
    image:
      'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg',
    author: {
      name: 'Julian Sian',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    },
    tags: ['react', 'nextjs', 'material-ui'],
    isFavorite: false,
    content: contentMarkdown,
  },
];

export default posts;
