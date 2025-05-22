import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { TableCell, TableCellEditing, TableRow } from 'shared/ui/Table';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getSettingsMainCollegeData } from 'entities/Settings/SettingsMainCollege';
import { formatIntegerNumber } from 'shared/lib/helpers/formatIntegerNumber/formatIntegerNumber';
import {
    WorkingCurriculumExtractEducationalActivities,
    WorkingCurriculumExtractSubjects,
} from '../../../model/types/workingCurriculumExtractGeneral';
import cls from './WorkingCurriculumExtractTableEduActivities.module.scss';
import { workingCurriculumExtractActions } from '../../../model/slice/workingCurriculumExtractSlice';
import { WorkingCurriculumExtractQualifications } from '../../../model/types/workingCurriculumExtractQualifications';
import {
    getWorkingCurriculumExtractFormWithErrors, getWorkingCurriculumExtractReadOnly,
    getWorkingCurriculumExtractValidationErrors,
} from '../../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';

interface WorkingCurriculumExtractTableEduActivitiesProps {
    className?: string;
    qualification?: WorkingCurriculumExtractQualifications;
    activity: WorkingCurriculumExtractEducationalActivities;
    onChangeHoursCount: (qualId: number | undefined,
                         modId: number | undefined,
                         unitId: number | undefined,
                         subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                         fieldName: string,
                         fieldValue: string,
                         isSubject: boolean) => void;
    onChangeDisciplineSort: (qualId: number | undefined,
                             modId: number | undefined,
                             unitId: number | undefined,
                             subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                             fieldName: string,
                             fieldValue: string,
                             isSubject: boolean) => void;
    onChangeArraySemesters: (qualId: number | undefined,
                             modId: number | undefined,
                             unitId: number | undefined,
                             subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                             fieldName: string,
                             fieldValue: string,
                             isSubject: boolean) => void;
    onChangeWorksCount: (qualId: number | undefined,
                         modId: number | undefined,
                         unitId: number | undefined,
                         subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                         fieldName: string,
                         fieldValue: string,
                         isSubject: boolean) => void;
    onChangeDistributionSemesterValue: (qualId: number | undefined,
                                        modId: number | undefined,
                                        unitId: number | undefined,
                                        subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                                        semesterNumber: number,
                                        fieldValue: string,
                                        isSubject: boolean) => void;
    onBlurDisciplineSort: (qualId: number | undefined,
                           modId: number | undefined,
                           unitId: number | undefined,
                           subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                           fieldValue: string,
                           prevValue: number | string,
                           isSubject: boolean) => void;
    onBlurArraySemesters: (qualId: number | undefined,
                           modId: number | undefined,
                           unitId: number | undefined,
                           subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                           fieldName: string,
                           fieldValue: string | null | number[],
                           isSubject: boolean) => void;
}

export const WorkingCurriculumExtractTableEduActivities = memo((props: WorkingCurriculumExtractTableEduActivitiesProps) => {
    const {
        className,
        qualification,
        activity,
        onChangeDisciplineSort,
        onBlurDisciplineSort,
        onChangeWorksCount,
        onChangeHoursCount,
        onChangeDistributionSemesterValue,
        onChangeArraySemesters,
        onBlurArraySemesters,
    } = props;
    const dispatch = useAppDispatch();

    const formWithErrors = useSelector(getWorkingCurriculumExtractFormWithErrors);
    const notFilledErrorQualification = useSelector(getWorkingCurriculumExtractValidationErrors)?.notFilledSummaryHours
        .filter((error) => error.notFilled)
        .filter((error) => error.educational_activity_type_id === activity.educational_activity_type_id
        && error.standard_curriculum_qualification_id === qualification?.standard_curriculum_qualification_id)[0]?.notFilled;
    const notFilledErrorGeneral = useSelector(getWorkingCurriculumExtractValidationErrors)?.notFilledSummaryHours
        .filter((error) => error.notFilled)
        .filter((error) => error.educational_activity_type_id === activity.educational_activity_type_id
            && error.standard_curriculum_qualification_id === null)[0]?.notFilled;

    const tableReadOnly = useSelector(getWorkingCurriculumExtractReadOnly);

    const creditsPerHour = Number(useSelector(getSettingsMainCollegeData)!.knrtu_kai.options
        .filter((option) => option.name === 'credit_in_hours')[0].value);

    const onDeleteEduActivity = (
        qualId: number | undefined,
        activity: WorkingCurriculumExtractEducationalActivities,
    ) => {
        dispatch(workingCurriculumExtractActions.deleteEduActivity([
            qualId || null,
            activity,
        ]));
        dispatch(workingCurriculumExtractActions.calculateSummaryTime([
            qualId || null,
            0,
            0,
            false,
        ]));
    };

    return (
        <TableRow
            className={classNames(cls.WorkingCurriculumExtractTableEduActivities, {}, [className])}
        >
            <TableCell
                className="indexCell"
            >
                <Text
                    align={TextAlign.CENTER}
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                >
                    {activity.short_name}
                </Text>
            </TableCell>
            <TableCell
                className="idCell"
            >
                <Text
                    align={TextAlign.CENTER}
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                >
                    {activity.working_curriculum_extract_id && activity.working_curriculum_extract_id}
                </Text>
            </TableCell>
            <TableCell
                className={classNames(cls.subjectName, {}, ['disciplinesNameCell'])}
            >
                <Text
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                >
                    {activity.name}
                </Text>
                {!tableReadOnly && (
                    <div className={cls.editingBtns}>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            title="Удалить"
                            className={cls.editBtn}
                            onClick={() => {
                                onDeleteEduActivity(
                                    qualification?.standard_curriculum_qualification_id,
                                    activity,
                                );
                            }}
                        >
                            <Icon Svg={TrashIcon} />
                        </Button>
                    </div>
                )}
            </TableCell>
            <TableCellEditing
                className="sortCell"
                type="number"
                step={100}
                inputValue={activity.sortValue || ''}
                title="Сортировка"
                disabled={tableReadOnly}
                onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeDisciplineSort(
                        qualification?.standard_curriculum_qualification_id,
                        undefined,
                        undefined,
                        activity,
                        'sortValue',
                        e.target.value,
                        false,
                    );
                }}
                onBlur={(event: React.FocusEvent<HTMLDivElement>) => {
                    onBlurDisciplineSort(
                        qualification?.standard_curriculum_qualification_id,
                        undefined,
                        undefined,
                        activity,
                        String(activity.sortValue) || '',
                        activity.sort,
                        false,
                    );
                }}
            />
            <div className="formControlCell flex-row">
                <TableCellEditing
                    className="formControlExamCell"
                    type="text"
                    inputValue={activity.exams_semestrs as string || ''}
                    title="Экзамен"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeArraySemesters(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'exams_semestrs',
                            e.target.value,
                            false,
                        );
                    }}
                    onBlur={() => {
                        onBlurArraySemesters(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'exams_semestrs',
                            activity.exams_semestrs,
                            false,
                        );
                    }}
                />
                <TableCellEditing
                    className="formControlEasyExamCell"
                    type="text"
                    inputValue={activity.tests_semesters as string || ''}
                    title="Зачет"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeArraySemesters(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'tests_semesters',
                            e.target.value,
                            false,
                        );
                    }}
                    onBlur={() => {
                        onBlurArraySemesters(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'tests_semesters',
                            activity.tests_semesters,
                            false,
                        );
                    }}
                />
                <TableCellEditing
                    className="formControlControlWorksCell"
                    type="text"
                    inputValue={String(activity.controlworks_count || '')}
                    title="Кол-во контрольных работ"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeWorksCount(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'controlworks_count',
                            e.target.value,
                            false,
                        );
                    }}
                />
                <TableCellEditing
                    className="formControlCourseWorksCell"
                    type="text"
                    inputValue={String(activity.courseworks_count || '')}
                    title="Кол-во курсовых работ"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeWorksCount(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'courseworks_count',
                            e.target.value,
                            false,
                        );
                    }}
                />
            </div>
            <div className="amountOfStudyTimeCell flex-row">
                <TableCell
                    className="amountOfStudyTimeCredits"
                >
                    <Text
                        align={TextAlign.CENTER}
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        {
                            activity.hours && formatIntegerNumber(activity.hours / creditsPerHour)
                        }
                    </Text>
                </TableCell>
                <TableCellEditing
                    className="amountOfStudyTimeHours"
                    type="text"
                    inputValue={String(activity.hours || '')}
                    title="Всего часов"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'hours',
                            e.target.value,
                            false,
                        );
                    }}
                    error={formWithErrors && (notFilledErrorQualification || notFilledErrorGeneral)}
                    required
                />
                <TableCellEditing
                    className="amountOfStudyTimeTheory"
                    type="text"
                    inputValue={String(activity.hours_theory || '')}
                    title="Теоретические"
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'hours_theory',
                            e.target.value,
                            false,
                        );
                    }}
                    disabled={!activity.hours || tableReadOnly}
                />
                <TableCellEditing
                    className="amountOfStudyTimeLabs"
                    type="text"
                    inputValue={String(activity.hours_practice || '')}
                    title="Лабораторно-практические"
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'hours_practice',
                            e.target.value,
                            false,
                        );
                    }}
                    disabled={!activity.hours || tableReadOnly}
                />
                <TableCellEditing
                    className="amountOfStudyTimeCourseProject"
                    type="text"
                    inputValue={String(activity.hours_coursework || '')}
                    title="Курсовой проект"
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'hours_coursework',
                            e.target.value,
                            false,
                        );
                    }}
                    disabled={!activity.hours || tableReadOnly}
                />
                <TableCellEditing
                    className="amountOfStudyTimePractice"
                    type="text"
                    inputValue={String(activity.hours_internship || '')}
                    title="Произв. обучение и/или профессиональная практика"
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            undefined,
                            undefined,
                            activity,
                            'hours_internship',
                            e.target.value,
                            false,
                        );
                    }}
                    disabled={!activity.hours || tableReadOnly}
                />
            </div>
            <div className="distributionCell flex-row">
                {
                    activity.semestersDistribution.map((semester) => (
                        <TableCellEditing
                            key={semester.semester_number}
                            type="text"
                            inputValue={String(semester.hours || '')}
                            title={`${semester.semester_number} семестр`}
                            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onChangeDistributionSemesterValue(
                                    qualification?.standard_curriculum_qualification_id,
                                    undefined,
                                    undefined,
                                    activity,
                                    semester.semester_number,
                                    e.target.value,
                                    false,
                                );
                            }}
                            disabled={!activity.hours || tableReadOnly}
                        />
                    ))
                }
            </div>
        </TableRow>
    );
});
