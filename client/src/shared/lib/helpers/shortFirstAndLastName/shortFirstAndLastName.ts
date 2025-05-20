export const shortFirstAndLastName = (fullName: string) => {
    if (fullName) {
        const dividedName = fullName.split(' ');

        if (dividedName[1]) {
            return `${dividedName[0]} ${dividedName[1][0]}.`;
        }

        return dividedName[0];
    }

    return '';
};
