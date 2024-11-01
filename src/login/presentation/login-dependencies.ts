import { DIContainer } from '../../infrastructure/di-container';
import { validateEmail } from '../domain/validations/validate-email';
import { validatePassword } from '../domain/validations/validate-password';
import { loginSession } from '../domain/session-login';
import { dataSession } from '../../domain/data-session';
import { encryptValue } from '../../domain/encrypt-value';
import { expiresDateFormatIso, expiresDateLocal } from '../domain/expires-date';

const container = new DIContainer();

const keys = {validateEmail:'validateEmail',
    validatePassword:'validatePassword',
    loginSession:'loginSession',
    dataSession:'dataSession',
    expiresDateFormatIso:'expires-format-iso',
    expiresDateLocal:'expires-local',
    encryptValue: 'encrypt-value'
};

container.registerSingletone(() => validateEmail, keys.validateEmail);

container.registerSingletone(() => validatePassword, keys.validatePassword);

container.registerSingletone(() => loginSession, keys.loginSession);

container.registerSingletone(() => dataSession, keys.dataSession);

container.registerSingletone(() => expiresDateFormatIso, keys.expiresDateFormatIso);

container.registerSingletone(() => expiresDateLocal, keys.expiresDateLocal);

container.registerSingletone(() => encryptValue, keys.encryptValue);

export { container};

// export const loginDependencies = {
//   get service(): ILoginService {
//     return container.get(keys.service);
//   },
// }; //get para evitar importar varios archivos 
