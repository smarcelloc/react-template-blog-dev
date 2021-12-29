import { RootState } from '.';

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
