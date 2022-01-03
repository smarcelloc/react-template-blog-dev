import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PostView from '../../components/PostView';
import { PostProps } from '../../entities';
import request from '../../utils/request';

interface RequestProps {
  post: PostProps;
}

const PostShow: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [post, setPost] = React.useState<PostProps | null>(null);

  const getPost = React.useCallback(async () => {
    try {
      const response = await request.get<RequestProps>('/api/post', { params });
      setPost(response.data.post);
    } catch (error: any) {
      navigate('/404');
    }
  }, [setPost, params, navigate]);

  React.useEffect(() => {
    getPost();
  }, [getPost]);

  return post && <PostView post={post} />;
};

export default PostShow;
