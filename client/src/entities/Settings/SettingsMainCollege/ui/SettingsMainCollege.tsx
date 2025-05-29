import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import React, {
    ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { CFormInput, CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    getSettingsMainCollegeChangeFieldStatus,
} from 'entities/Settings/SettingsMainCollege/model/selectors/getSettingsMainCollegeChangeFieldStatus/getSettingsMainCollegeChangeFieldStatus';
import { Button } from 'shared/ui/Button/Button';
import { Text, TextWeight } from 'shared/ui/Text/Text';
import {
    changeCollegeCoreOptionField,
} from '../model/services/changeCollegeCoreOptionField/changeCollegeCoreOptionField';
import { settingsMainCollegeActions } from '../model/slice/settingsMainCollegeSlice';
import {
    getSettingsMainCollegeChangeFieldIsLoading,
} from '../model/selectors/getSettingsMainCollegeChangeFieldIsLoading/getSettingsMainCollegeChangeFieldIsLoading';
import {
    getSettingsMainCollegeChangeFieldError,
} from '../model/selectors/getSettingsMainCollegeChangeFieldError/getSettingsMainCollegeChangeFieldError';
import cls from './SettingsMainCollege.module.scss';
import { SettingsMainCollegeInnerData } from '../model/types/settingsMainCollege';
import { getSettingsMainCollegeData } from '../model/selectors/getSettingsMainCollegeData/getSettingsMainCollegeData';
import {
    getSettingsMainCollegeDataToChange,
} from '../model/selectors/getSettingsMainCollegeDataToChange/getSettingsMainCollegeDataToChange';

interface SettingsMainCollegeProps {
    className?: string;
    options: SettingsMainCollegeInnerData[];
    activeTabName: string;
}

const optionsKeysValues = {
    full_name: 'Полное имя',
    short_name: 'Короткое имя',
    teacher_rate_in_credits: 'Ставка преподавателя в кредитах',
    credit_in_hours: 'Кредитов/час',
    academ_hour_in_minutes: 'Академ. часы в минутах',
    credits_per_group: 'Кредитов на группу',
    max_academic_years: 'Максимальное кол-во академических лет',
    credits_per_academic_year: 'Кредитов в академ. годах',
    subject_schedule_max_shifts: 'Максимальное количество смен в тематическом расписании',
    max_courses: 'Максимальное кол-во курсов',
    training_days: 'Тренировочные дни',
    default_language: 'Язык (по умолчанию)',
};

export const SettingsMainCollege = (props: SettingsMainCollegeProps) => {
    const {
        className,
        options,
        activeTabName,
    } = props;
    const dispatch = useAppDispatch();

    const mainSettingsData = useSelector(getSettingsMainCollegeData);
    const mainSettingsDataToChange = useSelector(getSettingsMainCollegeDataToChange);

    const collegeOptionChangedStatus = useSelector(getSettingsMainCollegeChangeFieldStatus);
    const collegeOptionChangedError = useSelector(getSettingsMainCollegeChangeFieldError);
    const collegeOptionChangedIsLoading = useSelector(getSettingsMainCollegeChangeFieldIsLoading);

    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const editOptionValue = useCallback((optionId: number, optionValue: string, optionType: string) => {
        dispatch(settingsMainCollegeActions.editOptionValue([activeTabName, optionId, optionValue, optionType]));
    }, [activeTabName, dispatch]);

    const changeFieldValueHandler = () => {
        const pageData = mainSettingsData![activeTabName].options;
        const pageChangedData = mainSettingsDataToChange![activeTabName].options;

        // eslint-disable-next-line array-callback-return,consistent-return
        const changedDataToSend = pageData.map((option) => {
            const needChangedOption = pageChangedData
                .filter((changedOption) => changedOption.id === option.id)[0];

            if (needChangedOption.value !== option.value) {
                return {
                    [needChangedOption.id]: needChangedOption.value,
                };
            }
        });

        const onlyCleanChangesData = changedDataToSend.filter((changedData) => changedData);

        if (!onlyCleanChangesData.length) {
            addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            return;
        }

        const dataToSend = onlyCleanChangesData.reduce((
            result,
            currentObject,
        ) => Object.assign(result!, currentObject), {});

        dispatch(changeCollegeCoreOptionField(dataToSend!));
    };

    useEffect(() => {
        if (collegeOptionChangedError === 'ERROR') {
            addToast(Toast.error('Произошла ошибка при попытке сохранить изменения, попробуйте снова'));
            dispatch(settingsMainCollegeActions.undefineChangeError());
        }
    }, [collegeOptionChangedError, dispatch]);

    useEffect(() => {
        if (collegeOptionChangedStatus === 'Updated') {
            addToast(Toast.success('Изменения успешно сохранены'));
            dispatch(settingsMainCollegeActions.undefineChangeStatus());
        }
    }, [collegeOptionChangedStatus, dispatch]);

    return (
        <>
            <div className={classNames(cls.SettingsMainCollege, {}, [className])}>
                <div className={cls.section}>
                    {
                        options.map((option) => (
                            <div
                                className={cls.inputWrapper}
                                key={option.id}
                            >
                                <h6 className={cls.fieldTitle}>
                                    {/* @ts-ignore */}
                                    {optionsKeysValues[option.name]}
                                </h6>
                                <CFormInput
                                    type={option.type === 'string' ? 'text' : 'number'}
                                    value={String(option.value)}
                                    onChange={
                                        (event: React.ChangeEvent<HTMLInputElement>) => {
                                            editOptionValue(option.id, event.target.value, option.type);
                                        }
                                    }
                                />
                            </div>
                        ))
                    }
                </div>
                <Button
                    type="button"
                    onClick={changeFieldValueHandler}
                    className={cls.optionsSave}
                    disabled={collegeOptionChangedIsLoading}
                >
                    <Text
                        weight={TextWeight.SEMIBOLD}
                    >
                        Сохранить
                    </Text>
                </Button>
            </div>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
