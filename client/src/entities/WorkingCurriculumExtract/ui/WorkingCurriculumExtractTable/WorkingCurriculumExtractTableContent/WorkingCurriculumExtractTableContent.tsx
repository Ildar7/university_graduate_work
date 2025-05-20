import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React from 'react';
import { useSelector } from 'react-redux';
import {
    WorkingCurriculumExtractTableGeneral,
} from '../WorkingCurriculumExtractTableGeneral/WorkingCurriculumExtractTableGeneral';
import {
    WorkingCurriculumExtractTableQualification,
} from '../WorkingCurriculumExtractTableQualification/WorkingCurriculumExtractTableQualification';
import cls from './WorkingCurriculumExtractTableContent.module.scss';
import {
    getWorkingCurriculumExtractDataToWork,
} from '../../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';

interface WorkingCurriculumExtractTableContentProps {
    className?: string;
}

export const WorkingCurriculumExtractTableContent = (props: WorkingCurriculumExtractTableContentProps) => {
    const {
        className,
    } = props;

    const workingCurriculumExtractDataToWork = useSelector(getWorkingCurriculumExtractDataToWork);

    return (
        <div className={classNames(cls.WorkingCurriculumExtractTableContent, {}, [className, 'workingCurriculumExtractTableBody'])}>
            { workingCurriculumExtractDataToWork?.data.general && workingCurriculumExtractDataToWork?.data.general.length ? (
                <WorkingCurriculumExtractTableGeneral
                    general={workingCurriculumExtractDataToWork?.data.general[0]}
                />
            ) : '' }
            {
                workingCurriculumExtractDataToWork?.data.qualifications && [...workingCurriculumExtractDataToWork.data.qualifications || []]
                    .map((qualification) => (
                        <WorkingCurriculumExtractTableQualification
                            key={String(qualification.sort) + qualification.standard_curriculum_qualification_id + qualification.qualification_id}
                            qualification={qualification}
                        />
                    ))
            }
        </div>
    );
};
