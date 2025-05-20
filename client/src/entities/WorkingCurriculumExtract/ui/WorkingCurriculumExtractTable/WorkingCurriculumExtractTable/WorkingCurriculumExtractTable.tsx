import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React from 'react';
import cls from './WorkingCurriculumExtractTable.module.scss';
import {
    WorkingCurriculumExtractTableHead,
} from '../WorkingCurriculumExtractTableHead/WorkingCurriculumExtractTableHead';
import {
    WorkingCurriculumExtractTableContent,
} from '../WorkingCurriculumExtractTableContent/WorkingCurriculumExtractTableContent';

interface WorkingCurriculumExtractTableProps {
    className?: string;
}

export const WorkingCurriculumExtractTable = (props: WorkingCurriculumExtractTableProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.WorkingCurriculumExtractTable, {}, [className])}>
            <WorkingCurriculumExtractTableHead />

            <WorkingCurriculumExtractTableContent />
        </div>
    );
};
