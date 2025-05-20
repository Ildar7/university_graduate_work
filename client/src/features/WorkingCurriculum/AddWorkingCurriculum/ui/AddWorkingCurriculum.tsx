import React, {
    memo, ReactElement, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Input } from 'shared/ui/Input/Input';
import { CForm, CToaster } from '@coreui/react';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchStandardCurriculum,
    getStandardCurriculumData,
    getStandardCurriculumError,
    getStandardCurriculumIsLoading,
} from 'entities/StandardCurriculum';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import {
    fetchEducationBases,
    getEducationBasesData,
    getEducationBasesError,
    getEducationBasesIsLoading,
} from 'entities/EducationBases';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DatepickerInput } from 'shared/ui/DatepickerInput/DatepickerInput';
import { Toast } from 'shared/ui/Toast/Toast';
import cls from './AddWorkingCurriculum.module.scss';
import { addWorkingCurriculumActions } from '../model/slice/addWorkingCurriculumSlice';
import { addNewWorkingCurriculum } from '../model/services/addNewWorkingCurriculum/addNewWorkingCurriculum';
import {
    getAddWorkingCurriculumData,
    getAddWorkingCurriculumIsLoading,
} from '../model/selectors/getAddWorkingCurriculum/getAddWorkingCurriculum';

interface AddWorkingCurriculumProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
}

export const AddWorkingCurriculum = memo((props: AddWorkingCurriculumProps) => {
    const {
        className,
        onClose,
        isOpen,
    } = props;
    const dispatch = useAppDispatch();

    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [academicYearsList, setAcademicYearsList] = useState<string[]>([]);
    const [selectedEduForm, setSelectedEduForm] = useState('null');
    const [selectedEduBases, setSelectedEduBases] = useState('null');

    const addWorkingCurriculumData = useSelector(getAddWorkingCurriculumData);
    const addWorkingCurriculumIsLoading = useSelector(getAddWorkingCurriculumIsLoading);

    const standardCurriculumData = useSelector(getStandardCurriculumData);
    const standardCurriculumIsLoading = useSelector(getStandardCurriculumIsLoading);
    const standardCurriculumError = useSelector(getStandardCurriculumError);

    const educationBasesData = useSelector(getEducationBasesData);
    const educationBasesIsLoading = useSelector(getEducationBasesIsLoading);
    const educationBasesError = useSelector(getEducationBasesError);

    const standardCurriculumTitles = useMemo(() => (
        standardCurriculumData?.map((curriculum) => (
            `№${curriculum.standard_curriculum_id}: ${curriculum.specialty.shifr_spec} - ${curriculum.specialty.speciality}`
        ))
            .sort((a, b) => Number(a) - Number(b))
    ), [standardCurriculumData]);

    const educationFormsTitles = useMemo(() => ['очная', 'заочная'], []);

    const educationBasesTitles = useMemo(() => (
        educationBasesData?.map((eduBase) => `${eduBase.short_name}`)
    ), [educationBasesData]);

    const selectedSpecialty = useMemo(() => {
        const parsedCurriculumId = Number(addWorkingCurriculumData?.standard_curriculum_id?.split(':')[0].split('№')[1]);
        const filteredStandardCurriculum = standardCurriculumData?.filter((curriculum) => (
            curriculum.standard_curriculum_id === parsedCurriculumId
        ))[0];

        if (filteredStandardCurriculum) {
            return `${filteredStandardCurriculum.specialty.shifr_spec} - ${filteredStandardCurriculum.specialty.speciality}`;
        }

        return '';
    }, [addWorkingCurriculumData?.standard_curriculum_id, standardCurriculumData]);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(addWorkingCurriculumActions.setInputData([filterName, event.target.value]));
    };

    const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addWorkingCurriculumActions.checkHandler(event.target.checked));
    };

    const onChangeSelect = useCallback((value: string, columnName: string) => {
        dispatch(addWorkingCurriculumActions.setInputData([columnName, value]));
    }, [dispatch]);

    const onChangeEduBases = useCallback((value: string, columnName: string) => {
        setSelectedEduBases(value);
        const filteredEduBase = educationBasesData?.filter((eduBase) => eduBase.short_name === value)[0];
        dispatch(addWorkingCurriculumActions.changeEducationBaseId(filteredEduBase?.id_education_bases || null));
    }, [dispatch, educationBasesData]);

    const onChangeEduForm = useCallback((value: string, columnName: string) => {
        setSelectedEduForm(value);
        dispatch(addWorkingCurriculumActions.changeFullTimeEducation(value.toLowerCase() === 'очная'));
    }, [dispatch]);

    const onChangeDate = (date: Date | null) => {
        dispatch(addWorkingCurriculumActions.setApprovalDate(date ? format(new Date(date), 'yyyy-MM-dd') : null));
    };

    const onCancelHandler = useCallback(() => {
        onClose();
        setSelectedEduForm('null');
        setSelectedEduBases('null');
        dispatch(addWorkingCurriculumActions.clearData());
    }, [dispatch, onClose]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            if (
                addWorkingCurriculumData?.title
                && addWorkingCurriculumData.standard_curriculum_id
                && addWorkingCurriculumData.education_base_id
                && addWorkingCurriculumData.is_full_time_education !== null
                && addWorkingCurriculumData.academic_year_from
                && addWorkingCurriculumData.approval_date
            ) {
                const result = await dispatch(addNewWorkingCurriculum());

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('РУП добавлен'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            } else {
                addToast(Toast.error('Заполните все поля!'));
                setFormWithErrors(true);
            }
        }
    };

    useEffect(() => {
        dispatch(fetchStandardCurriculum());
        dispatch(fetchEducationBases());
    }, [dispatch]);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 2000;
        const yearsArray = [];

        for (let year = currentYear; year >= startYear; year--) {
            yearsArray.push(`${year} - ${year + 1}`);
        }
        setAcademicYearsList(yearsArray);
    }, []);

    let content;

    if (standardCurriculumIsLoading || educationBasesIsLoading) {
        content = (
            <Skeleton width="100%" height={300} />
        );
    } else if (standardCurriculumError || educationBasesError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <>
                <Input
                    placeholder="Название"
                    value={addWorkingCurriculumData?.title || ''}
                    onChange={
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                            onChangeInput(event, 'title');
                        }
                    }
                />
                <SearchSelect
                    label="Типовой учебный план"
                    options={standardCurriculumTitles!}
                    columnName="standard_curriculum_id"
                    optionValue={String(addWorkingCurriculumData?.standard_curriculum_id) || ''}
                    onClickOption={onChangeSelect}
                />
                <Input
                    placeholder="Специальность"
                    value={selectedSpecialty}
                    readonly
                />
                <Checkbox
                    label="Активен"
                    id="add_working_curriculum_is_active"
                    checked={addWorkingCurriculumData?.is_active}
                    onChange={onCheckHandler}
                />
                <SearchSelect
                    label="База образования"
                    options={educationBasesTitles!}
                    columnName="education_base_id"
                    optionValue={selectedEduBases}
                    onClickOption={onChangeEduBases}
                />
                <SearchSelect
                    label="Форма обучения"
                    options={educationFormsTitles!}
                    columnName=""
                    optionValue={selectedEduForm}
                    onClickOption={onChangeEduForm}
                />
                <SearchSelect
                    placeholder="Академический год"
                    searchDisabled
                    options={academicYearsList!}
                    columnName="academic_year_from"
                    optionValue={addWorkingCurriculumData?.academic_year_from || 'null'}
                    onClickOption={onChangeSelect}
                />
                <div className={cls.approvalDateWrapper}>
                    <DatePicker
                        selected={
                            addWorkingCurriculumData?.approval_date ? new Date(addWorkingCurriculumData.approval_date) : null
                        }
                        onChange={onChangeDate}
                        maxDate={new Date()}
                        locale={ru}
                        dropdownMode="scroll"
                        dateFormat="dd.MM.yyyy"
                        closeOnScroll
                        showMonthDropdown
                        showYearDropdown
                        showWeekNumbers
                        customInput={<DatepickerInput />}
                        placeholderText="Дата утверждения"
                    />
                </div>

                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_DARK}
                        className={cls.footerBtn}
                        onClick={onCancelHandler}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Отмена
                        </Text>
                        <Icon Svg={CloseBorderedIcon} />
                    </Button>
                    <Button
                        type="submit"
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.footerBtn}
                        disabled={addWorkingCurriculumIsLoading}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Добавить
                        </Text>
                        <Icon Svg={PlusBorderedIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                className={classNames(cls.AddWorkingCurriculum, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title="Создание РУП"
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    {content}
                </CForm>
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
