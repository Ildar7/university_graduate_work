import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import React, {
    ReactElement, useCallback, useRef, useState,
} from 'react';
import {
    CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilWarning } from '@coreui/icons';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AddEduModule.module.scss';
import { addEduModuleActions } from '../model/slice/addEduModuleSlice';
import {
    getAddEduModuleData,
} from '../model/selectors/getAddEduModuleData/getAddEduModuleData';
import {
    getAddEduModuleErrors,
} from '../model/selectors/getAddEduModuleErrors/getAddEduModuleErrors';
import { addEduModule } from '../model/services/addEduModule/addEduModule';

interface AddEduModuleProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
}
export const AddEduModule = (props: AddEduModuleProps) => {
    const {
        className,
        visible,
        setVisible,
    } = props;

    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const addEduModuleData = useSelector(getAddEduModuleData);
    const addEduModuleErrors = useSelector(getAddEduModuleErrors);

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onCancelAdding = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
    };

    const onChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addEduModuleActions.setName(event.target.value));
    }, [dispatch]);

    const onChangeShortName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addEduModuleActions.setShortName(event.target.value));
    }, [dispatch]);

    const onChangeSort = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addEduModuleActions.setSort(event.target.value));
    }, [dispatch]);

    const onChangeStudyTimeInCredits = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addEduModuleActions.setStudyTimeInCredits(event.target.value));
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
            if (addEduModuleData?.name
                && addEduModuleData.short_name
                && addEduModuleData.sort) {
                const result = await dispatch(addEduModule());

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

    return (
        <>
            <CModal
                className={classNames(cls.AddEduModule, {}, [className])}
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
                        <CModalTitle>Добавление модуля</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className={cls.tab}>
                            <div className={cls.tabBlock}>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Название*</h6>
                                        <CFormInputWithMask
                                            type="text"
                                            placeholder="Базовые модули"
                                            // @ts-ignore
                                            feedbackValid={addEduModuleErrors ? '' : 'Здорово!'}
                                            invalid={!!addEduModuleErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={addEduModuleData?.name || ''}
                                            onChange={onChangeName}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Сокращение*</h6>
                                        <CFormInputWithMask
                                            type="text"
                                            placeholder="БМ"
                                            // @ts-ignore
                                            feedbackValid={addEduModuleErrors ? '' : 'Здорово!'}
                                            invalid={!!addEduModuleErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={addEduModuleData?.short_name || ''}
                                            onChange={onChangeShortName}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Сортировка*</h6>
                                        <CFormInputWithMask
                                            type="number"
                                            min={100}
                                            step={100}
                                            placeholder="100"
                                            // @ts-ignore
                                            feedbackValid={addEduModuleErrors ? '' : 'Здорово!'}
                                            invalid={!!addEduModuleErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={String(addEduModuleData?.sort) || ''}
                                            onChange={onChangeSort}
                                            required
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
                                            feedbackValid={addEduModuleErrors ? '' : 'Здорово!'}
                                            invalid={!!addEduModuleErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={String(addEduModuleData?.study_time_in_credits) || ''}
                                            onChange={onChangeStudyTimeInCredits}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
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
