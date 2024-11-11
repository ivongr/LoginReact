import { listUsersString } from "../../users/domain/list-users-string";
import { ILoginDataSource } from "../domain/entities/login-data-source";
import { ILoginParams } from "../domain/entities/user-params";

export class LoginStaticDataSource implements ILoginDataSource {
    async get(params?: ILoginParams): Promise<unknown> {
        return { data: listUsersString }
    }
}