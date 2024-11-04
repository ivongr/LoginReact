import { array, email, maxLength, minLength, nonEmpty, object, parse, pipe, string } from "valibot";
import { ILogin } from "../entities/login";
import { ILoginParams } from "../entities/login-params";
import { ILoginResponse } from "../entities/login-response";

export const loginSchema = object({
    email: pipe(
        string(),
        nonEmpty("Por favor, ingresa tu email."),
        email("Formato inválido")
    ),
    password: pipe(
        string(),
        minLength(4, "Tu contraseña es muy corta."),
        maxLength(16, "Tu contraseña es muy larga.")
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
