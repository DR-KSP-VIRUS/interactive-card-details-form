export const validateField = (field) => {
    if (field != '') {
        return true;
    } else {
        return false;
    }
}

export const numberField = (field) => {
    return /[0-9' ']/.test(field.at(-1));
}
