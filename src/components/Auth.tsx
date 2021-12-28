import * as React from 'react';
import { useDispatch } from 'react-redux';

import authService from '../services/authService';
import accountAction from '../store/actions/accountAction';

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }: Props) => {
  const dispatch = useDispatch();

  const initAuth = React.useCallback(async () => {
    if (authService.isAuthenticated()) {
      await dispatch(accountAction.setUser());
    }
  }, [dispatch]);

  React.useEffect(() => {
    initAuth();
  }, [initAuth]);

  return <>{children}</>;
};

export default Auth;
