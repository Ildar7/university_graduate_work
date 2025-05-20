type AnyObject = Record<string, any>;

export const excludePropertiesFromObject = (obj: AnyObject | undefined, excludedProperties: string[]): AnyObject => {
    const result: AnyObject = { ...obj };

    // eslint-disable-next-line no-restricted-syntax
    for (const prop of excludedProperties) {
        // eslint-disable-next-line no-prototype-builtins
        if (result.hasOwnProperty(prop)) {
            delete result[prop];
        }
    }

    return result;
};
