import { UserProps } from '../interfaces';
import request from '../utils/request';

interface RequestProps {
  user: UserProps;
}

const ACCESS_TOKEN = 'accessToken';

class AuthService {
  signIn = (email: string, password: string): Promise<RequestProps> => {
    return new Promise((resolve, reject) => {
      request
        .post<RequestProps>('/api/auth', { email, password })
        .then((response) => {
          if (response.data.user) {
            this.setToken('JWT');
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  signInWithToken = (): Promise<RequestProps> => {
    return new Promise((resolve, reject) => {
      request
        .post<RequestProps>('/api/auth/token')
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  };

  isAuthenticated = () => {
    return !!this.getToken();
  };

  setToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
  };

  getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
  };
}

const authService = new AuthService();

export default authService;
