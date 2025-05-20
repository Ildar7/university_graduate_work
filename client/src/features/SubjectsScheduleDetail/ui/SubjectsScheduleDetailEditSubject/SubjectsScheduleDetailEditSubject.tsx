import React, {
    memo, ReactElement, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { CForm, CToaster } from '@coreui/react';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import { useSelector } from 'react-redux';
import { subjectsScheduleDetailActionsActions } from 'features/SubjectsScheduleDetail';
import {
    getSubjectsScheduleDetailDataToWork,
    getSubjectsScheduleStudentsGroupsData,
    subjectsScheduleDetailActions,
    SubjectsScheduleDetailClassTimeData,
    SubjectsScheduleDetailStudentsGroupsTeachers, SubjectsScheduleDetailWeekDayDetail,
    SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail,
} from 'entities/SubjectsScheduleDetail';
import { getClassRoomsData, getClassRoomsError, getClassRoomsIsLoading } from 'entities/ClassRooms';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { validateObjectFieldsNotNull } from 'shared/lib/helpers/validateObjectFieldsNotNull/validateObjectFieldsNotNull';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    getSubjectsScheduleWorkloadClassRoomsDataToWork,
    getSubjectsScheduleWorkloadTeachersDataToWork,
    subjectsScheduleWorkloadActions,
} from 'entities/SubjectsScheduleWorkload';
import cls from './SubjectsScheduleDetailEditSubject.module.scss';
import {
    getSubjectsScheduleDetailActionsUpdatingFields,
} from '../../model/selectors/getSubjectsScheduleDetailActions/getSubjectsScheduleDetailActions';
import { SubjectsScheduleDetailUpdate } from '../../model/types/subjectsScheduleDetailActions';

interface SubjectsScheduleDetailEditSubjectProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    classTime?: SubjectsScheduleDetailClassTimeData[];
    subject: SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail | null;
    day: SubjectsScheduleDetailWeekDayDetail;
    selectedDayNum?: number;
}

const actionType = 'updating';

export const SubjectsScheduleDetailEditSubject = memo((props: SubjectsScheduleDetailEditSubjectProps) => {
    const {
        className,
        onClose,
        isOpen,
        classTime,
        subject,
        day,
        selectedDayNum,
    } = props;
    const dispatch = useAppDispatch();

    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);

    const [teachersWorkload, setTeachersWorkload] = useState<(string | undefined)[] | undefined>();
    const [classRoomsWorkload, setClassRoomsWorkload] = useState<(string | undefined)[] | undefined>();

    const classRooms = useSelector(getClassRoomsData);
    const isLoadingClassRooms = useSelector(getClassRoomsIsLoading);
    const errorClassRooms = useSelector(getClassRoomsError);

    const groups = useSelector(getSubjectsScheduleStudentsGroupsData);
    const updatingFields = useSelector(getSubjectsScheduleDetailActionsUpdatingFields);
    const subjectsSchedule = useSelector(getSubjectsScheduleDetailDataToWork);

    const allTeachersWorkload = useSelector(getSubjectsScheduleWorkloadTeachersDataToWork);
    const allClassRoomsWorkload = useSelector(getSubjectsScheduleWorkloadClassRoomsDataToWork);

    const classTimeValue = useMemo(() => classTime?.filter((item) => (
        item.class_time_id === updatingFields?.class_time_id
    ))[0], [classTime, updatingFields?.class_time_id]);
    const [selectedClassTime, setSelectedClassTime] = useState('null');
    const onChangeClassTime = useCallback((value: string, columnName: string) => {
        const needClassTime = classTime?.filter((item) => `${item.start_time} - ${item.end_time}` === value)[0];
        if (needClassTime) {
            dispatch(subjectsScheduleDetailActionsActions.changeClassTime(
                [needClassTime.class_time_id, needClassTime.shifts[needClassTime.shifts.length - 1], actionType],
            ));
            setSelectedClassTime(`${needClassTime.start_time} - ${needClassTime.end_time}`);
        }
    }, [classTime, dispatch]);
    useEffect(() => {
        if (classTimeValue) {
            setSelectedClassTime(`${classTimeValue.start_time} - ${classTimeValue.end_time}`);
            dispatch(subjectsScheduleDetailActionsActions.changeClassTime(
                [classTimeValue.class_time_id, classTimeValue.shifts[classTimeValue.shifts.length - 1], actionType],
            ));
        }
    }, [classTimeValue, dispatch]);

    const [selectedTeacher, setSelectedTeacher] = useState('null');
    const [selectedDiscipline, setSelectedDiscipline] = useState('null');
    const disciplinesList = useMemo(() => (
        groups?.filter((group) => group.id_group === subject?.group_id)[0].availableSubjects
    ), [groups, subject?.group_id]);
    const onChangeDiscipline = useCallback((value: string, columnName: string) => {
        const needDiscipline = disciplinesList?.filter((item) => item.name === value)[0];
        if (needDiscipline) {
            dispatch(subjectsScheduleDetailActionsActions.changeDiscipline([needDiscipline.type, needDiscipline.id, actionType]));
            setSelectedDiscipline(needDiscipline.name);
            setTimeout(() => {
                setSelectedTeacher('null');
                dispatch(subjectsScheduleDetailActionsActions.changeTeacher([null, actionType]));
                dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                    [updatingFields!.day_num!, updatingFields!.class_time_id!, updatingFields!.teacher_id!],
                ));
            }, 50);
        }
    }, [disciplinesList, dispatch, updatingFields]);
    useEffect(() => {
        if (disciplinesList && disciplinesList.length) {
            let needDiscipline;
            if (subject?.type === 'subject') {
                needDiscipline = disciplinesList.filter((item) => (item.id === subject?.subject_id && item.type === subject.type));
            } else {
                needDiscipline = disciplinesList.filter((item) => (item.id === subject?.educational_activity_type_id && item.type === subject.type));
            }
            setSelectedDiscipline(needDiscipline[0].name);
            dispatch(subjectsScheduleDetailActionsActions.changeDiscipline([needDiscipline[0].type, needDiscipline[0].id, actionType]));
        }
    }, [disciplinesList, dispatch, subject?.educational_activity_type_id, subject?.subject_id, subject?.type]);

    const [teachersList, setTeachersList] = useState<SubjectsScheduleDetailStudentsGroupsTeachers[]>([]);
    const onChangeTeachers = useCallback((value: string, columnName: string) => {
        const needTeacher = teachersList?.filter((item) => item.short_name === value)[0];
        if (needTeacher) {
            if (!localStorage.getItem('teacher_id')) {
                localStorage.setItem('teacher_id', String(updatingFields!.teacher_id!));
            }
            dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                [updatingFields!.day_num!, updatingFields!.class_time_id!, updatingFields!.teacher_id!],
            ));
            dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                [updatingFields!.day_num!, updatingFields!.class_time_id!, needTeacher.teacher_id],
            ));
            dispatch(subjectsScheduleDetailActionsActions.changeTeacher([needTeacher.teacher_id, actionType]));
            setSelectedTeacher(needTeacher.short_name);
        }
    }, [dispatch, teachersList, updatingFields]);
    useEffect(() => {
        if (selectedDiscipline && disciplinesList) {
            const filteredDiscipline = disciplinesList.filter((item) => item.name === selectedDiscipline);
            if (filteredDiscipline.length) {
                setTeachersList(filteredDiscipline[0].teachers);
            }
        }
    }, [disciplinesList, selectedDiscipline]);
    useEffect(() => {
        if (teachersList && teachersList.length && subject) {
            dispatch(subjectsScheduleDetailActionsActions.changeTeacher([subject.teacher_id, actionType]));
            const filteredTeacher = teachersList.filter((teacher) => teacher.teacher_id === subject?.teacher_id)[0];
            if (filteredTeacher) {
                setSelectedTeacher(filteredTeacher.short_name);
            }
        }
    }, [teachersList, subject, dispatch]);

    const [selectedClassRoom, setSelectedClassRoom] = useState('null');
    const onChangeClassRoom = useCallback((value: string, columnName: string) => {
        const needClassRoom = classRooms?.filter((item) => item.full_name === value)[0];
        if (needClassRoom) {
            if (!localStorage.getItem('classroom_id')) {
                localStorage.setItem('classroom_id', String(updatingFields!.classroom_id!));
            }
            dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId(
                [updatingFields!.day_num!, updatingFields!.class_time_id!, updatingFields!.classroom_id!],
            ));
            dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                [updatingFields!.day_num!, updatingFields!.class_time_id!, needClassRoom.classroom_id],
            ));
            dispatch(subjectsScheduleDetailActionsActions.changeClassRoom([needClassRoom.classroom_id, actionType]));
            setSelectedClassRoom(needClassRoom.full_name);
        }
    }, [classRooms, dispatch, updatingFields]);
    useEffect(() => {
        if (classRooms && classRooms.length && subject) {
            dispatch(subjectsScheduleDetailActionsActions.changeClassRoom([subject.classroom_id, actionType]));
            setSelectedClassRoom(classRooms.filter((room) => room.classroom_id === subject?.classroom_id)[0].full_name);
        }
    }, [classRooms, subject?.classroom_id, dispatch, subject]);

    const [selectedSubGroup, setSelectedSubGroup] = useState('null');
    const subGroups = useMemo(() => ['1', '2'], []);
    const onChangeSubGroup = useCallback((value: string, columnName: string) => {
        const needSubGroup = subGroups.filter((item) => item === value)[0];
        if (needSubGroup) {
            dispatch(subjectsScheduleDetailActionsActions.changeSubGroup([Number(needSubGroup), actionType]));
            setSelectedSubGroup(needSubGroup);
        }
    }, [dispatch, subGroups]);
    useEffect(() => {
        if (subject?.subgroup) {
            dispatch(subjectsScheduleDetailActionsActions.changeSubGroup([subject.subgroup, actionType]));
            setSelectedSubGroup(String(subject.subgroup));
        }
    }, [subject?.subgroup, dispatch]);

    const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSubGroup('null');
        dispatch(subjectsScheduleDetailActionsActions.changeSubGroup([null, actionType]));
        dispatch(subjectsScheduleDetailActionsActions.checkIsSubgroup([event.target.checked, actionType]));
    };
    useEffect(() => {
        dispatch(subjectsScheduleDetailActionsActions.checkIsSubgroup([!!subject?.subgroup, actionType]));
    }, [dispatch, subject?.subgroup]);

    const onCancelHandler = useCallback(() => {
        onClose();
        dispatch(subjectsScheduleDetailActionsActions.clearActionData(actionType));
        setSelectedDiscipline('null');
        setSelectedClassTime('null');
        setSelectedClassRoom('null');
        setSelectedTeacher('null');
        setSelectedSubGroup('null');
        localStorage.removeItem('teacher_id');
        localStorage.removeItem('classroom_id');
    }, [dispatch, onClose]);

    const deletePrevTeacherId = useCallback(() => {
        const prevTeacherId = localStorage.getItem('teacher_id');
        if (prevTeacherId) {
            dispatch(subjectsScheduleWorkloadActions.deleteTeacherWorkloadId(
                [updatingFields!.day_num!, updatingFields!.class_time_id!, updatingFields!.teacher_id!],
            ));
            dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                [updatingFields!.day_num!, updatingFields!.class_time_id!, Number(prevTeacherId)],
            ));
            localStorage.removeItem('teacher_id');
        }
    }, [dispatch, updatingFields]);

    const deletePrevClassRoomId = useCallback(() => {
        const prevClassRoomId = localStorage.getItem('classroom_id');
        if (prevClassRoomId) {
            dispatch(subjectsScheduleWorkloadActions.deleteClassRoomWorkloadId(
                [updatingFields!.day_num!, updatingFields!.class_time_id!, updatingFields!.classroom_id!],
            ));
            dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                [updatingFields!.day_num!, updatingFields!.class_time_id!, Number(prevClassRoomId)],
            ));
            localStorage.removeItem('classroom_id');
        }
    }, [dispatch, updatingFields]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            let dataToCheck;

            if (updatingFields?.isSubgroup) {
                dataToCheck = excludePropertiesFromObject(updatingFields, [
                    'isSubgroup',
                    'tempIndex',
                    updatingFields.type === 'subject' ? 'educational_activity_type_id' : 'subject_id',
                    'type',
                ]);
            } else {
                dataToCheck = excludePropertiesFromObject(updatingFields, [
                    'isSubgroup',
                    'tempIndex',
                    updatingFields?.type === 'subject' ? 'educational_activity_type_id' : 'subject_id',
                    'subgroup',
                    'type',
                ]);
            }

            if (validateObjectFieldsNotNull(dataToCheck) && selectedTeacher !== 'null') {
                const isExistSubject = subjectsSchedule![subject!.week_num]
                    .days[subject!.day_num].subjectsByGroups[subject!.group_id]
                    .filter((filterSubj) => (
                        filterSubj.class_time_id === updatingFields?.class_time_id
                    )).sort((a, b) => (a.subgroup || 2) - (b.subgroup || 1));
                const isEditingSubgroup = (isExistSubject[0].subgroup === 1 && updatingFields?.subgroup === 2)
                    || (isExistSubject[0].subgroup === 2 && updatingFields?.subgroup === 1);
                const prevClassTimeLength = subjectsSchedule![subject!.week_num]
                    .days[subject!.day_num].subjectsByGroups[subject!.group_id]
                    .filter((filterSubj) => (
                        filterSubj.class_time_id === subject?.class_time_id
                    )).length;

                if (
                    !isExistSubject[0].year
                    || (updatingFields?.class_time_id === subject?.class_time_id && isExistSubject.length < 2)
                    || (updatingFields?.class_time_id === subject?.class_time_id && isExistSubject.length > 1
                        && updatingFields?.subgroup)
                    || isEditingSubgroup
                ) {
                    if (!(updatingFields?.class_time_id !== subject?.class_time_id && isExistSubject.length > 1)) {
                        const dataToUpdate = {
                            subject_schedule_id: subject?.subject_schedule_id,
                            fields: {
                                ...excludePropertiesFromObject(updatingFields, ['isSubgroup', 'type']),
                                tempIndex: `day-${updatingFields?.day_num}-group-${updatingFields?.group_id}-week-${updatingFields
                                    ?.week_num}-classroom-${updatingFields?.classroom_id}-subjId-${updatingFields?.subject_id}-eduId-${updatingFields
                                    ?.educational_activity_type_id}`,
                            },
                        };
                        dispatch(subjectsScheduleDetailActionsActions.updateSubjects(dataToUpdate as SubjectsScheduleDetailUpdate));
                        const dataToUpdateInData = {
                            ...excludePropertiesFromObject(updatingFields, ['isSubgroup']),
                            subject_schedule_id: subject?.subject_schedule_id,
                            tempIndex: `day-${updatingFields?.day_num}-group-${updatingFields?.group_id}-week-${updatingFields
                                ?.week_num}-classroom-${updatingFields?.classroom_id}-subjId-${updatingFields?.subject_id}-eduId-${updatingFields
                                ?.educational_activity_type_id}`,
                            subject: {
                                subject_id: updatingFields?.subject_id,
                                name: selectedDiscipline,
                            },
                            class_time: classTime?.filter((time) => time.class_time_id === updatingFields?.class_time_id)[0],
                            classRoomTitle: classRooms?.filter((room) => room.classroom_id === updatingFields?.classroom_id)[0].full_name,
                            teacherName: teachersList.filter((teacher) => teacher.teacher_id === updatingFields?.teacher_id)[0].short_name,
                        };
                        dispatch(subjectsScheduleDetailActions.updateSubjectInData([
                            subject!.class_time_id,
                            subject!.tempIndex!,
                            dataToUpdateInData as SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail,
                            isEditingSubgroup,
                            prevClassTimeLength > 1,
                        ]));

                        addToast(Toast.success('Дисциплина успешно обновлена'));
                        onCancelHandler();
                    } else {
                        addToast(Toast.error('Данное время уже занято другой дисциплиной!'));
                    }
                } else {
                    addToast(Toast.error('Данное время уже занято другой дисциплиной!'));
                }
            } else {
                addToast(Toast.error('Заполните все поля!'));
            }
        }
    };

    useEffect(() => {
        if (subject) {
            dispatch(subjectsScheduleDetailActionsActions.changeDefaultValues(
                [subject.day_num, subject.group_id, subject.week_num, subject.year, actionType],
            ));
        }
        // eslint-disable-next-line
    }, [dispatch, subject?.day_num, subject?.group_id, subject?.week_num, subject?.year]);

    useEffect(() => {
        if (typeof selectedDayNum !== 'undefined' && selectedDayNum === day.dayNum
            && selectedClassTime !== 'null' && selectedDiscipline !== 'null'
            && teachersList && teachersList.length) {
            setTeachersWorkload(allTeachersWorkload?.workload
                .filter((workload) => workload.dayNum === selectedDayNum)[0].class_time
                .filter((workload) => `${workload.start_time} - ${workload.end_time}` === selectedClassTime)[0].teachers_ids
                .map((id) => {
                    const teacher = teachersList.find((teacher) => teacher.teacher_id === id);
                    return teacher?.short_name;
                }).filter((teacher) => teacher));
        }
    }, [allTeachersWorkload, day.dayNum, disciplinesList, isOpen, selectedClassTime, selectedDayNum, selectedDiscipline, teachersList]);

    useEffect(() => {
        if (typeof selectedDayNum !== 'undefined' && selectedDayNum === day.dayNum
            && selectedClassTime !== 'null') {
            setClassRoomsWorkload(allClassRoomsWorkload?.workload
                .filter((workload) => workload.dayNum === selectedDayNum)[0].class_time
                .filter((workload) => `${workload.start_time} - ${workload.end_time}` === selectedClassTime)[0].classroom_ids
                .map((id) => {
                    const classRoom = classRooms?.find((room) => room.classroom_id === id);
                    return classRoom?.full_name;
                }).filter((room) => room));
        }
    }, [allClassRoomsWorkload?.workload, classRooms, day.dayNum, selectedClassTime, selectedDayNum]);

    let content;

    if (isLoadingClassRooms) {
        content = (
            <Skeleton width="100%" height={300} />
        );
    } else if (errorClassRooms) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <>
                <SearchSelect
                    label="Время занятия"
                    options={classTime!.map((time) => `${time.start_time} - ${time.end_time}`)}
                    columnName=""
                    optionValue={selectedClassTime}
                    onClickOption={onChangeClassTime}
                    searchDisabled
                />
                <SearchSelect
                    label="Дисциплина"
                    options={disciplinesList!.map((discipline) => discipline.name)}
                    columnName=""
                    optionValue={selectedDiscipline}
                    onClickOption={onChangeDiscipline}
                />
                <SearchSelect
                    label="Преподаватель"
                    options={teachersList!.map((teacher) => teacher.short_name)}
                    columnName=""
                    optionValue={selectedTeacher}
                    onClickOption={onChangeTeachers}
                    disabled={!selectedDiscipline}
                    disabledList={teachersWorkload}
                />
                <SearchSelect
                    label="Аудитория"
                    options={classRooms!.map((item) => item.full_name)}
                    columnName=""
                    optionValue={selectedClassRoom}
                    onClickOption={onChangeClassRoom}
                    disabledList={classRoomsWorkload}
                />
                <Checkbox
                    label="Разделение на подгруппы"
                    id="edit_subjects_schedule_subgroup"
                    checked={updatingFields?.isSubgroup}
                    onChange={onCheckHandler}
                />
                {updatingFields?.isSubgroup && (
                    <SearchSelect
                        label="Подгруппа"
                        options={subGroups}
                        columnName=""
                        optionValue={selectedSubGroup}
                        onClickOption={onChangeSubGroup}
                    />
                )}

                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_DARK}
                        className={cls.footerBtn}
                        onClick={() => {
                            deletePrevTeacherId();
                            deletePrevClassRoomId();
                            onCancelHandler();
                        }}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Отмена
                        </Text>
                        <Icon Svg={CloseBorderedIcon} />
                    </Button>
                    <Button
                        type="submit"
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.footerBtn}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Сохранить
                        </Text>
                        <Icon Svg={CheckIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                className={classNames(cls.SubjectsScheduleDetailEditSubject, {}, [className])}
                onClose={() => {
                    deletePrevTeacherId();
                    deletePrevClassRoomId();
                    onCancelHandler();
                }}
                isOpen={isOpen}
                title="Редактирование карточки"
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    {content}
                </CForm>
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
