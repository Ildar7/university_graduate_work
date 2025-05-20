import React, { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { useSelector } from 'react-redux';
import { getWorkingCurriculumTrainingScheduleSymbols } from 'entities/WorkingCurriculumTrainingSchedule';
import cls from './TrainingScheduleDetailTableCell.module.scss';
import { TrainingScheduleDetailSchedule } from '../../../model/types/trainingScheduleDetail';

interface TrainingScheduleDetailTableCellProps {
    className?: string;
    trainingSchedule?: TrainingScheduleDetailSchedule[];
}

// @ts-ignore
export const TrainingScheduleDetailTableCell = memo((props: TrainingScheduleDetailTableCellProps) => {
    const {
        className,
        trainingSchedule,
    } = props;

    const { width } = useMobile();
    const [cellWidth, setCellWidth] = useState(0);
    const trainingScheduleSymbols = useSelector(getWorkingCurriculumTrainingScheduleSymbols);

    const returnCourseIndex = (course: number) => {
        switch (course) {
        case 1:
            return 0;
        case 2:
            return 52;
        case 3:
            return 104;
        case 4:
            return 156;
        default:
            return 0;
        }
    };

    useEffect(() => {
        if (width <= 1919) {
            setCellWidth(21.9);
        } else {
            setCellWidth(34.05);
        }
    }, [width]);

    return (
        trainingSchedule?.map((cellInfo, index) => (
            <div
                className={classNames(
                    cls.TrainingScheduleDetailTableCell,
                    {
                        [cls.professionalModuleCell]: !!cellInfo.additional_information,
                        [cls.professionalModuleCellStart]: !!cellInfo.additional_information
                        && (cellInfo.additional_information.start || 0) + returnCourseIndex(cellInfo.training_course) === index + 1,
                        [cls.professionalModuleCellEnd]: !!cellInfo.additional_information
                        && (cellInfo.additional_information.end || 0) + returnCourseIndex(cellInfo.training_course) === index + 1,
                    },
                    [className],
                )}
                key={String(cellInfo.start_week)
                    + cellInfo.training_course
                    + cellInfo.working_curriculum_training_schedule_id
                    + cellInfo.working_curriculum_symbol_id}
            >
                <span
                    style={{
                        width: cellInfo.additional_information && cellInfo.end_week && cellInfo.start_week
                            ? `${(cellInfo.additional_information.end! - cellInfo.additional_information.start! + 1) * cellWidth}px` : 'auto',
                    }}
                    className={cls.spanParent}
                >
                    <span
                        style={{
                            backgroundColor: `${trainingScheduleSymbols?.filter((symbol) => (
                                symbol.working_curriculum_symbol_id === cellInfo.working_curriculum_symbol_id
                            ))[0].symbol_hex_color}`,
                        }}
                    >
                        {trainingScheduleSymbols?.filter((symbol) => (
                            symbol.working_curriculum_symbol_id === cellInfo.working_curriculum_symbol_id
                        ))[0].displayed_symbol}
                        {trainingScheduleSymbols?.filter((symbol) => (
                            symbol.working_curriculum_symbol_id === cellInfo.working_curriculum_symbol_id
                        ))[0].symbol_code === 'PROFESSIONAL_MODULE' && (
                            cellInfo.additional_information?.standard_curriculum_modules_units_ids.join(',')
                        )}
                        {cellInfo.additional_information
                                && cellInfo.additional_information.end && cellInfo.additional_information.start
                                && (cellInfo.additional_information.end - cellInfo.additional_information.start + 1) >= 6
                                && (` (${cellInfo.additional_information.end - cellInfo.additional_information.start + 1} жұма/нед)`)}
                    </span>
                </span>
            </div>
        ))
    );
});
