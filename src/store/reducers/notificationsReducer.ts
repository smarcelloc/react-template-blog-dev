import { NotificationsActionProps, type } from '../actions/notificationsAction';

const INITIAL_STATE = {
  notifications: null,
};

const notificationsReducer = (
  state = INITIAL_STATE,
  action: NotificationsActionProps
) => {
  switch (action.type) {
    case type.GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload.notifications,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notificationsReducer;
