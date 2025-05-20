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
import { StudentClubsType } from 'entities/StudentClubs';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { editStudentClubActions } from 'features/StudentClubs/EditStudentClub';
import {
    fetchStudentClubDetail,
    getStudentClubDetailData,
    getStudentClubDetailError,
    getStudentClubDetailIsLoading,
} from 'entities/StudentClubDetail';
import {
    editStudentClub,
} from 'features/StudentClubs/EditStudentClub/model/services/editStudentClub/editStudentClub';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditStudentClubIsLoading,
} from '../model/selectors/getEditStudentClubIsLoading/getEditStudentClubIsLoading';
import { getEditStudentClubError } from '../model/selectors/getEditStudentClubError/getEditStudentClubError';
import cls from './EditStudentClub.module.scss';
import {
    getEditStudentClubNewFieldsData,
} from '../model/selectors/getEditStudentClubNewFieldsData/getEditStudentClubNewFieldsData';

interface EditStudentClubProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    studentClubId: string;
    onDeleteStudentClub: (studentClub: StudentClubsType) => void;
}
export const EditStudentClub = (props: EditStudentClubProps) => {
    const {
        className,
        visible,
        setVisible,
        studentClubId,
        onDeleteStudentClub,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const studentClubDetailData = useSelector(getStudentClubDetailData);
    const isLoadingStudentClubDetail = useSelector(getStudentClubDetailIsLoading);
    const errorStudentClubDetail = useSelector(getStudentClubDetailError);

    const isLoadingEditStudentClub = useSelector(getEditStudentClubIsLoading);
    const editStudentClubNewFieldsData = useSelector(getEditStudentClubNewFieldsData);
    const errorsEditStudentClub = useSelector(getEditStudentClubError);

    useEffect(() => {
        if (studentClubId) {
            dispatch(fetchStudentClubDetail(studentClubId));
        }
    }, [dispatch, studentClubId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editStudentClubActions.clearNewFields());
    };

    const onDeleteHandler = (studentClub: StudentClubsType) => {
        onDeleteStudentClub(studentClub);
        onCloseModal();
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editStudentClubActions.setTitle(event.target.value));
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
            if (studentClubDetailData?.clubs === editStudentClubNewFieldsData) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editStudentClub(studentClubId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о студенческом клубе успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditStudentClub || isLoadingStudentClubDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorStudentClubDetail) {
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
                                placeholder="танцевальный"
                                // @ts-ignore
                                feedbackValid={errorsEditStudentClub ? '' : 'Здорово!'}
                                invalid={!!errorsEditStudentClub}
                                feedbackInvalid="Введите корректные данные"
                                value={editStudentClubNewFieldsData || ''}
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
                className={classNames(cls.EditStudentClub, {}, [className])}
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
                            isLoadingEditStudentClub || isLoadingStudentClubDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение студенческого клуба №
                                        {studentClubDetailData?.id_clubs}
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
                                onClick={() => { onDeleteHandler(studentClubDetailData!); }}
                                disabled={isLoadingStudentClubDetail
                                    || isLoadingEditStudentClub
                                    || !!errorStudentClubDetail}
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
                                disabled={isLoadingStudentClubDetail
                                    || isLoadingEditStudentClub
                                    || !!errorStudentClubDetail}
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
