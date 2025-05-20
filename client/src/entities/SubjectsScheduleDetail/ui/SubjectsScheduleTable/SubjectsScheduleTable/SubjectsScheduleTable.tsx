import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useEffect } from 'react';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { getStudentCode } from 'shared/lib/helpers/studentGroups/getStudentCode/getStudentCode';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import { fetchClassRooms } from 'entities/ClassRooms';
import { fetchCurriculumSubjects } from 'entities/CurriculumSubjects';
import { subjectsScheduleDetailActions } from 'entities/SubjectsScheduleDetail';
import {
    getSubjectsScheduleWorkloadTeachersIsLoading,
    getSubjectsScheduleWorkloadTeachersError,
    getSubjectsScheduleWorkloadClassRoomsIsLoading,
    getSubjectsScheduleWorkloadClassRoomsError,
    fetchSubjectsScheduleWorkloadTeachers,
    fetchSubjectsScheduleWorkloadClassRooms,
} from 'entities/SubjectsScheduleWorkload';
import {
    fetchSubjectsScheduleClassTime,
} from '../../../model/services/fetchSubjectsScheduleClassTime/fetchSubjectsScheduleClassTime';
import {
    getSubjectsScheduleClassTimeError,
    getSubjectsScheduleClassTimeIsLoading,
} from '../../../model/selectors/getSubjectsScheduleClassTime/getSubjectsScheduleClassTime';
import cls from './SubjectsScheduleTable.module.scss';
import { SubjectsScheduleTableItem } from '../SubjectsScheduleTableItem/SubjectsScheduleTableItem';
import {
    fetchSubjectsScheduleDetailStudentsGroups,
} from '../../../model/services/fetchSubjectsScheduleDetailStudentsGroups/fetchSubjectsScheduleDetailStudentsGroups';
import {
    getSubjectsScheduleDetailFilters,
} from '../../../model/selectors/getSubjectsScheduleDetailFilters/getSubjectsScheduleDetailFilters';
import {
    getSubjectsScheduleStudentsGroupsData,
    getSubjectsScheduleStudentsGroupsError,
    getSubjectsScheduleStudentsGroupsIsLoading,
} from '../../../model/selectors/getSubjectsScheduleStudentsGroups/getSubjectsScheduleStudentsGroups';
import {
    fetchSubjectsScheduleDetail,
} from '../../../model/services/fetchSubjectsScheduleDetail/fetchSubjectsScheduleDetail';
import {
    getSubjectsScheduleDetailDataToWork,
    getSubjectsScheduleDetailError,
    getSubjectsScheduleDetailIsLoading,
} from '../../../model/selectors/getSubjectsScheduleDetail/getSubjectsScheduleDetail';

interface SubjectsScheduleTableProps {
    className?: string;
    year: string;
    week: string;
}

const shortDayNames = {
    Monday: 'ПН',
    Tuesday: 'ВТ',
    Wednesday: 'СР',
    Thursday: 'ЧТ',
    Friday: 'ПТ',
    Saturday: 'СБ',
    Sunday: 'ВС',
};

export const SubjectsScheduleTable = memo((props: SubjectsScheduleTableProps) => {
    const {
        className,
        year,
        week,
    } = props;
    const dispatch = useAppDispatch();
    const filters = useSelector(getSubjectsScheduleDetailFilters);

    const studentsGroups = useSelector(getSubjectsScheduleStudentsGroupsData);
    const isLoadingStudentsGroups = useSelector(getSubjectsScheduleStudentsGroupsIsLoading);
    const errorStudentsGroups = useSelector(getSubjectsScheduleStudentsGroupsError);

    const subjectsSchedule = useSelector(getSubjectsScheduleDetailDataToWork);
    const isLoadingSubjectsSchedule = useSelector(getSubjectsScheduleDetailIsLoading);
    const errorSubjectsSchedule = useSelector(getSubjectsScheduleDetailError);

    const isLoadingClassTime = useSelector(getSubjectsScheduleClassTimeIsLoading);
    const errorClassTime = useSelector(getSubjectsScheduleClassTimeError);

    const isLoadingTeachersWorkload = useSelector(getSubjectsScheduleWorkloadTeachersIsLoading);
    const errorTeachersWorkload = useSelector(getSubjectsScheduleWorkloadTeachersError);

    const isLoadingClassRoomsWorkload = useSelector(getSubjectsScheduleWorkloadClassRoomsIsLoading);
    const errorClassRoomsWorkload = useSelector(getSubjectsScheduleWorkloadClassRoomsError);

    useEffect(() => {
        dispatch(fetchSubjectsScheduleDetailStudentsGroups([year, week]))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    dispatch(fetchSubjectsScheduleDetail([year, week]))
                        .then((res) => {
                            if (res.meta.requestStatus === 'fulfilled') {
                                dispatch(subjectsScheduleDetailActions.fillDataWithEmptyObjects());
                            }
                        });
                }
            });
    }, [dispatch, filters, week, year]);

    useEffect(() => {
        dispatch(fetchSubjectsScheduleClassTime());
        dispatch(fetchClassRooms());
        dispatch(fetchCurriculumSubjects());
        dispatch(fetchSubjectsScheduleWorkloadTeachers([year, week]));
        dispatch(fetchSubjectsScheduleWorkloadClassRooms([year, week]));
    }, [dispatch, week, year]);

    let table;

    if (isLoadingStudentsGroups || isLoadingSubjectsSchedule || isLoadingClassTime || isLoadingTeachersWorkload) {
        table = (
            <Skeleton width="100%" height={1000} border="6px" />
        );
    } else if (errorStudentsGroups || errorSubjectsSchedule || errorClassTime || errorTeachersWorkload) {
        table = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
                align={TextAlign.CENTER}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        table = (
            !studentsGroups?.length
                ? (
                    <Text
                        size={TextSize.L}
                        weight={TextWeight.SEMIBOLD}
                        align={TextAlign.CENTER}
                        className={classNames(
                            '',
                            { [cls.textNotFilled]: !studentsGroups?.length },
                            [],
                        )}
                    >
                        Отсутствуют подходящие группы студентов и/или связанные рабочие учебные планы (РУП)
                    </Text>
                )
                : (
                    <>
                        <div className={cls.row}>
                            <div className={classNames(cls.cell, {}, [cls.cellBar])} />
                            <div className={classNames(cls.cell, {}, [cls.cellDate])}>
                                <div
                                    className={cls.cellHeaderText}
                                >
                                    Дата
                                </div>
                            </div>
                            <div className={classNames(cls.cell, {}, [cls.cellTime])}>
                                <div
                                    className={cls.cellHeaderText}
                                >
                                    Время
                                </div>
                            </div>
                            {studentsGroups.map((group) => {
                                const code = getStudentCode(
                                    group.enrollment_year,
                                    group.short_name,
                                    group.course,
                                    group.serial_number,
                                );

                                return (
                                    <div
                                        className={classNames(cls.cell, {}, [cls.cellGroup])}
                                        key={group.id_group}
                                    >
                                        <div
                                            className={classNames(cls.cellHeaderText, {}, [cls.cellHeaderGroupText])}
                                        >
                                            {code}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cls.items}>
                            {subjectsSchedule && (
                                Object.values(subjectsSchedule[week].days).map((day) => (
                                    <SubjectsScheduleTableItem
                                        day={day}
                                        week={week}
                                        year={year}
                                    />
                                ))
                            )}
                            <div className={cls.weekProgress}>
                                <Text
                                    size={TextSize.XXS}
                                    className={cls.weekProgressTitle}
                                    align={TextAlign.CENTER}
                                >
                                    Заполненность недели
                                </Text>
                                <div className={cls.days}>
                                    {subjectsSchedule && (
                                        Object.keys(subjectsSchedule[week].days).map((dayNum, index) => (
                                            <div
                                                className={classNames(
                                                    cls.day,
                                                    {
                                                        [cls.dayActive]: !isEmptyObject(subjectsSchedule)
                                                        && subjectsSchedule
                                                        && subjectsSchedule[week].progress.current >= index + 1,
                                                    },
                                                    [],
                                                )}
                                            >
                                                {/* @ts-ignore */}
                                                {shortDayNames[subjectsSchedule[week].days[dayNum].dayName]}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )
        );
    }

    return (
        <div
            className={classNames(
                cls.SubjectsScheduleTable,
                { },
                [className],
            )}
        >
            {table}
        </div>
    );
});
