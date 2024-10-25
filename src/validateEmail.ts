export const validateEmail = (email:string): boolean => {
    const format = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return format.test(email);
  };
  