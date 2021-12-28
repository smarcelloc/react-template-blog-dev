import { Dispatch } from 'redux';

import { UserProps } from '../../interfaces';
import authService from '../../services/authService';

interface TypeAction {
  readonly LOGIN_SUCCESS: string;
}

export interface AccountActionProps {
  type: string;
  payload: {
    user: UserProps | null;
  };
}

export const type: TypeAction = {
  LOGIN_SUCCESS: '@ACCOUNT/LOGIN_SUCCESS',
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
}

const accountAction = new AccountAction();
export default accountAction;
