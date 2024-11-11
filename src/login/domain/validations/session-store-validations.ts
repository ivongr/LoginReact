import { date, isoTimestamp, object, parse, pipe, string, transform } from 'valibot';

import { ISessionStoreData } from '../entities/session-store-data';
import { EXPIRATION_DATE_ERROR_MESSAGES, SESSION_ERROR_MESSAGES } from '../constants/session-store-error-messages';


const expirationDateSchema = pipe(
  string(EXPIRATION_DATE_ERROR_MESSAGES.required),
  isoTimestamp(EXPIRATION_DATE_ERROR_MESSAGES.invalidFormat),
  transform(expirationDate => new Date(expirationDate))
);

export const sessionStoreDataSchema = object({
  credentials: object({
    email: string(SESSION_ERROR_MESSAGES.credentials.email.required),
    password: string(SESSION_ERROR_MESSAGES.credentials.password.required),
  }),
  expirationDate: expirationDateSchema,
});

/*const result = parse(sessionStoreDataSchema,{
  credentials: {
  email: "suki@gmail.com",
  password: "12345"
},
  expirationDate: "2024-11-11T18:23:41.581Z"});
console.log(result);*/


export const sessionStoreDataParamsSchema = object({
  credentials: object ({
    email: string(),
    password: string(),
  }),
  expirationDate: date()
});

/*Parsear objecto para que no de unknown*/
export function parseSessionStoreData(data: unknown): ISessionStoreData {
  return parse(sessionStoreDataSchema, data);
}
