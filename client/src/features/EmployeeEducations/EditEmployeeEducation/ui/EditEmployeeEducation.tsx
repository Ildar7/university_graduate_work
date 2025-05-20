import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Input } from 'shared/ui/Input/Input';
import { CForm, CToaster } from '@coreui/react';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import { Toast } from 'shared/ui/Toast/Toast';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import {
    fetchEmployeeEducationDetail,
    getEmployeeEducationDetailError,
    getEmployeeEducationDetailIsLoading,
} from 'entities/EmployeeEducationDetail';
import {
    getEditEmployeeEducationData,
    getEditEmployeeEducationNewFields,
} from '../model/selectors/getEditEmployeeEducation/getEditEmployeeEducation';
import {
    editEmployeeEducation,
} from '../model/services/editEmployeeEducation/editEmployeeEducation';
import cls from './EditEmployeeEducation.module.scss';
import { editEmployeeEducationActions } from '../model/slice/editEmployeeEducationSlice';

interface EditEmployeeEducationProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    employeeEducationId: string;
}

export const EditEmployeeEducation = memo((props: EditEmployeeEducationProps) => {
    const {
        className,
        onClose,
        isOpen,
        employeeEducationId,
    } = props;
    const dispatch = useAppDispatch();

    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);

    const editEmployeeEducationData = useSelector(getEditEmployeeEducationData);
    const editEmployeeEducationNewFields = useSelector(getEditEmployeeEducationNewFields);

    const employeeEducationDetailIsLoading = useSelector(getEmployeeEducationDetailIsLoading);
    const employeeEducationDetailError = useSelector(getEmployeeEducationDetailError);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(editEmployeeEducationActions.setInputData([filterName, event.target.value]));
    };

    const onCancelHandler = useCallback(() => {
        onClose();
        dispatch(editEmployeeEducationActions.clearNewFields());
    }, [dispatch, onClose]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            const data = clearObject(editEmployeeEducationData, editEmployeeEducationNewFields);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else if (editEmployeeEducationNewFields?.name) {
                const result = await dispatch(editEmployeeEducation(employeeEducationId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о виде образования успешно обновлена'));
                    onCancelHandler();
                }
            } else {
                addToast(Toast.error('Заполните все поля!'));
            }
        }
    };

    useEffect(() => {
        if (isOpen) {
            dispatch(fetchEmployeeEducationDetail(employeeEducationId));
        }
    }, [dispatch, isOpen, employeeEducationId]);

    let content;

    if (employeeEducationDetailIsLoading) {
        content = (
            <Skeleton width="100%" height={150} />
        );
    } else if (employeeEducationDetailError) {
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
            <>
                <Input
                    placeholder="Название"
                    value={editEmployeeEducationNewFields?.name || ''}
                    onChange={
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                            onChangeInput(event, 'name');
                        }
                    }
                />

                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_DARK}
                        className={cls.footerBtn}
                        onClick={onCancelHandler}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Отмена
                        </Text>
                        <Icon Svg={CloseBorderedIcon} />
                    </Button>
                    <Button
                        type="submit"
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.footerBtn}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Сохранить
                        </Text>
                        <Icon Svg={CheckIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                className={classNames(cls.EditEmployeeEducation, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title={`Редактирование вида образования №${employeeEducationId}`}
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    {content}
                </CForm>
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
