import { IUserCredentials } from "./login-credentials";
import { ISessionStoreAction } from "./login-session-store-Action";
import { ISessionStoreData } from "./login-session-Store-Data";

export interface ISessionStore extends IUserCredentials, ISessionStoreData, ISessionStoreAction {}

