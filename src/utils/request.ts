import axios, { AxiosError } from 'axios';

const request = axios.create();

export const isRequestError = (error: AxiosError) => {
  return !!(error.response && error.response.data);
};

export default request;
