
interface usersJsonProps{
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

const usersjson: usersJsonProps[]= [
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
    password: 'mariag2024',
  },
];

let user = JSON.stringify(usersjson);

export const getUsers = () => {
  return new Promise<String>((resolve, reject) => {
    setTimeout(() => {
      try {
        const users = JSON.parse(user);
        resolve(users);
      } catch (error) {
        reject(new Error('Error al cargar los usuarios.'));
      }
    }, 1000);
  });
};
