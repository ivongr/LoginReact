import {  parse } from "valibot";
import { IUser } from "./entities/user";
import { validateUserObjectSchema } from "../validation/validate-user-object-schema";
import { listUsersString } from "./list-users-string";

export function getUsers(): Promise<IUser[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const users = JSON.parse(listUsersString);
        const validatedUsers = users.map((user:any) => parse(validateUserObjectSchema, user));
        resolve(validatedUsers);
      } catch (error) {
     console.log(error)
     }
    }, 1000);
  });
}