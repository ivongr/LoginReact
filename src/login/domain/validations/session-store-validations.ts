import { date, email, isoTimestamp, maxLength, minLength, object, parse, pipe, regex, string, transform } from 'valibot';

import { LOGIN_ERROR_MESSAGES } from '../constants/login-error-messages';
import { SESSION_STORE_FIELD_LENGTH, SESSION_STORE_FIELD_REGEX } from '../constants/session-store-constants';
import { EXPIRATION_DATE_ERROR_MESSAGES, SESSION_ERROR_MESSAGES } from '../constants/session-store-error-messages';
import { ISessionStoreData } from '../entities/session-store-data';


const expirationDateSchema = pipe(
  string(EXPIRATION_DATE_ERROR_MESSAGES.required),
  isoTimestamp(EXPIRATION_DATE_ERROR_MESSAGES.invalidFormat),
  transform((expirationDate) => new Date(expirationDate))
);

const expirationDateDateSchema = pipe(
  date(EXPIRATION_DATE_ERROR_MESSAGES.required),
  transform((expirationDate) => new Date(expirationDate))
);

export const sessionStoreDataSchema = object({
  credentials: object({
    email: pipe(string(SESSION_ERROR_MESSAGES.credentials.email.required),
      email(SESSION_ERROR_MESSAGES.credentials.email.invalidFormat)),

    password: pipe(string(SESSION_ERROR_MESSAGES.credentials.password.required),
      minLength(SESSION_STORE_FIELD_LENGTH.password.min, LOGIN_ERROR_MESSAGES.password.invalidMinLength),
      maxLength(SESSION_STORE_FIELD_LENGTH.password.max, LOGIN_ERROR_MESSAGES.password.invalidMaxLength),
      regex(SESSION_STORE_FIELD_REGEX.password.lowercaseLetter, SESSION_ERROR_MESSAGES.credentials.password.lowercaseLetter), 
      regex(SESSION_STORE_FIELD_REGEX.password.uppercaseLetter, SESSION_ERROR_MESSAGES.credentials.password.uppercaseLetter),
      regex(SESSION_STORE_FIELD_REGEX.password.containNumber, SESSION_ERROR_MESSAGES.credentials.password.containNumber),
    )
  }),
  expirationDate: expirationDateDateSchema,
});

const result = parse(sessionStoreDataSchema,{
  credentials: {
  email: "suki@gmail.com",
  password: "12345Mn"
},
  expirationDate: Date.now()});
console.log(result);


/*Parsear objecto para que no de unknown*/
export function parseSessionStoreData(data: unknown): ISessionStoreData {
  return parse(sessionStoreDataSchema, data);
}
