import { nullable, number, object, string } from "valibot";

export const validateSessionStorageSchema = object(
  {
    state: object({
      email: nullable(string()),
      password: nullable(string()),
      expirationDate: nullable(string())
    }),
    version: number()
  }
)