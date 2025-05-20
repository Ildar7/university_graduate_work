type EmployeesDatabaseName = 'positions' | 'phone_number' | 'address' | 'govid' | 'birth_date'
    | 'is_staff' | 'date_of_employment' | 'work_experience' | 'teaching_experience'
    | 'arrival_order_number' | 'category_id' | 'is_teacher' | 'education_id' | 'specialty'
    | 'qualification' | 'tariff_rate' | 'work_experience_since_employment'
    | 'total_work_experience' | 'total_teaching_experience';

interface EmployeesRender {
    name: string;
    dataBaseName: EmployeesDatabaseName;
    canSort: boolean;
}

export const employeesRender: EmployeesRender[] = [
    {
        name: 'Должности',
        dataBaseName: 'positions',
        canSort: false,
    },
    {
        name: 'Телефон',
        dataBaseName: 'phone_number',
        canSort: true,
    },
    {
        name: 'Адрес проживания',
        dataBaseName: 'address',
        canSort: true,
    },
    {
        name: 'Паспорт (серия, номер)',
        dataBaseName: 'govid',
        canSort: true,
    },
    {
        name: 'Дата рождения',
        dataBaseName: 'birth_date',
        canSort: true,
    },
    {
        name: 'Штатный сотрудник',
        dataBaseName: 'is_staff',
        canSort: true,
    },
    {
        name: 'Дата трудоустройства',
        dataBaseName: 'date_of_employment',
        canSort: true,
    },
    {
        name: 'Стаж работы до устройства в текущий колледж',
        dataBaseName: 'work_experience',
        canSort: true,
    },
    {
        name: 'Педагогический стаж до устройства в текущий колледж',
        dataBaseName: 'teaching_experience',
        canSort: true,
    },
    {
        name: 'Номер приказа о приёме',
        dataBaseName: 'arrival_order_number',
        canSort: true,
    },
    {
        name: 'Категория',
        dataBaseName: 'category_id',
        canSort: true,
    },
    {
        name: 'Преподаватель',
        dataBaseName: 'is_teacher',
        canSort: true,
    },
    {
        name: 'Образование сотрудника',
        dataBaseName: 'education_id',
        canSort: true,
    },
    {
        name: 'Специальность сотрудника',
        dataBaseName: 'specialty',
        canSort: true,
    },
    {
        name: 'Квалификация сотрудника',
        dataBaseName: 'qualification',
        canSort: true,
    },
    {
        name: 'Тарифная ставка',
        dataBaseName: 'tariff_rate',
        canSort: true,
    },
    {
        name: 'Рабочий стаж на текущем месте',
        dataBaseName: 'work_experience_since_employment',
        canSort: false,
    },
    {
        name: 'Общий стаж работы',
        dataBaseName: 'total_work_experience',
        canSort: false,
    },
    {
        name: 'Общий стаж преподавания',
        dataBaseName: 'total_teaching_experience',
        canSort: false,
    },
];
