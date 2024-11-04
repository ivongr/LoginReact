import { ILogin } from "./login";
import { ILoginParams } from "./login-params";

export interface ILoginService{
    get(params?: ILoginParams): Promise<ILogin[]>;
}