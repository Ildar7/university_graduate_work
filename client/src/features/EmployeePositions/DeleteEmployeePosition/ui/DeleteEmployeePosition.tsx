import React, {
    memo, ReactElement, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { EmployeePositionsType } from 'entities/EmployeePositions';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { CToaster } from '@coreui/react';
import { deleteEmployeePosition } from '../model/services/deleteEmployeePosition/deleteEmployeePosition';
import cls from './DeleteEmployeePosition.module.scss';

interface DeleteEmployeePositionProps {
    className?: string;
    employeePosition: EmployeePositionsType | undefined;
    onClose: () => void;
    isOpen: boolean;
}

export const DeleteEmployeePosition = memo((props: DeleteEmployeePositionProps) => {
    const {
        className,
        onClose,
        isOpen,
        employeePosition,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [loadingDelete, setLoadingDelete] = useState(false);

    const onDeleteEmployeePosition = (id: string) => {
        setLoadingDelete(true);
        dispatch(deleteEmployeePosition(id))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success(`Должность №${employeePosition?.position_id} удалена`));
                    onClose();
                    setLoadingDelete(false);
                } else if (res.meta.requestStatus === 'rejected') {
                    addToast(Toast.error('Произошла ошибка при удалении, попробуйте снова'));
                    setLoadingDelete(false);
                }
            });
    };

    return (
        <>
            <Modal
                className={classNames(cls.DeleteEmployeePosition, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title={`Удаление должности №${employeePosition?.position_id}`}
            >
                <div className={cls.content}>
                    <Text
                        size={TextSize.M}
                        className={cls.deleteText}
                    >
                        Вы уверены, что хотите удалить
                        {' '}
                        <span>
                            должность №
                            {employeePosition?.position_id}
                        </span>
                        ?
                    </Text>

                    <div className={cls.buttons}>
                        <Button
                            theme={ButtonTheme.BACKGROUND_DARK}
                            className={cls.footerBtn}
                            onClick={onClose}
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
                            theme={ButtonTheme.ERROR}
                            className={cls.footerBtn}
                            onClick={() => { onDeleteEmployeePosition(String(employeePosition!.position_id!)); }}
                            disabled={loadingDelete}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Удалить
                            </Text>
                            <CIcon icon={cilTrash} className={cls.btnIcon} />
                        </Button>
                    </div>
                </div>
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
