import { ILogin } from "../domain/entities/login";
import { ILoginDataSource } from "../domain/entities/login-data-source";
import { ILoginParams } from "../domain/entities/login-params";
import { ILoginService } from "../domain/entities/login-service";
import { parseLoginParams } from "../domain/validations/login-validations";

export class LoginService implements ILoginService {
constructor(private readonly dataSource: ILoginDataSource) {}

async get(params?: ILoginParams): Promise<ILogin[]>{
    let parsedParams: ILoginParams;

    if(params){
        parsedParams = parseLoginParams(params);
    }

    const resp = await this.dataSource.get(parsedParams);

    return resp.data;
}

}