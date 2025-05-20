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
import { ResidenceTypesType } from 'entities/ResidenceTypes';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editResidenceTypeActions } from 'features/ResidenceTypes/EditResidenceType';
import {
    fetchResidenceTypeDetail,
    getResidenceTypeDetailData,
    getResidenceTypeDetailError,
    getResidenceTypeDetailIsLoading,
} from 'entities/ResidenceTypeDetail';
import {
    editResidenceType,
} from 'features/ResidenceTypes/EditResidenceType/model/services/editResidenceType/editResidenceType';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditResidenceTypeIsLoading,
} from '../model/selectors/getEditResidenceTypeIsLoading/getEditResidenceTypeIsLoading';
import { getEditResidenceTypeError } from '../model/selectors/getEditResidenceTypeError/getEditResidenceTypeError';
import cls from './EditResidenceType.module.scss';
import {
    getEditResidenceTypeNewFieldsData,
} from '../model/selectors/getEditResidenceTypeNewFieldsData/getEditResidenceTypeNewFieldsData';

interface EditResidenceTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    residenceTypeId: string;
    onDeleteResidenceType: (residenceType: ResidenceTypesType) => void;
}
export const EditResidenceType = (props: EditResidenceTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        residenceTypeId,
        onDeleteResidenceType,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const residenceTypeDetailData = useSelector(getResidenceTypeDetailData);
    const isLoadingResidenceTypeDetail = useSelector(getResidenceTypeDetailIsLoading);
    const errorResidenceTypeDetail = useSelector(getResidenceTypeDetailError);

    const isLoadingEditResidenceType = useSelector(getEditResidenceTypeIsLoading);
    const editResidenceTypeNewFieldsData = useSelector(getEditResidenceTypeNewFieldsData);
    const errorsEditResidenceType = useSelector(getEditResidenceTypeError);

    useEffect(() => {
        if (residenceTypeId) {
            dispatch(fetchResidenceTypeDetail(residenceTypeId));
        }
    }, [dispatch, residenceTypeId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editResidenceTypeActions.clearNewFields());
    };

    const onDeleteHandler = (residenceType: ResidenceTypesType) => {
        onDeleteResidenceType(residenceType);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editResidenceTypeActions.setTitle(event.target.value));
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
            if (residenceTypeDetailData?.typeofareaofresidence === editResidenceTypeNewFieldsData) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editResidenceType(residenceTypeId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о местожительстве успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditResidenceType || isLoadingResidenceTypeDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorResidenceTypeDetail) {
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
                                placeholder="городская местность"
                                // @ts-ignore
                                feedbackValid={errorsEditResidenceType ? '' : 'Здорово!'}
                                invalid={!!errorsEditResidenceType}
                                feedbackInvalid="Введите корректные данные"
                                value={editResidenceTypeNewFieldsData || ''}
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
                className={classNames(cls.EditResidenceType, {}, [className])}
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
                            isLoadingEditResidenceType || isLoadingResidenceTypeDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение местожительства №
                                        {residenceTypeDetailData?.id_typeofareaofresidence}
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
                                onClick={() => { onDeleteHandler(residenceTypeDetailData!); }}
                                disabled={isLoadingResidenceTypeDetail
                                    || isLoadingEditResidenceType
                                    || !!errorResidenceTypeDetail}
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
                                disabled={isLoadingResidenceTypeDetail
                                    || isLoadingEditResidenceType
                                    || !!errorResidenceTypeDetail}
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
