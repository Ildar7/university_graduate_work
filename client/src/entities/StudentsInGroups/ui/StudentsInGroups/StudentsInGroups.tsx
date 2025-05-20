import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchStudentGroups,
    getStudentGroupsData,
    getStudentGroupsError,
    getStudentGroupsIsLoading,
} from 'entities/StudentGroups';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import {
    Button, ButtonForm, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import ExitIcon from 'shared/assets/icons/exit.svg';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import { getRouteStudentGroups } from 'shared/const/router';
import { StudentsType } from 'entities/Students';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import { studentsInGroupsActions } from '../../model/slice/studentsInGroupsSlice';
import {
    getStudentsInGroupsDataFrom, getStudentsInGroupsDataTo,
    getStudentsInGroupsDeletingData,
    getStudentsInGroupsError,
    getStudentsInGroupsIsLoading,
    getStudentsInGroupsMovingData,
} from '../../model/selectors/getStudentsInGroups/getStudentsInGroups';
import { StudentsInGroupsFromColumn } from '../StudentsInGroupsFromColumn/StudentsInGroupsFromColumn';
import cls from './StudentsInGroups.module.scss';
import { StudentsInGroupsToColumn } from '../StudentsInGroupsToColumn/StudentsInGroupsToColumn';
import { moveStudentsInGroups } from '../../model/services/moveStudentsInGroups/moveStudentsInGroups';
import {
    deleteStudentsInGroups,
} from '../../model/services/deleteStudentsInGroups/deleteStudentsInGroups';

interface StudentsInGroupsProps {
    className?: string;
}

export const StudentsInGroups = memo((props: StudentsInGroupsProps) => {
    const {
        className,
    } = props;
    const { search } = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [fromGroupCode, setFromGroupCode] = useState<string>('Без группы');
    const [toGroupCode, setToGroupCode] = useState<string | undefined>(undefined);
    const [studentsDataFrom, setStudentsDataFrom] = useState<StudentsType[]>([]);
    const [studentsDataTo, setStudentsDataTo] = useState<StudentsType[]>([]);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const studentGroups = useSelector(getStudentGroupsData);

    const studentGroupsIsLoading = useSelector(getStudentGroupsIsLoading);
    const studentGroupsError = useSelector(getStudentGroupsError);

    const groupIdFromParam = search.split('group=')[1];
    const disabledButtons = studentGroupsIsLoading || !studentGroups?.length;

    const creatingStudentsInGroupsData = useSelector(getStudentsInGroupsMovingData);
    const deletingStudentsInGroupsData = useSelector(getStudentsInGroupsDeletingData);
    const isLoadingStudentsInGroupsData = useSelector(getStudentsInGroupsIsLoading);
    const errorStudentsInGroupsData = useSelector(getStudentsInGroupsError);
    const studentsInGroupsDataFrom = useSelector(getStudentsInGroupsDataFrom);
    const studentsInGroupsDataTo = useSelector(getStudentsInGroupsDataTo);

    const onChangeFromGroupCode = useCallback((code: string) => {
        setFromGroupCode(code);

        const prevToGroupCode = toGroupCode;
        setToGroupCode('');
        setTimeout(() => {
            setToGroupCode(prevToGroupCode);
        }, 0);
        dispatch(studentsInGroupsActions.clearStudentsIds());
    }, [dispatch, toGroupCode]);

    const onChangeToGroupCode = useCallback((code: string) => {
        setToGroupCode(code);

        const prevFromGroupCode = fromGroupCode;
        setFromGroupCode('');
        setTimeout(() => {
            setFromGroupCode(prevFromGroupCode);
        }, 0);
        dispatch(studentsInGroupsActions.clearStudentsIds());
    }, [dispatch, fromGroupCode]);

    const onExitHandler = useCallback(() => {
        navigate(getRouteStudentGroups());
    }, [navigate]);

    const onCancelEditHandler = useCallback(() => {
        dispatch(studentsInGroupsActions.clearStudentsIds());
        setStudentsDataFrom(studentsInGroupsDataFrom || []);
        setStudentsDataTo(studentsInGroupsDataTo || []);
        addToast(Toast.info('Изменения успешно отменены'));
    }, [dispatch, studentsInGroupsDataFrom, studentsInGroupsDataTo]);

    const onSaveHandler = useCallback(async () => {
        if (!creatingStudentsInGroupsData?.length && !deletingStudentsInGroupsData?.students.length) {
            addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            return;
        }

        if (creatingStudentsInGroupsData?.length) {
            creatingStudentsInGroupsData.forEach(async (action) => {
                await dispatch(moveStudentsInGroups([action.groupId!, {
                    students: action.students,
                }]));
            });
        }

        if (deletingStudentsInGroupsData?.students.length) {
            await dispatch(deleteStudentsInGroups());
        }

        addToast(Toast.success('Привязка студентов прошла успешно'));
        dispatch(studentsInGroupsActions.clearStudentsIds());
    }, [creatingStudentsInGroupsData, deletingStudentsInGroupsData?.students.length, dispatch]);

    const onMoveToStudentsTo = useCallback(() => {
        const checkedStudents = studentsDataFrom
            .filter((student) => student.checked)
            .map((student) => ({
                ...student,
                checked: false,
            }));

        if (!checkedStudents.length) {
            addToast(Toast.error('Выберите студентов для перемещения'));
            return;
        }

        setStudentsDataFrom(
            [
                ...studentsDataFrom.filter((student) => !student.checked),
            ]
                .sort((a, b) => (
                    Number(b.checked) - Number(a.checked) || a.students_id - b.students_id
                )),
        );
        setStudentsDataTo(
            [
                ...studentsDataTo,
                ...checkedStudents.map((student) => ({
                    ...student,
                    addedNow: true,
                })),
            ].sort((a, b) => (
                Number(b.checked) - Number(a.checked) || a.students_id - b.students_id
            )),
        );

        const selectedGroupTo = studentGroups?.filter((group) => group.code.toLowerCase() === toGroupCode?.toLowerCase())[0];
        if (!selectedGroupTo) return;

        dispatch(studentsInGroupsActions.setCreateStudents([
            selectedGroupTo.id_group,
            checkedStudents.map((student) => student.students_id),
        ]));
        checkedStudents.forEach((student) => {
            if (student.deletedNow) {
                dispatch(studentsInGroupsActions.changeDeleteStudents(student.students_id));
            }
        });

        const selectedGroupFrom = studentGroups?.filter((group) => group.code.toLowerCase() === fromGroupCode?.toLowerCase())[0];
        if (!selectedGroupFrom) return;

        if (fromGroupCode.toLowerCase() !== 'без группы') {
            checkedStudents.forEach((student) => {
                if (student.deletedNow) {
                    dispatch(studentsInGroupsActions.changeCreateStudents([selectedGroupFrom.id_group, student.students_id]));
                }
            });
        }
    }, [dispatch, fromGroupCode, studentGroups, studentsDataFrom, studentsDataTo, toGroupCode]);

    const onMoveToStudentsFrom = useCallback(() => {
        const checkedStudents = studentsDataTo
            .filter((student) => student.checked)
            .map((student) => ({
                ...student,
                checked: false,
            }));

        if (!checkedStudents.length) {
            addToast(Toast.error('Выберите студентов для перемещения'));
            return;
        }

        setStudentsDataTo(
            [
                ...studentsDataTo.filter((student) => !student.checked),
            ]
                .sort((a, b) => (
                    Number(b.checked) - Number(a.checked) || a.students_id - b.students_id
                )),
        );
        setStudentsDataFrom(
            [
                ...studentsDataFrom,
                ...checkedStudents.map((student) => ({
                    ...student,
                    deletedNow: true,
                })),
            ].sort((a, b) => (
                Number(b.checked) - Number(a.checked) || a.students_id - b.students_id
            )),
        );

        const selectedGroupTo = studentGroups?.filter((group) => group.code.toLowerCase() === toGroupCode?.toLowerCase())[0];

        if (fromGroupCode.toLowerCase() === 'без группы') {
            dispatch(studentsInGroupsActions.setDeleteStudents([
                selectedGroupTo!.id_group,
                checkedStudents
                    .filter((student) => !student.addedNow)
                    .map((student) => student.students_id),
            ]));

            checkedStudents.forEach((student) => {
                if (student.addedNow) {
                    dispatch(studentsInGroupsActions.changeCreateStudents([selectedGroupTo!.id_group, student.students_id]));
                }
            });

            return;
        }

        const selectedGroupFrom = studentGroups?.filter((group) => group.code.toLowerCase() === fromGroupCode?.toLowerCase())[0];
        if (!selectedGroupFrom) return;

        dispatch(studentsInGroupsActions.setCreateStudents([
            selectedGroupFrom.id_group,
            checkedStudents.map((student) => student.students_id),
        ]));
        checkedStudents.forEach((student) => {
            if (student.addedNow) {
                dispatch(studentsInGroupsActions.changeCreateStudents([
                    selectedGroupTo!.id_group,
                    student.students_id,
                ]));
            }
        });
    }, [dispatch, fromGroupCode, studentGroups, studentsDataFrom, studentsDataTo, toGroupCode]);

    useEffect(() => {
        dispatch(fetchStudentGroups());
    }, [dispatch]);

    useEffect(() => {
        if (studentGroups && studentGroups.length && !studentGroupsIsLoading) {
            setToGroupCode(studentGroups[0].code);
        }
    }, [studentGroups, studentGroupsIsLoading]);

    useEffect(() => {
        if (studentGroups && !studentGroupsIsLoading && groupIdFromParam) {
            const filteredGroupCode = studentGroups.filter((group) => (
                group.id_group === Number(groupIdFromParam)
            ))[0].code;
            setToGroupCode(filteredGroupCode);
        }
    }, [groupIdFromParam, studentGroups, studentGroupsIsLoading]);

    useEffect(() => {
        if (errorStudentsInGroupsData) {
            addToast(Toast.error('Произошла ошибка при попытке привязки студентов к группе, попробуйте снова'));
        }
    }, [errorStudentsInGroupsData]);

    let content;

    if (studentGroupsIsLoading || isLoadingStudentsInGroupsData) {
        content = (
            <Skeleton height={600} width="100%" />
        );
    } else if (studentGroupsError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else if (!studentGroups?.length) {
        content = (
            <Text
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Не найдено ни одной студенческой группы...
            </Text>
        );
    } else {
        content = (
            <>
                {fromGroupCode && (
                    <StudentsInGroupsFromColumn
                        className={classNames(cls.left, {}, [cls.contentInner])}
                        value={fromGroupCode}
                        onChangeValue={onChangeFromGroupCode}
                        toGroupCode={toGroupCode}
                        studentsData={Array.from(new Set(studentsDataFrom))}
                        setStudentsData={setStudentsDataFrom}
                    />
                )}
                <div className={cls.middle}>
                    <Button
                        className={cls.moveBtn}
                        buttonForm={ButtonForm.ALL_BORDERED}
                        onClick={onMoveToStudentsTo}
                    >
                        <Icon Svg={ArrowRight} />
                    </Button>
                    <Button
                        className={cls.moveBtn}
                        buttonForm={ButtonForm.ALL_BORDERED}
                        onClick={onMoveToStudentsFrom}
                    >
                        <Icon className={cls.arrowLeftIcon} Svg={ArrowRight} />
                    </Button>
                </div>
                {toGroupCode && (
                    <StudentsInGroupsToColumn
                        className={classNames(cls.right, {}, [cls.contentInner])}
                        value={toGroupCode}
                        onChangeValue={onChangeToGroupCode}
                        fromGroupCode={fromGroupCode}
                        studentsData={Array.from(new Set(studentsDataTo))}
                        setStudentsData={setStudentsDataTo}
                    />
                )}
            </>
        );
    }

    return (

        <>
            <div className={classNames(cls.StudentsInGroups, {}, [className])}>
                <div className={cls.content}>
                    {content}
                </div>

                <div className={cls.buttons}>
                    <div className={cls.buttonsLeftWrapper}>
                        <Button
                            className={cls.btn}
                            theme={ButtonTheme.BACKGROUND_GRAY}
                            size={ButtonSize.XS}
                            onClick={onExitHandler}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Выйти
                            </Text>
                            <Icon className={cls.exitBtnIcon} Svg={ExitIcon} />
                        </Button>
                    </div>

                    <div className={cls.buttonsRightWrapper}>
                        <Button
                            className={cls.btn}
                            theme={ButtonTheme.BACKGROUND_GRAY}
                            size={ButtonSize.XS}
                            onClick={onCancelEditHandler}
                            disabled={disabledButtons}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Отменить
                            </Text>
                            <Icon Svg={CloseBorderedIcon} />
                        </Button>
                        <Button
                            className={cls.btn}
                            theme={ButtonTheme.BACKGROUND}
                            size={ButtonSize.XS}
                            onClick={onSaveHandler}
                            disabled={disabledButtons}
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
                </div>
            </div>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
