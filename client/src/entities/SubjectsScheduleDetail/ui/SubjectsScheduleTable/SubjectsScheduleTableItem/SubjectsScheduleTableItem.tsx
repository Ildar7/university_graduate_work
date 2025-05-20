import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import PlusIcon from 'shared/assets/icons/plus.svg';
import EditIcon from 'shared/assets/icons/edit-white.svg';
import TrashIcon from 'shared/assets/icons/trash-white.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getSubjectsScheduleDetailActionsError,
    subjectsScheduleDetailActionsActions,
    SubjectsScheduleDetailAddSubject,
    SubjectsScheduleDetailEditSubject,
} from 'features/SubjectsScheduleDetail';
import {
    getSubjectsScheduleWorkloadClassRoomsDataToWork,
    getSubjectsScheduleWorkloadTeachersDataToWork,
    subjectsScheduleWorkloadActions,
} from 'entities/SubjectsScheduleWorkload';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    subjectsScheduleDetailActions,
} from '../../../model/slice/subjectsScheduleDetailSlice';
import cls from './SubjectsScheduleTableItem.module.scss';
import {
    getSubjectsScheduleStudentsGroupsData,
} from '../../../model/selectors/getSubjectsScheduleStudentsGroups/getSubjectsScheduleStudentsGroups';
import {
    SubjectsScheduleDetailWeekDayDetail,
    SubjectsScheduleDetailWeekDayDetailSubjectsByGroups,
    SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail,
} from '../../../model/types/subjectsScheduleDetail';
import {
    getSubjectsScheduleClassTimeData,
} from '../../../model/selectors/getSubjectsScheduleClassTime/getSubjectsScheduleClassTime';
import {
    getSubjectsScheduleDetailFilters,
} from '../../../model/selectors/getSubjectsScheduleDetailFilters/getSubjectsScheduleDetailFilters';

interface SubjectsScheduleTableItemProps {
    className?: string;
    day: SubjectsScheduleDetailWeekDayDetail;
    week: string;
    year: string;
}

export const SubjectsScheduleTableItem = memo((props: SubjectsScheduleTableItemProps) => {
    const {
        className,
        day,
        week,
        year,
    } = props;
    const dispatch = useAppDispatch();
    const studentsGroups = useSelector(getSubjectsScheduleStudentsGroupsData)!;
    const classTime = useSelector(getSubjectsScheduleClassTimeData);
    const shiftFilters = useSelector(getSubjectsScheduleDetailFilters)?.shifts;
    const [filteredClassTime, setFilteredClassTime] = useState(classTime);
    const actionErrors = useSelector(getSubjectsScheduleDetailActionsError)?.errors;
    const [selectedGroupId, setSelectedGroupId] = useState(studentsGroups[0].id_group);
    const [selectedDayNum, setSelectedDayNum] = useState<number | undefined>(undefined);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const teachersWorkload = useSelector(getSubjectsScheduleWorkloadTeachersDataToWork);
    const classRoomsWorkload = useSelector(getSubjectsScheduleWorkloadClassRoomsDataToWork);

    const [selectedSubject, setSelectedSubject] = useState<SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail | null>(null);

    const [addSubjectVisible, setAddSubjectVisible] = useState(false);
    const [editSubjectVisible, setEditSubjectVisible] = useState(false);

    const onOpenAddSubjectModal = useCallback((groupId: number, classTimeId?: number, dayNum?: number) => {
        const needClassTime = day.subjectsByGroups[`${groupId}`].filter((subject) => subject.year);
        const shift = needClassTime.length ? needClassTime[needClassTime.length - 1].shift : 1;

        setSelectedGroupId(groupId);
        dispatch(subjectsScheduleDetailActionsActions.changeClassTime([classTimeId || null, shift, 'creating']));
        setAddSubjectVisible(true);
        setSelectedDayNum(dayNum);
    }, [day.subjectsByGroups, dispatch]);

    const onCloseAddSubjectModal = useCallback(() => {
        setAddSubjectVisible(false);
        setSelectedDayNum(undefined);
    }, []);

    const onOpenEditSubjectModal = useCallback((subject: SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail, dayNum: number) => {
        setSelectedSubject(subject);
        dispatch(subjectsScheduleDetailActionsActions.changeClassTime([subject.class_time_id, subject.shift, 'updating']));
        setEditSubjectVisible(true);
        setSelectedDayNum(dayNum);
    }, [dispatch]);

    const onCloseEditSubjectModal = useCallback(() => {
        setEditSubjectVisible(false);
        setSelectedDayNum(undefined);
    }, []);

    useEffect(() => {
        if (!shiftFilters?.length) {
            setFilteredClassTime(classTime);
        } else if (shiftFilters.includes(1) && !shiftFilters.includes(2)) {
            setFilteredClassTime(classTime?.filter((time) => time.shifts.includes(1)));
        } else if (!shiftFilters.includes(1) && shiftFilters.includes(2)) {
            setFilteredClassTime(classTime?.filter((time) => time.shifts.includes(2)));
        } else {
            setFilteredClassTime(classTime);
        }
    }, [classTime, shiftFilters]);

    const reorder = (
        list: Array<SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail[]>,
        startIndex: number,
        endIndex: number,
    ) => {
        if (startIndex === endIndex) {
            return list;
        }

        const result = list.map((item) => [...item]);
        const startGroup = result[startIndex];

        // remove start group from result
        const filteredResult = result.filter((item) => item !== startGroup);

        // insert start group at the new position
        const newResult = [...filteredResult.slice(0, endIndex), startGroup, ...filteredResult.slice(endIndex)];

        // update class_time_id values for the moved group
        const classTimeIdOffset = endIndex - startIndex;
        startGroup.forEach((item, index) => {
            // @ts-ignore
            result[startIndex + index] = { ...item, class_time_id: item.class_time_id + classTimeIdOffset };
        });

        // update class_time_id values for the rest of the elements
        newResult.forEach((group, index) => {
            group.forEach((item, itemIndex) => {
                group[itemIndex] = { ...item, class_time_id: index + 1 };
            });
        });

        return newResult;
    };

    const groupByClassTimeId = (list: SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail[]): Array<
        SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail[]
    > => {
        const grouped: Record<number, SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail[]> = {};

        list.forEach((item) => {
            if (!grouped[item.class_time_id]) {
                grouped[item.class_time_id] = [];
            }
            grouped[item.class_time_id].push(item);
        });

        return Object.values(grouped);
    };

    const deleteSubject = (subject: SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail) => {
        if (subject.subject_schedule_id) {
            dispatch(subjectsScheduleDetailActionsActions.deleteSubject(subject.subject_schedule_id));
        } else {
            dispatch(subjectsScheduleDetailActionsActions.deleteSubjectFromCreate(
                `day-${subject.day_num}-group-${subject.group_id}-week-${subject
                    .week_num}-classroom-${subject.classroom_id}-subjId-${subject.subject_id}-eduId-${subject.educational_activity_type_id}`,
            ));
        }

        dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId([subject.day_num, subject.class_time_id, subject.teacher_id]));
        dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId([subject.day_num, subject.class_time_id, subject.classroom_id]));
        dispatch(subjectsScheduleDetailActions.deleteSubjectFromData(subject));
    };

    return (
        <>
            <DragDropContext
                onDragEnd={(result) => {
                    if (!result.destination) return;

                    const { source, destination } = result;
                    if (source.droppableId === destination.droppableId) {
                        const groupId = Number(source.droppableId.split('-')[1]);
                        const groupedSubjects = groupByClassTimeId(day.subjectsByGroups[String(groupId)]);
                        const reorderedItems = reorder(
                            groupedSubjects,
                            source.index,
                            destination.index,
                        );
                        const needSubject = reorderedItems[destination?.index];
                        const reorderWithSubject = reorderedItems[source.index];
                        if (needSubject[0].year && source.index !== destination?.index) {
                            if (needSubject.length === 1) {
                                if (teachersWorkload?.workload
                                    .filter((day) => day.dayNum === needSubject[0].day_num)[0].class_time
                                    .filter((time) => time.class_time_id === needSubject[0].class_time_id)[0].teachers_ids
                                    .includes(needSubject[0].teacher_id) && needSubject[0].teacher_id !== reorderWithSubject[0].teacher_id) {
                                    addToast(Toast.error('В данное время выбранный преподаватель уже занят'));
                                    return;
                                }

                                if (classRoomsWorkload?.workload
                                    .filter((day) => day.dayNum === needSubject[0].day_num)[0].class_time
                                    .filter((time) => time.class_time_id === needSubject[0].class_time_id)[0].classroom_ids
                                    .includes(needSubject[0].classroom_id) && needSubject[0].classroom_id !== reorderWithSubject[0].classroom_id) {
                                    addToast(Toast.error('В данное время выбранная аудитория уже занята'));
                                    return;
                                }
                            }
                            if (needSubject.length > 1) {
                                if ((teachersWorkload?.workload
                                    .filter((day) => day.dayNum === needSubject[0].day_num)[0].class_time
                                    .filter((time) => time.class_time_id === needSubject[0].class_time_id)[0].teachers_ids
                                    .includes(needSubject[0].teacher_id) || teachersWorkload?.workload
                                    .filter((day) => day.dayNum === needSubject[1].day_num)[0].class_time
                                    .filter((time) => time.class_time_id === needSubject[1].class_time_id)[0].teachers_ids
                                    .includes(needSubject[1].teacher_id))
                                    && needSubject[0].teacher_id !== reorderWithSubject[0].teacher_id
                                    && needSubject[1].teacher_id !== reorderWithSubject[1].teacher_id) {
                                    addToast(Toast.error('В данное время выбранный преподаватель уже занят'));
                                    return;
                                }

                                if ((classRoomsWorkload?.workload
                                    .filter((day) => day.dayNum === needSubject[0].day_num)[0].class_time
                                    .filter((time) => time.class_time_id === needSubject[0].class_time_id)[0].classroom_ids
                                    .includes(needSubject[0].classroom_id) || classRoomsWorkload?.workload
                                    .filter((day) => day.dayNum === needSubject[1].day_num)[0].class_time
                                    .filter((time) => time.class_time_id === needSubject[1].class_time_id)[0].classroom_ids
                                    .includes(needSubject[1].classroom_id))
                                    && needSubject[0].classroom_id !== reorderWithSubject[0].classroom_id
                                    && needSubject[1].classroom_id !== reorderWithSubject[1].classroom_id) {
                                    addToast(Toast.error('В данное время выбранная аудитория уже занята'));
                                    return;
                                }
                            }
                        }
                        if (needSubject.length === 1) {
                            if (needSubject[0].year && source.index !== destination?.index) {
                                dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                                    [needSubject[0].day_num, source.index + 1, needSubject[0].teacher_id],
                                ));
                                dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                                    [needSubject[0].day_num, destination.index + 1, needSubject[0].teacher_id],
                                ));

                                dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId(
                                    [needSubject[0].day_num, source.index + 1, needSubject[0].classroom_id],
                                ));
                                dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                                    [needSubject[0].day_num, destination.index + 1, needSubject[0].classroom_id],
                                ));
                            }
                        } else if (source.index !== destination?.index) {
                            dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                                [needSubject[0].day_num, source.index + 1, needSubject[0].teacher_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                                [needSubject[1].day_num, source.index + 1, needSubject[1].teacher_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                                [needSubject[0].day_num, destination.index + 1, needSubject[0].teacher_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                                [needSubject[1].day_num, destination.index + 1, needSubject[1].teacher_id],
                            ));

                            dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId(
                                [needSubject[0].day_num, source.index + 1, needSubject[0].classroom_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId(
                                [needSubject[1].day_num, source.index + 1, needSubject[1].classroom_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                                [needSubject[0].day_num, destination.index + 1, needSubject[0].classroom_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                                [needSubject[1].day_num, destination.index + 1, needSubject[1].classroom_id],
                            ));
                        }

                        if (reorderWithSubject.length === 1) {
                            if (reorderWithSubject[0].year && source.index !== destination?.index) {
                                dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                                    [reorderWithSubject[0].day_num, destination.index + 1, reorderWithSubject[0].teacher_id],
                                ));
                                dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                                    [reorderWithSubject[0].day_num, source.index + 1, reorderWithSubject[0].teacher_id],
                                ));

                                dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId(
                                    [reorderWithSubject[0].day_num, destination.index + 1, reorderWithSubject[0].classroom_id],
                                ));
                                dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                                    [reorderWithSubject[0].day_num, source.index + 1, reorderWithSubject[0].classroom_id],
                                ));
                            }
                        } else if (source.index !== destination?.index) {
                            dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                                [reorderWithSubject[0].day_num, destination.index + 1, reorderWithSubject[0].teacher_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                                [reorderWithSubject[1].day_num, destination.index + 1, reorderWithSubject[1].teacher_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                                [reorderWithSubject[0].day_num, source.index + 1, reorderWithSubject[0].teacher_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                                [reorderWithSubject[1].day_num, source.index + 1, reorderWithSubject[1].teacher_id],
                            ));

                            dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId(
                                [reorderWithSubject[0].day_num, destination.index + 1, reorderWithSubject[0].classroom_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId(
                                [reorderWithSubject[1].day_num, destination.index + 1, reorderWithSubject[1].classroom_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                                [reorderWithSubject[0].day_num, source.index + 1, reorderWithSubject[0].classroom_id],
                            ));
                            dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                                [reorderWithSubject[1].day_num, source.index + 1, reorderWithSubject[1].classroom_id],
                            ));
                        }
                        const flattenedItems = reorderedItems.flat();
                        dispatch(subjectsScheduleDetailActions.reorderSubjectsInDay(
                            [{ ...day, subjectsByGroups: { ...day.subjectsByGroups, [groupId]: flattenedItems } }, week],
                        ));
                        dispatch(subjectsScheduleDetailActionsActions.updateSubjectsDragDrop({ [groupId]: flattenedItems }));
                    }
                }}
            >
                <div className={classNames(cls.SubjectsScheduleTableItem, {}, [className])}>
                    <div className={classNames(cls.cell, {}, [cls.cellBar])}>
                        <div className={cls.scaleBar}>
                            <div className={cls.scaleBarText}>
                                {day.progress.current}
                                %
                            </div>
                            <span style={{ height: `${day.progress.current}%` }} />
                        </div>
                    </div>
                    <div className={classNames(cls.cell, {}, [cls.cellDate])}>
                        <div className={cls.cellDateText}>
                            <span>{day.dayNameRu}</span>
                            <span>{day.date}</span>
                        </div>
                    </div>
                    <div className={classNames(cls.cell, {}, [cls.cellTime, cls.cellContentTime])}>
                        {filteredClassTime?.map((subject) => (
                            <div
                                className={cls.bubbleCellTime}
                                key={subject.class_time_id}
                            >
                                <div className={cls.bubbleCellTimeText}>
                                    {subject.start_time}
                                    {' '}
                                    -
                                    {subject.end_time}
                                </div>
                            </div>
                        ))}
                    </div>
                    {studentsGroups.map((group, index) => (
                        <div
                            className={classNames(cls.cell, {}, [cls.cellGroup, cls.cellContentGroup])}
                            key={`${group.id_group}-${index}`}
                        >
                            {Object.keys(day.subjectsByGroups).map((key, keyIndex) => {
                                if (key !== String(group.id_group)) return;

                                const thisClassTimeCards: SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail[] = [];

                                filteredClassTime?.forEach((filClsTm) => {
                                    day.subjectsByGroups[key].forEach((needSbj) => {
                                        if (filClsTm.class_time_id === needSbj.class_time_id) {
                                            thisClassTimeCards.push(needSbj);
                                        }
                                    });
                                });

                                const notFilledCards = thisClassTimeCards.filter((subj) => !subj.year);

                                // eslint-disable-next-line consistent-return
                                return (
                                    <Droppable
                                        droppableId={`list-${group.id_group}`}
                                        key={key + keyIndex}
                                    >
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                {filteredClassTime?.map((time, filteredIndex) => {
                                                    const subject = day.subjectsByGroups[key].filter((needSubject) => (
                                                        needSubject.class_time_id === time.class_time_id
                                                    ))[0];

                                                    const groupsByClassTimeId = day.subjectsByGroups[key].reduce<
                                                        SubjectsScheduleDetailWeekDayDetailSubjectsByGroups
                                                    >((acc, item) => {
                                                        acc[item.class_time_id] = acc[item.class_time_id] || [];
                                                        acc[item.class_time_id].push(item);
                                                        return acc;
                                                    }, {});
                                                    const groupsWithDuplicates = Object.values(groupsByClassTimeId).filter((group) => (
                                                        group.length > 1
                                                        && group.some((item) => item.subgroup === 1)
                                                        && group.some((item) => item.subgroup === 2)
                                                    )).flat();
                                                    const equalClassTimeIdSubjects = groupsWithDuplicates
                                                        .filter((item) => (
                                                            item.class_time_id === time.class_time_id
                                                        ))
                                                        .sort((a, b) => a.subgroup! - b.subgroup!);

                                                    if (equalClassTimeIdSubjects.length) {
                                                        return (
                                                            <Draggable
                                                                draggableId={`${group.id_group}-${time.class_time_id}-${filteredIndex}`}
                                                                index={filteredIndex}
                                                                key={String(subject.day_num) + String(subject.class_time_id)
                                                                    + String(subject.subject_id) + String(subject.subgroup)}
                                                            >
                                                                {(provided) => (
                                                                    <div
                                                                        className={cls.bubbleCellDoubleGroups}
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        {
                                                                            equalClassTimeIdSubjects.map((subject) => (
                                                                                <div
                                                                                    className={classNames(
                                                                                        cls.bubbleCellGroup,
                                                                                        {
                                                                                            [cls.bubbleCellGroupError]: actionErrors
                                                                                    && actionErrors.record
                                                                                    && actionErrors.record.tempIndex
                                                                                    === `day-${subject
                                                                                        .day_num}-group-${subject
                                                                                        .group_id}-week-${subject
                                                                                        .week_num}-classroom-${subject
                                                                                        .classroom_id}-subjId-${subject.subject_id}-eduId-${subject
                                                                                        .educational_activity_type_id}`,
                                                                                        },
                                                                                        [cls.bubbleCellSubGroup],
                                                                                    )}
                                                                                    key={String(subject.day_num) + String(subject.class_time_id)
                                                                                + String(subject.subject_id) + String(subject.subgroup)}
                                                                                >
                                                                                    <div className={classNames(
                                                                                        cls.bubbleCellGroupHeader,
                                                                                        {},
                                                                                        [cls.bubbleCellSubGroupHeader],
                                                                                    )}
                                                                                    >
                                                                                        <div className={classNames(
                                                                                            cls.bubbleCellGroupId,
                                                                                            {},
                                                                                            [cls.bubbleCellSubGroupId],
                                                                                        )}
                                                                                        >
                                                                                            {subject.subject_schedule_id && (
                                                                                                <span>
                                                                                                    ID
                                                                                                    {' '}
                                                                                                    {subject.subject_schedule_id}
                                                                                                </span>
                                                                                            )}
                                                                                        </div>
                                                                                        <div className={classNames(
                                                                                            cls.bubbleCellGroupCabinet,
                                                                                            {},
                                                                                            [cls.bubbleCellSubGroupCabinet],
                                                                                        )}
                                                                                        >
                                                                                            <span>{subject.classRoomTitle}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className={classNames(
                                                                                            cls.bubbleCellGroupContent,
                                                                                            {},
                                                                                            [cls.bubbleCellSubGroupContent],
                                                                                        )}
                                                                                    >
                                                                                        {subject.subject.name}

                                                                                        <div
                                                                                            className={classNames(
                                                                                                cls.bubbleCellGroupFooter,
                                                                                                {},
                                                                                                [cls.bubbleCellSubGroupFooter],
                                                                                            )}
                                                                                        >
                                                                                            <div
                                                                                                className={classNames(
                                                                                                    cls.bubbleCellGroupTeacherName,
                                                                                                    {},
                                                                                                    [cls.bubbleCellSubGroupTeacherName],
                                                                                                )}
                                                                                            >
                                                                                                (
                                                                                                {subject.teacherName}
                                                                                                )
                                                                                            </div>
                                                                                            {subject.subgroup && (
                                                                                                <div
                                                                                                    className={classNames(
                                                                                                        cls.bubbleCellGroupSubGroup,
                                                                                                        {},
                                                                                                        [cls.bubbleCellSubGroupSubGroup],
                                                                                                    )}
                                                                                                >
                                                                                                    Подгруппа
                                                                                                    {' '}
                                                                                                    {subject.subgroup}
                                                                                                </div>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className={classNames(cls.itemInfo, {}, [cls.subItemInfo])}>
                                                                                        {actionErrors && actionErrors.record
                                                                                    && actionErrors.record.tempIndex
                                                                                    === `day-${subject
                                                                                        .day_num}-group-${subject
                                                                                        .group_id}-week-${subject
                                                                                        .week_num}-classroom-${subject
                                                                                        .classroom_id}-subjId-${subject.subject_id}-eduId-${subject
                                                                                        .educational_activity_type_id}`
                                                                                    && (
                                                                                        <div
                                                                                            className={classNames(
                                                                                                cls.infoErrorText,
                                                                                                {},
                                                                                                [cls.subInfoErrorText],
                                                                                            )}
                                                                                        >
                                                                                            {actionErrors.message_ru}
                                                                                        </div>
                                                                                    )}
                                                                                        <div className={classNames(cls.editBtns, {}, [cls.subEditBtns])}>
                                                                                            <Button
                                                                                                theme={ButtonTheme.CLEAR}
                                                                                                className={classNames(cls.editBtn, {}, [cls.subEditBtn])}
                                                                                                onClick={() => {
                                                                                                    onOpenEditSubjectModal(subject, day.dayNum);
                                                                                                }}
                                                                                            >
                                                                                                <Icon Svg={EditIcon} />
                                                                                            </Button>
                                                                                            <Button
                                                                                                theme={ButtonTheme.CLEAR}
                                                                                                className={classNames(cls.editBtn, {}, [cls.subEditBtn])}
                                                                                                onClick={() => {
                                                                                                    deleteSubject(subject);
                                                                                                }}
                                                                                            >
                                                                                                <Icon Svg={TrashIcon} />
                                                                                            </Button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        );
                                                    }

                                                    if (subject && subject.subject && subject.subject.name) {
                                                        return (
                                                            <Draggable
                                                                draggableId={`${group.id_group}-${time.class_time_id}-${filteredIndex}`}
                                                                index={filteredIndex}
                                                                key={String(subject.day_num) + String(subject.class_time_id)
                                                                    + String(subject.subject_id) + String(subject.subgroup)}
                                                            >
                                                                {(provided) => (
                                                                    <div
                                                                        className={classNames(
                                                                            cls.bubbleCellGroup,
                                                                            {
                                                                                [cls.bubbleCellGroupError]: actionErrors
                                                                                && actionErrors.record
                                                                                && actionErrors.record.tempIndex
                                                                                === `day-${subject
                                                                                    .day_num}-group-${subject
                                                                                    .group_id}-week-${subject
                                                                                    .week_num}-classroom-${subject
                                                                                    .classroom_id}-subjId-${subject.subject_id}-eduId-${subject
                                                                                    .educational_activity_type_id}`,
                                                                            },
                                                                            [],
                                                                        )}
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        <div className={cls.bubbleCellGroupHeader}>
                                                                            <div className={cls.bubbleCellGroupId}>
                                                                                {subject.subject_schedule_id && (
                                                                                    <>
                                                                                        ID
                                                                                        {' '}
                                                                                        {subject.subject_schedule_id}
                                                                                    </>
                                                                                )}
                                                                            </div>
                                                                            <div className={cls.bubbleCellGroupCabinet}>
                                                                                {subject.classRoomTitle}
                                                                            </div>
                                                                        </div>
                                                                        <div className={cls.bubbleCellGroupContent}>
                                                                            {subject.subject.name}
                                                                        </div>
                                                                        <div className={cls.bubbleCellGroupFooter}>
                                                                            {subject.subgroup && (
                                                                                <div
                                                                                    className={cls.bubbleCellGroupSubGroup}
                                                                                >
                                                                                    Подгруппа
                                                                                    {' '}
                                                                                    {subject.subgroup}
                                                                                </div>
                                                                            )}
                                                                            <div
                                                                                className={cls.bubbleCellGroupTeacherName}
                                                                            >
                                                                                (
                                                                                {subject.teacherName}
                                                                                )
                                                                            </div>
                                                                        </div>

                                                                        <div className={cls.itemInfo}>
                                                                            {actionErrors && actionErrors.record && actionErrors.record.tempIndex
                                                                                === `day-${subject
                                                                                    .day_num}-group-${subject
                                                                                    .group_id}-week-${subject
                                                                                    .week_num}-classroom-${subject
                                                                                    .classroom_id}-subjId-${subject.subject_id}-eduId-${subject
                                                                                    .educational_activity_type_id}`
                                                                                && (
                                                                                    <div className={cls.infoErrorText}>
                                                                                        {actionErrors.message_ru}
                                                                                    </div>
                                                                                )}
                                                                            <div className={cls.editBtns}>
                                                                                <Button
                                                                                    theme={ButtonTheme.CLEAR}
                                                                                    className={cls.editBtn}
                                                                                    onClick={() => {
                                                                                        onOpenEditSubjectModal(subject, day.dayNum);
                                                                                    }}
                                                                                >
                                                                                    <Icon Svg={EditIcon} />
                                                                                </Button>
                                                                                <Button
                                                                                    theme={ButtonTheme.CLEAR}
                                                                                    className={cls.editBtn}
                                                                                    onClick={() => {
                                                                                        deleteSubject(subject);
                                                                                    }}
                                                                                >
                                                                                    <Icon Svg={TrashIcon} />
                                                                                </Button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        );
                                                    }

                                                    return (
                                                        <Draggable
                                                            draggableId={`${group.id_group}-${time.class_time_id}-${filteredIndex}`}
                                                            index={filteredIndex}
                                                            key={String(subject.day_num) + String(subject.class_time_id)
                                                                + String(subject.subject_id) + String(subject.subgroup)}
                                                        >
                                                            {(provided) => (
                                                                <div
                                                                    className={classNames(
                                                                        cls.bubbleCellGroup,
                                                                        {},
                                                                        [cls.bubbleCellGroupNotFilled],
                                                                    )}
                                                                    onClick={() => {
                                                                        onOpenAddSubjectModal(group.id_group, subject.class_time_id, day.dayNum);
                                                                    }}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    <div className={cls.plusIconWrapper}>
                                                                        <Icon className={cls.plusIcon} Svg={PlusIcon} />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                                {!notFilledCards.length && (
                                                    <Button
                                                        className={cls.bubbleCellAddGroup}
                                                        theme={ButtonTheme.CLEAR}
                                                        onClick={() => {
                                                            onOpenAddSubjectModal(group.id_group, undefined, day.dayNum);
                                                        }}
                                                    >
                                                        <Icon className={cls.plusIcon} Svg={PlusIcon} />
                                                    </Button>
                                                )}
                                            </div>
                                        )}
                                    </Droppable>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </DragDropContext>

            <SubjectsScheduleDetailAddSubject
                isOpen={addSubjectVisible}
                onClose={onCloseAddSubjectModal}
                groupId={selectedGroupId}
                classTime={filteredClassTime}
                day={day}
                selectedDayNum={selectedDayNum}
                week={Number(week)}
                year={Number(year)}
            />

            {selectedSubject && editSubjectVisible && (
                <SubjectsScheduleDetailEditSubject
                    onClose={onCloseEditSubjectModal}
                    isOpen={editSubjectVisible}
                    subject={selectedSubject}
                    classTime={filteredClassTime}
                    day={day}
                    selectedDayNum={selectedDayNum}
                />
            )}

            {day.dayNum === 0 && (
                <CToaster
                    ref={toaster}
                    push={toast}
                    placement="top-end"
                />
            )}
        </>
    );
});
