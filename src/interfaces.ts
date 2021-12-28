export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  password?: string;
  avatar?: string;
  joinedIn?: string;
  work?: string;
  totalPost?: number;
}

export interface TagsProps {
  id: number;
  title: string;
}

export interface PostProps {
  id: number;
  title: string;
  time: number;
  content?: string;
  image: string;
  author: Pick<UserProps, 'name' | 'avatar'>;
  tags?: Array<TagsProps>;
  isFavorite: boolean;
}

export interface NotificationProps {
  id: string;
  title: string;
  description: string;
  type: string;
  createdAt: number;
}

export interface FollowerProps {
  id: number;
  user: UserProps;
  following: boolean;
}
