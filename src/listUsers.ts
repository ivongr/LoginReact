import * as v from "valibot";
export interface User {
  name: string,
  age: number,
  address: {
    city: string,
    state: string,
    zip: number
  },
  email: string,
  password: string,

}

const userString = JSON.stringify([
  {
    name: 'Suki Zukaritas',
    age: 5,
    address: {
      city: 'Mtz',
      state: 'Ver',
      zip: 4558,
    },
    email: 'suki@gmail.com',
    password: '12345',
  },
  {
    name: 'Sandra Lopez',
    age: 25,
    address: {
      city: 'Xalapa',
      state: 'Ver',
      zip: 2545,
    },
    email: 'sandra@gmail.com',
    password: 's123andr@',
  },
  {
    name: 'Carlos Pérez',
    age: 30,
    address: {
      city: 'Veracruz',
      state: 'Ver',
      zip: 91500,
    },
    email: 'carlos.perez@gmail.com',
    password: 'carlosp123',
  },
  {
    name: 'María González',
    age: 28,
    address: {
      city: 'Coatepec',
      state: 'Ver',
      zip: 91000,
    },
    email: 'maria.gonzalez@gmail.com',
    password: '12345p'
  },
]);


export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const UserPromiseSchema = v.pipeAsync(
          v.promise(), v.awaitAsync(),
          v.undefined(), v.any(), v.unknown());

        const users = JSON.parse(userString);

        resolve(users);
      } catch (error) {
        console.error(error);
      }
    }, 1000);
  });
}