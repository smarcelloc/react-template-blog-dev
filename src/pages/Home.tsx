import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';

import Header from '../components/Header';
import NewPostFab from '../components/NewPostFab';
import RequireAuth from '../components/router/RequireAuth';
import Page404 from './404';
import Feeds from './Feeds';
import PostNew from './Post/New';
import PostShow from './Post/Show';
import Profile from './Profile';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Box my={4}>
        <Routes>
          <Route path="/" element={<Feeds />} />
          <Route
            path="/post/new"
            element={
              <RequireAuth to="/404">
                <PostNew />
              </RequireAuth>
            }
          />
          <Route path="/post/:id" element={<PostShow />} />
          <Route
            path="/profile"
            element={
              <RequireAuth to="/404">
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Box>
      <Hidden smUp>
        <NewPostFab />
      </Hidden>
    </>
  );
};

export default Home;
