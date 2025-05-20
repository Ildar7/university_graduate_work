import React, {
    memo, ReactElement, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { WorkingCurriculumType } from 'entities/WorkingCurriculum';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { CToaster } from '@coreui/react';
import { deleteWorkingCurriculum } from '../model/services/deleteWorkingCurriculum/deleteWorkingCurriculum';
import cls from './DeleteWorkingCurriculum.module.scss';

interface DeleteWorkingCurriculumProps {
    className?: string;
    workingCurriculum: WorkingCurriculumType | undefined;
    onClose: () => void;
    isOpen: boolean;
}

export const DeleteWorkingCurriculum = memo((props: DeleteWorkingCurriculumProps) => {
    const {
        className,
        onClose,
        isOpen,
        workingCurriculum,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [loadingDelete, setLoadingDelete] = useState(false);

    const onDeleteWorkingCurriculum = (id: string) => {
        setLoadingDelete(true);
        dispatch(deleteWorkingCurriculum(id))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success(`РУП №${workingCurriculum?.working_curriculum_id} удален`));
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
                className={classNames(cls.DeleteWorkingCurriculum, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title={`Удаление РУП №${workingCurriculum?.working_curriculum_id}`}
            >
                <div className={cls.content}>
                    <Text
                        size={TextSize.M}
                        className={cls.deleteText}
                    >
                        Вы уверены, что хотите удалить
                        {' '}
                        <span>
                            РУП №
                            {workingCurriculum?.working_curriculum_id}
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
                            onClick={() => { onDeleteWorkingCurriculum(String(workingCurriculum!.working_curriculum_id!)); }}
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
