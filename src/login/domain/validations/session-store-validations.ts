import { isoTimestamp, object, parse, pipe, string, transform } from 'valibot';

import { ISessionStoreData } from '../entities/session-store-data';


const expirationDateSchema = pipe(
  string(),
  isoTimestamp("formato incorrecto"),
  transform(expirationDate => new Date(expirationDate))
);

export const sessionStoreDataSchema = object({
  credentials: object({
    email: string(),
    password: string(),
  }),
  expirationDate: expirationDateSchema,
});

/*const result = parse(sessionStoreDataSchema,{
  credentials: {
  email: "suki@gmail.com",
  password: "12345"
},
  expirationDate: "2024-11-11T17:32:31.086Z"});
console.log(result);*/


/*Parsear objecto para que no de unknown*/
export function parseSessionStoreData(data: unknown): ISessionStoreData {
  return parse(sessionStoreDataSchema, data);
}
