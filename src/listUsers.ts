const usersjson:string = JSON.stringify([
    {
        "name": "Suki Zukaritas",
        "age": 5,
        "address": {
            "city": "Mtz",
            "state": "Ver",
            "zip": 4558
        },
        "email": "suki@gmail.com",
        "password": "12345"
    },
    {
        "name": "Sandra Lopez",
        "age": 25,
        "address": {
            "city": "Xalapa",
            "state": "Ver",
            "zip": 2545
        },
        "email": "sandra@gmail.com",
        "password": "s123andr@"
    },
    {
        "name": "Carlos Pérez",
        "age": 30,
        "address": {
            "city": "Veracruz",
            "state": "Ver",
            "zip": 91500
        },
        "email": "carlos.perez@gmail.com",
        "password": "carlosp123"
    },
    {
        "name": "María González",
        "age": 28,
        "address": {
            "city": "Coatepec",
            "state": "Ver",
            "zip": 91000
        },
        "email": "maria.gonzalez@gmail.com",
        "password": "mariag2024"
    }
]);


export const listUsers = ():Promise<string> => {
  return new Promise((resolve, reject)  => {
    setTimeout(() => {
      try {
        const users = JSON.parse(usersjson);
        resolve(users);
      } catch (error) {
        reject(new Error("Error al cargar los usuarios."));
      }
    }, 1000);
  });
};
