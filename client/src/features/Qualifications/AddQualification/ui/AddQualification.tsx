import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CForm, CFormInput,
    CFormSelect,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CToaster,
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
    getAddQualificationTitle,
} from 'features/Qualifications/AddQualification/model/selectors/getAddQualificationTitle/getAddQualificationTitle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addQualificationActions } from 'features/Qualifications/AddQualification';
import { Toast } from 'shared/ui/Toast/Toast';
import { detectInvalidInput } from 'shared/lib/errors/detectInvalidInput/detectInvalidInput';
import { setInvalidInputMessage } from 'shared/lib/errors/setInvalidInputMessage/setInvalidInputMessage';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getSpecialtiesData } from 'entities/Specialties';
import { getAddQualificationError } from '../model/selectors/getAddQualificationError/getAddQualificationError';
import cls from './AddQualification.module.scss';
import { addQualification } from '../model/services/addQualification/addQualification';
import { getAddQualificationCode } from '../model/selectors/getAddQualificationCode/getAddQualificationCode';
import { getAddQualificationId } from '../model/selectors/getAddQualificationId/getAddQualificationId';
import { getAddQualificationSort } from '../model/selectors/getAddQualificationSort/getAddQualificationSort';

interface AddQualificationProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
}
export const AddQualification = (props: AddQualificationProps) => {
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

    const addQualificationTitle = useSelector(getAddQualificationTitle);
    const addQualificationCode = useSelector(getAddQualificationCode);
    const addQualificationSort = useSelector(getAddQualificationSort);
    const addQualificationId = useSelector(getAddQualificationId);
    const addQualificationValidationErrors = useSelector(getAddQualificationError);

    const specialtiesData = useSelector(getSpecialtiesData);

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onCancelAdding = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addQualificationActions.setTitle(event.target.value));
    };

    const onChangeQualificationCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addQualificationActions.setCode(event.target.value));
    };

    const onChangeQualificationSort = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addQualificationActions.setSort(Number(event.target.value)));
    };

    const onChangeQualificationId = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(addQualificationActions.setId(event.target.value));
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
            if (addQualificationTitle) {
                const result = await dispatch(addQualification());

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Квалификация добавлена'));
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
                className={classNames(cls.AddQualification, {}, [className])}
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
                        <CModalTitle>Добавление квалификации</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className={cls.tab}>
                            <div className={cls.tabBlock}>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Наименование квалификации*</h6>
                                        <CFormInputWithMask
                                            type="text"
                                            placeholder="маркетолог"
                                            // @ts-ignore
                                            feedbackValid={addQualificationValidationErrors ? '' : 'Здорово!'}
                                            invalid={!!addQualificationValidationErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={addQualificationTitle || ''}
                                            onChange={onChangeInput}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Код квалификации*</h6>
                                        <CFormInputWithMask
                                            type="text"
                                            placeholder="05100"
                                            // @ts-ignore
                                            feedbackValid={addQualificationValidationErrors ? '' : 'Здорово!'}
                                            invalid={!!addQualificationValidationErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={addQualificationCode || ''}
                                            onChange={onChangeQualificationCode}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Специальность*</h6>
                                        <CFormSelect
                                            className={cls.selectFilter}
                                            value={addQualificationId || ''}
                                            onChange={onChangeQualificationId}
                                            feedbackValid={
                                                detectInvalidInput(addQualificationValidationErrors, 'specialtiesId')
                                                    ? ''
                                                    : 'Отлично!'
                                            }
                                            feedbackInvalid={setInvalidInputMessage(
                                                detectInvalidInput(addQualificationValidationErrors, 'specialtiesId'),
                                                addQualificationValidationErrors,
                                                'specialtiesId',
                                            )}
                                            required
                                        >
                                            <option value="">Не выбрано</option>
                                            {
                                                specialtiesData?.data.map((specialty) => (
                                                    <option
                                                        key={specialty.id_spec}
                                                        value={specialty.id_spec}
                                                    >
                                                        {specialty.speciality}
                                                    </option>
                                                ))
                                            }
                                        </CFormSelect>
                                    </div>
                                </div>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Сортировка*</h6>
                                        <CFormInput
                                            type="number"
                                            step={100}
                                            min={100}
                                            placeholder="100"
                                            // @ts-ignore
                                            feedbackValRid={addQualificationValidationErrors ? '' : 'Здорово!'}
                                            invalid={!!addQualificationValidationErrors}
                                            feedbackInvalid="Введите корректные данные!"
                                            value={addQualificationSort || ''}
                                            onChange={onChangeQualificationSort}
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
