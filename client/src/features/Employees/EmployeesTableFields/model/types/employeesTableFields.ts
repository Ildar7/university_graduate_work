export interface EmployeesTableFieldsType {
    positions: boolean;
    phone_number: boolean;
    address: boolean;
    govid: boolean;
    birth_date: boolean;
    is_staff: boolean;
    date_of_employment: boolean;
    work_experience: boolean;
    teaching_experience: boolean;
    arrival_order_number: boolean;
    category_id: boolean;
    is_teacher: boolean;
    education_id: boolean;
    specialty: boolean;
    qualification: boolean;
    tariff_rate: boolean;
    work_experience_since_employment: boolean;
    total_work_experience: boolean;
    total_teaching_experience: boolean;
}

export interface EmployeesTableFieldsSchema {
    data?: EmployeesTableFieldsType;
}
