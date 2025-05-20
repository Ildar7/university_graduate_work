export const validateObjectFieldsNotNull = (obj: Record<string, any> | undefined): boolean => {
    if (!obj) {
        return false;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key) && obj[key] === null) {
            return false;
        }
    }

    return true;
};
