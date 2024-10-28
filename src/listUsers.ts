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

const UserObjectSchema = v.object({
  name: v.string(),
  age: v.number(),
  address: v.object({
    city: v.string(),
    state: v.string(),
    zip: v.number(),
  }),
  email: v.string(),
  password: v.string(),
})

export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const users = JSON.parse(userString);
        const validateUser = v.parse(UserObjectSchema,users)
        resolve(users);
      } catch (error) {
     console.log(error)
     }
    }, 1000);
  });
}