import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './WorkingCurriculumTrainingScheduleSummaryData.module.scss';
import {
    getWorkingCurriculumTrainingScheduleEditData,
    getWorkingCurriculumTrainingScheduleError,
    getWorkingCurriculumTrainingScheduleIsLoading, getWorkingCurriculumTrainingScheduleSymbols,
} from '../../model/selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';
import { workingCurriculumTrainingScheduleActions } from '../../model/slice/workingCurriculumTrainingScheduleSlice';

interface WorkingCurriculumTrainingScheduleSummaryDataProps {
    className?: string;
}

export const WorkingCurriculumTrainingScheduleSummaryData = memo((props: WorkingCurriculumTrainingScheduleSummaryDataProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    const summaryEditData = useSelector(getWorkingCurriculumTrainingScheduleEditData)?.summary;
    const summarySymbolsNames = summaryEditData && Object.keys(summaryEditData.bySymbols);
    const summaryIsLoading = useSelector(getWorkingCurriculumTrainingScheduleIsLoading);
    const summaryError = useSelector(getWorkingCurriculumTrainingScheduleError);

    const symbolsData = useSelector(getWorkingCurriculumTrainingScheduleSymbols);

    useEffect(() => {
        if (summaryError && summaryError.status === 404 && symbolsData && !summaryIsLoading) {
            dispatch(workingCurriculumTrainingScheduleActions.initEditDataSummary());
        }
    }, [dispatch, summaryError, summaryIsLoading, symbolsData]);

    let table;

    if (summaryIsLoading || !summaryEditData) {
        table = (
            <Skeleton className={cls.table} height={300} width="100%" />
        );
    } else if (summaryError && summaryError.status !== 404) {
        table = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={classNames(cls.error, {}, [cls.table])}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        table = (
            <div className={cls.table}>
                <div className={cls.tableRow}>
                    <div className={classNames(cls.tableAsideName, {}, [cls.tableCell])}>
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Курс
                        </Text>
                    </div>
                    {
                        summarySymbolsNames?.map((name) => (
                            <div
                                key={name}
                                className={cls.tableSymbolInfo}
                            >
                                <Text
                                    className={classNames(cls.tableSymbolName, {}, [cls.tableCell])}
                                    size={TextSize.XXS}
                                    weight={TextWeight.SEMIBOLD}
                                    align={TextAlign.CENTER}
                                >
                                    {summaryEditData?.bySymbols[name].symbolName}
                                </Text>
                                <div className={cls.tableSymbolData}>
                                    <Text
                                        className={classNames(cls.tableSymbolDataName, {}, [cls.tableCell])}
                                        size={TextSize.XXS}
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                    >
                                        нед.
                                    </Text>
                                    <Text
                                        className={classNames(cls.tableSymbolDataName, {}, [cls.tableCell])}
                                        size={TextSize.XXS}
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                    >
                                        час.
                                    </Text>
                                    <Text
                                        className={classNames(cls.tableSymbolDataName, {}, [cls.tableCell])}
                                        size={TextSize.XXS}
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                    >
                                        кред.
                                    </Text>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    [...new Array(summaryEditData?.coursesCount)].map((_, index) => (
                        <div
                            className={cls.tableRow}
                            key={index}
                        >
                            <div
                                className={classNames(cls.tableAsideName, {}, [cls.tableCell, cls.tableCourseName])}
                                key={index}
                            >
                                <Text
                                    weight={TextWeight.SEMIBOLD}
                                    size={TextSize.XXS}
                                >
                                    {index + 1}
                                </Text>
                            </div>
                            {
                                summarySymbolsNames?.map((name) => {
                                    const symbol = summaryEditData?.bySymbols[name];

                                    return (
                                        <div key={name} className={cls.tableCourseInfoWrapper}>
                                            <div className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}>
                                                <Text
                                                    size={TextSize.XXS}
                                                >
                                                    {
                                                        // @ts-ignore
                                                        symbol?.courses[index + 1].weeks
                                                    }
                                                </Text>
                                            </div>
                                            <div className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}>
                                                <Text
                                                    size={TextSize.XXS}
                                                >
                                                    {
                                                        // @ts-ignore
                                                        symbol?.courses[index + 1].hours
                                                    }
                                                </Text>
                                            </div>
                                            <div className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}>
                                                <Text
                                                    size={TextSize.XXS}
                                                >
                                                    {
                                                        // @ts-ignore
                                                        symbol?.courses[index + 1].credits
                                                    }
                                                </Text>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    ))
                }
                <div className={cls.tableRow}>
                    <div
                        className={classNames(cls.tableAsideName, {}, [cls.tableCell, cls.tableCourseName])}
                    >
                        <Text
                            weight={TextWeight.SEMIBOLD}
                            size={TextSize.XXS}
                        >
                            Итого
                        </Text>
                    </div>
                    {
                        summarySymbolsNames?.map((name) => {
                            const symbol = summaryEditData?.bySymbols[name];

                            return (
                                <div key={name} className={cls.tableCourseInfoWrapper}>
                                    <div className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}>
                                        <Text
                                            size={TextSize.XXS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            {
                                                symbol?.total.weeks
                                            }
                                        </Text>
                                    </div>
                                    <div className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}>
                                        <Text
                                            size={TextSize.XXS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            {
                                                symbol?.total.hours
                                            }
                                        </Text>
                                    </div>
                                    <div className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}>
                                        <Text
                                            size={TextSize.XXS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            {
                                                symbol?.total.credits
                                            }
                                        </Text>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.WorkingCurriculumTrainingScheduleSummaryData, {}, [className])}>
            <Text
                size={TextSize.M}
                theme={TextTheme.PRIMARY}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
                className={cls.title}
            >
                Сводные данные
            </Text>

            {table}
        </div>
    );
});
