// function generateSchedule(year: number) {
//     const months = [
//         { name: 'september', days: 30 },
//         { name: 'october', days: 31 },
//         { name: 'november', days: 30 },
//         { name: 'december', days: 31 },
//         { name: 'january', days: 31 },
//         { name: 'february', days: 28 + () }, // Leap year check
//         { name: 'march', days: 31 },
//         { name: 'april', days: 30 },
//         { name: 'may', days: 31 },
//         { name: 'june', days: 30 },
//         { name: 'july', days: 31 },
//         { name: 'august', days: 31 },
//     ];
//
//     const schedule = {};
//
//     let currentWeekStart = 1;
//     let currentMonthIndex = 8; // September
//     let currentYear = year;
//
//     while (currentMonthIndex < 12 || currentYear === year) {
//         const month = months[currentMonthIndex % 12];
//         const monthName = month.name;
//         const monthDays = month.days;
//
//         const currentMonthSchedule = {};
//         let currentWeek = 1;
//
//         for (let day = currentWeekStart; day <= monthDays; day += 7) {
//             const weekStart = day;
//             const weekEnd = Math.min(day + 6, monthDays);
//             // @ts-ignore
//             currentMonthSchedule[`week_${currentWeek}`] = [weekStart, weekEnd];
//
//             currentWeek++;
//         }
//
//         // @ts-ignore
//         if (!schedule[`${currentYear}`]) {
//             // @ts-ignore
//             schedule[`${currentYear}`] = { [monthName]: currentMonthSchedule };
//         } else if (currentMonthIndex === 8) {
//             // @ts-ignore
//             schedule[`${currentYear}`][monthName] = currentMonthSchedule;
//         } else {
//             const prevMonth = months[(currentMonthIndex - 1) % 12];
//             const prevMonthName = prevMonth.name;
//             // @ts-ignore
//             schedule[`${currentYear}`].betweenMonths = [prevMonth.days - (7 - currentWeekStart + 1), currentWeekStart - 1];
//         }
//
//
//         currentMonthIndex++;
//         if (currentMonthIndex === 12 && currentYear === year) {
//
//             currentYear++;
//             currentMonthIndex = 0;
//         }
//         currentWeekStart = 1;
//     }
//
//     return schedule;
// }
//
// const schedule = generateSchedule(2022);
// console.log(schedule);
