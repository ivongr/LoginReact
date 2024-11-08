import { IUserCredentials } from "./login-credentials";

export interface ISessionStoreData {
  /*objecto  */
  credentials: IUserCredentials
  expirationDate: Date;
}
export interface ISessionStoreAction{
  SessionData:  (email:string, password:string) => void;
  logout: () => void;
}
export interface ISessionStore extends  ISessionStoreData, ISessionStoreAction {
}
