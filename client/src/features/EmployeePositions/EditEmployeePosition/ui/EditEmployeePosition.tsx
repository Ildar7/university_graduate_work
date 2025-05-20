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
    fetchEmployeePositionDetail,
    getEmployeePositionDetailError,
    getEmployeePositionDetailIsLoading,
} from 'entities/EmployeePositionDetail';
import {
    getEditEmployeePositionData,
    getEditEmployeePositionNewFields,
} from '../model/selectors/getEditEmployeePosition/getEditEmployeePosition';
import {
    editEmployeePosition,
} from '../model/services/editEmployeePosition/editEmployeePosition';
import cls from './EditEmployeePosition.module.scss';
import { editEmployeePositionActions } from '../model/slice/editEmployeePositionSlice';

interface EditEmployeePositionProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    employeePositionId: string;
}

export const EditEmployeePosition = memo((props: EditEmployeePositionProps) => {
    const {
        className,
        onClose,
        isOpen,
        employeePositionId,
    } = props;
    const dispatch = useAppDispatch();

    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);

    const editEmployeePositionData = useSelector(getEditEmployeePositionData);
    const editEmployeePositionNewFields = useSelector(getEditEmployeePositionNewFields);

    const employeePositionDetailIsLoading = useSelector(getEmployeePositionDetailIsLoading);
    const employeePositionDetailError = useSelector(getEmployeePositionDetailError);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(editEmployeePositionActions.setInputData([filterName, event.target.value]));
    };

    const onCancelHandler = useCallback(() => {
        onClose();
        dispatch(editEmployeePositionActions.clearNewFields());
    }, [dispatch, onClose]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            const data = clearObject(editEmployeePositionData, editEmployeePositionNewFields);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else if (editEmployeePositionNewFields?.name) {
                const result = await dispatch(editEmployeePosition(employeePositionId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о должности успешно обновлена'));
                    onCancelHandler();
                }
            } else {
                addToast(Toast.error('Заполните все поля!'));
            }
        }
    };

    useEffect(() => {
        if (isOpen) {
            dispatch(fetchEmployeePositionDetail(employeePositionId));
        }
    }, [dispatch, isOpen, employeePositionId]);

    let content;

    if (employeePositionDetailIsLoading) {
        content = (
            <Skeleton width="100%" height={150} />
        );
    } else if (employeePositionDetailError) {
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
                    value={editEmployeePositionNewFields?.name || ''}
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
                className={classNames(cls.EditEmployeePosition, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title={`Редактирование должности №${employeePositionId}`}
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
