import { LOGIN_FIELD_LENGTH } from "./login-constants";

export const LOGIN_ERROR_MESSAGES = {
    email: {
        required: 'El email es requerido',
        empty: 'El correo no debe de ir vacio',
        invalidFormat: 'Formato invalido.'
    },
    password: {
        required: 'La contraseña es requerida',
        invalidMinLength: `La contraseña debe contener al menos ${LOGIN_FIELD_LENGTH.password.min} caracteres`,
        invalidMaxLength: `La contraseña debe de contener máximo ${LOGIN_FIELD_LENGTH.password.max} caracteres`
    },
};