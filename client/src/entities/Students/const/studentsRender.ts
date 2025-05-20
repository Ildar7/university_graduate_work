type StudentsDatabaseName = 'student_birth_date' |
'student_gender' |
'student_nationality' |
'student_citizenship' |
'student_phone_number' |
'student_edu_speciality' |
'student_edu_classifier' |
'student_study_duration' |
'student_study_course' |
'student_edu_form' |
'student_arrival_date' |
'student_enrollment_type' |
'student_is_arrival_from' |
'student_is_finished_edu_type' |
'student_edu_lang' |
'student_is_has_access_to_exams' |
'student_residence_type' |
'student_residential_address' |
'student_temporary_residence_add' |
'student_is_need_hostel_type' |
'student_is_live_at_hostel' |
'student_financing_source_type' |
'student_quota' |
'student_is_orphan' |
'student_is_without_parental_care' |
'student_is_disabled_person' |
'student_material_assistance_type' |
'student_is_from_young_family' |
'student_is_study_in_dual_system' |
'student_is_study_in_productive_employment' |
'student_is_completed_training_at_competence_center' |
'student_is_study_in_worldskills' |
'student_is_involved_in_social_activities' |
'student_govid' | 'id_group';

interface StudentsRender {
    name: string;
    dataBaseName: StudentsDatabaseName;
}

export const studentsRender: StudentsRender[] = [
    {
        name: 'Паспорт (серия, номер)',
        dataBaseName: 'student_govid',
    },
    {
        name: 'Пол',
        dataBaseName: 'student_gender',
    },
    {
        name: 'Национальность',
        dataBaseName: 'student_nationality',
    },
    {
        name: 'Специальность',
        dataBaseName: 'student_edu_speciality',
    },
    {
        name: 'Квалификация',
        dataBaseName: 'student_edu_classifier',
    },
    {
        name: 'Язык обучения',
        dataBaseName: 'student_edu_lang',
    }, {
        name: 'Форма обучения',
        dataBaseName: 'student_edu_form',
    },
    {
        name: 'Группа',
        dataBaseName: 'id_group',
    },
    {
        name: 'Доступ к экзаменам',
        dataBaseName: 'student_is_has_access_to_exams',
    },
    {
        name: 'Телефон',
        dataBaseName: 'student_phone_number',
    },
    {
        name: 'Дата рождения',
        dataBaseName: 'student_birth_date',
    },
    {
        name: 'Дата поступления',
        dataBaseName: 'student_arrival_date',
    },
    {
        name: 'Продолжительность обучения',
        dataBaseName: 'student_study_duration',
    },
    {
        name: 'Курс обучения',
        dataBaseName: 'student_study_course',
    },
    {
        name: 'Проживает в общежитии',
        dataBaseName: 'student_is_live_at_hostel',
    },
    {
        name: 'Гражданство',
        dataBaseName: 'student_citizenship',
    },
    {
        name: 'Причина поступления',
        dataBaseName: 'student_enrollment_type',
    },
    {
        name: 'Откуда прибыл',
        dataBaseName: 'student_is_arrival_from',
    },
    {
        name: 'Законченное учебное заведение',
        dataBaseName: 'student_is_finished_edu_type',
    },
    {
        name: 'Тип проживания',
        dataBaseName: 'student_residence_type',
    },
    {
        name: 'Адрес фактического проживания',
        dataBaseName: 'student_residential_address',
    },
    {
        name: 'Адрес временного проживания',
        dataBaseName: 'student_temporary_residence_add',
    },
    {
        name: 'Потребность в общежитии',
        dataBaseName: 'student_is_need_hostel_type',
    },
    {
        name: 'Источник финансирования студента',
        dataBaseName: 'student_financing_source_type',
    },
    {
        name: 'Квота обучения',
        dataBaseName: 'student_quota',
    },
    {
        name: 'Является сиротой',
        dataBaseName: 'student_is_orphan',
    },
    {
        name: 'Отсутствует попечитель',
        dataBaseName: 'student_is_without_parental_care',
    },
    {
        name: 'Является ли инвалидом',
        dataBaseName: 'student_is_disabled_person',
    },
    {
        name: 'Мат. и фин. поддержка',
        dataBaseName: 'student_material_assistance_type',
    },
    {
        name: 'Из молодой семьи',
        dataBaseName: 'student_is_from_young_family',
    },
    {
        name: 'Обучается по дуальной системе',
        dataBaseName: 'student_is_study_in_dual_system',
    },
    {
        name: 'Проходил курсы продуктивной занятости',
        dataBaseName: 'student_is_study_in_productive_employment',
    },
    {
        name: 'Прошел обучение в центре компетенции',
        dataBaseName: 'student_is_completed_training_at_competence_center',
    },
    {
        name: 'Участвовал в WorldSkills',
        dataBaseName: 'student_is_study_in_worldskills',
    },
    {
        name: 'Вовлечен в обществуенную деятельность',
        dataBaseName: 'student_is_involved_in_social_activities',
    },
];
