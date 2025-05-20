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
import { PracticeTypesType } from 'entities/PracticeTypes';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editPracticeTypeActions } from 'features/PracticeTypes/EditPracticeType';
import {
    fetchPracticeTypeDetail,
    getPracticeTypeDetailData,
    getPracticeTypeDetailError,
    getPracticeTypeDetailIsLoading,
} from 'entities/PracticeTypeDetail';
import {
    editPracticeType,
} from 'features/PracticeTypes/EditPracticeType/model/services/editPracticeType/editPracticeType';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditPracticeTypeIsLoading,
} from '../model/selectors/getEditPracticeTypeIsLoading/getEditPracticeTypeIsLoading';
import { getEditPracticeTypeError } from '../model/selectors/getEditPracticeTypeError/getEditPracticeTypeError';
import cls from './EditPracticeType.module.scss';
import {
    getEditPracticeTypeNewFieldsData,
} from '../model/selectors/getEditPracticeTypeNewFieldsData/getEditPracticeTypeNewFieldsData';

interface EditPracticeTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    practiceTypeId: string;
    onDeletePracticeType: (practiceType: PracticeTypesType) => void;
}
export const EditPracticeType = (props: EditPracticeTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        practiceTypeId,
        onDeletePracticeType,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const practiceTypeDetailData = useSelector(getPracticeTypeDetailData);
    const isLoadingPracticeTypeDetail = useSelector(getPracticeTypeDetailIsLoading);
    const errorPracticeTypeDetail = useSelector(getPracticeTypeDetailError);

    const isLoadingEditPracticeType = useSelector(getEditPracticeTypeIsLoading);
    const editPracticeTypeNewFieldsData = useSelector(getEditPracticeTypeNewFieldsData);
    const errorsEditPracticeType = useSelector(getEditPracticeTypeError);

    useEffect(() => {
        if (practiceTypeId) {
            dispatch(fetchPracticeTypeDetail(practiceTypeId));
        }
    }, [dispatch, practiceTypeId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editPracticeTypeActions.clearNewFields());
    };

    const onDeleteHandler = (practiceType: PracticeTypesType) => {
        onDeletePracticeType(practiceType);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editPracticeTypeActions.setTitle(event.target.value));
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
            if (practiceTypeDetailData?.practice === editPracticeTypeNewFieldsData) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editPracticeType(practiceTypeId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о виде практики успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditPracticeType || isLoadingPracticeTypeDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorPracticeTypeDetail) {
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
                                placeholder="не проходил"
                                // @ts-ignore
                                feedbackValid={errorsEditPracticeType ? '' : 'Здорово!'}
                                invalid={!!errorsEditPracticeType}
                                feedbackInvalid="Введите корректные данные"
                                value={editPracticeTypeNewFieldsData || ''}
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
                className={classNames(cls.EditPracticeType, {}, [className])}
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
                            isLoadingEditPracticeType || isLoadingPracticeTypeDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение вида практики №
                                        {practiceTypeDetailData?.id_practice}
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
                                onClick={() => { onDeleteHandler(practiceTypeDetailData!); }}
                                disabled={isLoadingPracticeTypeDetail
                                    || isLoadingEditPracticeType
                                    || !!errorPracticeTypeDetail}
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
                                disabled={isLoadingPracticeTypeDetail
                                    || isLoadingEditPracticeType
                                    || !!errorPracticeTypeDetail}
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
