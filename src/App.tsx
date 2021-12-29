import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RequireAuth from './components/router/RequireAuth';
import ScrollToTop from './components/router/ScrollToTop';
import Home from './pages/Home';
import Login from './pages/Login';

import './mocks';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="/login/*"
          element={
            <RequireAuth to="/">
              <Login />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
