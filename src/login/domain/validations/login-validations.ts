import { array, email, maxLength, minLength, nonEmpty, object, parse, pipe, string } from 'valibot';

import { LOGIN_FIELD_LENGTH } from '../constants/login-constants';
import { LOGIN_ERROR_MESSAGES } from '../constants/login-error-messages';
import { ILoginResponse } from '../entities/login-response';
import { IUserCredentials } from '../entities/user-credentials';
import { IUserParams } from '../entities/user-params';

export const userCredentialsSchema = object({
  email: pipe(
    string(LOGIN_ERROR_MESSAGES.email.required),
    nonEmpty(LOGIN_ERROR_MESSAGES.email.empty),
    email(LOGIN_ERROR_MESSAGES.email.invalidFormat)
  ),
  password: pipe(
    string(LOGIN_ERROR_MESSAGES.password.required),
    minLength(LOGIN_FIELD_LENGTH.password.min, LOGIN_ERROR_MESSAGES.password.invalidMinLength),
    maxLength(LOGIN_FIELD_LENGTH.password.max, LOGIN_ERROR_MESSAGES.password.invalidMaxLength)
  ),
});

export const userParamsSchema = object({
  email: string(),
  password: string(),
});

export const  userResponseSchema = object({
  data: array(userCredentialsSchema),
});

export function parseUserCredentials(data: unknown): IUserCredentials {
  return parse(userCredentialsSchema, data);
}

export function parseUserParams(data: unknown): IUserParams {
  return parse(userParamsSchema, data);
}

export function parseUserResponse(data: unknown): ILoginResponse {
  return parse(userResponseSchema, data);
}
