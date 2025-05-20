import { classNames } from 'shared/lib/helpers/classNames/classNames';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import { CToaster } from '@coreui/react';
import React, {
    ReactElement, useCallback, useRef, useState,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    deleteAllStudents,
} from 'features/Students/DeleteAllStudents/model/services/deleteAllStudents/deleteAllStudents';
import { Toast } from 'shared/ui/Toast/Toast';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Text, TextWeight } from 'shared/ui/Text/Text';
import cls from './DeleteAllStudents.module.scss';

interface DeleteAllStudentsProps {
    className?: string;
}
export const DeleteAllStudents = (props: DeleteAllStudentsProps) => {
    const {
        className,
    } = props;
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();
    const [loadingDelete, setLoadingDelete] = useState(false);

    const onDeleteHandler = useCallback(() => {
        setLoadingDelete(true);
        dispatch(deleteAllStudents())
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Все студенты успешно удалены'));
                    setLoadingDelete(false);
                } else if (res.meta.requestStatus === 'rejected') {
                    addToast(Toast.error('Произошла ошибка при удалении, попробуйте снова'));
                    setLoadingDelete(false);
                }
            });
    }, [dispatch]);

    return (
        <>
            <Button
                size={ButtonSize.XL}
                className={classNames(cls.DeleteAllStudents, {}, [className, cls.redBtn])}
                onClick={onDeleteHandler}
                disabled={loadingDelete}
            >
                <Text
                    weight={TextWeight.SEMIBOLD}
                >
                    Удалить всех студентов
                </Text>
                <CIcon icon={cilTrash} className={cls.btnIcon} />
            </Button>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
