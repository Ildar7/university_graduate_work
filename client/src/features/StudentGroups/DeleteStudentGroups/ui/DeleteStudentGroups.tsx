import React, {
    memo, ReactElement, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { CToaster } from '@coreui/react';
import { StudentGroupsType } from 'entities/StudentGroups';
import { deleteStudentGroups } from '../model/services/deleteStudentGroups/deleteStudentGroups';
import cls from './DeleteStudentGroups.module.scss';

interface DeleteStudentGroupProps {
    className?: string;
    studentGroup?: StudentGroupsType;
    onClose: () => void;
    isOpen: boolean;
}

export const DeleteStudentGroups = memo((props: DeleteStudentGroupProps) => {
    const {
        className,
        onClose,
        isOpen,
        studentGroup,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [loadingDelete, setLoadingDelete] = useState(false);

    const onDeleteStudentGroup = (id: string) => {
        setLoadingDelete(true);
        dispatch(deleteStudentGroups(id))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success(`Группа №${studentGroup?.id_group} удалена`));
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
                className={classNames(cls.DeleteStudentGroup, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title={`Удаление группы №${studentGroup?.id_group}`}
            >
                <div className={cls.content}>
                    <Text
                        size={TextSize.M}
                        className={cls.deleteText}
                    >
                        Вы уверены, что хотите удалить
                        {' '}
                        <span>
                            группу студентов №
                            {studentGroup?.id_group}
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
                            onClick={() => { onDeleteStudentGroup(String(studentGroup!.id_group!)); }}
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
