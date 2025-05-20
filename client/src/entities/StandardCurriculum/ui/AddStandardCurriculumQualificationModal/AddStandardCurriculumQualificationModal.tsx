import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import React, {
    ReactElement, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import {
    CButton,
    CForm,
    CFormInput,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilWarning } from '@coreui/icons';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    addStandardCurriculumActions,
    AddStandardCurriculumData,
    calculateQualificationTrainingTime,
    getAddStandardCurriculumNewQualificationModalData,
} from 'features/StandardCurriculum/AddStandardCurriculum';
import {
    fetchQualifications,
    getQualificationsData,
    getQualificationsError,
    getQualificationsIsLoading,
} from 'entities/Qualifications';
import {
    AddStandardCurriculumQualificationTrainingTime,
    NewQualificationFields,
} from 'features/StandardCurriculum/AddStandardCurriculum/model/types/addStandardCurriculum';
import { tableSortActions } from 'features/TableSort';
import {
    editStandardCurriculumActions,
    getEditStandardCurriculumNewQualificationModalData,
} from 'features/StandardCurriculum/EditStandardCurriculum';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getSettingsMainCollegeData,
    getSettingsMainCollegeError,
    getSettingsMainCollegeIsLoading,
} from 'entities/Settings/SettingsMainCollege';
import cls from './AddStandardCurriculumQualificationModal.module.scss';

type ModalMode = 'add' | 'edit';

interface AddStandardCurriculumQualificationModalProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    data?: AddStandardCurriculumData;
    mode: ModalMode;
}
export const AddStandardCurriculumQualificationModal = (props: AddStandardCurriculumQualificationModalProps) => {
    const {
        className,
        visible,
        setVisible,
        data,
        mode,
    } = props;

    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [minCreditsValue, setMinCreditsValue] = useState(0);
    const [maxCreditsValue, setMaxCreditsValue] = useState(0);

    const qualifications = useSelector(getQualificationsData);
    const qualificationsIsLoading = useSelector(getQualificationsIsLoading);
    const qualificationsError = useSelector(getQualificationsError);

    const coreOptionsData = useSelector(getSettingsMainCollegeData);
    const coreOptionsIsLoading = useSelector(getSettingsMainCollegeIsLoading);
    const coreOptionsError = useSelector(getSettingsMainCollegeError);

    const newQualificationData = useSelector(
        mode === 'add'
            ? getAddStandardCurriculumNewQualificationModalData
            : getEditStandardCurriculumNewQualificationModalData,
    );

    const filteredQualifications = qualifications?.data
        .filter((qualification) => qualification.specialty_id === data?.general_info.speciality_id);

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onCancelAdding = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.clearNewQualificationData());
        } else {
            dispatch(editStandardCurriculumActions.clearNewQualificationData());
        }
    };

    const onChangeNewQualificationId = (value: string, columnName: string) => {
        const filteredQualification = qualifications!.data.filter((qualification) => qualification.qualification === value)[0];

        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeNewQualificationField(
                [String(filteredQualification.id_qual), columnName as NewQualificationFields],
            ));
        } else {
            dispatch(editStandardCurriculumActions.changeNewQualificationField(
                [String(filteredQualification.id_qual), columnName as NewQualificationFields],
            ));
        }
    };

    const onChangeNewQualificationField = (value: string, columnName: string) => {
        if (value.includes('.')) {
            addToast(Toast.error('Только целые числа!'));
            return;
        }

        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeNewQualificationField([value, columnName as NewQualificationFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeNewQualificationField([value, columnName as NewQualificationFields]));
        }
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_qual'));
        dispatch(fetchQualifications());
    }, [dispatch]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            if (newQualificationData?.qualification_id && newQualificationData.sort
                && newQualificationData.extracurricular_activities_hours_per_week
            && newQualificationData.compulsory_education_general_credits_to && newQualificationData.compulsory_education_basic_credits_from
            && newQualificationData.compulsory_education_general_credits_from && newQualificationData.compulsory_education_basic_credits_to
            && newQualificationData.consultations_hours_per_academic_year) {
                const foundQualification = data?.structure.qualifications
                    .filter((qualification) => qualification.qualification_id === newQualificationData.qualification_id);
                if (foundQualification && foundQualification.length) {
                    addToast(Toast.error('Данная квалификация уже присутствует в списке'));
                    return;
                }

                if (newQualificationData.compulsory_education_basic_credits_from > newQualificationData.compulsory_education_basic_credits_to
                || newQualificationData.compulsory_education_general_credits_from > newQualificationData.compulsory_education_general_credits_to) {
                    addToast(Toast.error('Проверьте правильность заполненных полей (минимальное не может превышать максимальное)'));
                    return;
                }

                const dataToCalculateTrainingTime = {
                    compulsory_education_basic_credits_from: newQualificationData.compulsory_education_basic_credits_from,
                    compulsory_education_basic_credits_to: newQualificationData.compulsory_education_basic_credits_to,
                    compulsory_education_general_credits_from: newQualificationData.compulsory_education_general_credits_from,
                    compulsory_education_general_credits_to: newQualificationData.compulsory_education_general_credits_to,
                    consultations_hours_per_academic_year: newQualificationData.consultations_hours_per_academic_year,
                    extracurricular_activities_hours_per_week: newQualificationData.extracurricular_activities_hours_per_week,
                };

                const trainingTimeResponse = await dispatch(calculateQualificationTrainingTime(dataToCalculateTrainingTime));

                if (trainingTimeResponse.meta.requestStatus === 'fulfilled') {
                    if (mode === 'add') {
                        dispatch(addStandardCurriculumActions.addQualificationToStructure(newQualificationData));
                        dispatch(addStandardCurriculumActions.addTrainingTimeToQualification(
                            [
                                newQualificationData.qualification_id,
                                trainingTimeResponse.payload as AddStandardCurriculumQualificationTrainingTime,
                            ],
                        ));
                    } else {
                        dispatch(editStandardCurriculumActions.addQualificationToStructure(newQualificationData));
                        dispatch(editStandardCurriculumActions.addTrainingTimeToQualification(
                            [
                                newQualificationData.qualification_id,
                                trainingTimeResponse.payload as AddStandardCurriculumQualificationTrainingTime,
                            ],
                        ));
                    }

                    addToast(Toast.success('Квалификация добавлена'));
                    onCancelAdding();
                }

                if (trainingTimeResponse.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            } else {
                setFormWithErrors(true);
            }
        }
    };

    useEffect(() => {
        if (coreOptionsData) {
            const minValue = coreOptionsData.hectum_curriculum.options
                .filter((option) => option.name === 'credits_per_academic_year')[0].value;
            const maxValue = Number(coreOptionsData.hectum_curriculum.options
                .filter((option) => option.name === 'max_academic_years')[0].value) * Number(minValue);

            setMinCreditsValue(Number(minValue));
            setMaxCreditsValue(Number(maxValue));
        }
    }, [coreOptionsData]);

    let modalContent;

    if (qualificationsIsLoading || coreOptionsIsLoading) {
        modalContent = (
            <Skeleton width="100%" height={400} />
        );
    } else if (qualificationsError || coreOptionsError) {
        modalContent = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        modalContent = (
            <div className={cls.tab}>
                <div className={cls.tabBlock}>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Квалификация*</h6>
                            <SearchSelect
                                className={cls.selectField}
                                options={filteredQualifications && filteredQualifications.length
                                    ? filteredQualifications.map((qualification) => (
                                        qualification.qualification
                                    ))
                                    : ['']}
                                optionValue={newQualificationData?.qualification_id
                                    ? qualifications!.data.filter((qualification) => (
                                        qualification.id_qual === newQualificationData.qualification_id
                                    ))[0].qualification
                                    : 'null'}
                                onClickOption={onChangeNewQualificationId}
                                columnName="qualification_id"
                                disabled={!filteredQualifications?.length}
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Индекс сортировки*</h6>
                            <CFormInput
                                type="number"
                                placeholder="100"
                                min={100}
                                step={100}
                                value={String(newQualificationData?.sort) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewQualificationField(e.target.value, 'sort');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>
                                Итого кредитов на обязательное обучение на базе основного образования (минимум)*
                            </h6>
                            <CFormInput
                                type="number"
                                min={minCreditsValue}
                                max={maxCreditsValue}
                                value={String(newQualificationData?.compulsory_education_basic_credits_from) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewQualificationField(e.target.value, 'compulsory_education_basic_credits_from');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>
                                Итого кредитов на обязательное обучение на базе основного образования (максимум)*
                            </h6>
                            <CFormInput
                                type="number"
                                min={minCreditsValue}
                                max={maxCreditsValue}
                                value={String(newQualificationData?.compulsory_education_basic_credits_to) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewQualificationField(e.target.value, 'compulsory_education_basic_credits_to');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>
                                Итого кредитов на обязательное обучение на базе общего среднего образования (минимум)*
                            </h6>
                            <CFormInput
                                type="number"
                                min={minCreditsValue}
                                max={maxCreditsValue}
                                value={String(newQualificationData?.compulsory_education_general_credits_from) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewQualificationField(e.target.value, 'compulsory_education_general_credits_from');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>
                                Итого кредитов на обязательное обучение на базе общего среднего образования (максимум)*
                            </h6>
                            <CFormInput
                                type="number"
                                min={minCreditsValue}
                                max={maxCreditsValue}
                                value={String(newQualificationData?.compulsory_education_general_credits_to) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewQualificationField(e.target.value, 'compulsory_education_general_credits_to');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>
                                Факультативные занятия (часы в неделю)*
                            </h6>
                            <CFormInput
                                type="number"
                                min={0}
                                value={String(newQualificationData?.extracurricular_activities_hours_per_week) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewQualificationField(e.target.value, 'extracurricular_activities_hours_per_week');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>
                                Консультации (часы на учебный год)*
                            </h6>
                            <CFormInput
                                type="number"
                                min={0}
                                value={String(newQualificationData?.consultations_hours_per_academic_year) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewQualificationField(e.target.value, 'consultations_hours_per_academic_year');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <CModal
                className={classNames(cls.AddStandardCurriculumQualificationModal, {}, [className])}
                visible={visible}
                onClose={onCloseModal}
                size="lg"
                scrollable
                alignment="center"
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <CModalHeader>
                        <CModalTitle>Добавление квалификации</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        {modalContent}
                    </CModalBody>
                    <CModalFooter
                        className={cls.footer}
                    >
                        <div className={cls.message}>
                            {(formWithErrors) && (
                                <>
                                    <CIcon icon={cilWarning} customClassName={cls.messageIcon} />
                                    <Text
                                        size={TextSize.M}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        Форма заполнена некорректно
                                    </Text>
                                </>
                            )}
                        </div>
                        <div className={cls.footerBtns}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.footerBtn}
                                onClick={onCancelAdding}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Отмена
                                </Text>
                            </Button>
                            <Button
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Добавить
                                </Text>
                                <CIcon icon={cilPlus} className={cls.btnIcon} />
                            </Button>
                        </div>
                    </CModalFooter>
                </CForm>
            </CModal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
