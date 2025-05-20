import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { CForm, CToaster } from '@coreui/react';
import React, {
    ReactElement, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { checkObjectProperties } from 'shared/lib/helpers/checkObjectProperties/checkObjectProperties';
import { Input } from 'shared/ui/Input/Input';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Modal } from 'shared/ui/Modal/Modal';
import {
    fetchSpecialties,
    getSpecialtiesData,
    getSpecialtiesError,
    getSpecialtiesIsLoading,
} from 'entities/Specialties';
import {
    fetchQualifications,
    getQualificationsData,
    getQualificationsError,
    getQualificationsIsLoading,
} from 'entities/Qualifications';
import {
    fetchEducationBases,
    getEducationBasesData,
    getEducationBasesError,
    getEducationBasesIsLoading,
} from 'entities/EducationBases';
import { tableSortActions } from 'features/TableSort';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import {
    fetchLanguages, getLanguagesData, getLanguagesError, getLanguagesIsLoading,
} from 'entities/Languages';
import { AddStudentGroupErrorApi } from 'features/StudentGroups/AddStudentGroups/model/types/addStudentGroups';
import { getStudentCode } from 'shared/lib/helpers/studentGroups/getStudentCode/getStudentCode';
import { addStudentGroup } from '../model/services/addStudentGroup/addStudentGroup';
import cls from './AddStudentGroups.module.scss';
import {
    getAddStudentGroupData,
    getAddStudentGroupErrors,
} from '../model/selectors/getAddStudentGroup/getAddStudentGroup';
import { addStudentGroupsActions } from '../model/slice/addStudentGroupsSlice';

interface AddStudentGroupProps {
    className?: string;
    isOpen: boolean;
    setVisible: (value: boolean) => void;
}

export const AddStudentGroups = (props: AddStudentGroupProps) => {
    const {
        className,
        isOpen,
        setVisible,
    } = props;
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [yearsList, setYearsList] = useState<string[]>([]);
    const [selectedEduBases, setSelectedEduBases] = useState('null');
    const [selectedEduForm, setSelectedEduForm] = useState('null');
    const [selectedSpecialty, setSelectedSpecialty] = useState('null');
    const [selectedLanguage, setSelectedLanguage] = useState('null');
    const [selectedQualifications, setSelectedQualifications] = useState<string[]>([]);
    const [groupCode, setGroupCode] = useState('');

    const studyDuration = useMemo(() => ['1', '2', '3', '4'], []);
    const educationFormsTitles = useMemo(() => ['очная', 'заочная'], []);

    const dispatch = useAppDispatch();

    const addStudentGroupData = useSelector(getAddStudentGroupData);
    const addStudentGroupValidationErrors = useSelector(getAddStudentGroupErrors);

    const specialtiesData = useSelector(getSpecialtiesData);
    const specialtiesIsLoading = useSelector(getSpecialtiesIsLoading);
    const specialtiesError = useSelector(getSpecialtiesError);

    const qualificationsData = useSelector(getQualificationsData);
    const qualificationsIsLoading = useSelector(getQualificationsIsLoading);
    const qualificationsError = useSelector(getQualificationsError);

    const eduBaseData = useSelector(getEducationBasesData);
    const eduBaseIsLoading = useSelector(getEducationBasesIsLoading);
    const eduBaseError = useSelector(getEducationBasesError);

    const languagesData = useSelector(getLanguagesData);
    const languagesIsLoading = useSelector(getLanguagesIsLoading);
    const languagesError = useSelector(getLanguagesError);

    const btnDisabled = specialtiesIsLoading || qualificationsIsLoading
        || eduBaseIsLoading || languagesIsLoading || !!specialtiesError
        || !!qualificationsError || !!eduBaseError || !!languagesError;

    const specialtiesTitles = useMemo(() => (
        specialtiesData?.data.map((specialty) => (
            `${specialty.shifr_spec} - ${specialty.speciality}`
        ))
    ), [specialtiesData]);

    const qualificationsFiltered = useMemo(() => (
        qualificationsData?.data.filter((qualification) => (
            qualification.specialty_id === addStudentGroupData?.id_specialty
        ))
    ), [addStudentGroupData?.id_specialty, qualificationsData?.data]);

    const educationBasesTitles = useMemo(() => (
        eduBaseData?.map((eduBase) => `${eduBase.short_name}`)
    ), [eduBaseData]);

    const languagesTitles = useMemo(() => (
        languagesData?.map((language) => `${language.language}`)
    ), [languagesData]);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(addStudentGroupsActions.setInputData([filterName, event.target.value]));
    };

    const onChangeSerialNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.includes('.')) {
            addToast(Toast.error('Только целые числа!'));
            return;
        }

        if (Number(event.target.value) < 0) {
            addToast(Toast.error('Допустимы только положительные числа!'));
            dispatch(addStudentGroupsActions.changeSerialNumber(Number(event.target.value[1])));
            return;
        }

        if (Number(event.target.value) > 9) {
            addToast(Toast.error('Порядковый номер не может быть двузначным числом!'));
            dispatch(addStudentGroupsActions.changeSerialNumber(Number(event.target.value[0])));
            return;
        }

        dispatch(addStudentGroupsActions.changeSerialNumber(Number(event.target.value) || null));
    };

    const onChangeSelect = useCallback((value: string, columnName: string) => {
        dispatch(addStudentGroupsActions.setInputData([columnName, Number(value)]));
    }, [dispatch]);

    const onChangeSpecialty = useCallback((value: string, columnName: string) => {
        setSelectedSpecialty(value);
        setSelectedQualifications([]);
        dispatch(addStudentGroupsActions.changeQualifications(null));
        const filteredSpecialty = specialtiesData?.data.filter((specialty) => `${specialty.shifr_spec} - ${specialty.speciality}` === value)[0];
        dispatch(addStudentGroupsActions.changeSpecialty(filteredSpecialty?.id_spec || null));
    }, [dispatch, specialtiesData?.data]);

    const onSelectQualification = useCallback((value: string, columnName: string) => {
        const foundItem = selectedQualifications.filter((item) => item === value)[0];
        let selectedQuals = [];
        if (foundItem) {
            const filteredItems = selectedQualifications.filter((item) => item !== value);
            setSelectedQualifications(filteredItems);
            selectedQuals = filteredItems;
        } else {
            setSelectedQualifications((prevState) => [...prevState, value]);
            selectedQuals = [...selectedQualifications, value];
        }

        const selectedQualsIds: number[] = [];
        selectedQuals.forEach((selectedQual) => {
            qualificationsData?.data.forEach((qual) => {
                if (selectedQual === qual.qualification) {
                    selectedQualsIds.push(qual.id_qual);
                }
            });
        });

        dispatch(addStudentGroupsActions.changeQualifications(selectedQualsIds));
    }, [dispatch, qualificationsData?.data, selectedQualifications]);

    const onChangeEduBases = useCallback((value: string, columnName: string) => {
        setSelectedEduBases(value);
        const filteredEduBase = eduBaseData?.filter((eduBase) => eduBase.short_name === value)[0];
        dispatch(addStudentGroupsActions.changeEducationBaseId(filteredEduBase?.id_education_bases || null));
    }, [dispatch, eduBaseData]);

    const onChangeEduForm = useCallback((value: string, columnName: string) => {
        setSelectedEduForm(value);
        dispatch(addStudentGroupsActions.changeFullTimeEducation(value.toLowerCase() === 'очная'));
    }, [dispatch]);

    const onChangeLanguages = useCallback((value: string, columnName: string) => {
        setSelectedLanguage(value);
        const filteredLanguage = languagesData?.filter((language) => language.language === value)[0];
        dispatch(addStudentGroupsActions.changeLanguage(filteredLanguage?.id_languages || null));
    }, [dispatch, languagesData]);

    const onClose = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onCancelHandler = useCallback(() => {
        onClose();
        setSelectedEduForm('null');
        setSelectedEduBases('null');
        setSelectedSpecialty('null');
        setSelectedLanguage('null');
        setSelectedQualifications([]);
        dispatch(addStudentGroupsActions.clearData());
    }, [dispatch, onClose]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            if (checkObjectProperties(addStudentGroupData)) {
                const result = await dispatch(addStudentGroup());

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Группа добавлена'));
                    onCancelHandler();
                }
            } else {
                addToast(Toast.error('Заполните все поля!'));
            }
        }
    };

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 2000;
        const yearsArray = [];

        for (let year = currentYear; year >= startYear; year--) {
            yearsArray.push(`${year}`);
        }
        setYearsList(yearsArray);
    }, []);

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_spec'));
        dispatch(fetchSpecialties());
        dispatch(tableSortActions.setSort('id_qual'));
        dispatch(fetchQualifications());
        dispatch(fetchEducationBases());
        dispatch(fetchLanguages());
    }, [dispatch]);

    useEffect(() => {
        if (addStudentGroupData?.enrollment_year
            && addStudentGroupData.short_name
            && addStudentGroupData.course
        && addStudentGroupData.serial_number) {
            const code = getStudentCode(
                addStudentGroupData.enrollment_year,
                addStudentGroupData.short_name,
                addStudentGroupData.course,
                addStudentGroupData.serial_number,
            );
            setGroupCode(code);
        } else {
            setGroupCode('Заполните все данные');
        }
    }, [addStudentGroupData?.course,
        addStudentGroupData?.enrollment_year,
        addStudentGroupData?.serial_number,
        addStudentGroupData?.short_name]);

    useEffect(() => {
        if (addStudentGroupValidationErrors) {
            const validationErrors = addStudentGroupValidationErrors.errors as AddStudentGroupErrorApi[];
            if (validationErrors.length) {
                validationErrors.forEach((error) => {
                    addToast(Toast.error(error.msg));
                });
            }
        }
    }, [addStudentGroupValidationErrors]);

    let tabsContent;

    if (specialtiesIsLoading || qualificationsIsLoading || eduBaseIsLoading || languagesIsLoading) {
        tabsContent = (
            <Skeleton width="100%" height={500} />
        );
    } else if (specialtiesError || qualificationsError || eduBaseError || languagesError) {
        tabsContent = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        tabsContent = (
            <>
                <Input
                    placeholder="Название"
                    value={addStudentGroupData?.name || ''}
                    onChange={
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                            onChangeInput(event, 'name');
                        }
                    }
                />
                <SearchSelect
                    label="Специальность"
                    options={specialtiesTitles!}
                    columnName="id_specialty"
                    optionValue={selectedSpecialty}
                    onClickOption={onChangeSpecialty}
                    searchDisabled
                />
                <SearchSelect
                    label="Квалификации"
                    options={qualificationsFiltered?.map((qualification) => qualification.qualification) || []}
                    columnName="qualifications"
                    optionValue={selectedQualifications}
                    onClickOption={onSelectQualification}
                    multiSelect
                    disabled={!addStudentGroupData?.id_specialty}
                />
                <SearchSelect
                    label="Год поступления"
                    options={yearsList}
                    columnName="enrollment_year"
                    optionValue={String(addStudentGroupData?.enrollment_year) || ''}
                    onClickOption={onChangeSelect}
                    searchDisabled
                />
                <SearchSelect
                    label="Продолжительность обучения"
                    options={studyDuration}
                    columnName="study_duration"
                    optionValue={String(addStudentGroupData?.study_duration) || ''}
                    onClickOption={onChangeSelect}
                    searchDisabled
                />
                <Input
                    label="Короткое имя"
                    placeholder="ГГ"
                    value={addStudentGroupData?.short_name || ''}
                    maxLength={3}
                    onChange={
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                            onChangeInput(event, 'short_name');
                        }
                    }
                />
                <SearchSelect
                    label="Курс"
                    options={studyDuration}
                    columnName="course"
                    optionValue={String(addStudentGroupData?.course) || ''}
                    onClickOption={onChangeSelect}
                    searchDisabled
                />
                <Input
                    label="Порядковый номер"
                    placeholder="7"
                    type="number"
                    min={1}
                    max={9}
                    value={addStudentGroupData?.serial_number || ''}
                    onChange={onChangeSerialNumber}
                />
                <Input
                    placeholder="Код"
                    value={groupCode}
                    label="Код группы"
                    disabled
                />
                <SearchSelect
                    label="Язык обучения"
                    options={languagesTitles!}
                    columnName="id_language"
                    optionValue={selectedLanguage}
                    onClickOption={onChangeLanguages}
                />
                <SearchSelect
                    label="База образования"
                    options={educationBasesTitles!}
                    columnName="id_education_base"
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
                        disabled={btnDisabled}
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
                className={classNames(cls.AddStudentGroups, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title="Создание группы"
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    {tabsContent}
                </CForm>
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
