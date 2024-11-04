import { ILoginParams } from "./login-params";

export interface ILoginDataSource {
    get(params?: ILoginParams): Promise<unknown>
}