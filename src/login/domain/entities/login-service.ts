import { IUserCredentials } from "./user-credentials";
import { IUserParams } from "./user-params";

export interface ILoginService{
    get(params?: IUserParams): Promise<IUserCredentials[]>;
}