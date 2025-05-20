import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { CFormCheck } from '@coreui/react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './StudentsTableFields.module.scss';
import { getStudentsTableFieldsData } from '../model/selectors/getStudentsTableFields/getStudentsTableFields';
import { studentsTableFieldsActions } from '../model/slice/studentsTableFields';

interface StudentsTableFieldsProps {
    className?: string;
}

export const StudentsTableFields = memo((props: StudentsTableFieldsProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const tableFieldsData = useSelector(getStudentsTableFieldsData);
    const onCheckHandler = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        dispatch(studentsTableFieldsActions.setCheckedField([e.target.checked, fieldName]));
    };

    return (
        <div className={classNames(cls.StudentsTableFields, {}, [className])}>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Общие</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Паспорт (серия, номер)</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_govid}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_govid');
                                }
                            }
                            id="student_govid"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Дата рождения</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_birth_date}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_birth_date');
                                }
                            }
                            id="student_birth_date"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Пол</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_gender}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_gender');
                                }
                            }
                            id="student_gender"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Национальность</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_nationality}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_nationality');
                                }
                            }
                            id="student_nationality"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Гражданство</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_citizenship}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_citizenship');
                                }
                            }
                            id="student_citizenship"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Номер телефона</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_phone_number}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_phone_number');
                                }
                            }
                            id="student_phone_number"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Обучение</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Специальность</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_edu_speciality}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_edu_speciality');
                                }
                            }
                            id="student_edu_speciality"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Квалификация</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_edu_classifier}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_edu_classifier');
                                }
                            }
                            id="student_edu_classifier"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Группа</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.id_group}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'id_group');
                                }
                            }
                            id="id_group"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Продолжительность обучения</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_study_duration}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_study_duration');
                                }
                            }
                            id="student_study_duration"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Текущий курс</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_study_course}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_study_course');
                                }
                            }
                            id="student_study_course"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Форма обучения</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_edu_form}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_edu_form');
                                }
                            }
                            id="student_edu_form"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Дата поступления</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_arrival_date}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_arrival_date');
                                }
                            }
                            id="student_arrival_date"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Причина поступления</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_enrollment_type}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_enrollment_type');
                                }
                            }
                            id="student_enrollment_type"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Откуда прибыл</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_arrival_from}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_arrival_from');
                                }
                            }
                            id="student_is_arrival_from"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Законченное учебное заведение</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_finished_edu_type}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_finished_edu_type');
                                }
                            }
                            id="student_is_finished_edu_type"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Язык обучения</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_edu_lang}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_edu_lang');
                                }
                            }
                            id="student_edu_lang"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Доступ к экзаменам</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_has_access_to_exams}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_has_access_to_exams');
                                }
                            }
                            id="student_is_has_access_to_exams"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Проживание</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Тип проживания</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_residence_type}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_residence_type');
                                }
                            }
                            id="student_residence_type"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Адрес фактического проживания</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_residential_address}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_residential_address');
                                }
                            }
                            id="student_residential_address"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Адрес временного проживания</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_temporary_residence_add}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_temporary_residence_add');
                                }
                            }
                            id="student_temporary_residence_add"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Потребность в общежитии</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_need_hostel_type}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_need_hostel_type');
                                }
                            }
                            id="student_is_need_hostel_type"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Проживает в общежитии</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_live_at_hostel}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_live_at_hostel');
                                }
                            }
                            id="student_is_live_at_hostel"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Финансирование и обеспечение</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Источник финансирования студента</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_financing_source_type}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_financing_source_type');
                                }
                            }
                            id="student_financing_source_type"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Квота обучения</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_quota}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_quota');
                                }
                            }
                            id="student_quota"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Является сиротой</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_orphan}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_orphan');
                                }
                            }
                            id="student_is_orphan"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Отсутствует попечитель</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_without_parental_care}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_without_parental_care');
                                }
                            }
                            id="student_is_without_parental_care"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Является ли инвалидом</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_disabled_person}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_disabled_person');
                                }
                            }
                            id="student_is_disabled_person"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Мат. и фин. поддержка</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_material_assistance_type}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_material_assistance_type');
                                }
                            }
                            id="student_material_assistance_type"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Из молодой семьи</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_from_young_family}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_from_young_family');
                                }
                            }
                            id="student_is_from_young_family"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Особенности и достижения</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Обучается по дуальной системе</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_study_in_dual_system}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_study_in_dual_system');
                                }
                            }
                            id="student_is_study_in_dual_system"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Проходил курсы продуктивной занятости</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_study_in_productive_employment}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_study_in_productive_employment');
                                }
                            }
                            id="student_is_study_in_productive_employment"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Прошел обучение в центре компетенции</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_completed_training_at_competence_center}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_completed_training_at_competence_center');
                                }
                            }
                            id="student_is_completed_training_at_competence_center"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Участвовал в WorldSkills</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_study_in_worldskills}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_study_in_worldskills');
                                }
                            }
                            id="student_is_study_in_worldskills"
                        />
                    </div>
                    <div className={cls.field}>
                        <CFormCheck
                            label={(
                                <h6>Вовлечен в обществуенную деятельность</h6>
                            )}
                            className={cls.checkbox}
                            checked={tableFieldsData?.student_is_involved_in_social_activities}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'student_is_involved_in_social_activities');
                                }
                            }
                            id="student_is_involved_in_social_activities"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});
