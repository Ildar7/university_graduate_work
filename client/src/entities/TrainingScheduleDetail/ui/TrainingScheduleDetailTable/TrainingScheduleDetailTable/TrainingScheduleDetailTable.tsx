import React, { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    getWorkingCurriculumTrainingScheduleError,
    getWorkingCurriculumTrainingScheduleIsLoading,
    getWorkingCurriculumTrainingScheduleSymbols,
} from 'entities/WorkingCurriculumTrainingSchedule';
import {
    fetchWorkingCurriculumSymbols,
} from 'entities/WorkingCurriculumTrainingSchedule/model/services/fetchWorkingCurriculumSymbols/fetchWorkingCurriculumSymbols';
import {
    fetchTrainingScheduleSchema,
    getTrainingScheduleSchemaData,
    getTrainingScheduleSchemaError,
    getTrainingScheduleSchemaIsLoading,
} from 'entities/TrainingScheduleSchema';
import cls from './TrainingScheduleDetailTable.module.scss';
import { TrainingScheduleDetailTableCell } from '../TrainingScheduleDetailTableCell/TrainingScheduleDetailTableCell';
import {
    getTrainingScheduleDetailData,
    getTrainingScheduleDetailDataParsed,
    getTrainingScheduleDetailError,
    getTrainingScheduleDetailIsLoading,
} from '../../../model/selectors/getTrainingScheduleDetail/getTrainingScheduleDetail';
import {
    fetchTrainingScheduleDetail,
} from '../../../model/services/fetchTrainingScheduleDetail/fetchTrainingScheduleDetail';
import { trainingScheduleDetailActions } from '../../../model/slice/trainingScheduleDetailSlice';

interface TrainingScheduleDetailTableProps {
    className?: string;
    trainingScheduleYearFrom: string;
}

export const TrainingScheduleDetailTable = memo((props: TrainingScheduleDetailTableProps) => {
    const {
        className,
        trainingScheduleYearFrom,
    } = props;

    const dispatch = useAppDispatch();

    const trainingScheduleDetailData = useSelector(getTrainingScheduleDetailData);
    const trainingScheduleDetailDataParsed = useSelector(getTrainingScheduleDetailDataParsed);
    const trainingScheduleDetailIsLoading = useSelector(getTrainingScheduleDetailIsLoading);
    const trainingScheduleDetailError = useSelector(getTrainingScheduleDetailError);

    const trainingScheduleSymbols = useSelector(getWorkingCurriculumTrainingScheduleSymbols);
    const trainingScheduleIsLoading = useSelector(getWorkingCurriculumTrainingScheduleIsLoading);
    const trainingScheduleError = useSelector(getWorkingCurriculumTrainingScheduleError);

    const trainingScheduleSchema = useSelector(getTrainingScheduleSchemaData);
    const trainingScheduleSchemaIsLoading = useSelector(getTrainingScheduleSchemaIsLoading);
    const trainingScheduleSchemaError = useSelector(getTrainingScheduleSchemaError);

    useEffect(() => {
        if (trainingScheduleYearFrom) {
            dispatch(fetchTrainingScheduleDetail(trainingScheduleYearFrom));
            dispatch(fetchWorkingCurriculumSymbols());
            dispatch(fetchTrainingScheduleSchema(trainingScheduleYearFrom));
        }
    }, [dispatch, trainingScheduleYearFrom]);

    useEffect(() => {
        if (trainingScheduleDetailData && !trainingScheduleDetailIsLoading) {
            dispatch(trainingScheduleDetailActions.parseData());
        }
    }, [dispatch, trainingScheduleDetailData, trainingScheduleDetailIsLoading]);

    let table;

    if (trainingScheduleDetailIsLoading
        || trainingScheduleSchemaIsLoading
        || trainingScheduleIsLoading
        || !trainingScheduleDetailDataParsed?.length
    ) {
        table = (
            <Skeleton height={600} width="100%" />
        );
    } else if (trainingScheduleDetailError
        || trainingScheduleError
        || trainingScheduleSchemaError) {
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
            <>
                <div className={cls.table}>
                    <div className={cls.tableRow}>
                        <div className={classNames(cls.tableAsideName, {}, [cls.tableCell])}>
                            <Text
                                size={TextSize.M}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Группы
                            </Text>
                        </div>
                        <div className={cls.tableMonths}>
                            {
                                trainingScheduleSchema?.byMonths.map((month) => (
                                    <div
                                        className={classNames(
                                            cls.tableMonth,
                                            { [cls.tableMonthEmpty]: month.doubleMonth },
                                            [],
                                        )}
                                    >
                                        {
                                            !month.doubleMonth
                                                ? (
                                                    <Text
                                                        size={TextSize.XM}
                                                        weight={TextWeight.SEMIBOLD}
                                                        className={classNames(cls.tableMonthName, {}, [cls.tableCell])}
                                                    >
                                                        {month.monthsNamesRu}
                                                    </Text>
                                                )
                                                : (
                                                    <div className={classNames(cls.tableMonthName, {}, [cls.tableCell])} />
                                                )
                                        }
                                        {
                                            !month.doubleMonth
                                                ? (
                                                    <div className={cls.tableMonthDates}>
                                                        {month.weeks.map((week) => (
                                                            <div
                                                                className={classNames(cls.tableMonthDate, {}, [cls.tableCell])}
                                                            >
                                                                <Text>{week.startDay}</Text>
                                                                <Text>{week.endDay}</Text>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )
                                                : (
                                                    <div className={classNames(cls.tableMonthDate, {}, [cls.tableCell])}>
                                                        <Text>{month.weeks[0].startDay}</Text>
                                                        <Text>{month.weeks[0].endDay}</Text>
                                                    </div>
                                                )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={cls.tableRow}>
                        <div className={classNames(cls.tableAsideName, {}, [cls.tableCell])}>
                            <Text
                                size={TextSize.M}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Недели
                            </Text>
                        </div>
                        <div className={cls.tableWeeks}>
                            {
                                trainingScheduleSchema?.byWeeks.map((week) => (
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                        key={week.index}
                                        className={classNames(cls.tableWeek, {}, [cls.tableCell])}
                                    >
                                        {week.index}
                                    </Text>
                                ))
                            }
                        </div>
                    </div>
                    {
                        trainingScheduleDetailDataParsed?.map((row, index) => (
                            <div
                                className={cls.tableRow}
                                key={index}
                            >
                                <div
                                    className={classNames(
                                        cls.tableAsideName,
                                        {},
                                        [cls.tableCell, cls.tableCourseName],
                                    )}
                                >
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        {row.groups.length > 1 && row.groups.reduce((prev, next) => (
                                            `${prev}${String(next.course) + next.serial_number},`
                                        ), `${String(row.groups[0].enrollment_year).slice(2, 4) + row.groups[0].short_name}-`).slice(0, -1)}
                                        {row.groups.length === 1 && row.groups[0].code}
                                    </Text>
                                </div>
                                <div className={cls.tableCourseInfoWrapper}>
                                    <TrainingScheduleDetailTableCell
                                        trainingSchedule={row.trainingSchedule}
                                        className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={cls.symbolsInfo}>
                    {
                        trainingScheduleSymbols?.map((symbol) => (
                            <div
                                className={cls.symbolInfo}
                                key={symbol.symbol_code}
                            >
                                <div className={cls.symbolBox}>
                                    <span
                                        style={{ backgroundColor: `${symbol.symbol_hex_color}` }}
                                    >
                                        {
                                            symbol.displayed_symbol
                                        }
                                    </span>
                                </div>
                                <Text
                                    className={cls.symbolText}
                                >
                                    {symbol.name}
                                </Text>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }

    return (
        <div className={classNames(cls.TrainingScheduleDetailTable, {}, [className])}>
            <Text
                size={TextSize.M}
                theme={TextTheme.PRIMARY}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
                className={cls.title}
            >
                График учебного процесса на
                {' '}
                {trainingScheduleYearFrom}
                -
                {Number(trainingScheduleYearFrom) + 1}
                {' '}
                учебный год
            </Text>

            <div className={cls.content}>
                {table}
            </div>
        </div>
    );
});
