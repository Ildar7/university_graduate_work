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
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import { useSelector } from 'react-redux';
import { subjectsScheduleDetailActionsActions } from 'features/SubjectsScheduleDetail';
import {
    getSubjectsScheduleStudentsGroupsData,
    subjectsScheduleDetailActions,
    SubjectsScheduleDetailClassTimeData,
    SubjectsScheduleDetailStudentsGroupsTeachers,
    SubjectsScheduleDetailWeekDayDetail,
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
import cls from './SubjectsScheduleDetailAddSubject.module.scss';
import {
    getSubjectsScheduleDetailActionsCreatingFields,
} from '../../model/selectors/getSubjectsScheduleDetailActions/getSubjectsScheduleDetailActions';
import { SubjectsScheduleDetailActionsFields } from '../../model/types/subjectsScheduleDetailActions';

interface SubjectsScheduleDetailAddSubjectProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    groupId: number;
    classTime?: SubjectsScheduleDetailClassTimeData[];
    day: SubjectsScheduleDetailWeekDayDetail;
    selectedDayNum?: number;
    week: number;
    year: number;
}

const actionType = 'creating';

export const SubjectsScheduleDetailAddSubject = memo((props: SubjectsScheduleDetailAddSubjectProps) => {
    const {
        className,
        onClose,
        isOpen,
        groupId,
        classTime,
        day,
        selectedDayNum,
        week,
        year,
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

    const allTeachersWorkload = useSelector(getSubjectsScheduleWorkloadTeachersDataToWork);
    const allClassRoomsWorkload = useSelector(getSubjectsScheduleWorkloadClassRoomsDataToWork);

    const groups = useSelector(getSubjectsScheduleStudentsGroupsData);
    const creatingFields = useSelector(getSubjectsScheduleDetailActionsCreatingFields);

    const classTimeValue = useMemo(() => classTime?.filter((item) => (
        item.class_time_id === creatingFields?.class_time_id
    ))[0], [classTime, creatingFields?.class_time_id]);
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
        groups?.filter((group) => group.id_group === groupId)[0].availableSubjects
    ), [groupId, groups]);
    const onChangeDiscipline = useCallback((value: string, columnName: string) => {
        const needDiscipline = disciplinesList?.filter((item) => item.name === value)[0];
        if (needDiscipline) {
            dispatch(subjectsScheduleDetailActionsActions.changeDiscipline([needDiscipline.type, needDiscipline.id, actionType]));
            setSelectedDiscipline(needDiscipline.name);
            setSelectedTeacher('null');
            dispatch(subjectsScheduleDetailActionsActions.changeTeacher([null, actionType]));
        }
    }, [disciplinesList, dispatch]);

    const [teachersList, setTeachersList] = useState<SubjectsScheduleDetailStudentsGroupsTeachers[]>([]);
    const onChangeTeachers = useCallback((value: string, columnName: string) => {
        const needTeacher = teachersList?.filter((item) => item.short_name === value)[0];
        if (needTeacher) {
            dispatch(subjectsScheduleDetailActionsActions.changeTeacher([needTeacher.teacher_id, actionType]));
            setSelectedTeacher(needTeacher.short_name);
        }
    }, [dispatch, teachersList]);
    useEffect(() => {
        if (selectedDiscipline && disciplinesList) {
            const filteredDiscipline = disciplinesList.filter((item) => item.name === selectedDiscipline);
            if (filteredDiscipline.length) {
                setTeachersList(filteredDiscipline[0].teachers);
            }
        }
    }, [disciplinesList, selectedDiscipline]);

    const [selectedClassRoom, setSelectedClassRoom] = useState('null');
    const onChangeClassRoom = useCallback((value: string, columnName: string) => {
        const needClassRoom = classRooms?.filter((item) => item.full_name === value)[0];
        if (needClassRoom) {
            dispatch(subjectsScheduleDetailActionsActions.changeClassRoom([needClassRoom.classroom_id, actionType]));
            setSelectedClassRoom(needClassRoom.full_name);
        }
    }, [classRooms, dispatch]);

    const [selectedSubGroup, setSelectedSubGroup] = useState('null');
    const subGroups = useMemo(() => ['1', '2'], []);
    const onChangeSubGroup = useCallback((value: string, columnName: string) => {
        const needSubGroup = subGroups.filter((item) => item === value)[0];
        if (needSubGroup) {
            dispatch(subjectsScheduleDetailActionsActions.changeSubGroup([Number(needSubGroup), actionType]));
            setSelectedSubGroup(needSubGroup);
        }
    }, [dispatch, subGroups]);

    const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSubGroup('null');
        dispatch(subjectsScheduleDetailActionsActions.changeSubGroup([null, actionType]));
        dispatch(subjectsScheduleDetailActionsActions.checkIsSubgroup([event.target.checked, actionType]));
    };

    const onCancelHandler = useCallback(() => {
        onClose();
        dispatch(subjectsScheduleDetailActionsActions.clearActionData(actionType));
        setSelectedDiscipline('null');
        setSelectedClassTime('null');
        setSelectedClassRoom('null');
        setSelectedTeacher('null');
        setSelectedSubGroup('null');
    }, [dispatch, onClose]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            let dataToCheck;

            if (creatingFields?.isSubgroup) {
                dataToCheck = excludePropertiesFromObject(creatingFields, [
                    'isSubgroup',
                    'tempIndex',
                    creatingFields.type === 'subject' ? 'educational_activity_type_id' : 'subject_id',
                    'type',
                ]);
            } else {
                dataToCheck = excludePropertiesFromObject(creatingFields, [
                    'isSubgroup',
                    'tempIndex',
                    creatingFields?.type === 'subject' ? 'educational_activity_type_id' : 'subject_id',
                    'subgroup',
                    'type',
                ]);
            }

            if (validateObjectFieldsNotNull(dataToCheck)) {
                const isExistSubject = day.subjectsByGroups[groupId].filter((subject) => subject.class_time_id === creatingFields?.class_time_id)[0];
                const isAddSubgroup = (isExistSubject.subgroup === 1 && creatingFields?.subgroup === 2)
                    || (isExistSubject.subgroup === 2 && creatingFields?.subgroup === 1);

                if (!isExistSubject.year || isAddSubgroup) {
                    const dataToAdd = {
                        ...excludePropertiesFromObject(creatingFields, ['isSubgroup', 'type']),
                        tempIndex: `day-${creatingFields?.day_num}-group-${creatingFields?.group_id}-week-${creatingFields
                            ?.week_num}-classroom-${creatingFields?.classroom_id}-subjId-${creatingFields?.subject_id}-eduId-${creatingFields
                            ?.educational_activity_type_id}`,
                    };
                    dispatch(subjectsScheduleDetailActionsActions.addSubject(dataToAdd as SubjectsScheduleDetailActionsFields));
                    const dataToAddToData = {
                        ...excludePropertiesFromObject(creatingFields, ['isSubgroup']) as SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail,
                        tempIndex: `day-${creatingFields?.day_num}-group-${creatingFields?.group_id}-week-${creatingFields
                            ?.week_num}-classroom-${creatingFields?.classroom_id}-subjId-${creatingFields?.subject_id}-eduId-${creatingFields
                            ?.educational_activity_type_id}`,
                        subject: {
                            subject_id: creatingFields?.subject_id,
                            name: selectedDiscipline,
                        },
                        class_time: classTime?.filter((time) => time.class_time_id === creatingFields?.class_time_id)[0],
                        classRoomTitle: classRooms?.filter((room) => room.classroom_id === creatingFields?.classroom_id)[0].full_name,
                        teacherName: teachersList.filter((teacher) => teacher.teacher_id === creatingFields?.teacher_id)[0].short_name,
                    };
                    dispatch(subjectsScheduleDetailActions.addSubjectToData([
                        dataToAddToData as SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail, isAddSubgroup,
                    ]));
                    dispatch(subjectsScheduleWorkloadActions.addTeacherWorkloadId(
                        [creatingFields!.day_num!, creatingFields!.class_time_id!, creatingFields!.teacher_id!],
                    ));
                    dispatch(subjectsScheduleWorkloadActions.addClassRoomWorkloadId(
                        [creatingFields!.day_num!, creatingFields!.class_time_id!, creatingFields!.classroom_id!],
                    ));

                    addToast(Toast.success('Дисциплина добавлена в расписание'));
                    onCancelHandler();
                } else {
                    addToast(Toast.error('Данное время уже занято другой дисциплиной!'));
                }
            } else {
                addToast(Toast.error('Заполните все поля!'));
            }
        }
    };

    useEffect(() => {
        dispatch(subjectsScheduleDetailActionsActions.changeDefaultValues([day.dayNum, groupId, week, year, actionType]));
    }, [day.dayNum, dispatch, groupId, week, year, isOpen]);

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
                    id="add_subjects_schedule_subgroup"
                    checked={creatingFields?.isSubgroup}
                    onChange={onCheckHandler}
                />
                {creatingFields?.isSubgroup && (
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
                        onClick={onCancelHandler}
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
                            Добавить
                        </Text>
                        <Icon Svg={PlusBorderedIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                className={classNames(cls.SubjectsScheduleDetailAddSubject, {}, [className])}
                onClose={onCancelHandler}
                isOpen={isOpen}
                title="Создание карточки"
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
