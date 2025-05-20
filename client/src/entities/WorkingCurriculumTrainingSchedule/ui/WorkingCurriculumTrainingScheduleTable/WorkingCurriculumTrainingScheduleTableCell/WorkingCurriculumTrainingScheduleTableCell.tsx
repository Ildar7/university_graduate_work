import React, { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { workingCurriculumTrainingScheduleActions } from 'entities/WorkingCurriculumTrainingSchedule';
import { useSelector } from 'react-redux';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import cls from './WorkingCurriculumTrainingScheduleTableCell.module.scss';
import { WorkingCurriculumTrainingScheduleData } from '../../../model/types/workingCurriculumTrainingSchedule';
import {
    getWorkingCurriculumTrainingScheduleReadOnly,
    getWorkingCurriculumTrainingScheduleSelectedCells,
} from '../../../model/selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';

interface WorkingCurriculumTrainingScheduleTableCellProps {
    className?: string;
    trainingScheduleData?: WorkingCurriculumTrainingScheduleData[];
    course: number;
    setCourse: (course: number) => void;
}

// @ts-ignore
export const WorkingCurriculumTrainingScheduleTableCell = memo((props: WorkingCurriculumTrainingScheduleTableCellProps) => {
    const {
        className,
        trainingScheduleData,
        course,
        setCourse,
    } = props;
    const dispatch = useAppDispatch();
    const cells: any[] = [];
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [selecting, setSelecting] = useState(false);
    const { width } = useMobile();
    const [cellWidth, setCellWidth] = useState(0);

    const selectedCells = useSelector(getWorkingCurriculumTrainingScheduleSelectedCells);
    const tableReadOnly = useSelector(getWorkingCurriculumTrainingScheduleReadOnly);

    const updateSelection = (cellInfo: WorkingCurriculumTrainingScheduleData, cellId: number) => {
        if (!tableReadOnly && selecting) {
            if (cellInfo.additional_information) {
                if (start <= end) {
                    setEnd(cellInfo.additional_information.end!);
                } else {
                    setEnd(cellInfo.additional_information.start!);
                }
            } else {
                setEnd(cellId);
            }
        }
    };

    const beginSelection = (cellInfo: WorkingCurriculumTrainingScheduleData, course: number, cellId: number) => {
        if (!tableReadOnly) {
            if (cellInfo.additional_information) {
                setStart(cellInfo.additional_information.start!);
                setEnd(cellInfo.additional_information.end!);

                setCourse(course);
                setSelecting(true);
                updateSelection(cellInfo, cellId);
            } else {
                setStart(0);
                setEnd(0);

                setCourse(course);
                setSelecting(true);
                setStart(cellId);
                updateSelection(cellInfo, cellId);
            }
        }
    };

    const endSelection = (cellInfo: WorkingCurriculumTrainingScheduleData, course: number, cellId = end) => {
        if (!tableReadOnly) {
            setCourse(course);
            setSelecting(false);
            updateSelection(cellInfo, cellId);
        }
    };

    const handleMouseLeave = () => {
        setSelecting(false);
    };

    useEffect(() => {
        if (width <= 1919) {
            setCellWidth(21.9);
        } else {
            setCellWidth(34.05);
        }
    }, [width]);

    useEffect(() => {
        if (!tableReadOnly) {
            if (trainingScheduleData && start !== 0 && course !== 0 && end !== 0) {
                const selectedCells = [];
                const selectedSymbols = [];

                if (start < end) {
                    for (let i = start; i <= end; i++) {
                        selectedCells.push(trainingScheduleData[i - 1]);
                        selectedSymbols.push(trainingScheduleData[i - 1].working_curriculum_symbol_id);
                    }
                } else {
                    for (let i = end; i <= start; i++) {
                        selectedCells.push(trainingScheduleData[i - 1]);
                        selectedSymbols.push(trainingScheduleData[i - 1].working_curriculum_symbol_id);
                    }
                }

                const selectedCellsData = {
                    trainingCourse: course,
                    cells: selectedCells,
                    symbol: selectedSymbols,
                    symbolsEqual: selectedSymbols.every((val, i, arr) => val === arr[0]),
                };

                dispatch(workingCurriculumTrainingScheduleActions.changeSelectedCells(selectedCellsData));
            }
        }
        // eslint-disable-next-line
    }, [course, dispatch, end, start, tableReadOnly]);

    useEffect(() => {
        if (!selectedCells || tableReadOnly) {
            setStart(0);
            setEnd(0);
            setCourse(0);
        }
    }, [selectedCells, setCourse, tableReadOnly]);

    trainingScheduleData?.forEach((cellInfo, index) => {
        const cell = (
            <div
                className={classNames(
                    cls.WorkingCurriculumTrainingScheduleTableCell,
                    {
                        [cls.selected]: ((end <= cellInfo.start_week && cellInfo.start_week <= start)
                        || (start <= cellInfo.start_week && cellInfo.start_week <= end))
                        && cellInfo.training_course === course && start !== 0 && end !== 0,
                        [cls.selectedStart]: start < end
                            ? index + 1 === start && cellInfo.training_course === course && start !== 0 && end !== 0
                            : index + 1 === end && cellInfo.training_course === course && start !== 0 && end !== 0,
                        [cls.selectedEnd]: start < end
                            ? index + 1 === end && cellInfo.training_course === course && start !== 0 && end !== 0
                            : index + 1 === start && cellInfo.training_course === course && start !== 0 && end !== 0,
                        [cls.professionalModuleCell]: !!cellInfo.additional_information,
                        [cls.professionalModuleCellStart]: !!cellInfo.additional_information
                        && cellInfo.additional_information.start === index + 1,
                        [cls.professionalModuleCellEnd]: !!cellInfo.additional_information
                        && cellInfo.additional_information.end === index + 1,
                        [cls.disabledCell]: tableReadOnly,
                    },
                    [className],
                )}
                onMouseDown={() => beginSelection(cellInfo, cellInfo.training_course, cellInfo.start_week)}
                onMouseUp={() => endSelection(cellInfo, cellInfo.training_course, cellInfo.start_week)}
                onMouseMove={() => updateSelection(cellInfo, cellInfo.start_week)}
                key={cellInfo.start_week + cellInfo.training_course + cellInfo.working_curriculum_symbol.symbol_code}
            >
                <span
                    style={{
                        width: cellInfo.additional_information && cellInfo.end_week && cellInfo.start_week
                            ? `${(cellInfo.additional_information.end! - cellInfo.additional_information.start! + 1) * cellWidth}px` : 'auto',
                    }}
                    className={cls.spanParent}
                >

                    <span
                        style={{ backgroundColor: `${cellInfo.working_curriculum_symbol.symbol_hex_color}` }}
                    >
                        {cellInfo.working_curriculum_symbol.displayed_symbol}
                        {cellInfo.working_curriculum_symbol.symbol_code === 'PROFESSIONAL_MODULE' && (
                            cellInfo.additional_information?.standard_curriculum_modules_units_ids.join(',')
                        )}
                        {cellInfo.additional_information
                            && cellInfo.additional_information.end && cellInfo.additional_information.start
                            && (cellInfo.additional_information.end - cellInfo.additional_information.start + 1) >= 6
                            && (` (${cellInfo.additional_information.end - cellInfo.additional_information.start + 1} жұма/нед)`)}
                    </span>
                </span>
            </div>
        );
        cells.push(cell);
    });

    return (
        <div className={cls.tableContainer} onMouseLeave={handleMouseLeave}>
            {cells}
        </div>
    );
});
