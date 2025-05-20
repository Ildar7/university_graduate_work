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
import { Text } from 'shared/ui/Text/Text';
import { getAddEmployeeData } from '../../model/selectors/getAddEmployeeData/getAddEmployeeData';
import {
    getAddEmployeeErrors,
} from '../../model/selectors/getAddEmployeeErrors/getAddEmployeeErrors';
import { addEmployeeActions } from '../../model/slice/addEmployeeSlice';
import cls from './AddEmployeePersonalDataTab.module.scss';

interface AddEmployeePersonalDataTabProps {
    className?: string;
    formWithErrors: boolean;
    visible: boolean;
}

export const AddEmployeePersonalDataTab = memo((props: AddEmployeePersonalDataTabProps) => {
    const {
        className,
        formWithErrors,
        visible,
    } = props;
    const dispatch = useAppDispatch();

    const addEmployeeData = useSelector(getAddEmployeeData);
    const addEmployeeValidationErrors = useSelector(getAddEmployeeErrors);

    const educationsData = useSelector(getEmployeeEducationsData);

    const [educationsNames, setEducationsNames] = useState<string[]>([]);
    const [selectedEducationName, setSelectedEducationName] = useState('null');
    const onChangeEducation = (eduName: string, columnName: string) => {
        setSelectedEducationName(eduName);
        const selectedEducationId = educationsData?.data.filter((edu) => edu.name === eduName)[0].education_id;
        if (selectedEducationId) {
            dispatch(addEmployeeActions.setInputData([columnName, selectedEducationId]));
        }
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(addEmployeeActions.setInputData([filterName, event.target.value]));
    };

    useEffect(() => {
        setEducationsNames(educationsData!.data.map((edu) => edu.name));
    }, [educationsData]);

    useEffect(() => {
        if (!visible) {
            setSelectedEducationName('null');
            return;
        }

        const selectedEdu = educationsData!.data.filter((edu) => edu.education_id === addEmployeeData?.education_id)[0];
        if (selectedEdu) {
            setSelectedEducationName(selectedEdu.name);
        }
    }, [addEmployeeData?.education_id, educationsData, visible]);

    return (
        <div className={classNames(cls.AddEmployeePersonalDataTab, {}, [className])}>
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
                                addEmployeeData?.last_name && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'last_name')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'last_name'),
                                addEmployeeValidationErrors,
                                'last_name',
                            )}
                            value={addEmployeeData?.last_name || ''}
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
                                detectInvalidInput(addEmployeeValidationErrors, 'first_name'),
                                addEmployeeValidationErrors,
                                'first_name',
                            )}
                            required
                            invalid={
                                addEmployeeData?.first_name && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'first_name')
                                    : false
                            }
                            value={addEmployeeData?.first_name || ''}
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
                                addEmployeeData?.middle_name && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'middle_name')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'middle_name'),
                                addEmployeeValidationErrors,
                                'middle_name',
                            )}
                            value={addEmployeeData?.middle_name || ''}
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
                                addEmployeeData?.govid && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'govid')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'govid'),
                                addEmployeeValidationErrors,
                                'govid',
                            )}
                            value={addEmployeeData?.govid || ''}
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
                                addEmployeeData?.birth_date && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'birth_date')
                                    : false
                            }
                            placeholder="17.07.2001"
                            value={addEmployeeData?.birth_date || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'birth_date');
                                }
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'birth_date'),
                                addEmployeeValidationErrors,
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
                                addEmployeeData?.phone_number && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'phone_number')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'phone_number'),
                                addEmployeeValidationErrors,
                                'phone_number',
                            )}
                            value={addEmployeeData?.phone_number || ''}
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
                                addEmployeeData?.address && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'address')
                                    : false
                            }
                            value={addEmployeeData?.address || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'address');
                                }
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'address'),
                                addEmployeeValidationErrors,
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
                                detectInvalidInput(addEmployeeValidationErrors, 'education_id'),
                                addEmployeeValidationErrors,
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
                                addEmployeeData?.specialty && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'specialty')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'specialty'),
                                addEmployeeValidationErrors,
                                'specialty',
                            )}
                            value={addEmployeeData?.specialty || ''}
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
                                addEmployeeData?.qualification && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'qualification')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'qualification'),
                                addEmployeeValidationErrors,
                                'qualification',
                            )}
                            value={addEmployeeData?.qualification || ''}
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
