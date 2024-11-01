import { number, object,string } from "valibot";

const validateUserObjectSchema = object({
    name: string(),
    age: number(),
    address: object({
      city: string(),
      state: string(),
      zip: number(),
    }),
    email: string(),
    password: string(),
  })

export {validateUserObjectSchema};