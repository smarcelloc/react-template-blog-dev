import { Dispatch } from 'redux';

import { NotificationProps } from '../../interfaces';
import request from '../../utils/request';

interface TypeAction {
  readonly GET_NOTIFICATIONS: string;
}

interface RequestProps {
  notifications: NotificationProps[];
}

export interface NotificationsActionProps {
  type: string;
  payload: {
    notifications: NotificationProps[] | null;
  };
}

export const type: TypeAction = {
  GET_NOTIFICATIONS: '@NOTIFICATIONS/GET_NOTIFICATIONS',
};

class NotificationsAction {
  getData = () => {
    return async (dispatch: Dispatch<NotificationsActionProps>) => {
      const response = await request.get<RequestProps>('/api/notifications');

      dispatch({
        type: type.GET_NOTIFICATIONS,
        payload: {
          notifications: response.data.notifications,
        },
      });
    };
  };
}

const notificationsAction = new NotificationsAction();
export default notificationsAction;
