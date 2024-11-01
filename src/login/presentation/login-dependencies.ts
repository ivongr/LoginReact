import { DIContainer } from "../../presentation/dependencies";
import { validateEmail } from "../adapters/validation/validate-email";
import { validatePassword } from "../adapters/validation/validate-password";
import { loginSession } from "../domain/login-session";
import { dataSession } from "../adapters/data-session";

const container = new DIContainer();

container.registerSingletone(() => validateEmail, "validateEmail");

container.registerSingletone(() => validatePassword, "validatePassword");

container.registerSingletone(() => loginSession, "loginSession");

container.registerSingletone(() => dataSession, "dataSession");

export { container}