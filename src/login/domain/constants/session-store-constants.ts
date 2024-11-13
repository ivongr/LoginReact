export const SESSION_STORE_FIELD_LENGTH = {
    password: {
        min: 4,
        max: 16,
        lowercaseLetter: /[a-z]/,
        uppercaseLetter: /[A-Z]/,
        containNumber: /[0-9]/
    },
};

export const SESSION_STORE_FIELD_REGEX = {
    password: {
        lowercaseLetter: /[a-z]/,
        uppercaseLetter: /[A-Z]/,
        containNumber: /[0-9]/,
        consecutiveCharacters: /^(?!.*(.)\1)/,
        repeatThreetimes: /(.)\1{2,}/

    },
};