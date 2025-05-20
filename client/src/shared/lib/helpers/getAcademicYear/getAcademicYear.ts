export function getAcademicYear(): number {
    const currentMonth = new Date().getMonth() + 1;
    if (currentMonth >= 9) {
        return new Date().getFullYear();
    }
    return new Date().getFullYear() - 1;
}
