import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import request from './utils/request';

import './mocks';

const App: React.FC = () => {
  request.get('/api/test').then((response) => {
    console.log(response.data);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
