import { Dispatch } from 'redux';

import { UserProps } from '../../entities';
import authService from '../../services/authService';

interface TypeAction {
  readonly LOGIN_SUCCESS: string;
  readonly LOGIN_SILENT: string;
  readonly SIGN_OUT: string;
}

export interface AccountActionProps {
  type: string;
  payload: {
    user: UserProps | null;
  };
}

export const type: TypeAction = {
  LOGIN_SUCCESS: '@ACCOUNT/LOGIN_SUCCESS',
  LOGIN_SILENT: '@ACCOUNT/LOGIN_SILENT',
  SIGN_OUT: '@ACCOUNT/SIGN_OUT',
};

class AccountAction {
  signIn = (email: string, password: string) => {
    return async (dispatch: Dispatch<AccountActionProps>) => {
      const data = await authService.signIn(email, password);

      dispatch({
        type: type.LOGIN_SUCCESS,
        payload: {
          user: data.user,
        },
      });
    };
  };

  setUser = () => {
    return async (dispatch: Dispatch<AccountActionProps>) => {
      const data = await authService.signInWithToken();

      dispatch({
        type: type.LOGIN_SILENT,
        payload: {
          user: data.user,
        },
      });
    };
  };

  signOut = () => {
    return async (dispatch: Dispatch<AccountActionProps>) => {
      await authService.signOut();

      dispatch({
        type: type.SIGN_OUT,
        payload: {
          user: null,
        },
      });
    };
  };
}

const accountAction = new AccountAction();
export default accountAction;
