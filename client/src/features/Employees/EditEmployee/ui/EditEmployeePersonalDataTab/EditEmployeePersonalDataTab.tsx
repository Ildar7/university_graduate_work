import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useEffect, useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { detectInvalidInput } from 'shared/lib/errors/detectInvalidInput/detectInvalidInput';
import { setInvalidInputMessage } from 'shared/lib/errors/setInvalidInputMessage/setInvalidInputMessage';
import { detectYear } from 'shared/lib/helpers/detectYear/detectYear';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getEmployeeEducationsData } from 'entities/EmployeeEducations';
import { getEditEmployeeNewFieldsData } from 'features/Employees/EditEmployee';
import { formatDate } from 'shared/lib/helpers/formatDate/formatDate';
import { Text } from 'shared/ui/Text/Text';
import { getEditEmployeeErrors } from '../../model/selectors/getEditEmployeeErrors/getEditEmployeeErrors';
import { editEmployeeActions } from '../../model/slice/editEmployeeSlice';
import cls from './EditEmployeePersonalDataTab.module.scss';

interface EditEmployeePersonalDataTabProps {
    className?: string;
    formWithErrors: boolean;
    visible: boolean;
}

export const EditEmployeePersonalDataTab = memo((props: EditEmployeePersonalDataTabProps) => {
    const {
        className,
        formWithErrors,
        visible,
    } = props;
    const dispatch = useAppDispatch();

    const editEmployeeNewFieldsData = useSelector(getEditEmployeeNewFieldsData);
    const editEmployeeValidationErrors = useSelector(getEditEmployeeErrors);

    const educationsData = useSelector(getEmployeeEducationsData);

    const [educationsNames, setEducationsNames] = useState<string[]>([]);
    const [selectedEducationName, setSelectedEducationName] = useState('null');
    const onChangeEducation = (eduName: string, columnName: string) => {
        setSelectedEducationName(eduName);
        const selectedEducationId = educationsData?.data.filter((edu) => edu.name === eduName)[0].education_id;
        if (selectedEducationId) {
            dispatch(editEmployeeActions.setInputData([columnName, selectedEducationId]));
        }
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(editEmployeeActions.setInputData([filterName, event.target.value]));
    };

    useEffect(() => {
        setEducationsNames(educationsData!.data.map((edu) => edu.name));
    }, [educationsData]);

    useEffect(() => {
        if (!visible) {
            setSelectedEducationName('null');
            return;
        }

        const selectedEdu = educationsData!.data.filter((edu) => edu.education_id === editEmployeeNewFieldsData?.education_id)[0];
        if (selectedEdu) {
            setSelectedEducationName(selectedEdu.name);
        }
    }, [editEmployeeNewFieldsData?.education_id, educationsData, visible]);

    return (
        <div className={classNames(cls.EditEmployeePersonalDataTab, {}, [className])}>
            <div className={cls.tabBlock}>
                <h5 className={cls.title}>Личные данные</h5>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Фамилия*</Text>
                        <Input
                            mask={String}
                            type="text"
                            placeholder="Иванов"
                            required
                            invalid={
                                editEmployeeNewFieldsData?.last_name && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'last_name')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'last_name'),
                                editEmployeeValidationErrors,
                                'last_name',
                            )}
                            value={editEmployeeNewFieldsData?.last_name || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'last_name');
                                }
                            }
                        />
                    </div>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Имя*</Text>
                        <Input
                            placeholder="Иван"
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'first_name'),
                                editEmployeeValidationErrors,
                                'first_name',
                            )}
                            required
                            invalid={
                                editEmployeeNewFieldsData?.first_name && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'first_name')
                                    : false
                            }
                            value={editEmployeeNewFieldsData?.first_name || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'first_name');
                                }
                            }
                        />
                    </div>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Отчество</Text>
                        <Input
                            type="text"
                            placeholder="Иванович"
                            invalid={
                                editEmployeeNewFieldsData?.middle_name && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'middle_name')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'middle_name'),
                                editEmployeeValidationErrors,
                                'middle_name',
                            )}
                            value={editEmployeeNewFieldsData?.middle_name || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'middle_name');
                                }
                            }
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Паспорт (серия, номер)*</Text>
                        <Input
                            mask="0000000000"
                            minLength={10}
                            type="text"
                            placeholder="1234567891"
                            required
                            invalid={
                                editEmployeeNewFieldsData?.govid && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'govid')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'govid'),
                                editEmployeeValidationErrors,
                                'govid',
                            )}
                            value={editEmployeeNewFieldsData?.govid || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'govid');
                                }
                            }
                        />
                    </div>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Дата рождения*</Text>
                        <Input
                            mask={Date}
                            // @ts-ignore
                            min={new Date(detectYear(100), 0, 1)}
                            // @ts-ignore
                            max={new Date(detectYear(14), 0, 1)}
                            invalid={
                                editEmployeeNewFieldsData?.birth_date && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'birth_date')
                                    : false
                            }
                            placeholder="17.07.2001"
                            value={formatDate(editEmployeeNewFieldsData?.birth_date?.split('-')) || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'birth_date');
                                }
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'birth_date'),
                                editEmployeeValidationErrors,
                                'birth_date',
                            )}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className={cls.tabBlock}>
                <h5 className={cls.title}>Контактные данные</h5>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Номер телефона*</Text>
                        <Input
                            minLength={18}
                            mask="+7 (000) 000 00-00"
                            type="text"
                            placeholder="+7 (999) 111 22-33"
                            required
                            invalid={
                                editEmployeeNewFieldsData?.phone_number && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'phone_number')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'phone_number'),
                                editEmployeeValidationErrors,
                                'phone_number',
                            )}
                            value={editEmployeeNewFieldsData?.phone_number?.slice(1) || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'phone_number');
                                }
                            }
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Адрес проживания*</Text>
                        <Input
                            type="text"
                            placeholder="076322, Павлодар облысы, Қостанай қаласы, Абай көшесі, 216"
                            invalid={
                                editEmployeeNewFieldsData?.address && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'address')
                                    : false
                            }
                            value={editEmployeeNewFieldsData?.address || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'address');
                                }
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'address'),
                                editEmployeeValidationErrors,
                                'address',
                            )}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className={cls.tabBlock}>
                <h5 className={cls.title}>Образование</h5>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Образование*</Text>
                        <SearchSelect
                            options={educationsNames}
                            optionValue={selectedEducationName}
                            onClickOption={onChangeEducation}
                            columnName="education_id"
                            searchDisabled
                            invalid={selectedEducationName === 'null'}
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'education_id'),
                                editEmployeeValidationErrors,
                                'education_id',
                            )}
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Специальность*</Text>
                        <Input
                            type="text"
                            placeholder="Специальность"
                            maxLength={256}
                            required
                            invalid={
                                editEmployeeNewFieldsData?.specialty && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'specialty')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'specialty'),
                                editEmployeeValidationErrors,
                                'specialty',
                            )}
                            value={editEmployeeNewFieldsData?.specialty || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'specialty');
                                }
                            }
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Квалификация*</Text>
                        <Input
                            type="text"
                            placeholder="Квалификация"
                            maxLength={256}
                            required
                            invalid={
                                editEmployeeNewFieldsData?.qualification && formWithErrors
                                    ? detectInvalidInput(editEmployeeValidationErrors, 'qualification')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(editEmployeeValidationErrors, 'qualification'),
                                editEmployeeValidationErrors,
                                'qualification',
                            )}
                            value={editEmployeeNewFieldsData?.qualification || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'qualification');
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});
