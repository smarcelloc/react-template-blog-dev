export interface UserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  avatar?: string;
  bio?: string;
  joinedIn?: number;
  work?: string;
  totalPost?: number;
}

export interface TagsProps {
  id: string;
  title: string;
}

export interface PostProps {
  id: string;
  title: string;
  time: number;
  content?: string;
  image: string;
  author: UserProps;
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

export interface SettingsProps {
  darkMode: boolean;
}
