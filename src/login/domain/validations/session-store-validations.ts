import { nullable, object, parse, string } from 'valibot';
import { ISessionStoreData } from '../entities/login-session-Store-Data';

export const sessionStoreDataSchema = object({
  email: nullable(string()),
  password: nullable(string()),
  expirationDate: nullable(string()),
});

export function parseSessionStoreData(data: unknown): ISessionStoreData {
  return parse(sessionStoreDataSchema, data);
}
