export const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 16;
  };
  