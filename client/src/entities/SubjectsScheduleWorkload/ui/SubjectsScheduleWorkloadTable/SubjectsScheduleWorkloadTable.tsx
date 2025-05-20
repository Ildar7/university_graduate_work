import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import cls from './SubjectsScheduleWorkloadTable.module.scss';
import { SubjectsScheduleWorkloadTeachersData } from '../../model/types/subjectsScheduleWorkloadTeachers';
import { SubjectsScheduleWorkloadClassRoomsData } from '../../model/types/subjectsScheduleWorkloadClassRooms';
import {
    SubjectsScheduleWorkloadError,
} from '../../model/types/subjectsScheduleWorkloadSchema';

interface SubjectsScheduleWorkloadTableProps {
    className?: string;
    title: string;
    data?: SubjectsScheduleWorkloadTeachersData | SubjectsScheduleWorkloadClassRoomsData;
    isLoading?: boolean;
    error?: SubjectsScheduleWorkloadError;
}

export const SubjectsScheduleWorkloadTable = memo((props: SubjectsScheduleWorkloadTableProps) => {
    const {
        className,
        title,
        data,
        isLoading,
        error,
    } = props;

    let table;

    if (isLoading) {
        table = (
            <Skeleton height={500} />
        );
    } else if (error) {
        table = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        table = (
            <>
                {(data as SubjectsScheduleWorkloadTeachersData)?.teachers && (
                    (data as SubjectsScheduleWorkloadTeachersData)?.teachers.length
                        ? (
                            <>
                                <div className={cls.header}>
                                    <div className={classNames(cls.cell, {}, [cls.cellEmpty])} />
                                    <div className={cls.headerContent}>
                                        {(data as SubjectsScheduleWorkloadTeachersData).teachers.map((teacher) => (
                                            <div
                                                className={classNames(cls.cell, {}, [cls.cellBg])}
                                                key={teacher.teacher_id}
                                            >
                                                {teacher.last_name}
                                                {' '}
                                                {teacher.first_name}
                                                <br />
                                                {teacher.middle_name && teacher.middle_name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={cls.body}>
                                    {(data as SubjectsScheduleWorkloadTeachersData).workload.map((day) => (
                                        <div
                                            className={cls.row}
                                            key={day.dayNum}
                                        >
                                            <div className={cls.asideCells}>
                                                <div
                                                    className={classNames(cls.cell, {}, [cls.cellRotated, cls.cellBg])}
                                                >
                                                    <span>
                                                        {day.dayNameRu}
                                                        <br />
                                                        {day.date}
                                                    </span>
                                                </div>
                                                <div
                                                    className={classNames(cls.cell, {}, [cls.cellItemsWrapper, cls.cellTimes])}
                                                >
                                                    {day.class_time.map((time) => (
                                                        <div
                                                            className={classNames(cls.cellItem, {}, [cls.cellItemEmpty])}
                                                            key={time.class_time_id}
                                                        >
                                                            {time.start_time}
                                                            {' '}
                                                            -
                                                            {' '}
                                                            {time.end_time}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {(data as SubjectsScheduleWorkloadTeachersData).teachers.map((teacher) => (
                                                <div
                                                    className={classNames(cls.cell, {}, [cls.cellItemsWrapper])}
                                                    key={teacher.teacher_id}
                                                >
                                                    {day.class_time.map((time) => (
                                                        <div
                                                            className={classNames(
                                                                cls.cellItem,
                                                                {
                                                                    [cls.cellItemFilled]: time.teachers_ids.includes(teacher.teacher_id),
                                                                    [cls.cellItemEmpty]: !time.teachers_ids.includes(teacher.teacher_id),
                                                                },
                                                                [],
                                                            )}
                                                            key={time.class_time_id}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                        : (
                            <Text
                                size={TextSize.L}
                                weight={TextWeight.SEMIBOLD}
                                align={TextAlign.CENTER}
                            >
                                Отсутствуют сотрудники
                            </Text>
                        )
                )}
                {(data as SubjectsScheduleWorkloadClassRoomsData)?.classrooms && (
                    (data as SubjectsScheduleWorkloadClassRoomsData)?.classrooms.length
                        ? (
                            <>
                                <div className={cls.header}>
                                    <div className={classNames(cls.cell, {}, [cls.cellEmpty])} />
                                    <div className={cls.headerContent}>
                                        {(data as SubjectsScheduleWorkloadClassRoomsData).classrooms.map((classRoom) => (
                                            <div
                                                className={classNames(cls.cell, {}, [cls.cellBg])}
                                                key={classRoom.classroom_id}
                                            >
                                                {classRoom.number && (
                                                    <>
                                                        {classRoom.number}
                                                        <br />
                                                    </>
                                                )}
                                                {classRoom.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={cls.body}>
                                    {(data as SubjectsScheduleWorkloadClassRoomsData).workload.map((day) => (
                                        <div
                                            className={cls.row}
                                            key={day.dayNum}
                                        >
                                            <div className={cls.asideCells}>
                                                <div className={classNames(cls.cell, {}, [cls.cellRotated, cls.cellBg])}>
                                                    <span>
                                                        {day.dayNameRu}
                                                        <br />
                                                        {day.date}
                                                    </span>
                                                </div>
                                                <div
                                                    className={classNames(cls.cell, {}, [cls.cellItemsWrapper, cls.cellTimes])}
                                                >
                                                    {day.class_time.map((time) => (
                                                        <div
                                                            className={classNames(cls.cellItem, {}, [cls.cellItemEmpty])}
                                                            key={time.class_time_id}
                                                        >
                                                            {time.start_time}
                                                            {' '}
                                                            -
                                                            {' '}
                                                            {time.end_time}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {(data as SubjectsScheduleWorkloadClassRoomsData).classrooms.map((room) => (
                                                <div
                                                    className={classNames(cls.cell, {}, [cls.cellItemsWrapper])}
                                                    key={room.classroom_id}
                                                >
                                                    {day.class_time.map((time) => (
                                                        <div
                                                            className={classNames(
                                                                cls.cellItem,
                                                                {
                                                                    [cls.cellItemFilled]: time.classroom_ids.includes(room.classroom_id),
                                                                    [cls.cellItemEmpty]: !time.classroom_ids.includes(room.classroom_id),
                                                                },
                                                                [],
                                                            )}
                                                            key={time.class_time_id}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                        : (
                            <Text
                                size={TextSize.L}
                                weight={TextWeight.SEMIBOLD}
                                align={TextAlign.CENTER}
                            >
                                Отсутствуют аудитории
                            </Text>
                        )
                )}
            </>
        );
    }

    return (
        <div className={classNames(cls.SubjectsScheduleWorkloadTable, {}, [className])}>
            <div className={cls.title}>{title}</div>

            <div className={cls.table}>
                {table}
            </div>
        </div>
    );
});
