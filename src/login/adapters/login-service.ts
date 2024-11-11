import { IUserCredentials} from "../domain/entities/user-credentials";
import { ILoginDataSource } from "../domain/entities/login-data-source";
import { IUserParams } from "../domain/entities/user-params";
import { ILoginService } from "../domain/entities/login-service";
import { parseUserParams, parseUserResponse } from "../domain/validations/login-validations";

export class LoginService implements ILoginService {
constructor(private readonly dataSource: ILoginDataSource) {}

async get(params?: IUserParams): Promise<IUserCredentials[]>{
    let parsedParams: IUserParams;

    if(params){
        parsedParams = parseUserParams(params);
    }

    const resp = await this.dataSource.get(parsedParams);
    const parsedResp = parseUserResponse(resp)

    return parsedResp.data;
}

}