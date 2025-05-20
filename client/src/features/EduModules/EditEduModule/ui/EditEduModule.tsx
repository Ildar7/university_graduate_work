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
    ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { EducationalModulesData } from 'entities/EducationalModules';
import {
    fetchEducationalModuleDetail,
    getEducationalModuleDetailData, getEducationalModuleDetailError,
    getEducationalModuleDetailIsLoading,
} from 'entities/EducationalModuleDetail';
import { addEduModuleActions } from 'features/EduModules/AddEduModule';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { editEduModuleActions } from '../model/slice/editEduModuleSlice';
import {
    editEduModule,
} from '../model/services/editEduModule/editEduModule';
import {
    getEditEduModuleIsLoading,
} from '../model/selectors/getEditEduModuleIsLoading/getEditEduModuleIsLoading';
import { getEditEduModuleError } from '../model/selectors/getEditEduModuleError/getEditEduModuleError';
import cls from './EditEduModule.module.scss';
import {
    getEditEduModuleNewFieldsData,
} from '../model/selectors/getEditEduModuleNewFieldsData/getEditEduModuleNewFieldsData';
import {
    getEditEduModuleData,
} from '../model/selectors/getEditEduModuleData/getEditEduModuleData';

interface EditEduModuleProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    eduModuleId: string;
    onDeleteEduModule: (eduModule: EducationalModulesData) => void;
}
export const EditEduModule = (props: EditEduModuleProps) => {
    const {
        className,
        visible,
        setVisible,
        eduModuleId,
        onDeleteEduModule,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const eduModuleDetailData = useSelector(getEducationalModuleDetailData);
    const isLoadingEduModuleDetail = useSelector(getEducationalModuleDetailIsLoading);
    const errorEduModuleDetail = useSelector(getEducationalModuleDetailError);

    const editEduModuleData = useSelector(getEditEduModuleData);
    const isLoadingEditEduModule = useSelector(getEditEduModuleIsLoading);
    const editEduModuleNewFieldsData = useSelector(getEditEduModuleNewFieldsData);
    const errorsEditEduModule = useSelector(getEditEduModuleError);

    useEffect(() => {
        if (eduModuleId) {
            dispatch(fetchEducationalModuleDetail(eduModuleId));
        }
    }, [dispatch, eduModuleId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editEduModuleActions.clearNewFields());
    };

    const onDeleteHandler = (eduModule: EducationalModulesData) => {
        onDeleteEduModule(eduModule);
        onCloseModal();
    };

    const onChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editEduModuleActions.setName(event.target.value));
    }, [dispatch]);

    const onChangeShortName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editEduModuleActions.setShortName(event.target.value));
    }, [dispatch]);

    const onChangeSort = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editEduModuleActions.setSort(event.target.value));
    }, [dispatch]);

    const onChangeStudyTimeInCredits = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editEduModuleActions.setStudyTimeInCredits(event.target.value));
    }, [dispatch]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            const data = clearObject(editEduModuleData, editEduModuleNewFieldsData);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editEduModule(eduModuleId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о модуле успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditEduModule || isLoadingEduModuleDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorEduModuleDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>Название</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="Базовые модули"
                                // @ts-ignore
                                feedbackValid={errorsEditEduModule ? '' : 'Здорово!'}
                                invalid={!!errorsEditEduModule}
                                feedbackInvalid="Введите корректные данные"
                                value={editEduModuleNewFieldsData?.name || ''}
                                onChange={onChangeName}
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Сокращение</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="БМ"
                                // @ts-ignore
                                feedbackValid={errorsEditEduModule ? '' : 'Здорово!'}
                                invalid={!!errorsEditEduModule}
                                feedbackInvalid="Введите корректные данные"
                                value={editEduModuleNewFieldsData?.short_name || ''}
                                onChange={onChangeShortName}
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Сортировка</h6>
                            <CFormInputWithMask
                                type="number"
                                placeholder="100"
                                min={100}
                                step={100}
                                // @ts-ignore
                                feedbackValid={errorsEditEduModule ? '' : 'Здорово!'}
                                invalid={!!errorsEditEduModule}
                                feedbackInvalid="Введите корректные данные"
                                value={String(editEduModuleNewFieldsData?.sort) || ''}
                                onChange={onChangeSort}
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Кредитов на модуль</h6>
                            <CFormInputWithMask
                                type="number"
                                placeholder="60"
                                // @ts-ignore
                                feedbackValid={errorsEditEduModule ? '' : 'Здорово!'}
                                invalid={!!errorsEditEduModule}
                                feedbackInvalid="Введите корректные данные"
                                value={String(editEduModuleNewFieldsData?.study_time_in_credits) || ''}
                                onChange={onChangeStudyTimeInCredits}
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
                className={classNames(cls.EditEduModule, {}, [className])}
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
                            isLoadingEditEduModule || isLoadingEduModuleDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение модуля №
                                        {eduModuleDetailData?.module_id}
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
                                onClick={() => { onDeleteHandler(eduModuleDetailData!); }}
                                disabled={isLoadingEduModuleDetail
                                    || isLoadingEditEduModule
                                    || !!errorEduModuleDetail}
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
                                disabled={isLoadingEduModuleDetail
                                    || isLoadingEditEduModule
                                    || !!errorEduModuleDetail}
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
