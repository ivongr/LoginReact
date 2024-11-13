import { IUserCredentials } from "./user-credentials";

export interface ISessionStoreData {
  /*objecto  */
  credentials: IUserCredentials | null;
  expirationDate: Date;
}
export interface ISessionStoreAction{
  sessionData:  (email:string, password:string) => void;
  logout: () => void;
}
export interface ISessionStore extends  ISessionStoreData, ISessionStoreAction {
}
