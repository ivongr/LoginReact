import {  date, number, object,string } from "valibot";

export const validateSessionStorageSchema = object({
    email: string(),
    password: string(),
    date: string(),
    version: number(),
  })