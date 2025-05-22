import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { TableCell, TableRow } from 'shared/ui/Table';
import { TableCellTheme } from 'shared/ui/Table/TableCell/TableCell';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { formatIntegerNumber } from 'shared/lib/helpers/formatIntegerNumber/formatIntegerNumber';
import { Toast } from 'shared/ui/Toast/Toast';
import { removeCommaRegExp } from 'shared/const/regExp';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CToaster } from '@coreui/react';
import { useSelector } from 'react-redux';
import { getSettingsMainCollegeData } from 'entities/Settings/SettingsMainCollege';
import {
    Button, ButtonForm, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';
import { useLocation } from 'react-router-dom';
import {
    WorkingCurriculumExtractTableEduActivities,
} from '../WorkingCurriculumExtractTableEduActivities/WorkingCurriculumExtractTableEduActivities';
import {
    getWorkingCurriculumExtractData,
    getWorkingCurriculumExtractReadOnly,
} from '../../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';
import { workingCurriculumExtractActions } from '../../../model/slice/workingCurriculumExtractSlice';
import {
    WorkingCurriculumExtractEducationalActivities,
    WorkingCurriculumExtractGeneral,
    WorkingCurriculumExtractSubject,
    WorkingCurriculumExtractSubjects,
} from '../../../model/types/workingCurriculumExtractGeneral';
import cls from './WorkingCurriculumExtractTableGeneral.module.scss';
import {
    WorkingCurriculumExtractTableSubjects,
} from '../WorkingCurriculumExtractTableSubjects/WorkingCurriculumExtractTableSubjects';
import { AddDiscipline } from '../WorkingCurriculumExtractTableDisciplineModals/AddDiscipline/AddDiscipline';
import { EditDiscipline } from '../WorkingCurriculumExtractTableDisciplineModals/EditDiscipline/EditDiscipline';
import {
    ChooseEduActivitiesTypes,
} from '../WorkingCurriculumExtractTableDisciplineModals/ChooseEduActivitiesTypes/ChooseEduActivitiesTypes';

interface WorkingCurriculumExtractTableGeneralProps {
    className?: string;
    general: WorkingCurriculumExtractGeneral;
}

export const WorkingCurriculumExtractTableGeneral = memo((props: WorkingCurriculumExtractTableGeneralProps) => {
    const {
        className,
        general,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [addSubjectModalVisible, setAddSubjectModalVisible] = useState(false);
    const [editSubjectModalVisible, setEditSubjectModalVisible] = useState(false);
    const [chooseEduActivityTypeModalVisible, setChooseEduActivityTypeModalVisible] = useState(false);
    const [editSubjectId, setEditSubjectId] = useState<string>();
    const { pathname } = useLocation();

    const extractData = useSelector(getWorkingCurriculumExtractData);
    const creditsPerHour = Number(useSelector(getSettingsMainCollegeData)!.knrtu_kai.options
        .filter((option) => option.name === 'credit_in_hours')[0].value);

    const tableReadOnly = useSelector(getWorkingCurriculumExtractReadOnly);

    const onOpenAddSubjectModal = useCallback(() => {
        setAddSubjectModalVisible(true);
    }, []);

    const onCloseAddSubjectModal = useCallback(() => {
        setAddSubjectModalVisible(false);
    }, []);

    const onOpenEditSubjectModal = useCallback((subjId: string) => {
        setEditSubjectModalVisible(true);
        setEditSubjectId(subjId);
    }, []);

    const onCloseEditSubjectModal = useCallback(() => {
        setEditSubjectModalVisible(false);
    }, []);

    const onOpenChooseEduActivityTypeModal = useCallback(() => {
        setChooseEduActivityTypeModalVisible(true);
    }, []);

    const onCloseChooseEduActivityTypeModal = useCallback(() => {
        setChooseEduActivityTypeModalVisible(false);
    }, []);

    const addSubject = (subject: WorkingCurriculumExtractSubject, index: number) => {
        const subjectMaxSortValue = general.subjects[general.subjects.length - 1]?.sort || 0;
        dispatch(workingCurriculumExtractActions.addSubject([
            null,
            undefined,
            undefined,
            subject,
            Number(pathname.split('/')[pathname.split('/').length - 1]),
            (index + 1) * 100 + subjectMaxSortValue,
        ]));
    };

    const onChangeHoursCount = useCallback((
        qualId: number | undefined,
        modId: number | undefined,
        unitId: number | undefined,
        subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
        fieldName: string,
        fieldValue: string,
        isSubject: boolean,
    ) => {
        const replaceValue = Number(fieldValue.replace(/[^\d1-9]/g, ''));

        if (fieldName === 'hours' && replaceValue > 1440) {
            addToast(Toast.error('Поле "Всего часов" не может быть больше 1440 часов'));
            return;
        }

        if (fieldName === 'hours') {
            const theoryHoursDistribution = replaceValue ? replaceValue * 0.4 : null;
            const practiceHoursDistribution = theoryHoursDistribution ? replaceValue - theoryHoursDistribution : null;

            dispatch(workingCurriculumExtractActions.changeFieldValue([
                null,
                undefined,
                undefined,
                subject,
                'hours_theory',
                theoryHoursDistribution ? Number(formatIntegerNumber(Math.round(theoryHoursDistribution))) : null,
                isSubject,
            ]));

            dispatch(workingCurriculumExtractActions.changeFieldValue([
                null,
                undefined,
                undefined,
                subject,
                'hours_practice',
                practiceHoursDistribution ? Number(formatIntegerNumber(Math.round(practiceHoursDistribution))) : null,
                isSubject,
            ]));

            dispatch(workingCurriculumExtractActions.changeFieldValue([
                null,
                undefined,
                undefined,
                subject,
                'hours_coursework',
                null,
                isSubject,
            ]));
            dispatch(workingCurriculumExtractActions.changeFieldValue([
                null,
                undefined,
                undefined,
                subject,
                'hours_internship',
                null,
                isSubject,
            ]));

            subject.semestersDistribution.forEach((semester) => {
                dispatch(workingCurriculumExtractActions.changeDistributionValues([
                    qualId || null,
                    modId,
                    unitId,
                    subject,
                    semester.semester_number,
                    null,
                    isSubject,
                ]));
            });
        }

        const remainsHours = (subject.hours || 0) - (fieldName === 'hours_theory' ? replaceValue : subject.hours_theory || 0)
            - (fieldName === 'hours_practice' ? replaceValue : subject.hours_practice || 0)
            - (fieldName === 'hours_coursework' ? replaceValue : subject.hours_coursework || 0)
            - (fieldName === 'hours_internship' ? replaceValue : subject.hours_internship || 0);

        if (fieldName !== 'hours' && Number(fieldValue) > remainsHours && remainsHours < 0) {
            addToast(Toast.error(`Сумма всех часов не должна превышать ${subject.hours || 0} часа(-ов)`));
            return;
        }

        dispatch(workingCurriculumExtractActions.changeFieldValue([
            null,
            undefined,
            undefined,
            subject,
            fieldName,
            replaceValue || null,
            isSubject,
        ]));

        dispatch(workingCurriculumExtractActions.addValidationErrors([
            qualId || null,
            isSubject ? subject.subject_id! : subject.educational_activity_type_id!,
            'amountOfStudyTime',
            remainsHours === 0,
            false,
            isSubject,
        ]));

        if (fieldName === 'hours') {
            dispatch(workingCurriculumExtractActions.addValidationErrors([
                qualId || null,
                isSubject ? subject.subject_id! : subject.educational_activity_type_id!,
                'notFilledSummaryHours',
                false,
                !replaceValue,
                isSubject,
            ]));
        }

        dispatch(workingCurriculumExtractActions.calculateSummaryTime([
            null,
            undefined,
            undefined,
            isSubject,
        ]));
    }, [dispatch]);

    const onChangeDistributionSemesterValue = useCallback((
        qualId: number | undefined,
        modId: number | undefined,
        unitId: number | undefined,
        subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
        semesterNumber: number,
        fieldValue: string,
        isSubject: boolean,
    ) => {
        const replaceValue = Number(fieldValue.replace(/[^\d1-9]/g, ''));

        const remainsHours = subject.semestersDistribution
            .reduce((prevValue, nextValue) => (
                prevValue - (semesterNumber === nextValue.semester_number ? replaceValue : (nextValue.hours || 0))
            ), subject.hours!);

        if (replaceValue > remainsHours && remainsHours < 0) {
            addToast(Toast.error(`Сумма всех часов не должна превышать ${subject.hours || 0} часа(-ов)`));
            return;
        }

        dispatch(workingCurriculumExtractActions.changeDistributionValues([
            null,
            undefined,
            undefined,
            subject,
            semesterNumber,
            replaceValue || null,
            isSubject,
        ]));

        dispatch(workingCurriculumExtractActions.addValidationErrors([
            qualId || null,
            isSubject ? subject.subject_id! : subject.educational_activity_type_id!,
            'semestersDistribution',
            (remainsHours === 0 || remainsHours === subject.hours),
            false,
            isSubject,
        ]));

        dispatch(workingCurriculumExtractActions.calculateSummaryTime([
            null,
            undefined,
            undefined,
            isSubject,
        ]));
    }, [dispatch]);

    const onChangeWorksCount = useCallback((
        qualId: number | undefined,
        modId: number | undefined,
        unitId: number| undefined,
        subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
        fieldName: string,
        fieldValue: string,
        isSubject: boolean,
    ) => {
        dispatch(workingCurriculumExtractActions.changeFieldValue([
            null,
            undefined,
            undefined,
            subject,
            fieldName,
            Number(fieldValue) ? Number(fieldValue.replace(/[^\d1-9]/g, '')) : null,
            isSubject,
        ]));
    }, [dispatch]);

    const onChangeArraySemesters = useCallback((
        qualId: number | undefined,
        modId: number | undefined,
        unitId: number | undefined,
        subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
        fieldName: string,
        fieldValue: string,
        isSubject: boolean,
    ) => {
        const value = fieldValue.replace(/[^\d,]|(?<=,)(,+)|^0|(?<![1-9]),/g, '').replace(/0/g, '');
        const valueArr = value.replace(removeCommaRegExp, '').split(',');

        if (Number(valueArr[valueArr.length - 1]) > extractData!.meta.semestersCount) {
            addToast(Toast.error('Значение не может быть больше, чем кол-во семестров'));
            return;
        }

        dispatch(workingCurriculumExtractActions.changeFieldValue([
            null,
            undefined,
            undefined,
            subject,
            fieldName,
            Array.from(new Set(value.split(','))).join(','),
            isSubject,
        ]));
    }, [dispatch, extractData]);

    const onBlurArraySemesters = useCallback((
        qualId: number | undefined,
        modId: number | undefined,
        unitId: number | undefined,
        subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
        fieldName: string,
        fieldValue: string | null | number[],
        isSubject: boolean,
    ) => {
        dispatch(workingCurriculumExtractActions.changeFieldValue([
            null,
            undefined,
            undefined,
            subject,
            fieldName,
            fieldValue ? (fieldValue as string).replace(removeCommaRegExp, '') : '',
            isSubject,
        ]));
    }, [dispatch]);

    const onChangeDisciplineSort = useCallback((
        qualId: number | undefined,
        modId: number | undefined,
        unitId: number | undefined,
        subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
        fieldName: string,
        fieldValue: string,
        isSubject: boolean,
    ) => {
        const replacedValue = String(fieldValue).replace(removeCommaRegExp, '');

        dispatch(workingCurriculumExtractActions.changeFieldValue([
            null,
            undefined,
            undefined,
            subject,
            fieldName,
            replacedValue,
            isSubject,
        ]));
    }, [dispatch]);

    const onBlurDisciplineSort = useCallback((
        qualId: number | undefined,
        modId: number | undefined,
        unitId: number | undefined,
        subject: WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
        fieldValue: string,
        prevValue: number | string,
        isSubject: boolean,
    ) => {
        if (Number(fieldValue) < 100) {
            addToast(Toast.error('Значение поля сортировки не может быть меньше 100'));
            dispatch(workingCurriculumExtractActions.changeFieldValue([
                null,
                undefined,
                undefined,
                subject,
                'sortValue',
                String(prevValue),
                isSubject,
            ]));
            return;
        }

        if (Number(fieldValue) % 100 !== 0) {
            addToast(Toast.error('Шаг поля сортировки - 100'));
            dispatch(workingCurriculumExtractActions.changeFieldValue([
                null,
                undefined,
                undefined,
                subject,
                'sortValue',
                String(+((+fieldValue / 100).toFixed(0) || 1) * 100),
                isSubject,
            ]));
        }

        dispatch(workingCurriculumExtractActions.changeFieldValue([
            null,
            undefined,
            undefined,
            subject,
            'sort',
            Number(fieldValue),
            isSubject,
        ]));
    }, [dispatch]);

    useEffect(() => {
        general.unfilledSubjects.forEach((subject, index) => {
            addSubject(subject, index);
        });

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className={classNames(cls.WorkingCurriculumExtractTableGeneral, {}, [className])}>
                <TableRow>
                    <TableCell className="indexCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            {general.code || ''}
                        </Text>
                    </TableCell>
                    <TableCell className="idCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        />
                    </TableCell>
                    <TableCell className="disciplinesNameCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            {general.name}
                        </Text>
                    </TableCell>
                    <TableCell className="sortCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            {general.sort}
                        </Text>
                    </TableCell>
                    <div className="formControlCell flex-row">
                        {
                            general.summary?.formControl.map((className) => (
                                <TableCell
                                    className={className}
                                    theme={TableCellTheme.YELLOW}
                                    key={className}
                                >
                                    <Text />
                                </TableCell>
                            ))
                        }
                    </div>
                    <div className="amountOfStudyTimeCell flex-row">
                        <TableCell className="amountOfStudyTimeCredits" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            />
                        </TableCell>
                        <TableCell className="amountOfStudyTimeHours" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            />
                        </TableCell>
                        <TableCell className="amountOfStudyTimeTheory" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            />
                        </TableCell>
                        <TableCell className="amountOfStudyTimeLabs" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            />
                        </TableCell>
                        <TableCell className="amountOfStudyTimeCourseProject" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            />
                        </TableCell>
                        <TableCell className="amountOfStudyTimePractice" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            />
                        </TableCell>
                    </div>
                    <div className="distributionCell flex-row">
                        {
                            general.summary?.semestersDistribution.map((semester) => (
                                <TableCell
                                    key={semester.semester_number}
                                    theme={TableCellTheme.YELLOW}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                        className="distributionCellHours"
                                    >
                                        {semester.hours && semester.hours}
                                    </Text>
                                </TableCell>
                            ))
                        }
                    </div>
                </TableRow>
                {
                    [...general.subjects]
                        .sort((a, b) => a.sort - b.sort)
                        .map((subject) => (
                            <WorkingCurriculumExtractTableSubjects
                                key={String(subject.sort) + subject.subject_id + subject.working_curriculum_id}
                                subject={subject}
                                openEditModal={onOpenEditSubjectModal}
                                onChangeHoursCount={onChangeHoursCount}
                                onChangeDisciplineSort={onChangeDisciplineSort}
                                onBlurDisciplineSort={onBlurDisciplineSort}
                                onChangeArraySemesters={onChangeArraySemesters}
                                onBlurArraySemesters={onBlurArraySemesters}
                                onChangeWorksCount={onChangeWorksCount}
                                onChangeDistributionSemesterValue={onChangeDistributionSemesterValue}
                            />
                        ))
                }
                {!tableReadOnly && (
                    <TableRow>
                        <div className="indexCell" />
                        <div className="idCell" />
                        <Button
                            buttonForm={ButtonForm.NOT_BORDERED}
                            theme={ButtonTheme.BACKGROUND}
                            size={ButtonSize.XS}
                            onClick={onOpenAddSubjectModal}
                            className={classNames(cls.disciplineAddBtn, {}, ['disciplinesNameCell'])}
                        >
                            <Text
                                size={TextSize.XXS}
                                weight={TextWeight.SEMIBOLD}
                                align={TextAlign.LEFT}
                            >
                                Создать дисциплину
                            </Text>
                        </Button>
                    </TableRow>
                )}
                {!tableReadOnly && (
                    <TableRow>
                        <div className="indexCell" />
                        <div className="idCell" />
                        <Button
                            buttonForm={ButtonForm.NOT_BORDERED}
                            theme={ButtonTheme.BACKGROUND}
                            size={ButtonSize.XS}
                            onClick={onOpenChooseEduActivityTypeModal}
                            className={classNames(cls.eduActivityTypeBtn, {}, ['disciplinesNameCell'])}
                        >
                            <Text
                                size={TextSize.XXS}
                                weight={TextWeight.SEMIBOLD}
                                align={TextAlign.LEFT}
                            >
                                Добавить иной вид учебной деятельности
                            </Text>
                        </Button>
                    </TableRow>
                )}
                {
                    [...general.educationalActivities]
                        .filter((activity) => activity.is_in_compulsory_education)
                        .sort((a, b) => a.sort - b.sort)
                        .map((activity) => (
                            <WorkingCurriculumExtractTableEduActivities
                                key={String(activity.sort) + activity.educational_activity_type_id + activity.working_curriculum_id}
                                activity={activity}
                                onChangeHoursCount={onChangeHoursCount}
                                onChangeDisciplineSort={onChangeDisciplineSort}
                                onBlurDisciplineSort={onBlurDisciplineSort}
                                onChangeArraySemesters={onChangeArraySemesters}
                                onBlurArraySemesters={onBlurArraySemesters}
                                onChangeWorksCount={onChangeWorksCount}
                                onChangeDistributionSemesterValue={onChangeDistributionSemesterValue}
                            />
                        ))
                }
                <TableRow>
                    <TableCell className="indexCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        />
                    </TableCell>
                    <TableCell className="idCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        />
                    </TableCell>
                    <TableCell className="disciplinesNameCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                            align={TextAlign.RIGHT}
                        >
                            Итого на обязательное обучение
                        </Text>
                    </TableCell>
                    <TableCell className="sortCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        />
                    </TableCell>
                    <div className="formControlCell flex-row">
                        {
                            general.summaryCompulsory?.formControl.map((className) => (
                                <TableCell
                                    className={className}
                                    theme={TableCellTheme.YELLOW}
                                    key={className}
                                >
                                    <Text />
                                </TableCell>
                            ))
                        }
                    </div>
                    <div className="amountOfStudyTimeCell flex-row">
                        <TableCell className="amountOfStudyTimeCredits" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summaryCompulsory?.amountOfStudyTime.hours
                                    && formatIntegerNumber(general.summaryCompulsory.amountOfStudyTime.hours / creditsPerHour)}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeHours" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summaryCompulsory?.amountOfStudyTime.hours && general.summaryCompulsory.amountOfStudyTime.hours}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeTheory" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summaryCompulsory?.amountOfStudyTime.hours_theory
                                    && general.summaryCompulsory.amountOfStudyTime.hours_theory}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeLabs" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summaryCompulsory?.amountOfStudyTime.hours_practice
                                    && general.summaryCompulsory.amountOfStudyTime.hours_practice}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeCourseProject" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summaryCompulsory?.amountOfStudyTime.hours_coursework
                                    && general.summaryCompulsory.amountOfStudyTime.hours_coursework}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimePractice" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summaryCompulsory?.amountOfStudyTime.hours_internship
                                    && general.summaryCompulsory.amountOfStudyTime.hours_internship}
                            </Text>
                        </TableCell>
                    </div>
                    <div className="distributionCell flex-row">
                        {
                            general.summaryCompulsory?.semestersDistribution.map((semester) => (
                                <TableCell
                                    key={semester.semester_number}
                                    theme={TableCellTheme.YELLOW}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                        className="distributionCellHours"
                                    >
                                        {semester.hours && semester.hours}
                                    </Text>
                                </TableCell>
                            ))
                        }
                    </div>
                </TableRow>
                {
                    [...general.educationalActivities]
                        .filter((activity) => !activity.is_in_compulsory_education)
                        .sort((a, b) => a.sort - b.sort)
                        .map((activity) => (
                            <WorkingCurriculumExtractTableEduActivities
                                key={String(activity.sort) + activity.educational_activity_type_id + activity.working_curriculum_id}
                                activity={activity}
                                onChangeHoursCount={onChangeHoursCount}
                                onChangeDisciplineSort={onChangeDisciplineSort}
                                onBlurDisciplineSort={onBlurDisciplineSort}
                                onChangeArraySemesters={onChangeArraySemesters}
                                onBlurArraySemesters={onBlurArraySemesters}
                                onChangeWorksCount={onChangeWorksCount}
                                onChangeDistributionSemesterValue={onChangeDistributionSemesterValue}
                            />
                        ))
                }
                <TableRow>
                    <TableCell className="indexCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        />
                    </TableCell>
                    <TableCell className="idCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        />
                    </TableCell>
                    <TableCell className="disciplinesNameCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                            align={TextAlign.RIGHT}
                        >
                            ИТОГО
                        </Text>
                    </TableCell>
                    <TableCell className="sortCell" theme={TableCellTheme.YELLOW}>
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        />
                    </TableCell>
                    <div className="formControlCell flex-row">
                        {
                            general.summary?.formControl.map((className) => (
                                <TableCell
                                    className={className}
                                    theme={TableCellTheme.YELLOW}
                                    key={className}
                                >
                                    <Text />
                                </TableCell>
                            ))
                        }
                    </div>
                    <div className="amountOfStudyTimeCell flex-row">
                        <TableCell className="amountOfStudyTimeCredits" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summary?.amountOfStudyTime.hours
                                    && formatIntegerNumber(general.summary.amountOfStudyTime.hours / creditsPerHour)}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeHours" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summary?.amountOfStudyTime.hours
                                    && general.summary.amountOfStudyTime.hours}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeTheory" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summary?.amountOfStudyTime.hours_theory
                                    && general.summary.amountOfStudyTime.hours_theory}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeLabs" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summary?.amountOfStudyTime.hours_practice
                                    && general.summary.amountOfStudyTime.hours_practice}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeCourseProject" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summary?.amountOfStudyTime.hours_coursework
                                    && general.summary.amountOfStudyTime.hours_coursework}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimePractice" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {general.summary?.amountOfStudyTime.hours_internship
                                    && general.summary.amountOfStudyTime.hours_internship}
                            </Text>
                        </TableCell>
                    </div>
                    <div className="distributionCell flex-row">
                        {
                            general.summary?.semestersDistribution.map((semester) => (
                                <TableCell
                                    key={semester.semester_number}
                                    theme={TableCellTheme.YELLOW}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                        className="distributionCellHours"
                                    >
                                        {semester.hours && semester.hours}
                                    </Text>
                                </TableCell>
                            ))
                        }
                    </div>
                </TableRow>
            </div>

            <AddDiscipline
                onClose={onCloseAddSubjectModal}
                isOpen={addSubjectModalVisible}
                generalModule
            />

            <EditDiscipline
                onClose={onCloseEditSubjectModal}
                isOpen={editSubjectModalVisible}
                curriculumSubjectsId={editSubjectId}
            />

            <ChooseEduActivitiesTypes
                onClose={onCloseChooseEduActivityTypeModal}
                isOpen={chooseEduActivityTypeModalVisible}
            />

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
