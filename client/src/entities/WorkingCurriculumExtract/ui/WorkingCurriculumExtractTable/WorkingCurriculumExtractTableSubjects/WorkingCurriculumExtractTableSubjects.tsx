import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { TableCell, TableCellEditing, TableRow } from 'shared/ui/Table';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { formatIntegerNumber } from 'shared/lib/helpers/formatIntegerNumber/formatIntegerNumber';
import { getSettingsMainCollegeData } from 'entities/Settings/SettingsMainCollege';
import { filterCreateActions } from 'shared/lib/helpers/workingCurriculumExtract/filterCreateActions/filterCreateActions';
import {
    WorkingCurriculumExtractEducationalActivities,
    WorkingCurriculumExtractGeneral,
    WorkingCurriculumExtractSubjects,
} from '../../../model/types/workingCurriculumExtractGeneral';
import cls from './WorkingCurriculumExtractTableSubjects.module.scss';
import {
    WorkingCurriculumExtractModules,
    WorkingCurriculumExtractQualifications,
    WorkingCurriculumExtractUnits,
} from '../../../model/types/workingCurriculumExtractQualifications';
import { workingCurriculumExtractActions } from '../../../model/slice/workingCurriculumExtractSlice';
import {
    getWorkingCurriculumExtractFormWithErrors,
    getWorkingCurriculumExtractReadOnly, getWorkingCurriculumExtractShowAllDisciplines,
    getWorkingCurriculumExtractValidationErrors,
} from '../../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';

interface WorkingCurriculumExtractTableSubjectsProps {
    className?: string;
    general?: WorkingCurriculumExtractGeneral;
    qualification?: WorkingCurriculumExtractQualifications;
    module?: WorkingCurriculumExtractModules;
    unit?: WorkingCurriculumExtractUnits;
    subject: WorkingCurriculumExtractSubjects;
    openEditModal: (subjId: string) => void;
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

export const WorkingCurriculumExtractTableSubjects = memo((props: WorkingCurriculumExtractTableSubjectsProps) => {
    const {
        className,
        qualification,
        module,
        unit,
        subject,
        openEditModal,
        onChangeHoursCount,
        onChangeDisciplineSort,
        onBlurDisciplineSort,
        onChangeArraySemesters,
        onBlurArraySemesters,
        onChangeWorksCount,
        onChangeDistributionSemesterValue,
    } = props;
    const dispatch = useAppDispatch();

    const formWithErrors = useSelector(getWorkingCurriculumExtractFormWithErrors);
    const notFilledErrorQualification = useSelector(getWorkingCurriculumExtractValidationErrors)?.notFilledSummaryHours
        .filter((error) => error.notFilled)
        .filter((error) => error.subject_id === subject.subject_id
            && error.standard_curriculum_qualification_id === qualification?.standard_curriculum_qualification_id)[0]?.notFilled;
    const notFilledErrorGeneral = useSelector(getWorkingCurriculumExtractValidationErrors)?.notFilledSummaryHours
        .filter((error) => error.notFilled)
        .filter((error) => error.subject_id === subject.subject_id
            && error.standard_curriculum_qualification_id === null)[0]?.notFilled;

    const tableReadOnly = useSelector(getWorkingCurriculumExtractReadOnly);
    const showAllDisciplines = useSelector(getWorkingCurriculumExtractShowAllDisciplines);

    const creditsPerHour = Number(useSelector(getSettingsMainCollegeData)!.hectum_curriculum.options
        .filter((option) => option.name === 'credit_in_hours')[0].value);
    const onDeleteSubject = (
        qualId: number | undefined,
        modId: number | undefined,
        unitId: number | undefined,
        subject: WorkingCurriculumExtractSubjects,
    ) => {
        dispatch(workingCurriculumExtractActions.deleteSubject([
            qualId || null,
            modId,
            unitId,
            subject,
        ]));
        dispatch(workingCurriculumExtractActions.calculateSummaryTime([
            qualId || null,
            modId,
            unitId,
            true,
        ]));
    };

    if (!subject.working_curriculum_extract_id && tableReadOnly) {
        return (
            <></>
        );
    }

    if (!showAllDisciplines && !filterCreateActions(subject)) {
        return (
            <></>
        );
    }

    return (
        <TableRow
            className={classNames(cls.WorkingCurriculumExtractTableSubjects, {}, [className])}
        >
            <TableCell
                className="indexCell"
            >
                <Text
                    align={TextAlign.CENTER}
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                >
                    {subject.code}
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
                    {subject.working_curriculum_extract_id && subject.working_curriculum_extract_id}
                </Text>
            </TableCell>
            <TableCell
                className={classNames(cls.subjectName, {}, ['disciplinesNameCell'])}
            >
                <Text
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                >
                    {subject.name}
                </Text>
                {!tableReadOnly && (
                    <div className={cls.editingBtns}>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            title="Редактировать"
                            className={cls.editBtn}
                            onClick={() => {
                                openEditModal(String(subject.subject_id));
                            }}
                        >
                            <Icon Svg={EditIcon} />
                        </Button>
                        {filterCreateActions(subject) && (
                            <Button
                                theme={ButtonTheme.CLEAR}
                                title="Удалить"
                                className={cls.editBtn}
                                onClick={() => {
                                    onDeleteSubject(
                                        qualification?.standard_curriculum_qualification_id,
                                        module?.module_id,
                                        unit?.educational_modules_unit_id,
                                        subject,
                                    );
                                }}
                            >
                                <Icon Svg={TrashIcon} />
                            </Button>
                        )}
                    </div>
                )}
            </TableCell>
            <TableCellEditing
                className="sortCell"
                type="number"
                step={100}
                inputValue={subject.sortValue || ''}
                title="Сортировка"
                disabled={tableReadOnly}
                onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeDisciplineSort(
                        qualification?.standard_curriculum_qualification_id,
                        module?.module_id,
                        unit?.educational_modules_unit_id,
                        subject,
                        'sortValue',
                        e.target.value,
                        true,
                    );
                }}
                onBlur={() => {
                    onBlurDisciplineSort(
                        qualification?.standard_curriculum_qualification_id,
                        module?.module_id,
                        unit?.educational_modules_unit_id,
                        subject,
                        String(subject.sortValue) || '',
                        subject.sort,
                        true,
                    );
                }}
            />
            <div className="formControlCell flex-row">
                <TableCellEditing
                    className="formControlExamCell"
                    type="text"
                    inputValue={subject.exams_semestrs as string || ''}
                    title="Экзамен"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeArraySemesters(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'exams_semestrs',
                            e.target.value,
                            true,
                        );
                    }}
                    onBlur={() => {
                        onBlurArraySemesters(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'exams_semestrs',
                            subject.exams_semestrs,
                            true,
                        );
                    }}
                />
                <TableCellEditing
                    className="formControlEasyExamCell"
                    type="text"
                    inputValue={subject.tests_semesters as string || ''}
                    title="Зачет"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeArraySemesters(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'tests_semesters',
                            e.target.value,
                            true,
                        );
                    }}
                    onBlur={() => {
                        onBlurArraySemesters(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'tests_semesters',
                            subject.tests_semesters,
                            true,
                        );
                    }}
                />
                <TableCellEditing
                    className="formControlControlWorksCell"
                    type="text"
                    inputValue={String(subject.controlworks_count || '')}
                    title="Кол-во контрольных работ"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeWorksCount(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'controlworks_count',
                            e.target.value,
                            true,
                        );
                    }}
                />
                <TableCellEditing
                    className="formControlCourseWorksCell"
                    type="text"
                    inputValue={String(subject.courseworks_count || '')}
                    title="Кол-во курсовых работ"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeWorksCount(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'courseworks_count',
                            e.target.value,
                            true,
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
                            subject.hours && formatIntegerNumber(subject.hours / creditsPerHour)
                        }
                    </Text>
                </TableCell>
                <TableCellEditing
                    className="amountOfStudyTimeHours"
                    type="text"
                    inputValue={String(subject.hours || '')}
                    title="Всего часов"
                    disabled={tableReadOnly}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'hours',
                            e.target.value,
                            true,
                        );
                    }}
                    error={formWithErrors && (notFilledErrorQualification || notFilledErrorGeneral)}
                />
                <TableCellEditing
                    className="amountOfStudyTimeTheory"
                    type="text"
                    inputValue={String(subject.hours_theory || '')}
                    title="Теоретические"
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'hours_theory',
                            e.target.value,
                            true,
                        );
                    }}
                    disabled={!subject.hours || tableReadOnly}
                />
                <TableCellEditing
                    className="amountOfStudyTimeLabs"
                    type="text"
                    inputValue={String(subject.hours_practice || '')}
                    title="Лабораторно-практические"
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'hours_practice',
                            e.target.value,
                            true,
                        );
                    }}
                    disabled={!subject.hours || tableReadOnly}
                />
                <TableCellEditing
                    className="amountOfStudyTimeCourseProject"
                    type="text"
                    inputValue={String(subject.hours_coursework || '')}
                    title="Курсовой проект"
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'hours_coursework',
                            e.target.value,
                            true,
                        );
                    }}
                    disabled={!subject.hours || tableReadOnly}
                />
                <TableCellEditing
                    className="amountOfStudyTimePractice"
                    type="text"
                    inputValue={String(subject.hours_internship || '')}
                    title="Произв. обучение и/или профессиональная практика"
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeHoursCount(
                            qualification?.standard_curriculum_qualification_id,
                            module?.module_id,
                            unit?.educational_modules_unit_id,
                            subject,
                            'hours_internship',
                            e.target.value,
                            true,
                        );
                    }}
                    disabled={!subject.hours || tableReadOnly}
                />
            </div>
            <div className="distributionCell flex-row">
                {
                    subject.semestersDistribution.map((semester) => (
                        <TableCellEditing
                            key={semester.semester_number}
                            type="text"
                            inputValue={String(semester.hours || '')}
                            title={`${semester.semester_number} семестр`}
                            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onChangeDistributionSemesterValue(
                                    qualification?.standard_curriculum_qualification_id,
                                    module?.module_id,
                                    unit?.educational_modules_unit_id,
                                    subject,
                                    semester.semester_number,
                                    e.target.value,
                                    true,
                                );
                            }}
                            disabled={!subject.hours || tableReadOnly}
                        />
                    ))
                }
            </div>
        </TableRow>
    );
});
