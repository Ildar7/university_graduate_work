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
import { FinSourcesType } from 'entities/FinSources';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editFinSourceActions } from 'features/FinSources/EditFinSource';
import {
    fetchFinSourceDetail,
    getFinSourceDetailData,
    getFinSourceDetailError,
    getFinSourceDetailIsLoading,
} from 'entities/FinSourceDetail';
import { editFinSource } from 'features/FinSources/EditFinSource/model/services/editFinSource/editFinSource';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getEditFinSourceIsLoading } from '../model/selectors/getEditFinSourceIsLoading/getEditFinSourceIsLoading';
import { getEditFinSourceError } from '../model/selectors/getEditFinSourceError/getEditFinSourceError';
import cls from './EditFinSource.module.scss';
import {
    getEditFinSourceNewFieldsData,
} from '../model/selectors/getEditFinSourceNewFieldsData/getEditFinSourceNewFieldsData';

interface EditFinSourceProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    finSourceId: string;
    onDeleteFinSource: (finSource: FinSourcesType) => void;
}
export const EditFinSource = (props: EditFinSourceProps) => {
    const {
        className,
        visible,
        setVisible,
        finSourceId,
        onDeleteFinSource,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const finSourceDetailData = useSelector(getFinSourceDetailData);
    const isLoadingFinSourceDetail = useSelector(getFinSourceDetailIsLoading);
    const errorFinSourceDetail = useSelector(getFinSourceDetailError);

    const isLoadingEditFinSource = useSelector(getEditFinSourceIsLoading);
    const editFinSourceNewFieldsData = useSelector(getEditFinSourceNewFieldsData);
    const errorsEditFinSource = useSelector(getEditFinSourceError);

    useEffect(() => {
        if (finSourceId) {
            dispatch(fetchFinSourceDetail(finSourceId));
        }
    }, [dispatch, finSourceId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editFinSourceActions.clearNewFields());
    };

    const onDeleteHandler = (finSource: FinSourcesType) => {
        onDeleteFinSource(finSource);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editFinSourceActions.setTitle(event.target.value));
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
            if (finSourceDetailData?.whopaying === editFinSourceNewFieldsData) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editFinSource(finSourceId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о финансовой помощи успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditFinSource || isLoadingFinSourceDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorFinSourceDetail) {
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
                                placeholder="госзаказ"
                                // @ts-ignore
                                feedbackValid={errorsEditFinSource ? '' : 'Здорово!'}
                                invalid={!!errorsEditFinSource}
                                feedbackInvalid="Введите корректные данные"
                                value={editFinSourceNewFieldsData || ''}
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
                className={classNames(cls.EditFinSource, {}, [className])}
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
                            isLoadingEditFinSource || isLoadingFinSourceDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение финансовой помощи №
                                        {finSourceDetailData?.id_whopaying}
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
                                onClick={() => { onDeleteHandler(finSourceDetailData!); }}
                                disabled={isLoadingFinSourceDetail
                                    || isLoadingEditFinSource
                                    || !!errorFinSourceDetail}
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
                                disabled={isLoadingFinSourceDetail
                                    || isLoadingEditFinSource
                                    || !!errorFinSourceDetail}
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
