import { IUserCredentials } from "./user-credentials";
import { ILoginParams } from "./login-params";

export interface ILoginService{
    get(params?: ILoginParams): Promise<IUserCredentials[]>;
}