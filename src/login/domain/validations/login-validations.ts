import { array, email, maxLength, minLength, nonEmpty, object, parse, pipe, string } from "valibot";
import { ILogin } from "../entities/login";
import { ILoginParams } from "../entities/login-params";
import { ILoginResponse } from "../entities/login-response";
import { LOGIN_ERROR_MESSAGES } from "../constants/login-error-messages";
import { LOGIN_FIELD_LENGTH } from "../constants/login-constants";

export const loginSchema = object({
    email: pipe(
        string(LOGIN_ERROR_MESSAGES.email.required),
        nonEmpty(LOGIN_ERROR_MESSAGES.email.empty),
        email(LOGIN_ERROR_MESSAGES.email.invalidFormat)
    ),
    password: pipe(
        string(LOGIN_ERROR_MESSAGES.password.required),
        minLength(LOGIN_FIELD_LENGTH.password.min, LOGIN_ERROR_MESSAGES.password.invalidMinLength),
        maxLength(LOGIN_FIELD_LENGTH.password.max, LOGIN_ERROR_MESSAGES.password.invalidMaxLength)
    )
});

export const loginParamsSchema = object({
    email: string(),
    password: string(),
});

export const loginResponseSchema = object({
    data: array(loginSchema),
});

export function parseLogin(data: unknown): ILogin {
    return parse(loginSchema, data);
}

export function parseLoginParams(data: unknown): ILoginParams {
    return parse(loginParamsSchema, data);
}

export function parseLoginResponse(data: unknown): ILoginResponse {
    return parse(loginResponseSchema, data);
}
