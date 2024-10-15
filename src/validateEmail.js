export const validateEmail = (email) => {
    const format = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return format.test(email);
  };
  