import { date, email, isoTimestamp, maxLength, minLength, nullable, object, parse, pipe, regex, string, transform, union } from 'valibot';
import { LOGIN_ERROR_MESSAGES } from '../constants/login-error-messages';
import { SESSION_STORE_FIELD_LENGTH, SESSION_STORE_FIELD_REGEX } from '../constants/session-store-constants';
import { EXPIRATION_DATE_ISO_ERROR_MESSAGES, SESSION_ERROR_MESSAGES } from '../constants/session-store-error-messages';
import { ISessionStoreData } from '../entities/session-store-data';

const validateDateIsoSchema = union([
  date(EXPIRATION_DATE_ISO_ERROR_MESSAGES.invalidFormaDate),
  pipe(string(EXPIRATION_DATE_ISO_ERROR_MESSAGES.required), isoTimestamp(EXPIRATION_DATE_ISO_ERROR_MESSAGES.invalidFormaIso))
]);

const expirationDateSchema = pipe(
  validateDateIsoSchema,
  transform((expirationDate) => new Date(expirationDate))
);

const credentialsSchema = nullable(
  object({
    email: pipe(
      string(SESSION_ERROR_MESSAGES.credentials.email.required),
      email(SESSION_ERROR_MESSAGES.credentials.email.invalidFormat)
    ),
    password: pipe(
      string(SESSION_ERROR_MESSAGES.credentials.password.required),
      minLength(SESSION_STORE_FIELD_LENGTH.password.min, LOGIN_ERROR_MESSAGES.password.invalidMinLength),
      maxLength(SESSION_STORE_FIELD_LENGTH.password.max, LOGIN_ERROR_MESSAGES.password.invalidMaxLength),
      regex(SESSION_STORE_FIELD_REGEX.password.lowercaseLetter, SESSION_ERROR_MESSAGES.credentials.password.lowercaseLetter),
      regex(SESSION_STORE_FIELD_REGEX.password.uppercaseLetter, SESSION_ERROR_MESSAGES.credentials.password.uppercaseLetter),
      regex(SESSION_STORE_FIELD_REGEX.password.containNumber, SESSION_ERROR_MESSAGES.credentials.password.containNumber),
      regex(SESSION_STORE_FIELD_REGEX.password.consecutiveCharacters, SESSION_ERROR_MESSAGES.credentials.password.consecutiveCharacters),
    )
  }),
  null 
);

const sessionStoreDataSchema = object({
  credentials: credentialsSchema,
  expirationDate: expirationDateSchema,
});

const result = parse(sessionStoreDataSchema, {
  credentials: null,
  expirationDate: new Date(),
});

console.log(result);

/* Parsear objeto para que no de unknown */
export function parseSessionStoreData(data: unknown): ISessionStoreData {
  return parse(sessionStoreDataSchema, data);
}

