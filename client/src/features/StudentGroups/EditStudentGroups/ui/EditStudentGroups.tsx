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
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import {
    fetchEducationBases,
    getEducationBasesData,
    getEducationBasesError,
    getEducationBasesIsLoading,
} from 'entities/EducationBases';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { Toast } from 'shared/ui/Toast/Toast';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
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
    fetchLanguages, getLanguagesData, getLanguagesError, getLanguagesIsLoading,
} from 'entities/Languages';
import { checkObjectProperties } from 'shared/lib/helpers/checkObjectProperties/checkObjectProperties';
import {
    fetchStudentGroupDetail,
    getStudentGroupDetailError,
    getStudentGroupDetailIsLoading,
} from 'entities/StudentGroupDetail';
import { tableSortActions } from 'features/TableSort';
import CheckIcon from 'shared/assets/icons/check.svg';
import { editStudentGroups } from '../model/services/editStudentGroups/editStudentGroups';
import { editStudentGroupsActions } from '../model/slice/editStudentGroupsSlice';
import cls from './EditStudentGroups.module.scss';
import {
    getEditStudentGroupsData,
    getEditStudentGroupsErrors,
    getEditStudentGroupsIsLoading,
    getEditStudentGroupsNewFields,
} from '../model/selectors/getEditStudentGroups/getEditStudentGroups';
import { EditStudentGroupsErrorApi } from '../model/types/editStudentGroups';

interface EditStudentGroupProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    studentGroupId: string;
}

export const EditStudentGroups = memo((props: EditStudentGroupProps) => {
    const {
        className,
        onClose,
        isOpen,
        studentGroupId,
    } = props;
    const dispatch = useAppDispatch();

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

    const studentGroupDetailIsLoading = useSelector(getStudentGroupDetailIsLoading);
    const studentGroupDetailError = useSelector(getStudentGroupDetailError);

    const editStudentGroupData = useSelector(getEditStudentGroupsData);
    const editStudentGroupNewFields = useSelector(getEditStudentGroupsNewFields);
    const editStudentGroupIsLoading = useSelector(getEditStudentGroupsIsLoading);
    const editStudentGroupErrors = useSelector(getEditStudentGroupsErrors);

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

    const specialtiesTitles = useMemo(() => (
        specialtiesData?.data.map((specialty) => (
            `${specialty.shifr_spec} - ${specialty.speciality}`
        ))
    ), [specialtiesData]);

    const qualificationsFiltered = useMemo(() => (
        qualificationsData?.data.filter((qualification) => (
            qualification.specialty_id === editStudentGroupNewFields?.id_specialty
        ))
    ), [editStudentGroupNewFields?.id_specialty, qualificationsData?.data]);

    const educationBasesTitles = useMemo(() => (
        eduBaseData?.map((eduBase) => `${eduBase.short_name}`)
    ), [eduBaseData]);

    const languagesTitles = useMemo(() => (
        languagesData?.map((language) => `${language.language}`)
    ), [languagesData]);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(editStudentGroupsActions.setInputData([filterName, event.target.value]));
    };

    const onChangeSerialNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.includes('.')) {
            addToast(Toast.error('Только целые числа!'));
            return;
        }

        if (Number(event.target.value) < 0) {
            addToast(Toast.error('Допустимы только положительные числа!'));
            dispatch(editStudentGroupsActions.changeSerialNumber(Number(event.target.value[1])));
            return;
        }

        if (Number(event.target.value) > 9) {
            addToast(Toast.error('Порядковый номер не может быть двузначным числом!'));
            dispatch(editStudentGroupsActions.changeSerialNumber(Number(event.target.value[0])));
            return;
        }

        dispatch(editStudentGroupsActions.changeSerialNumber(Number(event.target.value) || null));
    };

    const onChangeSelect = useCallback((value: string, columnName: string) => {
        dispatch(editStudentGroupsActions.setInputData([columnName, Number(value)]));
    }, [dispatch]);

    const onChangeSpecialty = useCallback((value: string, columnName: string) => {
        setSelectedSpecialty(value);
        setSelectedQualifications([]);
        dispatch(editStudentGroupsActions.changeQualifications(null));
        const filteredSpecialty = specialtiesData?.data.filter((specialty) => `${specialty.shifr_spec} - ${specialty.speciality}` === value)[0];
        dispatch(editStudentGroupsActions.changeSpecialty(filteredSpecialty?.id_spec || null));
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

        dispatch(editStudentGroupsActions.changeQualifications(selectedQualsIds));
    }, [dispatch, qualificationsData?.data, selectedQualifications]);

    const onChangeEduBases = useCallback((value: string, columnName: string) => {
        setSelectedEduBases(value);
        const filteredEduBase = eduBaseData?.filter((eduBase) => eduBase.short_name === value)[0];
        dispatch(editStudentGroupsActions.changeEducationBaseId(filteredEduBase?.id_education_bases || null));
    }, [dispatch, eduBaseData]);

    const onChangeEduForm = useCallback((value: string, columnName: string) => {
        setSelectedEduForm(value);
        dispatch(editStudentGroupsActions.changeFullTimeEducation(value.toLowerCase() === 'очная'));
    }, [dispatch]);

    const onChangeLanguages = useCallback((value: string, columnName: string) => {
        setSelectedLanguage(value);
        const filteredLanguage = languagesData?.filter((language) => language.language === value)[0];
        dispatch(editStudentGroupsActions.changeLanguage(filteredLanguage?.id_languages || null));
    }, [dispatch, languagesData]);

    const onCancelHandler = useCallback(() => {
        onClose();
        setSelectedEduForm('null');
        setSelectedEduBases('null');
        setSelectedSpecialty('null');
        setSelectedLanguage('null');
        setSelectedQualifications([]);
        dispatch(editStudentGroupsActions.clearNewFields());
    }, [dispatch, onClose]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            const data = clearObject(editStudentGroupData, editStudentGroupNewFields);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else if (checkObjectProperties(editStudentGroupNewFields)) {
                const result = await dispatch(editStudentGroups(studentGroupId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о группе успешно обновлена'));
                    onCancelHandler();
                }
            } else {
                addToast(Toast.error('Заполните все поля!'));
            }
        }
    };

    useEffect(() => {
        if (isOpen) {
            dispatch(fetchStudentGroupDetail(studentGroupId));
            dispatch(tableSortActions.setSort('id_spec'));
            dispatch(fetchSpecialties());
            dispatch(tableSortActions.setSort('id_qual'));
            dispatch(fetchQualifications());
            dispatch(fetchEducationBases());
            dispatch(fetchLanguages());
        }
    }, [dispatch, isOpen, studentGroupId]);

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
        if (editStudentGroupData && isOpen) {
            setSelectedEduForm(editStudentGroupData.is_full_time ? 'очная' : 'заочная');
        }
    }, [editStudentGroupData, editStudentGroupData?.is_full_time, isOpen]);

    useEffect(() => {
        if (editStudentGroupData && isOpen) {
            const filteredEduBase = eduBaseData?.filter((eduBase) => (
                eduBase.id_education_bases === editStudentGroupData?.id_education_base
            ))[0];
            setSelectedEduBases(filteredEduBase!.short_name);
        }
    }, [editStudentGroupData, editStudentGroupData?.id_education_base, eduBaseData, isOpen]);

    useEffect(() => {
        if (editStudentGroupData && isOpen) {
            const filteredSpecialty = specialtiesData?.data.filter((specialty) => (
                specialty.id_spec === editStudentGroupData?.id_specialty
            ))[0];
            setSelectedSpecialty(filteredSpecialty!.speciality);
        }
    }, [editStudentGroupData, isOpen, specialtiesData?.data]);

    useEffect(() => {
        if (editStudentGroupData && isOpen) {
            const filteredLanguage = languagesData?.filter((language) => (
                language.id_languages === editStudentGroupData?.id_language
            ))[0];
            setSelectedLanguage(filteredLanguage!.language);
        }
    }, [editStudentGroupData, isOpen, languagesData]);

    useEffect(() => {
        if (editStudentGroupData && isOpen) {
            const selectedQuals: string[] = [];
            editStudentGroupData.qualifications.forEach((qualId) => {
                qualificationsData?.data.forEach((qual) => {
                    if (qualId === qual.id_qual) {
                        selectedQuals.push(qual.qualification);
                    }
                });
            });

            setSelectedQualifications(selectedQuals);
        }
    }, [editStudentGroupData, isOpen, languagesData, qualificationsData?.data]);

    useEffect(() => {
        if (editStudentGroupErrors) {
            const validationErrors = editStudentGroupErrors.errors as EditStudentGroupsErrorApi[];
            if (validationErrors.length) {
                validationErrors.forEach((error) => {
                    addToast(Toast.error(error.msg));
                });
            }
        }
    }, [editStudentGroupErrors]);

    useEffect(() => {
        if (editStudentGroupNewFields?.enrollment_year
            && editStudentGroupNewFields.short_name
            && editStudentGroupNewFields.course
            && editStudentGroupNewFields.serial_number) {
            const lastTwoSymbolsOfEnrollmentYear = String(editStudentGroupNewFields.enrollment_year).slice(2, 4);
            const code = `${lastTwoSymbolsOfEnrollmentYear}${editStudentGroupNewFields
                .short_name}-${editStudentGroupNewFields
                .course}${editStudentGroupNewFields
                .serial_number}`;
            setGroupCode(code);
        } else {
            setGroupCode('Заполните все данные');
        }
    }, [editStudentGroupNewFields?.course,
        editStudentGroupNewFields?.enrollment_year,
        editStudentGroupNewFields?.serial_number,
        editStudentGroupNewFields?.short_name]);

    let content;

    if (specialtiesIsLoading || qualificationsIsLoading || eduBaseIsLoading || languagesIsLoading || studentGroupDetailIsLoading) {
        content = (
            <Skeleton width="100%" height={300} />
        );
    } else if (specialtiesError || qualificationsError || eduBaseError || languagesError || studentGroupDetailError) {
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
                    value={editStudentGroupNewFields?.name || ''}
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
                    disabled={!editStudentGroupNewFields?.id_specialty}
                />
                <SearchSelect
                    label="Год поступления"
                    options={yearsList}
                    columnName="enrollment_year"
                    optionValue={String(editStudentGroupNewFields?.enrollment_year) || ''}
                    onClickOption={onChangeSelect}
                    searchDisabled
                />
                <SearchSelect
                    label="Продолжительность обучения"
                    options={studyDuration}
                    columnName="study_duration"
                    optionValue={String(editStudentGroupNewFields?.study_duration) || ''}
                    onClickOption={onChangeSelect}
                    searchDisabled
                />
                <Input
                    label="Короткое имя"
                    placeholder="ГГ"
                    value={editStudentGroupNewFields?.short_name || ''}
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
                    optionValue={String(editStudentGroupNewFields?.course) || ''}
                    onClickOption={onChangeSelect}
                    searchDisabled
                />
                <Input
                    label="Порядковый номер"
                    placeholder="7"
                    type="number"
                    min={1}
                    max={9}
                    value={editStudentGroupNewFields?.serial_number || ''}
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
                        disabled={editStudentGroupIsLoading}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Сохранить
                        </Text>
                        <Icon Svg={CheckIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                className={classNames(cls.EditStudentGroup, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title={`Редактирование группы №${studentGroupId}`}
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
