import { removeCommaRegExp } from 'shared/const/regExp';

export const parseArrayString = (value: string) => {
    const parsedValue = value.replace(removeCommaRegExp, '');
    const parsedValueArr = Array.from(new Set(parsedValue.split(',')));

    return parsedValueArr.join(',');
};
