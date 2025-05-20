import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CButton, CForm, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
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
import { getSpecialtiesData, SpecialtiesType } from 'entities/Specialties';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editSpecialityActions } from 'features/Specialties/EditSpeciality';
import {
    fetchSpecialityDetail,
    getSpecialityDetailData,
    getSpecialityDetailError,
    getSpecialityDetailIsLoading,
} from 'entities/SpecialityDetail';
import {
    editSpeciality,
} from 'features/Specialties/EditSpeciality/model/services/editSpeciality/editSpeciality';
import { detectInvalidInput } from 'shared/lib/errors/detectInvalidInput/detectInvalidInput';
import { setInvalidInputMessage } from 'shared/lib/errors/setInvalidInputMessage/setInvalidInputMessage';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditSpecialityIsLoading,
} from '../model/selectors/getEditSpecialityIsLoading/getEditSpecialityIsLoading';
import { getEditSpecialityError } from '../model/selectors/getEditSpecialityError/getEditSpecialityError';
import cls from './EditSpeciality.module.scss';
import {
    getEditSpecialityNewFieldsData,
} from '../model/selectors/getEditSpecialityNewFieldsData/getEditSpecialityNewFieldsData';

interface EditSpecialityProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    specialityId: string;
    onDeleteSpeciality: (speciality: SpecialtiesType) => void;
}
export const EditSpeciality = (props: EditSpecialityProps) => {
    const {
        className,
        visible,
        setVisible,
        specialityId,
        onDeleteSpeciality,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const specialityDetailData = useSelector(getSpecialityDetailData);
    const isLoadingSpecialityDetail = useSelector(getSpecialityDetailIsLoading);
    const errorSpecialityDetail = useSelector(getSpecialityDetailError);

    const isLoadingEditSpeciality = useSelector(getEditSpecialityIsLoading);
    const editSpecialityNewFieldsData = useSelector(getEditSpecialityNewFieldsData);
    const errorsEditSpeciality = useSelector(getEditSpecialityError);
    const qualifData = useSelector(getSpecialtiesData);

    useEffect(() => {
        if (specialityId) {
            dispatch(fetchSpecialityDetail(specialityId));
        }
    }, [dispatch, specialityId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editSpecialityActions.clearNewFields());
    };

    const onDeleteHandler = (speciality: SpecialtiesType) => {
        onDeleteSpeciality(speciality);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editSpecialityActions.setTitle(event.target.value));
    };

    const onChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editSpecialityActions.setCode(event.target.value));
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
            if (
                specialityDetailData?.speciality === editSpecialityNewFieldsData?.title
                && specialityDetailData?.shifr_spec === editSpecialityNewFieldsData?.code
            ) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editSpeciality(specialityId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о специальности успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditSpeciality || isLoadingSpecialityDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorSpecialityDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>Наименование специальности</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="маркетолог"
                                // @ts-ignore
                                feedbackValid={errorsEditSpeciality ? '' : 'Здорово!'}
                                invalid={!!errorsEditSpeciality}
                                feedbackInvalid="Введите корректные данные"
                                value={editSpecialityNewFieldsData?.title || ''}
                                onChange={onChangeInput}
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Код специальности</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="05200"
                                // @ts-ignore
                                feedbackValid={errorsEditSpeciality ? '' : 'Здорово!'}
                                invalid={!!errorsEditSpeciality}
                                feedbackInvalid="Введите корректные данные"
                                value={editSpecialityNewFieldsData?.code || ''}
                                onChange={onChangeCode}
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
                className={classNames(cls.EditSpeciality, {}, [className])}
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
                            isLoadingEditSpeciality || isLoadingSpecialityDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение специальности №
                                        {specialityDetailData?.id_spec}
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
                                onClick={() => { onDeleteHandler(specialityDetailData!); }}
                                disabled={isLoadingSpecialityDetail
                                    || isLoadingEditSpeciality
                                    || !!errorSpecialityDetail}
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
                                disabled={isLoadingSpecialityDetail
                                    || isLoadingEditSpeciality
                                    || !!errorSpecialityDetail}
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
