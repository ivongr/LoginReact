import { FormEvent } from 'react';
interface ILoginParams {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export { ILoginParams}
