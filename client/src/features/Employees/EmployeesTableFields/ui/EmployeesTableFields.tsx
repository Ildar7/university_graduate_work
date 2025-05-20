import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { TextSize, TextTheme } from 'shared/ui/Text/Text';
import { getEmployeesTableFieldsData } from '../model/selectors/getEmployeesTableFields/getEmployeesTableFields';
import cls from './EmployeesTableFields.module.scss';
import { employeesTableFieldsActions } from '../model/slice/employeesTableFields';

interface EmployeesTableFieldsProps {
    className?: string;
}

export const EmployeesTableFields = memo((props: EmployeesTableFieldsProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const tableFieldsData = useSelector(getEmployeesTableFieldsData);
    const onCheckHandler = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        dispatch(employeesTableFieldsActions.setCheckedField([e.target.checked, fieldName]));
    };

    return (
        <div className={classNames(cls.EmployeesTableFields, {}, [className])}>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Личные данные</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <Checkbox
                            label="Паспорт (серия, номер)"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.govid}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'govid');
                                }
                            }
                            id="table_fields_employee_govid"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Дата рождения"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.birth_date}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'birth_date');
                                }
                            }
                            id="table_fields_employee_birth_date"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Контактные данные</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <Checkbox
                            label="Номер телефона"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.phone_number}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'phone_number');
                                }
                            }
                            id="table_fields_employee_phone_number"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Адрес проживания"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.address}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'address');
                                }
                            }
                            id="table_fields_employee_address"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Образование</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <Checkbox
                            label="Образование"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.education_id}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'education_id');
                                }
                            }
                            id="table_fields_employee_education_id"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Специальность"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.specialty}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'specialty');
                                }
                            }
                            id="table_fields_employee_specialty"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Квалификация"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.qualification}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'qualification');
                                }
                            }
                            id="table_fields_employee_qualification"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Должности</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <Checkbox
                            label="Должности"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.positions}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'positions');
                                }
                            }
                            id="table_fields_employee_positions"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Информация о сотруднике</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <Checkbox
                            label="Дата трудоустройства"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.date_of_employment}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'date_of_employment');
                                }
                            }
                            id="table_fields_employee_date_of_employment"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Номер приказа о принятии на работу"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.arrival_order_number}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'arrival_order_number');
                                }
                            }
                            id="table_fields_employee_arrival_order_number"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Штатный"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.is_staff}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'is_staff');
                                }
                            }
                            id="table_fields_employee_is_staff"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Является преподавателем"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.is_teacher}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'is_teacher');
                                }
                            }
                            id="table_fields_employee_is_teacher"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Категория"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.category_id}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'category_id');
                                }
                            }
                            id="table_fields_employee_category_id"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Ставка"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.tariff_rate}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'tariff_rate');
                                }
                            }
                            id="table_fields_employee_tariff_rate"
                        />
                    </div>
                </div>
            </div>
            <div className={cls.fieldsBlock}>
                <h5 className={cls.title}>Опыт работы</h5>
                <div className={cls.settings}>
                    <div className={cls.field}>
                        <Checkbox
                            label="Общий стаж работы на момент принятия на работу"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.work_experience}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'work_experience');
                                }
                            }
                            id="table_fields_employee_work_experience"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Стаж преподавания на момент принятия на работу"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.teaching_experience}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'teaching_experience');
                                }
                            }
                            id="table_fields_employee_teaching_experience"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Рабочий стаж на текущем месте"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.work_experience_since_employment}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'work_experience_since_employment');
                                }
                            }
                            id="table_fields_employee_work_experience_since_employment"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Общий стаж работы"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.total_work_experience}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'total_work_experience');
                                }
                            }
                            id="table_fields_employee_total_work_experience"
                        />
                    </div>
                    <div className={cls.field}>
                        <Checkbox
                            label="Общий стаж преподавания"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            className={cls.checkbox}
                            checked={tableFieldsData?.total_teaching_experience}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'total_teaching_experience');
                                }
                            }
                            id="table_fields_employee_total_teaching_experience"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});
