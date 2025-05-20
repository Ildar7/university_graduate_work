interface EmployeesCategory {
    category_id: number;
    name: string;
}

interface EmployeesEducation {
    education_id: number;
    name: string;
}

interface EmployeesPosition {
    employees_positions_id: number;
    employee_id: number;
    position_id: number;
}

interface EmployeesPositionData {
    position_id: number;
    name: string;
    employees_positions: EmployeesPosition;
}

interface EmployeesTeachersSubjects {
    teachers_subject_id: number;
    employee_id: number;
    subject_id: number;
}

interface EmployeesSubjects {
    subject_id: number;
    name: string;
    sort: number;
    module_id: number;
    unit_id: number;
    teachers_subjects: EmployeesTeachersSubjects;
}

export interface EmployeesType {
    fio: string;
    work_experience_since_employment: number;
    total_work_experience: number;
    total_teaching_experience: number;
    employee_id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    phone_number: string;
    address: string;
    govid: string;
    birth_date: string;
    is_staff: boolean;
    date_of_employment: string;
    work_experience: number;
    teaching_experience: number;
    arrival_order_number: string;
    category_id: number;
    is_teacher: boolean;
    education_id: number;
    specialty: string;
    qualification: string;
    tariff_rate: string;
    category: EmployeesCategory | null;
    education: EmployeesEducation;
    positions: EmployeesPositionData[];
    subjects: EmployeesSubjects[];
}

export interface EmployeesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}

export interface EmployeesData {
    data: EmployeesType[];
    pagination: EmployeesPagination | null;
}

export interface EmployeesError {
    status: number;
    error: string;
}
export interface EmployeesSchema {
    data?: EmployeesData;
    isLoading: boolean;
    error?: EmployeesError;
    page?: string;
    limit?: string;
}
