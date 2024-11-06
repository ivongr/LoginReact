export interface ISessionStoreAction{
    SessionData:  (email:string, password:string) => void;
    logout: () => void;
  }
  