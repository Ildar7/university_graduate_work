import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import React, {
    ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
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
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilWarning } from '@coreui/icons';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    fetchEducationalModuleDetail,
    getEducationalModuleDetailData,
    getEducationalModuleDetailError,
    getEducationalModuleDetailIsLoading,
} from 'entities/EducationalModuleDetail';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AddEduUnit.module.scss';
import { addEduUnitActions } from '../model/slice/addEduUnitSlice';
import { getAddEduUnitData } from '../model/selectors/getAddEduUnitData/getAddEduUnitData';
import { getAddEduUnitErrors } from '../model/selectors/getAddEduUnitErrors/getAddEduUnitErrors';
import { addEduUnit } from '../model/services/addEduUnit/addEduUnit';

interface AddEduUnitProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    moduleId: number;
}
export const AddEduUnit = (props: AddEduUnitProps) => {
    const {
        className,
        visible,
        setVisible,
        moduleId,
    } = props;

    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const eduModuleDetailData = useSelector(getEducationalModuleDetailData);
    const eduModuleDetailIsLoading = useSelector(getEducationalModuleDetailIsLoading);
    const eduModuleDetailError = useSelector(getEducationalModuleDetailError);

    const addEduUnitData = useSelector(getAddEduUnitData);
    const addEduUnitErrors = useSelector(getAddEduUnitErrors);

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onCancelAdding = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
    };

    const onChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addEduUnitActions.setName(event.target.value));
    }, [dispatch]);

    const onChangeSort = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addEduUnitActions.setSort(event.target.value));
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
            if (addEduUnitData?.name
                && addEduUnitData.sort) {
                const result = await dispatch(addEduUnit(moduleId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Модуль добавлен'));
                    onCancelAdding();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            } else {
                setFormWithErrors(true);
            }
        }
    };

    useEffect(() => {
        if (moduleId) {
            dispatch(fetchEducationalModuleDetail(`${moduleId}`));
        }
    }, [dispatch, moduleId]);

    let modalContent;

    if (eduModuleDetailIsLoading) {
        modalContent = (
            <Skeleton width="100%" height={80} />
        );
    } else if (eduModuleDetailError) {
        modalContent = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        modalContent = (
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
                            <h6 className={cls.newAddFieldTitle}>Название*</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="Развитие и совершенствование физических качеств"
                                // @ts-ignore
                                feedbackValid={addEduUnitErrors ? '' : 'Здорово!'}
                                invalid={!!addEduUnitErrors}
                                feedbackInvalid="Введите корректные данные!"
                                value={addEduUnitData?.name || ''}
                                onChange={onChangeName}
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Сортировка*</h6>
                            <CFormInputWithMask
                                type="number"
                                placeholder="100"
                                min={100}
                                step={100}
                                // @ts-ignore
                                feedbackValid={addEduUnitErrors ? '' : 'Здорово!'}
                                invalid={!!addEduUnitErrors}
                                feedbackInvalid="Введите корректные данные!"
                                value={String(addEduUnitData?.sort) || ''}
                                onChange={onChangeSort}
                                required
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
                className={classNames(cls.AddEduUnit, {}, [className])}
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
                        <CModalTitle>Добавить модульную единицу</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        {modalContent}
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
                                onClick={onCancelAdding}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Отмена
                                </Text>
                            </Button>
                            <Button
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Добавить
                                </Text>
                                <CIcon icon={cilPlus} className={cls.btnIcon} />
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
