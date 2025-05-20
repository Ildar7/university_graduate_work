import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import TableIcon from 'shared/assets/icons/table.svg';
import { useNavigate } from 'react-router-dom';
import { getRouteTrainingScheduleDetail } from 'shared/const/router';
import cls from './TrainingSchedule.module.scss';
import { TrainingScheduleType } from '../model/types/trainingSchedule';
import {
    getTrainingScheduleError,
    getTrainingScheduleIsLoading,
} from '../model/selectors/getTrainingSchedule/getTrainingSchedule';
import { fetchTrainingSchedule } from '../model/services/fetchTrainingSchedule/fetchTrainingSchedule';

interface TrainingScheduleProps {
    className?: string;
    data: TrainingScheduleType[];
    exportDisabled: boolean;
}

export const TrainingSchedule = (props: TrainingScheduleProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(getTrainingScheduleIsLoading);
    const error = useSelector(getTrainingScheduleError);

    const navigateToDetailPage = useCallback((year: string) => {
        navigate(getRouteTrainingScheduleDetail(year));
    }, [navigate]);

    useEffect(() => {
        dispatch(fetchTrainingSchedule());
    }, [dispatch]);

    let trainingScheduleTable;

    if (isLoading) {
        trainingScheduleTable = (
            <Skeleton height={400} />
        );
    } else if (error) {
        trainingScheduleTable = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке Данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        trainingScheduleTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-training-schedules-all"
                                />
                            )}
                            <div className={cls.tableCell}>
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Название
                                </Text>
                            </div>
                            <div className={cls.tableCell}>
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Учебный год
                                </Text>
                            </div>
                            <div className={cls.tableCell}>
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Кол-во групп
                                </Text>
                            </div>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((trainingSchedule) => (
                                <div className={cls.tableRow} key={trainingSchedule.academic_year_from}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-training-schedule-${trainingSchedule.academic_year_from}`}
                                        />
                                    )}
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            График учебного процесса на
                                            {' '}
                                            {trainingSchedule.academic_year_from}
                                            -
                                            {trainingSchedule.academic_year_from + 1}
                                            {' '}
                                            учебный год
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {trainingSchedule.academic_year_from}
                                            -
                                            {trainingSchedule.academic_year_from + 1}
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {trainingSchedule.groups_count}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Посмотреть"
                                            className={cls.editBtn}
                                            onClick={() => { navigateToDetailPage(String(trainingSchedule.academic_year_from)); }}
                                        >
                                            <Icon Svg={TableIcon} />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        );
    }

    const mods: Mods = {
        [cls.error]: !!error,
    };

    return (
        <div className={classNames(cls.TableBlock, mods, [className])}>
            {trainingScheduleTable}
        </div>
    );
};
