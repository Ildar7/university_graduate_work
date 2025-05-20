import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import CIcon from '@coreui/icons-react';
import { cilSave, cilTrash, cilWarning } from '@coreui/icons';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import React, {
    ReactElement, useEffect, useRef, useState,
} from 'react';
import { EduFormsType } from 'entities/EduForms';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editEduFormActions } from 'features/EduForms/EditEduForm';
import {
    fetchEduFormDetail,
    getEduFormDetailData,
    getEduFormDetailError,
    getEduFormDetailIsLoading,
} from 'entities/EduFormDetail';
import {
    editEduForm,
} from 'features/EduForms/EditEduForm/model/services/editEduForm/editEduForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditEduFormIsLoading,
} from '../model/selectors/getEditEduFormIsLoading/getEditEduFormIsLoading';
import { getEditEduFormError } from '../model/selectors/getEditEduFormError/getEditEduFormError';
import cls from './EditEduForm.module.scss';
import {
    getEditEduFormNewFieldsData,
} from '../model/selectors/getEditEduFormNewFieldsData/getEditEduFormNewFieldsData';

interface EditEduFormProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    eduFormId: string;
    onDeleteEduForm: (eduForm: EduFormsType) => void;
}
export const EditEduForm = (props: EditEduFormProps) => {
    const {
        className,
        visible,
        setVisible,
        eduFormId,
        onDeleteEduForm,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const eduFormDetailData = useSelector(getEduFormDetailData);
    const isLoadingEduFormDetail = useSelector(getEduFormDetailIsLoading);
    const errorEduFormDetail = useSelector(getEduFormDetailError);

    const isLoadingEditEduForm = useSelector(getEditEduFormIsLoading);
    const editEduFormNewFieldsData = useSelector(getEditEduFormNewFieldsData);
    const errorsEditEduForm = useSelector(getEditEduFormError);

    useEffect(() => {
        if (eduFormId) {
            dispatch(fetchEduFormDetail(eduFormId));
        }
    }, [dispatch, eduFormId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editEduFormActions.clearNewFields());
    };

    const onDeleteHandler = (eduForm: EduFormsType) => {
        onDeleteEduForm(eduForm);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editEduFormActions.setTitle(event.target.value));
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
            if (eduFormDetailData?.typeoftraining === editEduFormNewFieldsData) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editEduForm(eduFormId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о форме обучения успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditEduForm || isLoadingEduFormDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorEduFormDetail) {
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
            <div className={cls.tab}>
                <div className={cls.tabBlock}>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Наименование</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="очная"
                                // @ts-ignore
                                feedbackValid={errorsEditEduForm ? '' : 'Здорово!'}
                                invalid={!!errorsEditEduForm}
                                feedbackInvalid="Введите корректные данные"
                                value={editEduFormNewFieldsData || ''}
                                onChange={onChangeInput}
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
                className={classNames(cls.EditEduForm, {}, [className])}
                visible={visible}
                onClose={onCloseModal}
                size="lg"
                alignment="center"
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <CModalHeader>
                        {
                            isLoadingEditEduForm || isLoadingEduFormDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение формы обучения №
                                        {eduFormDetailData?.id_typeoftraining}
                                    </CModalTitle>
                                )
                        }
                    </CModalHeader>
                    <CModalBody>
                        {content}
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
                                theme={ButtonTheme.ERROR}
                                className={classNames(cls.footerBtn, {}, [cls.redBtn])}
                                onClick={() => { onDeleteHandler(eduFormDetailData!); }}
                                disabled={isLoadingEduFormDetail
                                    || isLoadingEditEduForm
                                    || !!errorEduFormDetail}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Удалить
                                </Text>
                                <CIcon icon={cilTrash} className={cls.btnIcon} />
                            </Button>
                            <Button
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                                disabled={isLoadingEduFormDetail
                                    || isLoadingEditEduForm
                                    || !!errorEduFormDetail}
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
