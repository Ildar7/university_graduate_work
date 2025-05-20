import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { useNavigate } from 'react-router-dom';
import CheckIcon from 'shared/assets/icons/check.svg';
import { getRouteWorkingCurriculum } from 'shared/const/router';
import cls from './WorkingCurriculumExtractExitConfirmModal.module.scss';

interface WorkingCurriculumExtractExitConfirmModalProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    formId: string;
}

export const WorkingCurriculumExtractExitConfirmModal = memo((props: WorkingCurriculumExtractExitConfirmModalProps) => {
    const {
        className,
        isOpen,
        onClose,
        formId,
    } = props;
    const navigate = useNavigate();

    const onNotConfirmHandler = useCallback(() => {
        navigate(getRouteWorkingCurriculum());
    }, [navigate]);

    return (
        <Modal
            contentClassName={classNames(
                cls.WorkingCurriculumExtractExitConfirmModal,
                {},
                [className],
            )}
            onClose={onClose}
            isOpen={isOpen}
        >
            <Text
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
            >
                Сохранить измененные данные?
            </Text>

            <div className={cls.buttons}>
                <Button
                    theme={ButtonTheme.BACKGROUND}
                    size={ButtonSize.XS}
                    className={cls.btn}
                    type="submit"
                    form={formId}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Да
                    </Text>
                    <Icon Svg={CheckIcon} />
                </Button>
                <Button
                    theme={ButtonTheme.BACKGROUND_DARK}
                    size={ButtonSize.XS}
                    className={cls.btn}
                    onClick={onNotConfirmHandler}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Нет
                    </Text>
                    <Icon Svg={CloseBorderedIcon} />
                </Button>
            </div>
        </Modal>
    );
});
