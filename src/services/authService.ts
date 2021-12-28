import { UserProps } from '../interfaces';
import request from '../utils/request';

interface RequestProps {
  user: UserProps;
}

class AuthService {
  signIn = (email: string, password: string): Promise<RequestProps> => {
    return new Promise((resolve, reject) => {
      request
        .post<RequestProps>('/api/auth', { email, password })
        .then((response) => {
          if (response.data.user) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };
}

const authService = new AuthService();

export default authService;
