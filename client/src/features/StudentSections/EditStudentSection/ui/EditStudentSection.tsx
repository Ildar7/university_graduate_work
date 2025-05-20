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
import { StudentSectionsType } from 'entities/StudentSections';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editStudentSectionActions } from 'features/StudentSections/EditStudentSection';
import {
    fetchStudentSectionDetail,
    getStudentSectionDetailData,
    getStudentSectionDetailError,
    getStudentSectionDetailIsLoading,
} from 'entities/StudentSectionDetail';
import {
    editStudentSection,
} from 'features/StudentSections/EditStudentSection/model/services/editStudentSection/editStudentSection';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditStudentSectionIsLoading,
} from '../model/selectors/getEditStudentSectionIsLoading/getEditStudentSectionIsLoading';
import { getEditStudentSectionError } from '../model/selectors/getEditStudentSectionError/getEditStudentSectionError';
import cls from './EditStudentSection.module.scss';
import {
    getEditStudentSectionNewFieldsData,
} from '../model/selectors/getEditStudentSectionNewFieldsData/getEditStudentSectionNewFieldsData';

interface EditStudentSectionProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    studentSectionId: string;
    onDeleteStudentSection: (studentSection: StudentSectionsType) => void;
}
export const EditStudentSection = (props: EditStudentSectionProps) => {
    const {
        className,
        visible,
        setVisible,
        studentSectionId,
        onDeleteStudentSection,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const studentSectionDetailData = useSelector(getStudentSectionDetailData);
    const isLoadingStudentSectionDetail = useSelector(getStudentSectionDetailIsLoading);
    const errorStudentSectionDetail = useSelector(getStudentSectionDetailError);

    const isLoadingEditStudentSection = useSelector(getEditStudentSectionIsLoading);
    const editStudentSectionNewFieldsData = useSelector(getEditStudentSectionNewFieldsData);
    const errorsEditStudentSection = useSelector(getEditStudentSectionError);

    useEffect(() => {
        if (studentSectionId) {
            dispatch(fetchStudentSectionDetail(studentSectionId));
        }
    }, [dispatch, studentSectionId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editStudentSectionActions.clearNewFields());
    };

    const onDeleteHandler = (studentSection: StudentSectionsType) => {
        onDeleteStudentSection(studentSection);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editStudentSectionActions.setTitle(event.target.value));
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
            if (studentSectionDetailData?.sections === editStudentSectionNewFieldsData) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editStudentSection(studentSectionId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о секции успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditStudentSection || isLoadingStudentSectionDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorStudentSectionDetail) {
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
                                placeholder="футбол"
                                // @ts-ignore
                                feedbackValid={errorsEditStudentSection ? '' : 'Здорово!'}
                                invalid={!!errorsEditStudentSection}
                                feedbackInvalid="Введите корректные данные"
                                value={editStudentSectionNewFieldsData || ''}
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
                className={classNames(cls.EditStudentSection, {}, [className])}
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
                            isLoadingEditStudentSection || isLoadingStudentSectionDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение секции №
                                        {studentSectionDetailData?.id_sections}
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
                                onClick={() => { onDeleteHandler(studentSectionDetailData!); }}
                                disabled={isLoadingStudentSectionDetail
                                    || isLoadingEditStudentSection
                                    || !!errorStudentSectionDetail}
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
                                disabled={isLoadingStudentSectionDetail
                                    || isLoadingEditStudentSection
                                    || !!errorStudentSectionDetail}
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
