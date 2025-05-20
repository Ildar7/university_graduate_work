import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useCallback, useEffect } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Icon, IconNames } from 'shared/ui/Icon/Icon';
import ExitIcon from 'shared/assets/icons/exit.svg';
import { useNavigate } from 'react-router-dom';
import { getRouteSubjectsSchedule } from 'shared/const/router';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './SubjectsScheduleWorkload.module.scss';
import {
    fetchSubjectsScheduleWorkloadTeachers,
} from '../../model/services/fetchSubjectsScheduleWorkloadTeachers/fetchSubjectsScheduleWorkloadTeachers';
import {
    fetchSubjectsScheduleWorkloadClassRooms,
} from '../../model/services/fetchSubjectsScheduleWorkloadClassRooms/fetchSubjectsScheduleWorkloadClassRooms';
import { SubjectsScheduleWorkloadTable } from '../SubjectsScheduleWorkloadTable/SubjectsScheduleWorkloadTable';
import {
    getSubjectsScheduleWorkloadTeachersData,
    getSubjectsScheduleWorkloadTeachersError,
    getSubjectsScheduleWorkloadTeachersIsLoading,
} from '../../model/selectors/getSubjectsScheduleWorkloadTeachers/getSubjectsScheduleWorkloadTeachers';
import {
    getSubjectsScheduleWorkloadClassRoomsData,
    getSubjectsScheduleWorkloadClassRoomsError,
    getSubjectsScheduleWorkloadClassRoomsIsLoading,
} from '../../model/selectors/getSubjectsScheduleWorkloadClassRooms/getSubjectsScheduleWorkloadClassRooms';

interface SubjectsScheduleWorkloadProps {
    className?: string;
}

export const SubjectsScheduleWorkload = memo((props: SubjectsScheduleWorkloadProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = window.location;
    const navigate = useNavigate();
    const pathnameArr = pathname.split('/');
    const year = pathnameArr[pathnameArr.length - 2];
    const week = pathnameArr[pathnameArr.length - 1];

    const teachersWorkloadData = useSelector(getSubjectsScheduleWorkloadTeachersData);
    const isLoadingTeachersWorkload = useSelector(getSubjectsScheduleWorkloadTeachersIsLoading);
    const errorTeachersWorkload = useSelector(getSubjectsScheduleWorkloadTeachersError);

    const clasRoomsWorkloadData = useSelector(getSubjectsScheduleWorkloadClassRoomsData);
    const isLoadingClassRoomsWorkload = useSelector(getSubjectsScheduleWorkloadClassRoomsIsLoading);
    const errorClassRoomsWorkload = useSelector(getSubjectsScheduleWorkloadClassRoomsError);

    const onExitHandler = useCallback(() => {
        navigate(getRouteSubjectsSchedule());
    }, [navigate]);

    const fetchWorkload = useCallback(() => {
        dispatch(fetchSubjectsScheduleWorkloadClassRooms([year, week]));
        dispatch(fetchSubjectsScheduleWorkloadTeachers([year, week]));
    }, [dispatch, week, year]);

    useEffect(() => {
        fetchWorkload();
    }, [fetchWorkload]);

    return (
        <div className={classNames(cls.SubjectsScheduleWorkload, {}, [className])}>
            <div className={cls.content}>
                <SubjectsScheduleWorkloadTable
                    title="Нагрузка преподавателей"
                    data={teachersWorkloadData}
                    isLoading={isLoadingTeachersWorkload}
                    error={errorTeachersWorkload}
                />
                <SubjectsScheduleWorkloadTable
                    title="Заполненность аудиторий"
                    data={clasRoomsWorkloadData}
                    isLoading={isLoadingClassRoomsWorkload}
                    error={errorClassRoomsWorkload}
                    className={cls.classRoomsTable}
                />
            </div>

            <div className={cls.settings}>
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
                <Button
                    size={ButtonSize.XS}
                    className={cls.btn}
                    onClick={fetchWorkload}
                    disabled={isLoadingTeachersWorkload || isLoadingClassRoomsWorkload}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Обновить
                    </Text>
                    <Icon name={IconNames.REFRESH} />
                </Button>
            </div>
        </div>
    );
});
