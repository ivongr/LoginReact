import { date, object, parse, string } from 'valibot';

import { ISessionStoreData } from '../entities/login-session-Store-Data';

export const sessionStoreDataSchema = object({
  email: string(),
  password: string(),
  expirationDate: date(),
});

/*Parsear objecto para que no de unknown*/
export function parseSessionStoreData(data: unknown): ISessionStoreData {
  return parse(sessionStoreDataSchema, data);
}
