export function checkObjectProperties(obj: any) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
        if (obj[key] === null || obj[key] === '') {
            return false;
        }
    }

    return true;
}
