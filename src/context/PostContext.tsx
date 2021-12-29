import * as React from 'react';

import { TagsProps } from '../interfaces';

interface PostContextProps {
  image: ArrayBuffer | string | null;
  setImage: React.Dispatch<React.SetStateAction<ArrayBuffer | string | null>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  tags: TagsProps[];
  setTags: React.Dispatch<React.SetStateAction<TagsProps[]>>;
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

interface Props {
  children: React.ReactNode;
}

const PostContext = React.createContext<PostContextProps>({
  image: '',
  setImage: () => {},
  title: '',
  setTitle: () => {},
  tags: [],
  setTags: () => {},
  markdown: '',
  setMarkdown: () => {},
});

const PostProvider: React.FC<Props> = ({ children }: Props) => {
  const [image, setImage] = React.useState<ArrayBuffer | string | null>(null);
  const [title, setTitle] = React.useState<string>('Title');
  const [tags, setTags] = React.useState<TagsProps[]>([]);
  const [markdown, setMarkdown] = React.useState<string>('Hello World !!!');

  return (
    <PostContext.Provider
      value={{
        title,
        setTitle,
        image,
        setImage,
        tags,
        setTags,
        markdown,
        setMarkdown,
      }}>
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => React.useContext(PostContext);

export { PostProvider, usePost };
