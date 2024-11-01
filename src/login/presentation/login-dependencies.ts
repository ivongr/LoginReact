import { DIContainer } from "../../presentation/di-container";
import { validateEmail } from "../domain/validation/validate-email";
import { validatePassword } from "../domain/validation/validate-password";
import { loginSession } from "../domain/session-login";
import { dataSession } from "../domain/data-session";
import { encryptValue } from "../domain/encrypt-value";
import { expiresDateFormatIso, expiresDateLocal } from "../domain/expires-date";

const container = new DIContainer();

container.registerSingletone(() => validateEmail, "validateEmail");

container.registerSingletone(() => validatePassword, "validatePassword");

container.registerSingletone(() => loginSession, "loginSession");

container.registerSingletone(() => dataSession, "dataSession");

container.registerSingletone(() => expiresDateFormatIso, "expires-format-iso");

container.registerSingletone(() => expiresDateLocal, "expires-local");

container.registerSingletone(() => encryptValue, "encrypt-value");


export { container}