export const getStudentCode = (year: number, shortName: string, course: number, serialNumber: number) => {
    const lastTwoSymbolsOfEnrollmentYear = String(year).slice(2, 4);
    const code = `${lastTwoSymbolsOfEnrollmentYear}${shortName}-${course}${serialNumber}`;

    return code;
};
