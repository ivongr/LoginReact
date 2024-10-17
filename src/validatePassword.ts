export const validatePassword = (password:string):boolean=> {
    return password.length >= 4 && password.length <= 16;
  };
  