import { IPost } from '../types/post';
import { IStory } from '../types/user';

export const postsData: IPost[] = [
  {
    _id: '1',
    user: {
      _id: '1',
      username: 'Thabo',
      fullname: 'Thabo Morele ',
      dp: 'https://random.imagecdn.app/500/200',
    },
    caption: 'Monday Vibe',
    image: 'https://random.imagecdn.app/1920/1080',
    likes: 300,
    comments: 8,
    shares: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    user: {
      _id: '1',
      fullname: 'Lerato Thabethe',
      username: 'Lerato',
      dp: 'https://random.imagecdn.app/500/200',
    },
    caption: 'What a beauty.',
    image: 'https://random.imagecdn.app/1920/1070',
    likes: 503,
    comments: 20,
    shares: 19,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '3',
    user: {
      _id: '1',
      fullname: 'Leeto Maputla',
      username: 'Leeto',
      dp: 'https://random.imagecdn.app/500/200',
    },
    caption: 'Monday!!!',
    image: 'https://random.imagecdn.app/1920/1060',
    likes: 223,
    comments: 9,
    shares: 30,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '4',
    user: {
      _id: '1',
      fullname: 'Koki Chiloane',
      username: 'Koki',
      dp: 'https://random.imagecdn.app/500/200',
    },
    caption: 'Whool',
    image: 'https://random.imagecdn.app/1920/1050',
    likes: 332,
    comments:111,
    shares: 23,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const storiesData: IStory[] = [
  {
    _id: '1',
    image: 'https://random.imagecdn.app/200/300',
    user: {
      _id: '1',
      fullname: 'Thapelo',
      dp: 'https://random.imagecdn.app/100/100',
    },
    createdAt: new Date(),
  },
  {
    _id: '2',
    image: 'https://random.imagecdn.app/200/400',
    user: {
      _id: '1',
      fullname: 'Koki',
      dp: 'https://random.imagecdn.app/200/200',
    },
    createdAt: new Date(),
  },
  {
    _id: '4',
    image: 'https://random.imagecdn.app/200/700',
    user: {
      _id: '1',
      fullname: 'Owen',
      dp: 'https://random.imagecdn.app/200/150',
    },
    createdAt: new Date(),
  },
  {
    _id: '5',
    image: 'https://random.imagecdn.app/200/250',
    user: {
      _id: '1',
      fullname: 'Collen',
      dp: 'https://random.imagecdn.app/200/200',
    },
    createdAt: new Date(),
  },
];
