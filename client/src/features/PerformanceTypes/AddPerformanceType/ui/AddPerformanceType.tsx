import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilWarning } from '@coreui/icons';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import React, {
    ReactElement, useCallback, useRef, useState,
} from 'react';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { useSelector } from 'react-redux';
import {
    getAddPerformanceTypeTitle,
} from 'features/PerformanceTypes/AddPerformanceType/model/selectors/getAddPerformanceTypeTitle/getAddPerformanceTypeTitle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addPerformanceTypeActions } from 'features/PerformanceTypes/AddPerformanceType';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    getAddPerformanceTypeValue,
} from 'features/PerformanceTypes/AddPerformanceType/model/selectors/getAddPerformanceTypeValue/getAddPerformanceTypeValue';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getAddPerformanceTypeError } from '../model/selectors/getAddPerformanceTypeError/getAddPerformanceTypeError';
import cls from './AddPerformanceType.module.scss';
import { addPerformanceType } from '../model/services/addPerformanceType/addPerformanceType';

interface AddPerformanceTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
}
export const AddPerformanceType = (props: AddPerformanceTypeProps) => {
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
    const addPerformanceTypeTitle = useSelector(getAddPerformanceTypeTitle);
    const addPerformanceTypeValue = useSelector(getAddPerformanceTypeValue);
    const addPerformanceTypeValidationErrors = useSelector(getAddPerformanceTypeError);

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onCancelAdding = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addPerformanceTypeActions.setTitle(event.target.value));
    };

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addPerformanceTypeActions.setValue(event.target.value));
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
            if (addPerformanceTypeTitle) {
                const result = await dispatch(addPerformanceType());

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Категория успеваемости добавлена'));
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
                className={classNames(cls.AddPerformanceType, {}, [className])}
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
                        <CModalTitle>Добавление категории успеваемости</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className={cls.tab}>
                            <div className={cls.tabBlock}>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Наименование*</h6>
                                        <CFormInputWithMask
                                            type="text"
                                            placeholder="хорошо"
                                            // @ts-ignore
                                            feedbackValid={addPerformanceTypeValidationErrors ? '' : 'Здорово!'}
                                            invalid={!!addPerformanceTypeValidationErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={addPerformanceTypeTitle || ''}
                                            onChange={onChangeInput}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Сумма*</h6>
                                        <CFormInputWithMask
                                            type="number"
                                            placeholder="3"
                                            // @ts-ignore
                                            feedbackValid={addPerformanceTypeValidationErrors ? '' : 'Здорово!'}
                                            invalid={!!addPerformanceTypeValidationErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={addPerformanceTypeValue ? addPerformanceTypeValue.toString() : '' || ''}
                                            onChange={onChangeValue}
                                            required
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
