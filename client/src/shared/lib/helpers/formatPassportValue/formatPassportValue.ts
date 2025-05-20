export const formatPassportValue = (value: string | undefined) => {
    if (!value) return 'Не указан';

    return `${value.slice(0, 4)} ${value.slice(4, 11)}`;
};
