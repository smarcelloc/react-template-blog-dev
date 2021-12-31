import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import HideOnScroll from './transitions/HideOnScroll';

const MyFab = styled(Fab)({
  position: 'fixed',
  bottom: 20,
  right: 20,
});

const NewPostFab: React.FC = () => {
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/post/new');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      {pathname !== '/post/new' && (
        <HideOnScroll appear={false} direction="up">
          <MyFab
            onClick={handleClick}
            color="primary"
            aria-label="add new post">
            <AddIcon />
          </MyFab>
        </HideOnScroll>
      )}
    </>
  );
};

export default NewPostFab;
