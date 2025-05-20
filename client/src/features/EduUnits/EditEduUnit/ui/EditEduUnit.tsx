import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CButton,
    CForm,
    CFormInput,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CToaster,
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
import { EducationalUnitsData } from 'entities/EducationalModules';
import {
    fetchEducationalModuleDetail,
    getEducationalModuleDetailData,
    getEducationalModuleDetailError,
    getEducationalModuleDetailIsLoading,
} from 'entities/EducationalModuleDetail';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import {
    fetchEducationalUnitDetail,
    getEducationalUnitDetailData,
    getEducationalUnitDetailError,
    getEducationalUnitDetailIsLoading,
} from 'entities/EducationalUnitDetail';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { editEduUnitActions } from '../model/slice/editEduUnitSlice';
import { editEduUnit } from '../model/services/editEduUnit/editEduUnit';
import { getEditEduUnitIsLoading } from '../model/selectors/getEditEduUnitIsLoading/getEditEduUnitIsLoading';
import { getEditEduUnitError } from '../model/selectors/getEditEduUnitError/getEditEduUnitError';
import cls from './EditEduUnit.module.scss';
import { getEditEduUnitNewFieldsData } from '../model/selectors/getEditEduUnitNewFieldsData/getEditEduUnitNewFieldsData';
import { getEditEduUnitData } from '../model/selectors/getEditEduUnitData/getEditEduUnitData';

interface EditEduUnitProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    eduUnitId: string;
    eduModuleId: string;
    onDeleteEduUnit: (eduUnit: EducationalUnitsData) => void;
}
export const EditEduUnit = (props: EditEduUnitProps) => {
    const {
        className,
        visible,
        setVisible,
        eduUnitId,
        eduModuleId,
        onDeleteEduUnit,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const eduModuleDetailData = useSelector(getEducationalModuleDetailData);
    const isLoadingEduModuleDetail = useSelector(getEducationalModuleDetailIsLoading);
    const errorEduModuleDetail = useSelector(getEducationalModuleDetailError);

    const eduUnitDetailData = useSelector(getEducationalUnitDetailData);
    const isLoadingEduUnitDetail = useSelector(getEducationalUnitDetailIsLoading);
    const errorEduUnitDetail = useSelector(getEducationalUnitDetailError);

    const editEduUnitData = useSelector(getEditEduUnitData);
    const isLoadingEditEduUnit = useSelector(getEditEduUnitIsLoading);
    const editEduUnitNewFieldsData = useSelector(getEditEduUnitNewFieldsData);
    const errorsEditEduUnit = useSelector(getEditEduUnitError);

    useEffect(() => {
        if (eduModuleId) {
            dispatch(fetchEducationalModuleDetail(eduModuleId));
        }
    }, [dispatch, eduModuleId]);

    useEffect(() => {
        if (eduUnitId) {
            dispatch(fetchEducationalUnitDetail([eduModuleId, eduUnitId]));
        }
    }, [dispatch, eduModuleId, eduUnitId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editEduUnitActions.clearNewFields());
    };

    const onDeleteHandler = (eduUnit: EducationalUnitsData) => {
        onDeleteEduUnit(eduUnit);
        onCloseModal();
    };

    const onChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editEduUnitActions.setName(event.target.value));
    }, [dispatch]);

    const onChangeSort = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editEduUnitActions.setSort(event.target.value));
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
            const data = clearObject(editEduUnitData, editEduUnitNewFieldsData);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editEduUnit([eduModuleId, eduUnitId]));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о модульной единице успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (isLoadingEditEduUnit || isLoadingEduUnitDetail || isLoadingEduModuleDetail) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (errorEduUnitDetail || errorEduModuleDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>Модуль</h6>
                            <CFormInput
                                type="text"
                                value={`${eduModuleDetailData?.module_id} - ${eduModuleDetailData?.name}` || ''}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Название</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="Развитие и совершенствование физических качеств"
                                // @ts-ignore
                                feedbackValid={errorsEditEduUnit ? '' : 'Здорово!'}
                                invalid={!!errorsEditEduUnit}
                                feedbackInvalid="Введите корректные данные"
                                value={editEduUnitNewFieldsData?.name || ''}
                                onChange={onChangeName}
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
                                feedbackValid={errorsEditEduUnit ? '' : 'Здорово!'}
                                invalid={!!errorsEditEduUnit}
                                feedbackInvalid="Введите корректные данные"
                                value={String(editEduUnitNewFieldsData?.sort) || ''}
                                onChange={onChangeSort}
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
                className={classNames(cls.EditEduUnit, {}, [className])}
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
                            isLoadingEditEduUnit || isLoadingEduUnitDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение модульной единицы №
                                        {eduUnitDetailData?.unit_id}
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
                                onClick={() => { onDeleteHandler(eduUnitDetailData!); }}
                                disabled={isLoadingEduUnitDetail
                                    || isLoadingEditEduUnit
                                    || !!errorEduUnitDetail}
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
                                disabled={isLoadingEduUnitDetail
                                    || isLoadingEditEduUnit
                                    || !!errorEduUnitDetail}
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
