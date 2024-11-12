import { SESSION_STORE_FIELD_LENGTH } from "./session-store-constants"

const EXPIRATION_DATE_ERROR_MESSAGES = {
    required: 'Fecha requerida',
    invalidFormat: 'Formato incorrecto'
}



const SESSION_ERROR_MESSAGES = {

    credentials: {
        email: {
            required: 'El email es requerido',
            invalidFormat: 'Formato invalido.'
        },
        password: {
            required: 'El password es requerido',
            invalidMinLength: `La contraseña debe contener al menos ${SESSION_STORE_FIELD_LENGTH.password.min} caracteres`,
            invalidMaxLength: `La contraseña debe de contener máximo ${SESSION_STORE_FIELD_LENGTH.password.max} caracteres`,
            lowercaseLetter: `La contraseña debe de tener al menos una letra en minuscula`,
            uppercaseLetter: `La contraseña debe de tener al menos una letra en mayuscula`,
            containNumber: `La contraseña debe de tener al menos un número`,
        }
    }
}

export { EXPIRATION_DATE_ERROR_MESSAGES, SESSION_ERROR_MESSAGES }