import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './WorkingCurriculumTrainingScheduleConfirmDeleting.module.scss';
import { workingCurriculumTrainingScheduleActions } from '../../model/slice/workingCurriculumTrainingScheduleSlice';
import {
    getWorkingCurriculumTrainingScheduleEditData,
    getWorkingCurriculumTrainingScheduleSelectedCells,
} from '../../model/selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';

interface WorkingCurriculumTrainingScheduleConfirmDeletingProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    deletingCourse: number;
}

const weekCountsInCourse = {
    course_1: [0, 52],
    course_2: [52, 104],
    course_3: [104, 156],
    course_4: [156, 208],
};

export const WorkingCurriculumTrainingScheduleConfirmDeleting = memo((props: WorkingCurriculumTrainingScheduleConfirmDeletingProps) => {
    const {
        className,
        onClose,
        isOpen,
        deletingCourse,
    } = props;
    const dispatch = useAppDispatch();

    const trainingScheduleEditData = useSelector(getWorkingCurriculumTrainingScheduleEditData);
    const selectedCells = useSelector(getWorkingCurriculumTrainingScheduleSelectedCells);

    const onDeleteHandler = useCallback(() => {
        if (trainingScheduleEditData && deletingCourse === trainingScheduleEditData.data.length / 52) {
            // @ts-ignore
            const needCourseWeeks = weekCountsInCourse[`course_${deletingCourse}`];
            dispatch(workingCurriculumTrainingScheduleActions.deleteCourseFromTable(
                [
                    deletingCourse,
                    needCourseWeeks[0],
                    needCourseWeeks[1],
                ],
            ));
        }

        if (selectedCells?.trainingCourse === deletingCourse) {
            dispatch(workingCurriculumTrainingScheduleActions.deleteSelectedCells());
        }

        onClose();
    }, [deletingCourse, dispatch, onClose, selectedCells?.trainingCourse, trainingScheduleEditData]);

    return (
        <Modal
            contentClassName={classNames(cls.AddWorkingCurriculum, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
        >
            <Text
                size={TextSize.XS}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
            >
                В выбранном поле присутствуют данные.
            </Text>
            <Text
                size={TextSize.XS}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
            >
                Продолжить?
            </Text>

            <div className={cls.buttons}>
                <Button
                    theme={ButtonTheme.BACKGROUND_DARK}
                    size={ButtonSize.XS}
                    className={cls.btn}
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
                    theme={ButtonTheme.BACKGROUND}
                    size={ButtonSize.XS}
                    className={cls.btn}
                    onClick={onDeleteHandler}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Удалить
                    </Text>
                    <Icon Svg={CheckIcon} />
                </Button>
            </div>
        </Modal>
    );
});
