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
import { EventsTypesType } from 'entities/EventsTypes';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editEventsTypeActions } from 'features/EventsTypes/EditEventsType';
import {
    fetchEventsTypeDetail,
    getEventsTypeDetailData,
    getEventsTypeDetailError,
    getEventsTypeDetailIsLoading,
} from 'entities/EventsTypeDetail';
import {
    editEventsType,
} from 'features/EventsTypes/EditEventsType/model/services/editEventsType/editEventsType';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditEventsTypeIsLoading,
} from '../model/selectors/getEditEventsTypeIsLoading/getEditEventsTypeIsLoading';
import { getEditEventsTypeError } from '../model/selectors/getEditEventsTypeError/getEditEventsTypeError';
import cls from './EditEventsType.module.scss';
import {
    getEditEventsTypeNewFieldsData,
} from '../model/selectors/getEditEventsTypeNewFieldsData/getEditEventsTypeNewFieldsData';

interface EditEventsTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    eventsTypeId: string;
    onDeleteEventsType: (eventsType: EventsTypesType) => void;
}
export const EditEventsType = (props: EditEventsTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        eventsTypeId,
        onDeleteEventsType,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const eventsTypeDetailData = useSelector(getEventsTypeDetailData);
    const isLoadingEventsTypeDetail = useSelector(getEventsTypeDetailIsLoading);
    const errorEventsTypeDetail = useSelector(getEventsTypeDetailError);

    const isLoadingEditEventsType = useSelector(getEditEventsTypeIsLoading);
    const editEventsTypeNewFieldsData = useSelector(getEditEventsTypeNewFieldsData);
    const errorsEditEventsType = useSelector(getEditEventsTypeError);

    useEffect(() => {
        if (eventsTypeId) {
            dispatch(fetchEventsTypeDetail(eventsTypeId));
        }
    }, [dispatch, eventsTypeId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editEventsTypeActions.clearNewFields());
    };

    const onDeleteHandler = (eventsType: EventsTypesType) => {
        onDeleteEventsType(eventsType);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editEventsTypeActions.setTitle(event.target.value));
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
            if (eventsTypeDetailData?.typeofevent === editEventsTypeNewFieldsData) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editEventsType(eventsTypeId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о типе соревнования успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditEventsType || isLoadingEventsTypeDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorEventsTypeDetail) {
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
                                placeholder="не участвовал"
                                // @ts-ignore
                                feedbackValid={errorsEditEventsType ? '' : 'Здорово!'}
                                invalid={!!errorsEditEventsType}
                                feedbackInvalid="Введите корректные данные"
                                value={editEventsTypeNewFieldsData || ''}
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
                className={classNames(cls.EditEventsType, {}, [className])}
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
                            isLoadingEditEventsType || isLoadingEventsTypeDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение типа соревнования №
                                        {eventsTypeDetailData?.id_typeofevent}
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
                                onClick={() => { onDeleteHandler(eventsTypeDetailData!); }}
                                disabled={isLoadingEventsTypeDetail
                                    || isLoadingEditEventsType
                                    || !!errorEventsTypeDetail}
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
                                disabled={isLoadingEventsTypeDetail
                                    || isLoadingEditEventsType
                                    || !!errorEventsTypeDetail}
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
