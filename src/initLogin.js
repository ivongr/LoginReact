import { listUsers } from './listUsers';
import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';
import { dataSession } from './dataSession';
import { showAlert } from "./showAlert"
import { useState } from "react";

const [showAlert,setShowAlert] = useState(false);

export async function initLogin(email, password) {
  if (!validateEmail(email)) {
    showAlert('El correo electrónico no es válido');
    return false;
  }
  if (!validatePassword(password)) {
    showAlert('La contraseña debe tener al menos 4 caracteres y máximo 16');
    return false;
  }

  try {
    const users = await listUsers();
    const user = users.find(user => user.email === email.toLowerCase() && user.password === password);

    if (user) {
      await dataSession(email, password);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    alert(error.message);
    return false;
  }
}
