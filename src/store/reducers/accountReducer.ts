import { AccountActionProps, type } from '../actions/accountAction';

const INITIAL_STATE = {
  user: null,
};

const accountReducer = (state = INITIAL_STATE, action: AccountActionProps) => {
  switch (action.type) {
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case type.LOGIN_SILENT:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return {
        ...state,
      };
  }
};

export default accountReducer;
