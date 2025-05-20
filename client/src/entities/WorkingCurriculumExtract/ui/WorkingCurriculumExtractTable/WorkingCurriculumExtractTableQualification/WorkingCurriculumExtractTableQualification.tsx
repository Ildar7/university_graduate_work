import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { TableCell, TableRow } from 'shared/ui/Table';
import { TableCellTheme } from 'shared/ui/Table/TableCell/TableCell';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import {
    Button, ButtonForm, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSettingsMainCollegeData } from 'entities/Settings/SettingsMainCollege';
import { CToaster } from '@coreui/react';
import { formatIntegerNumber } from 'shared/lib/helpers/formatIntegerNumber/formatIntegerNumber';
import { Toast } from 'shared/ui/Toast/Toast';
import { workingCurriculumExtractActions } from 'entities/WorkingCurriculumExtract';
import { removeCommaRegExp } from 'shared/const/regExp';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { EditDiscipline } from '../WorkingCurriculumExtractTableDisciplineModals/EditDiscipline/EditDiscipline';
import {
    ChooseEduActivitiesTypes,
} from '../WorkingCurriculumExtractTableDisciplineModals/ChooseEduActivitiesTypes/ChooseEduActivitiesTypes';
import { AddDiscipline } from '../WorkingCurriculumExtractTableDisciplineModals/AddDiscipline/AddDiscipline';
import {
    WorkingCurriculumExtractTableEduActivities,
} from '../WorkingCurriculumExtractTableEduActivities/WorkingCurriculumExtractTableEduActivities';
import cls from './WorkingCurriculumExtractTableQualification.module.scss';
import {
    WorkingCurriculumExtractModules,
    WorkingCurriculumExtractQualifications,
    WorkingCurriculumExtractUnits,
} from '../../../model/types/workingCurriculumExtractQualifications';
import {
    WorkingCurriculumExtractEducationalActivities,
    WorkingCurriculumExtractSubject,
    WorkingCurriculumExtractSubjects,
} from '../../../model/types/workingCurriculumExtractGeneral';
import {
    WorkingCurriculumExtractTableSubjects,
} from '../WorkingCurriculumExtractTableSubjects/WorkingCurriculumExtractTableSubjects';
import {
    getWorkingCurriculumExtractData,
    getWorkingCurriculumExtractReadOnly,
} from '../../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';

interface WorkingCurriculumExtractTableQualificationProps {
    className?: string;
    qualification: WorkingCurriculumExtractQualifications;
}

export const WorkingCurriculumExtractTableQualification = memo((props: WorkingCurriculumExtractTableQualificationProps) => {
    const {
        className,
        qualification,
    } = props;
    const dispatch = useAppDispatch();
    const [addSubjectModalVisible, setAddSubjectModalVisible] = useState(false);
    const [editSubjectModalVisible, setEditSubjectModalVisible] = useState(false);
    const [chooseEduActivityTypeModalVisible, setChooseEduActivityTypeModalVisible] = useState(false);
    const [editSubjectId, setEditSubjectId] = useState<string>();
    const [moduleDetail, setModuleDetail] = useState<WorkingCurriculumExtractModules>();
    const [unitDetail, setUnitDetail] = useState<WorkingCurriculumExtractUnits>();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const { pathname } = useLocation();

    const extractData = useSelector(getWorkingCurriculumExtractData);
    const creditsPerHour = Number(useSelector(getSettingsMainCollegeData)!.hectum_curriculum.options
        .filter((option) => option.name === 'credit_in_hours')[0].value);

    const tableReadOnly = useSelector(getWorkingCurriculumExtractReadOnly);

    const onOpenAddSubjectModal = useCallback((
        module: WorkingCurriculumExtractModules,
        unit: WorkingCurriculumExtractUnits,
    ) => {
        setAddSubjectModalVisible(true);
        setModuleDetail(module);
        setUnitDetail(unit);
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
                qualId || null,
                modId,
                unitId,
                subject,
                'hours_theory',
                theoryHoursDistribution ? Number(formatIntegerNumber(Math.round(theoryHoursDistribution))) : null,
                isSubject,
            ]));

            dispatch(workingCurriculumExtractActions.changeFieldValue([
                qualId || null,
                modId,
                unitId,
                subject,
                'hours_practice',
                practiceHoursDistribution ? Number(formatIntegerNumber(Math.round(practiceHoursDistribution))) : null,
                isSubject,
            ]));

            dispatch(workingCurriculumExtractActions.changeFieldValue([
                qualId || null,
                modId,
                unitId,
                subject,
                'hours_coursework',
                null,
                isSubject,
            ]));
            dispatch(workingCurriculumExtractActions.changeFieldValue([
                qualId || null,
                modId,
                unitId,
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
            qualId || null,
            modId,
            unitId,
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
            qualId || null,
            modId,
            unitId,
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
            qualId || null,
            modId,
            unitId,
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
            qualId || null,
            modId,
            unitId,
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
            qualId || null,
            modId,
            unitId,
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
            qualId || null,
            modId,
            unitId,
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
            qualId || null,
            modId,
            unitId,
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
            qualId || null,
            modId,
            unitId,
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
                qualId || null,
                modId,
                unitId,
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
                qualId || null,
                modId,
                unitId,
                subject,
                'sortValue',
                String(+((+fieldValue / 100).toFixed(0) || 1) * 100),
                isSubject,
            ]));
        }

        dispatch(workingCurriculumExtractActions.changeFieldValue([
            qualId || null,
            modId,
            unitId,
            subject,
            'sort',
            Number(fieldValue),
            isSubject,
        ]));
    }, [dispatch]);

    const addSubject = (
        module: WorkingCurriculumExtractModules,
        unit: WorkingCurriculumExtractUnits,
        subject: WorkingCurriculumExtractSubject,
        index: number,
    ) => {
        const subjectMaxSortValue = unit.subjects[unit.subjects.length - 1]?.sort || 0;
        dispatch(workingCurriculumExtractActions.addSubject([
            qualification.standard_curriculum_qualification_id,
            module.module_id,
            unit.educational_modules_unit_id,
            subject,
            Number(pathname.split('/')[pathname.split('/').length - 1]),
            (index + 1) * 100 + subjectMaxSortValue,
        ]));
    };

    useEffect(() => {
        qualification.modules.forEach((module) => {
            module.units.forEach((unit) => {
                unit.unfilledSubjects.forEach((subject, index) => {
                    addSubject(module, unit, subject, index);
                });
            });
        });

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className={classNames(cls.WorkingCurriculumExtractTableQualification, {}, [className])}>
                <TableRow className={cls.qualRow}>
                    <TableCell
                        className="fullCell"
                        theme={TableCellTheme.YELLOW}
                    >
                        <Text
                            weight={TextWeight.SEMIBOLD}
                            align={TextAlign.CENTER}
                            className={cls.qualName}
                        >
                            {qualification.name}
                        </Text>
                    </TableCell>
                </TableRow>
                {
                    [...qualification.modules]
                        .map((module) => (
                            <div
                                className={cls.moduleInfo}
                                key={String(module.sort) + module.module_id + module.standard_curriculum_id}
                            >
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
                                        >
                                            {module.name}
                                        </Text>
                                    </TableCell>
                                    <TableCell className="sortCell" theme={TableCellTheme.YELLOW}>
                                        <Text
                                            align={TextAlign.CENTER}
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            {module.sort}
                                        </Text>
                                    </TableCell>
                                    <div className="formControlCell flex-row">
                                        {
                                            module.summary?.formControl.map((className) => (
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
                                                {module.summary?.amountOfStudyTime.hours
                                                    && formatIntegerNumber(module.summary.amountOfStudyTime.hours / creditsPerHour)}
                                            </Text>
                                        </TableCell>
                                        <TableCell className="amountOfStudyTimeHours" theme={TableCellTheme.YELLOW}>
                                            <Text
                                                align={TextAlign.CENTER}
                                                size={TextSize.XS}
                                                weight={TextWeight.SEMIBOLD}
                                            >
                                                {module.summary?.amountOfStudyTime.hours && module.summary.amountOfStudyTime.hours}
                                            </Text>
                                        </TableCell>
                                        <TableCell className="amountOfStudyTimeTheory" theme={TableCellTheme.YELLOW}>
                                            <Text
                                                align={TextAlign.CENTER}
                                                size={TextSize.XS}
                                                weight={TextWeight.SEMIBOLD}
                                            >
                                                {module.summary?.amountOfStudyTime.hours_theory && module.summary.amountOfStudyTime.hours_theory}
                                            </Text>
                                        </TableCell>
                                        <TableCell className="amountOfStudyTimeLabs" theme={TableCellTheme.YELLOW}>
                                            <Text
                                                align={TextAlign.CENTER}
                                                size={TextSize.XS}
                                                weight={TextWeight.SEMIBOLD}
                                            >
                                                {module.summary?.amountOfStudyTime.hours_practice && module.summary.amountOfStudyTime.hours_practice}
                                            </Text>
                                        </TableCell>
                                        <TableCell className="amountOfStudyTimeCourseProject" theme={TableCellTheme.YELLOW}>
                                            <Text
                                                align={TextAlign.CENTER}
                                                size={TextSize.XS}
                                                weight={TextWeight.SEMIBOLD}
                                            >
                                                {module.summary?.amountOfStudyTime.hours_coursework && module.summary.amountOfStudyTime.hours_coursework}
                                            </Text>
                                        </TableCell>
                                        <TableCell className="amountOfStudyTimePractice" theme={TableCellTheme.YELLOW}>
                                            <Text
                                                align={TextAlign.CENTER}
                                                size={TextSize.XS}
                                                weight={TextWeight.SEMIBOLD}
                                            >
                                                {module.summary?.amountOfStudyTime.hours_internship && module.summary.amountOfStudyTime.hours_internship}
                                            </Text>
                                        </TableCell>
                                    </div>
                                    <div className="distributionCell flex-row">
                                        {
                                            module.summary?.semestersDistribution.map((semester) => (
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
                                    [...module.units]
                                        .map((unit) => (
                                            <div
                                                className={cls.unitInfo}
                                                key={String(unit.sort) + unit.educational_modules_unit_id + unit.code}
                                            >
                                                <TableRow>
                                                    <TableCell className="indexCell" theme={TableCellTheme.BLUE}>
                                                        <Text
                                                            align={TextAlign.CENTER}
                                                            size={TextSize.XS}
                                                            weight={TextWeight.SEMIBOLD}
                                                        >
                                                            {unit.code}
                                                        </Text>
                                                    </TableCell>
                                                    <TableCell className="idCell" theme={TableCellTheme.BLUE}>
                                                        <Text
                                                            align={TextAlign.CENTER}
                                                            size={TextSize.XS}
                                                            weight={TextWeight.SEMIBOLD}
                                                        />
                                                    </TableCell>
                                                    <TableCell className="disciplinesNameCell" theme={TableCellTheme.BLUE}>
                                                        <Text
                                                            size={TextSize.XS}
                                                            weight={TextWeight.SEMIBOLD}
                                                        >
                                                            {unit.name}
                                                        </Text>
                                                    </TableCell>
                                                    <TableCell className="sortCell" theme={TableCellTheme.BLUE}>
                                                        <Text
                                                            align={TextAlign.CENTER}
                                                            size={TextSize.XS}
                                                            weight={TextWeight.SEMIBOLD}
                                                        >
                                                            {unit.sort}
                                                        </Text>
                                                    </TableCell>
                                                    <div className="formControlCell flex-row">
                                                        {
                                                            unit.summary?.formControl.map((className) => (
                                                                <TableCell
                                                                    className={className}
                                                                    theme={TableCellTheme.BLUE}
                                                                    key={className}
                                                                >
                                                                    <Text />
                                                                </TableCell>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="amountOfStudyTimeCell flex-row">
                                                        <TableCell
                                                            className="amountOfStudyTimeCredits"
                                                            theme={TableCellTheme.BLUE}
                                                        >
                                                            <Text
                                                                align={TextAlign.CENTER}
                                                                size={TextSize.XS}
                                                                weight={TextWeight.SEMIBOLD}
                                                            >
                                                                {unit.summary?.amountOfStudyTime.hours
                                                                    && formatIntegerNumber(unit.summary.amountOfStudyTime.hours / creditsPerHour)}
                                                            </Text>
                                                        </TableCell>
                                                        <TableCell
                                                            className="amountOfStudyTimeHours"
                                                            theme={TableCellTheme.BLUE}
                                                        >
                                                            <Text
                                                                align={TextAlign.CENTER}
                                                                size={TextSize.XS}
                                                                weight={TextWeight.SEMIBOLD}
                                                            >
                                                                {unit.summary?.amountOfStudyTime.hours && unit.summary.amountOfStudyTime.hours}
                                                            </Text>
                                                        </TableCell>
                                                        <TableCell
                                                            className="amountOfStudyTimeTheory"
                                                            theme={TableCellTheme.BLUE}
                                                        >
                                                            <Text
                                                                align={TextAlign.CENTER}
                                                                size={TextSize.XS}
                                                                weight={TextWeight.SEMIBOLD}
                                                            >
                                                                {unit.summary?.amountOfStudyTime.hours_theory
                                                                    && unit.summary.amountOfStudyTime.hours_theory}
                                                            </Text>
                                                        </TableCell>
                                                        <TableCell
                                                            className="amountOfStudyTimeLabs"
                                                            theme={TableCellTheme.BLUE}
                                                        >
                                                            <Text
                                                                align={TextAlign.CENTER}
                                                                size={TextSize.XS}
                                                                weight={TextWeight.SEMIBOLD}
                                                            >
                                                                {unit.summary?.amountOfStudyTime.hours_practice
                                                                    && unit.summary.amountOfStudyTime.hours_practice}
                                                            </Text>
                                                        </TableCell>
                                                        <TableCell
                                                            className="amountOfStudyTimeCourseProject"
                                                            theme={TableCellTheme.BLUE}
                                                        >
                                                            <Text
                                                                align={TextAlign.CENTER}
                                                                size={TextSize.XS}
                                                                weight={TextWeight.SEMIBOLD}
                                                            >
                                                                {unit.summary?.amountOfStudyTime.hours_coursework
                                                            && unit.summary.amountOfStudyTime.hours_coursework}
                                                            </Text>
                                                        </TableCell>
                                                        <TableCell
                                                            className="amountOfStudyTimePractice"
                                                            theme={TableCellTheme.BLUE}
                                                        >
                                                            <Text
                                                                align={TextAlign.CENTER}
                                                                size={TextSize.XS}
                                                                weight={TextWeight.SEMIBOLD}
                                                            >
                                                                {unit.summary?.amountOfStudyTime.hours_internship
                                                            && unit.summary.amountOfStudyTime.hours_internship}
                                                            </Text>
                                                        </TableCell>
                                                    </div>
                                                    <div className="distributionCell flex-row">
                                                        {
                                                            unit.summary?.semestersDistribution.map((semester) => (
                                                                <TableCell
                                                                    key={semester.semester_number}
                                                                    theme={TableCellTheme.BLUE}
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
                                                    [...unit.subjects]
                                                        .sort((a, b) => a.sort - b.sort)
                                                        .map((subject) => (
                                                            <WorkingCurriculumExtractTableSubjects
                                                                key={String(subject.sort) + subject.subject_id + subject.working_curriculum_id}
                                                                qualification={qualification}
                                                                module={module}
                                                                unit={unit}
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
                                                            onClick={() => {
                                                                onOpenAddSubjectModal(module, unit);
                                                            }}
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
                                            </div>
                                        ))
                                }
                            </div>
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
                    [...qualification.educationalActivities]
                        .filter((activity) => activity.is_in_compulsory_education)
                        .sort((a, b) => a.sort - b.sort)
                        .map((activity) => (
                            <WorkingCurriculumExtractTableEduActivities
                                key={String(activity.sort) + activity.educational_activity_type_id + activity.working_curriculum_id}
                                qualification={qualification}
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
                            qualification.summaryCompulsory?.formControl.map((className) => (
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
                                {qualification.summaryCompulsory?.amountOfStudyTime.hours
                                    && formatIntegerNumber(qualification.summaryCompulsory.amountOfStudyTime.hours / creditsPerHour)}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeHours" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summaryCompulsory?.amountOfStudyTime.hours && qualification.summaryCompulsory.amountOfStudyTime.hours}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeTheory" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summaryCompulsory?.amountOfStudyTime.hours_theory
                                    && qualification.summaryCompulsory.amountOfStudyTime.hours_theory}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeLabs" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summaryCompulsory?.amountOfStudyTime.hours_practice
                                    && qualification.summaryCompulsory.amountOfStudyTime.hours_practice}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeCourseProject" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summaryCompulsory?.amountOfStudyTime.hours_coursework
                                    && qualification.summaryCompulsory.amountOfStudyTime.hours_coursework}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimePractice" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summaryCompulsory?.amountOfStudyTime.hours_internship
                                    && qualification.summaryCompulsory.amountOfStudyTime.hours_internship}
                            </Text>
                        </TableCell>
                    </div>
                    <div className="distributionCell flex-row">
                        {
                            qualification.summaryCompulsory?.semestersDistribution.map((semester) => (
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
                    [...qualification.educationalActivities]
                        .filter((activity) => !activity.is_in_compulsory_education)
                        .sort((a, b) => a.sort - b.sort)
                        .map((activity) => (
                            <WorkingCurriculumExtractTableEduActivities
                                key={String(activity.sort) + activity.educational_activity_type_id + activity.working_curriculum_id}
                                qualification={qualification}
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
                            qualification.summary?.formControl.map((className) => (
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
                                {qualification.summary?.amountOfStudyTime.hours
                                    && formatIntegerNumber(qualification.summary.amountOfStudyTime.hours / creditsPerHour)}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeHours" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summary?.amountOfStudyTime.hours
                                    && qualification.summary.amountOfStudyTime.hours}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeTheory" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summary?.amountOfStudyTime.hours_theory
                                    && qualification.summary.amountOfStudyTime.hours_theory}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeLabs" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summary?.amountOfStudyTime.hours_practice
                                    && qualification.summary.amountOfStudyTime.hours_practice}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimeCourseProject" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summary?.amountOfStudyTime.hours_coursework
                                    && qualification.summary.amountOfStudyTime.hours_coursework}
                            </Text>
                        </TableCell>
                        <TableCell className="amountOfStudyTimePractice" theme={TableCellTheme.YELLOW}>
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                {qualification.summary?.amountOfStudyTime.hours_internship
                                    && qualification.summary.amountOfStudyTime.hours_internship}
                            </Text>
                        </TableCell>
                    </div>
                    <div className="distributionCell flex-row">
                        {
                            qualification.summary?.semestersDistribution.map((semester) => (
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
                qualification={qualification}
                moduleDetail={moduleDetail}
                unitDetail={unitDetail}
            />

            <EditDiscipline
                onClose={onCloseEditSubjectModal}
                isOpen={editSubjectModalVisible}
                qualification={qualification}
                moduleDetail={moduleDetail}
                unitDetail={unitDetail}
                curriculumSubjectsId={editSubjectId}
            />

            <ChooseEduActivitiesTypes
                onClose={onCloseChooseEduActivityTypeModal}
                isOpen={chooseEduActivityTypeModalVisible}
                qualification={qualification}
            />

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
