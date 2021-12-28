import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import Header from '../components/Header';
import Page404 from './404';
import Feeds from './Feeds';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Box my={4}>
        <Routes>
          <Route path="/" element={<Feeds />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Box>
    </>
  );
};

export default Home;
