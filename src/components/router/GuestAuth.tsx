import * as React from 'react';
import { Navigate, NavigateProps } from 'react-router-dom';

import authService from '../../services/authService';

interface Props extends NavigateProps {
  children: React.ReactNode;
}

const GuestAuth: React.FC<Props> = ({ children, ...rest }: Props) => {
  const isAuth = authService.isAuthenticated();

  if (isAuth) {
    return <Navigate {...rest} />;
  }

  return <>{children}</>;
};

export default GuestAuth;
