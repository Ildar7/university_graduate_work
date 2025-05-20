import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useEffect, useState } from 'react';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { setInvalidInputMessage } from 'shared/lib/errors/setInvalidInputMessage/setInvalidInputMessage';
import { detectInvalidInput } from 'shared/lib/errors/detectInvalidInput/detectInvalidInput';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DatepickerInput } from 'shared/ui/DatepickerInput/DatepickerInput';
import { Input } from 'shared/ui/Input/Input';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getEmployeePositionsData } from 'entities/EmployeePositions';
import {
    addEmployeePositionToEmployeeActions,
    getAddEmployeePositionToEmployeeData,
    getAddEmployeePositionToEmployeeErrors,
} from 'features/Employees/AddEmployeePosition';
import { getEmployeeCategoriesData } from 'entities/EmployeeCategories';
import { TextHint } from 'shared/ui/TextHint/TextHint';
import { getAddEmployeeData } from '../../model/selectors/getAddEmployeeData/getAddEmployeeData';
import {
    getAddEmployeeErrors,
} from '../../model/selectors/getAddEmployeeErrors/getAddEmployeeErrors';
import { addEmployeeActions } from '../../model/slice/addEmployeeSlice';
import cls from './AddEmployeeProfActivityTab.module.scss';

interface AddEmployeeProfActivityTabProps {
    className?: string;
    formWithErrors: boolean;
    visible: boolean;
    selectedPositionsNames: string[];
    setSelectedPositionsNames: (values: any) => void;
}

export const AddEmployeeProfActivityTab = memo((props: AddEmployeeProfActivityTabProps) => {
    const {
        className,
        formWithErrors,
        visible,
        selectedPositionsNames,
        setSelectedPositionsNames,
    } = props;
    const dispatch = useAppDispatch();

    const addEmployeeData = useSelector(getAddEmployeeData);
    const addEmployeeValidationErrors = useSelector(getAddEmployeeErrors);

    const positionsData = useSelector(getEmployeePositionsData);
    const categoriesData = useSelector(getEmployeeCategoriesData);

    const addEmployeePositionsData = useSelector(getAddEmployeePositionToEmployeeData);
    const addEmployeePositionValidationErrors = useSelector(getAddEmployeePositionToEmployeeErrors);

    const [categoriesNames, setCategoriesNames] = useState<string[]>([]);
    const [selectedCategoryName, setSelectedCategoryName] = useState('null');
    const onChangeCategory = (catName: string, columnName: string) => {
        if (catName !== 'Без категории') {
            setSelectedCategoryName(catName);
            const selectedCategoryId = categoriesData?.data.filter((cat) => cat.name === catName)[0].category_id;
            if (selectedCategoryId) {
                dispatch(addEmployeeActions.setInputData([columnName, selectedCategoryId]));
            }

            return;
        }

        setSelectedCategoryName('null');
        dispatch(addEmployeeActions.setInputData([columnName, null]));
    };

    const [positionsNames, setPositionsNames] = useState<string[]>([]);
    const onChangePosition = (posName: string, columnName: string) => {
        const foundItem = selectedPositionsNames.filter((item) => item === posName)[0];
        if (foundItem) {
            const filteredItemsNames = selectedPositionsNames.filter((item) => item !== posName);
            setSelectedPositionsNames(filteredItemsNames);

            const filteredItemId = positionsData?.data.filter((pos) => pos.name === foundItem)[0].position_id;
            if (addEmployeePositionsData?.position_ids) {
                dispatch(addEmployeePositionToEmployeeActions.setPositionIds(
                    addEmployeePositionsData?.position_ids?.filter((pos) => pos !== filteredItemId),
                ));
            }
        } else {
            setSelectedPositionsNames((prevState: string[]) => [...prevState, posName]);

            const filteredItemId = positionsData?.data.filter((pos) => pos.name === posName)[0].position_id;
            if (filteredItemId) {
                dispatch(addEmployeePositionToEmployeeActions.setPositionIds([...addEmployeePositionsData?.position_ids || [], filteredItemId]));
            }
        }
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        if (filterName === 'arrival_order_number') {
            const inputValue = event.target.value;
            const newValue = inputValue.startsWith('№') ? inputValue : `№${inputValue}`;
            const updatedValue = newValue === '№' ? '' : newValue;
            dispatch(addEmployeeActions.setInputData([filterName, updatedValue]));
        } else {
            dispatch(addEmployeeActions.setInputData([filterName, event.target.value]));
        }
    };

    const onChangeDatePicker = (date: string | null, filterName: string) => {
        dispatch(addEmployeeActions.setInputData([filterName, date]));
    };

    const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(addEmployeeActions.setInputData([filterName, event.target.checked]));
    };

    useEffect(() => {
        setPositionsNames(positionsData!.data.map((pos) => pos.name));
    }, [positionsData]);

    useEffect(() => {
        if (!visible) {
            setSelectedPositionsNames([]);
            return;
        }

        if (!addEmployeePositionsData?.position_ids?.length) {
            setSelectedPositionsNames([]);
            return;
        }

        const selectedEduToChange: string[] = [];
        addEmployeePositionsData?.position_ids?.forEach((pos) => {
            positionsData?.data.forEach((posInner) => {
                if (pos === posInner.position_id) {
                    selectedEduToChange.push(posInner.name);
                }
            });
        });
        setSelectedPositionsNames(selectedEduToChange);
    }, [addEmployeeData?.education_id, addEmployeePositionsData?.position_ids, positionsData?.data, setSelectedPositionsNames, visible]);

    useEffect(() => {
        setCategoriesNames(categoriesData!.data.map((cat) => cat.name));
    }, [categoriesData]);

    useEffect(() => {
        if (!visible) {
            setSelectedCategoryName('null');
            return;
        }

        const selectedEdu = categoriesData!.data.filter((cat) => cat.category_id === addEmployeeData?.category_id)[0];
        if (selectedEdu) {
            setSelectedCategoryName(selectedEdu.name);
        }
    }, [addEmployeeData?.category_id, categoriesData, visible]);

    return (
        <div className={classNames(cls.AddEmployeeProfActivityTab, {}, [className])}>
            <div className={cls.tabBlock}>
                <h5 className={cls.title}>Должности</h5>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Должности*</Text>
                        <SearchSelect
                            searchDisabled
                            options={positionsNames}
                            optionValue={selectedPositionsNames}
                            onClickOption={onChangePosition}
                            columnName=""
                            invalid={!selectedPositionsNames.length}
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeePositionValidationErrors, 'position_ids'),
                                addEmployeePositionValidationErrors,
                                'position_ids',
                            )}
                            multiSelect
                        />
                    </div>
                </div>
            </div>
            <div className={cls.tabBlock}>
                <h5 className={cls.title}>Информация о сотруднике</h5>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Дата трудоустройства*</Text>
                        <DatePicker
                            selected={
                                addEmployeeData?.date_of_employment ? new Date(addEmployeeData.date_of_employment) : null
                            }
                            onChange={
                                (date: Date | null) => {
                                    onChangeDatePicker(date ? format(new Date(date), 'yyyy-MM-dd') : null, 'date_of_employment');
                                }
                            }
                            maxDate={new Date()}
                            locale={ru}
                            dropdownMode="scroll"
                            dateFormat="dd.MM.yyyy"
                            closeOnScroll
                            showMonthDropdown
                            showYearDropdown
                            showWeekNumbers
                            customInput={<DatepickerInput />}
                            placeholderText="Дата трудоустройства"
                            required
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Номер приказа о принятии на работу*</Text>
                        <Input
                            type="text"
                            placeholder="Номер приказа о принятии на работу"
                            required
                            invalid={
                                addEmployeeData?.arrival_order_number && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'arrival_order_number')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'arrival_order_number'),
                                addEmployeeValidationErrors,
                                'qualification',
                            )}
                            value={addEmployeeData?.arrival_order_number || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'arrival_order_number');
                                }
                            }
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Checkbox
                            label="Штатный"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            id="add_employee_is_staff"
                            checked={addEmployeeData?.is_staff}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'is_staff');
                                }
                            }
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Checkbox
                            id="add_employee_is_teacher"
                            label="Является преподавателем"
                            labelSize={TextSize.S}
                            labelTheme={TextTheme.DEFAULT}
                            labelPosition="after"
                            checked={addEmployeeData?.is_teacher}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onCheckHandler(event, 'is_teacher');
                                    if (!event.target.checked) {
                                        dispatch(addEmployeeActions.setInputData(['teaching_experience', null]));
                                    }
                                }
                            }
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Категория</Text>
                        <SearchSelect
                            options={['Без категории', ...categoriesNames]}
                            optionValue={selectedCategoryName}
                            onClickOption={onChangeCategory}
                            columnName="category_id"
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>Ставка</Text>
                        <Input
                            type="number"
                            min={0}
                            step={0.5}
                            placeholder="Ставка"
                            required
                            invalid={
                                addEmployeeData?.tariff_rate && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'tariff_rate')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'tariff_rate'),
                                addEmployeeValidationErrors,
                                'tariff_rate',
                            )}
                            value={addEmployeeData?.tariff_rate || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'tariff_rate');
                                }
                            }
                        />
                    </div>
                </div>
            </div>
            <div className={cls.tabBlock}>
                <h5 className={cls.title}>Опыт работы</h5>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <Text className={cls.newAddFieldTitle}>
                            Общий стаж работы на момент принятия на
                            работу
                        </Text>
                        <Input
                            mask={Number}
                            min={0}
                            placeholder="Общий стаж работы на момент принятия на работу"
                            required
                            invalid={
                                addEmployeeData?.work_experience && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'work_experience')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'work_experience'),
                                addEmployeeValidationErrors,
                                'qualification',
                            )}
                            value={addEmployeeData?.work_experience || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'work_experience');
                                }
                            }
                        />
                    </div>
                </div>
                <div className={cls.settings}>
                    <div className={cls.newAddField}>
                        <TextHint
                            className={cls.newAddFieldTitle}
                            hint={'Указывается только для преподавателей (если установлена галочка в поле "Является преподавателем")'}
                        >
                            Стаж преподавания на момент принятия на работу
                        </TextHint>
                        <Input
                            mask={Number}
                            min={0}
                            placeholder="Стаж преподавания на момент принятия на работу"
                            disabled={!addEmployeeData?.is_teacher}
                            required
                            invalid={
                                addEmployeeData?.teaching_experience && formWithErrors
                                    ? detectInvalidInput(addEmployeeValidationErrors, 'teaching_experience')
                                    : false
                            }
                            feedbackInvalid={setInvalidInputMessage(
                                detectInvalidInput(addEmployeeValidationErrors, 'teaching_experience'),
                                addEmployeeValidationErrors,
                                'qualification',
                            )}
                            value={addEmployeeData?.teaching_experience || ''}
                            onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeInput(event, 'teaching_experience');
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});
