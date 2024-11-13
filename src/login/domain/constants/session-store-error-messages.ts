import { SESSION_STORE_FIELD_LENGTH } from "./session-store-constants"

const EXPIRATION_DATE_ISO_ERROR_MESSAGES = {
    required: 'Fecha requerida',
    invalidFormaDate: 'Formato incorrecto, se espera una clase Date',
    invalidFormaIso: 'Formato ISO incorrecto'
}

const SESSION_ERROR_MESSAGES = {

    credentials: {
        email: {
            required: 'El email es requerido',
            invalidFormat: 'El email tiene un formato invalido.'
        },
        password: {
            required: 'El password es requerido',
            invalidMinLength: `La contraseña debe contener al menos ${SESSION_STORE_FIELD_LENGTH.password.min} caracteres`,
            invalidMaxLength: `La contraseña debe de contener máximo ${SESSION_STORE_FIELD_LENGTH.password.max} caracteres`,
            lowercaseLetter: 'La contraseña debe de tener al menos una letra en minuscula',
            uppercaseLetter: 'La contraseña debe de tener al menos una letra en mayuscula',
            containNumber: 'La contraseña debe de tener al menos un número',
            consecutiveCharacters: 'No se aceptan caracteres repetidos consecutivos',
            repeatThreetimes: 'Los caracteres no se pueden repetir mas de 3 veces'
        }
    }
}

export { EXPIRATION_DATE_ISO_ERROR_MESSAGES, SESSION_ERROR_MESSAGES }