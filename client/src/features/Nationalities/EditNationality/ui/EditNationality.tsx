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
import { NationalitiesType } from 'entities/Nationalities';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editNationalityActions } from 'features/Nationalities/EditNationality';
import {
    fetchNationalityDetail,
    getNationalityDetailData,
    getNationalityDetailError,
    getNationalityDetailIsLoading,
} from 'entities/NationalityDetail';
import {
    editNationality,
} from 'features/Nationalities/EditNationality/model/services/editNationality/editNationality';
import {
    getEditNationalityIsLoading,
} from '../model/selectors/getEditNationalityIsLoading/getEditNationalityIsLoading';
import { getEditNationalityError } from '../model/selectors/getEditNationalityError/getEditNationalityError';
import cls from './EditNationality.module.scss';
import {
    getEditNationalityNewFieldsData,
} from '../model/selectors/getEditNationalityNewFieldsData/getEditNationalityNewFieldsData';

interface EditNationalityProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    nationalityId: string;
    onDeleteNationality: (nationality: NationalitiesType) => void;
}
export const EditNationality = (props: EditNationalityProps) => {
    const {
        className,
        visible,
        setVisible,
        nationalityId,
        onDeleteNationality,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const nationalityDetailData = useSelector(getNationalityDetailData);
    const isLoadingNationalityDetail = useSelector(getNationalityDetailIsLoading);
    const errorNationalityDetail = useSelector(getNationalityDetailError);

    const isLoadingEditNationality = useSelector(getEditNationalityIsLoading);
    const editNationalityNewFieldsData = useSelector(getEditNationalityNewFieldsData);
    const errorsEditNationality = useSelector(getEditNationalityError);

    useEffect(() => {
        if (nationalityId) {
            dispatch(fetchNationalityDetail(nationalityId));
        }
    }, [dispatch, nationalityId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editNationalityActions.clearNewFields());
    };

    const onDeleteHandler = (nationality: NationalitiesType) => {
        onDeleteNationality(nationality);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editNationalityActions.setTitle(event.target.value));
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
            if (nationalityDetailData?.nationality === editNationalityNewFieldsData) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editNationality(nationalityId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о национальности успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditNationality || isLoadingNationalityDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorNationalityDetail) {
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
                                placeholder="казахи"
                                // @ts-ignore
                                feedbackValid={errorsEditNationality ? '' : 'Здорово!'}
                                invalid={!!errorsEditNationality}
                                feedbackInvalid="Введите корректные данные"
                                value={editNationalityNewFieldsData || ''}
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
                className={classNames(cls.EditNationality, {}, [className])}
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
                            isLoadingEditNationality || isLoadingNationalityDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение национальности №
                                        {nationalityDetailData?.id_nationality}
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
                            <CButton
                                color="primary"
                                variant="outline"
                                className={cls.footerBtn}
                                onClick={onCancelHandler}
                            >
                                Отмена
                            </CButton>
                            <CButton
                                color="danger"
                                className={classNames(cls.footerBtn, {}, [cls.redBtn])}
                                onClick={() => { onDeleteHandler(nationalityDetailData!); }}
                                disabled={isLoadingNationalityDetail
                                    || isLoadingEditNationality
                                    || !!errorNationalityDetail}
                            >
                                <CIcon icon={cilTrash} className={cls.btnIcon} />
                                Удалить
                            </CButton>
                            <CButton
                                color="success"
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                                disabled={isLoadingNationalityDetail
                                    || isLoadingEditNationality
                                    || !!errorNationalityDetail}
                            >
                                <CIcon icon={cilSave} className={cls.btnIcon} />
                                Сохранить
                            </CButton>
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
