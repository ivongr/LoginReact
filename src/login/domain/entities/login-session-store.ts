import { IUserCredentials } from './login-credentials';
import { ISessionStoreAction } from './login-session-store-Action';
import { ISessionStoreData } from './login-session-Store-Data';

export interface ISessionStore extends IUserCredentials, ISessionStoreData, ISessionStoreAction {}

const store: ISessionStore = {
  email: '',
  password: '',
  expirationDate: null,
  SessionData: function (email: string, password: string): void {
    throw new Error('Function not implemented.');
  },
  logout: function (): void {
    throw new Error('Function not implemented.');
  },
};
