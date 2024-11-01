import { DIContainer } from "../../presentation/di-container";
import { validateEmail } from "../adapters/validation/validate-email";
import { validatePassword } from "../adapters/validation/validate-password";
import { loginSession } from "../domain/login-session";
import { dataSession } from "../adapters/data-session";
import { encryptValue } from "../adapters/encrypt-value";
import { expiresDateFormatIso, expiresDateLocal } from "../adapters/expires-date";
const container = new DIContainer();

container.registerSingletone(() => validateEmail, "validateEmail");

container.registerSingletone(() => validatePassword, "validatePassword");

container.registerSingletone(() => loginSession, "loginSession");

container.registerSingletone(() => dataSession, "dataSession");

container.registerSingletone(() => expiresDateFormatIso, "expires-format-iso");

container.registerSingletone(() => expiresDateLocal, "expires-local");

container.registerSingletone(() => encryptValue, "encrypt-value");


export { container}