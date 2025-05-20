import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { useSelector } from 'react-redux';
import { workingCurriculumExtractActions } from '../../model/slice/workingCurriculumExtractSlice';
import cls from './WorkingCurriculumExtractErrorsModal.module.scss';
import {
    getWorkingCurriculumExtractUpdatingError,
} from '../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';

interface WorkingCurriculumExtractErrorsModalProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
}

export const WorkingCurriculumExtractErrorsModal = memo((props: WorkingCurriculumExtractErrorsModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;
    const dispatch = useAppDispatch();
    const errors = useSelector(getWorkingCurriculumExtractUpdatingError);

    const onCancelHandler = useCallback(() => {
        onClose();
        dispatch(workingCurriculumExtractActions.clearUpdatingErrors());
    }, [dispatch, onClose]);

    return (
        <Modal
            contentClassName={classNames(
                cls.WorkingCurriculumExtractErrorsModal,
                {},
                [className],
            )}
            onClose={onCancelHandler}
            isOpen={isOpen}
            title="Ошибка при сохранении документа"
        >
            {
                errors?.errors.map((error, index) => (
                    <Text
                        theme={TextTheme.ERROR}
                        weight={TextWeight.SEMIBOLD}
                        size={TextSize.XM}
                    >
                        {index + 1}
                        )
                        {' '}
                        {error.message_ru}
                    </Text>
                ))
            }

            <div className={cls.buttons}>
                <Button
                    theme={ButtonTheme.BACKGROUND_DARK}
                    size={ButtonSize.XS}
                    className={cls.btn}
                    onClick={onCancelHandler}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Закрыть
                    </Text>
                    <Icon Svg={CloseBorderedIcon} />
                </Button>
            </div>
        </Modal>
    );
});
