import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import React, {
    ReactElement, useCallback, useEffect, useRef, useState,
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
import { cilSave, cilWarning } from '@coreui/icons';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    addStandardCurriculumActions,
    AddStandardCurriculumData,
    AddStandardCurriculumQualificationTrainingTimeToSend,
    calculateQualificationTrainingTime,
    getAddEditStandardCurriculumQualificationData,
} from 'features/StandardCurriculum/AddStandardCurriculum';
import {
    AddStandardCurriculumQualificationTrainingTime,
    NewQualificationFields,
} from 'features/StandardCurriculum/AddStandardCurriculum/model/types/addStandardCurriculum';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import {
    editStandardCurriculumActions,
    getEditEditStandardCurriculumQualificationData,
} from 'features/StandardCurriculum/EditStandardCurriculum';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getSettingsMainCollegeData,
    getSettingsMainCollegeError,
    getSettingsMainCollegeIsLoading,
} from 'entities/Settings/SettingsMainCollege';
import cls from './EditStandardCurriculumQualificationModal.module.scss';

type ModalMode = 'add' | 'edit';

interface EditStandardCurriculumQualificationModalProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    data?: AddStandardCurriculumData;
    mode: ModalMode;
    qualId: number;
}
export const EditStandardCurriculumQualificationModal = (props: EditStandardCurriculumQualificationModalProps) => {
    const {
        className,
        visible,
        setVisible,
        data,
        mode,
        qualId,
    } = props;

    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [minCreditsValue, setMinCreditsValue] = useState(0);
    const [maxCreditsValue, setMaxCreditsValue] = useState(0);

    const coreOptionsData = useSelector(getSettingsMainCollegeData);
    const coreOptionsIsLoading = useSelector(getSettingsMainCollegeIsLoading);
    const coreOptionsError = useSelector(getSettingsMainCollegeError);

    const editData = useSelector(
        mode === 'add'
            ? getAddEditStandardCurriculumQualificationData
            : getEditEditStandardCurriculumQualificationData,
    );

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const addingAndEditingPageSetNeedItem = () => {
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.setEditQualificationItem(
                data!.structure.qualifications.filter((qualification) => qualification.qualification_id === qualId)[0],
            ));
        } else {
            dispatch(editStandardCurriculumActions.setEditQualificationItem(
                data!.structure.qualifications.filter((qualification) => qualification.qualification_id === qualId)[0],
            ));
        }
    };

    const onCancelHandler = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
        addingAndEditingPageSetNeedItem();
    };

    const onChangeNewQualificationField = (value: string, columnName: string) => {
        if (value.includes('.')) {
            addToast(Toast.error('Только целые числа!'));
            return;
        }

        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeEditQualificationField([value, columnName as NewQualificationFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeEditQualificationField([value, columnName as NewQualificationFields]));
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            const dataToChange = clearObject(editData?.data, editData?.newFields);

            if (isEmptyObject(dataToChange)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const dataToCalculateTrainingTime = {
                    compulsory_education_basic_credits_from: editData?.newFields?.compulsory_education_basic_credits_from,
                    compulsory_education_basic_credits_to: editData?.newFields?.compulsory_education_basic_credits_to,
                    compulsory_education_general_credits_from: editData?.newFields?.compulsory_education_general_credits_from,
                    compulsory_education_general_credits_to: editData?.newFields?.compulsory_education_general_credits_to,
                    consultations_hours_per_academic_year: editData?.newFields?.consultations_hours_per_academic_year,
                    extracurricular_activities_hours_per_week: editData?.newFields?.extracurricular_activities_hours_per_week,
                };

                if (!dataToCalculateTrainingTime.compulsory_education_basic_credits_from
                    || !dataToCalculateTrainingTime.compulsory_education_basic_credits_to
                || !dataToCalculateTrainingTime.compulsory_education_general_credits_from
                || !dataToCalculateTrainingTime.compulsory_education_general_credits_to
                || !dataToCalculateTrainingTime.extracurricular_activities_hours_per_week
                || !dataToCalculateTrainingTime.consultations_hours_per_academic_year) {
                    setFormWithErrors(true);
                } else {
                    if (editData!.newFields!.compulsory_education_basic_credits_from!
                        > editData!.newFields!.compulsory_education_basic_credits_to!
                        || editData!.newFields!.compulsory_education_general_credits_from!
                        > editData!.newFields!.compulsory_education_general_credits_to!) {
                        addToast(Toast.error('Проверьте правильность заполненных полей (минимальное не может превышать максимальное)'));
                        return;
                    }

                    const trainingTimeResponse = await dispatch(calculateQualificationTrainingTime(
                        dataToCalculateTrainingTime as AddStandardCurriculumQualificationTrainingTimeToSend,
                    ));

                    if (trainingTimeResponse.meta.requestStatus === 'fulfilled') {
                        if (mode === 'add') {
                            dispatch(addStandardCurriculumActions.saveEditQualificationChanges([qualId, editData!.newFields!]));
                            dispatch(addStandardCurriculumActions.addTrainingTimeToQualification(
                                [
                                    qualId,
                                    trainingTimeResponse.payload as AddStandardCurriculumQualificationTrainingTime,
                                ],
                            ));
                        } else {
                            dispatch(editStandardCurriculumActions.saveEditQualificationChanges([qualId, editData!.newFields!]));
                            dispatch(editStandardCurriculumActions.addTrainingTimeToQualification(
                                [
                                    qualId,
                                    trainingTimeResponse.payload as AddStandardCurriculumQualificationTrainingTime,
                                ],
                            ));
                        }

                        addToast(Toast.success('Информация о квалификации успешно обновлена'));
                        onCancelHandler();
                    }

                    if (trainingTimeResponse.meta.requestStatus === 'rejected') {
                        setFormWithErrors(true);
                    }
                }
            }
        }
    };

    useEffect(() => {
        if (data && qualId && visible) {
            addingAndEditingPageSetNeedItem();
        }
        // eslint-disable-next-line
    }, [data, dispatch, qualId, visible]);

    useEffect(() => {
        if (coreOptionsData) {
            const minValue = coreOptionsData.knrtu_kai.options
                .filter((option) => option.name === 'credits_per_academic_year')[0].value;
            const maxValue = Number(coreOptionsData.knrtu_kai.options
                .filter((option) => option.name === 'max_academic_years')[0].value) * Number(minValue);

            setMinCreditsValue(Number(minValue));
            setMaxCreditsValue(Number(maxValue));
        }
    }, [coreOptionsData]);

    return (
        <>
            <CModal
                className={classNames(cls.EditStandardCurriculumQualificationModal, {}, [className])}
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
                        <CModalTitle>Редактирование квалификации</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className={cls.tab}>
                            <div className={cls.tabBlock}>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Индекс сортировки*</h6>
                                        <CFormInput
                                            type="number"
                                            placeholder="100"
                                            min={100}
                                            step={100}
                                            value={String(editData?.newFields?.sort) || ''}
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
                                            value={String(editData?.newFields?.compulsory_education_basic_credits_from) || ''}
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
                                            value={String(editData?.newFields?.compulsory_education_basic_credits_to) || ''}
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
                                            value={String(editData?.newFields?.compulsory_education_general_credits_from) || ''}
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
                                            value={String(editData?.newFields?.compulsory_education_general_credits_to) || ''}
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
                                            value={String(editData?.newFields?.extracurricular_activities_hours_per_week) || ''}
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
                                            value={String(editData?.newFields?.consultations_hours_per_academic_year) || ''}
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
                                onClick={onCancelHandler}
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
                                    Сохранить
                                </Text>
                                <CIcon icon={cilSave} className={cls.btnIcon} />
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
