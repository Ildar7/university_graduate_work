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
import { PerformanceTypesType } from 'entities/PerformanceTypes';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editPerformanceTypeActions } from 'features/PerformanceTypes/EditPerformanceType';
import {
    fetchPerformanceTypeDetail,
    getPerformanceTypeDetailData,
    getPerformanceTypeDetailError,
    getPerformanceTypeDetailIsLoading,
} from 'entities/PerformanceTypeDetail';
import {
    editPerformanceType,
} from 'features/PerformanceTypes/EditPerformanceType/model/services/editPerformanceType/editPerformanceType';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditPerformanceTypeIsLoading,
} from '../model/selectors/getEditPerformanceTypeIsLoading/getEditPerformanceTypeIsLoading';
import { getEditPerformanceTypeError } from '../model/selectors/getEditPerformanceTypeError/getEditPerformanceTypeError';
import cls from './EditPerformanceType.module.scss';
import {
    getEditPerformanceTypeNewFieldsData,
} from '../model/selectors/getEditPerformanceTypeNewFieldsData/getEditPerformanceTypeNewFieldsData';

interface EditPerformanceTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    performanceTypeId: string;
    onDeletePerformanceType: (performanceType: PerformanceTypesType) => void;
}
export const EditPerformanceType = (props: EditPerformanceTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        performanceTypeId,
        onDeletePerformanceType,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const performanceTypeDetailData = useSelector(getPerformanceTypeDetailData);
    const isLoadingPerformanceTypeDetail = useSelector(getPerformanceTypeDetailIsLoading);
    const errorPerformanceTypeDetail = useSelector(getPerformanceTypeDetailError);

    const isLoadingEditPerformanceType = useSelector(getEditPerformanceTypeIsLoading);
    const editPerformanceTypeNewFieldsData = useSelector(getEditPerformanceTypeNewFieldsData);
    const errorsEditPerformanceType = useSelector(getEditPerformanceTypeError);

    useEffect(() => {
        if (performanceTypeId) {
            dispatch(fetchPerformanceTypeDetail(performanceTypeId));
        }
    }, [dispatch, performanceTypeId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editPerformanceTypeActions.clearNewFields());
    };

    const onDeleteHandler = (performanceType: PerformanceTypesType) => {
        onDeletePerformanceType(performanceType);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editPerformanceTypeActions.setTitle(event.target.value));
    };

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editPerformanceTypeActions.setValue(event.target.value));
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
            if (performanceTypeDetailData?.academicperformancesemester === editPerformanceTypeNewFieldsData?.title
            && performanceTypeDetailData?.perfomance_value === editPerformanceTypeNewFieldsData?.value) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editPerformanceType(performanceTypeId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о категории успеваемости успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditPerformanceType || isLoadingPerformanceTypeDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorPerformanceTypeDetail) {
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
                                placeholder="хорошо"
                                // @ts-ignore
                                feedbackValid={errorsEditPerformanceType ? '' : 'Здорово!'}
                                invalid={!!errorsEditPerformanceType}
                                feedbackInvalid="Введите корректные данные"
                                value={editPerformanceTypeNewFieldsData?.title || ''}
                                onChange={onChangeInput}
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Сумма</h6>
                            <CFormInputWithMask
                                type="number"
                                placeholder="4"
                                // @ts-ignore
                                feedbackValid={errorsEditPerformanceType ? '' : 'Здорово!'}
                                invalid={!!errorsEditPerformanceType}
                                feedbackInvalid="Введите корректные данные"
                                value={editPerformanceTypeNewFieldsData?.value
                                    ? editPerformanceTypeNewFieldsData?.value.toString()
                                    : ''
                                    || ''}
                                onChange={onChangeValue}
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
                className={classNames(cls.EditPerformanceType, {}, [className])}
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
                            isLoadingEditPerformanceType || isLoadingPerformanceTypeDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение категории успеваемости №
                                        {performanceTypeDetailData?.id_academicperformancesemester}
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
                                onClick={() => { onDeleteHandler(performanceTypeDetailData!); }}
                                disabled={isLoadingPerformanceTypeDetail
                                    || isLoadingEditPerformanceType
                                    || !!errorPerformanceTypeDetail}
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
                                disabled={isLoadingPerformanceTypeDetail
                                    || isLoadingEditPerformanceType
                                    || !!errorPerformanceTypeDetail}
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
