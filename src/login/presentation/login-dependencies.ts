import { DIContainer } from '../../shared/infrastructure/di-container';
import { ILoginService } from '../domain/entities/login-service';
import { ILoginDataSource } from '../domain/entities/login-data-source';
import { LoginService } from '../adapters/login-service';



const keys = {
    service: 'service',
    dataSource: 'data-source',
};

const container = new DIContainer();

container.registerSingletone(createLoginService, keys.service)


function createLoginService() {
    const dataSource = container.get<ILoginDataSource>(keys.dataSource);
    return new LoginService(dataSource)
}
 export const loginDependencies = {
  get service(): ILoginService {
    return container.get(keys.service);
  },
}; //get para evitar importar varios archivos 


