import { IUserParams } from "./user-params";

export interface ILoginDataSource {
    get(params?: IUserParams): Promise<unknown>
}