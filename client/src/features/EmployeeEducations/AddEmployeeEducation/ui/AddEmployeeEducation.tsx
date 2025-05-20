import React, {
    memo, ReactElement, useCallback, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Input } from 'shared/ui/Input/Input';
import { CForm, CToaster } from '@coreui/react';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import { Toast } from 'shared/ui/Toast/Toast';
import { useErrorMessage } from 'shared/lib/hooks/useErrorMessage/useErrorMessage';
import { addEmployeeEducation } from '../model/services/addEmployeeEducation/addEmployeeEducation';
import {
    getAddEmployeeEducationData,
    getAddEmployeeEducationErrors,
    getAddEmployeeEducationIsLoading,
} from '../model/selectors/getAddEmployeeEducation/getAddEmployeeEducation';
import cls from './AddEmployeeEducation.module.scss';
import { addEmployeeEducationActions } from '../model/slice/addEmployeeEducationSlice';

interface AddEmployeeEducationProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
}

export const AddEmployeeEducation = memo((props: AddEmployeeEducationProps) => {
    const {
        className,
        onClose,
        isOpen,
    } = props;
    const dispatch = useAppDispatch();

    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);

    const addEmployeeEducationData = useSelector(getAddEmployeeEducationData);
    const addEmployeeEducationIsLoading = useSelector(getAddEmployeeEducationIsLoading);
    const addEmployeeEducationErrors = useSelector(getAddEmployeeEducationErrors);

    useErrorMessage(addEmployeeEducationErrors);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        dispatch(addEmployeeEducationActions.setInputData([filterName, event.target.value]));
    };

    const onCancelHandler = useCallback(() => {
        onClose();
        dispatch(addEmployeeEducationActions.clearData());
    }, [dispatch, onClose]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            if (addEmployeeEducationData?.name) {
                const result = await dispatch(addEmployeeEducation());

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Вид образования добавлен'));
                    onCancelHandler();
                }
            } else {
                addToast(Toast.error('Заполните все поля!'));
            }
        }
    };

    const disabledButton = addEmployeeEducationIsLoading;

    return (
        <>
            <Modal
                className={classNames(cls.AddEmployeeEducation, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title="Создание вида образования"
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <Input
                        placeholder="Наименование"
                        value={addEmployeeEducationData?.name || ''}
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
                            disabled={disabledButton}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Добавить
                            </Text>
                            <Icon Svg={PlusBorderedIcon} />
                        </Button>
                    </div>
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
