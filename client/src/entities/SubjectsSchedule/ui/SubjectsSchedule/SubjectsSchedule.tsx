import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAcademicYear } from 'shared/lib/helpers/getAcademicYear/getAcademicYear';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { SearchSelect, SearchSelectTheme } from 'shared/ui/SearchSelect/SearchSelect';
import { Icon } from 'shared/ui/Icon/Icon';
import PrinterIcon from 'shared/assets/icons/printer.svg';
import { Button } from 'shared/ui/Button/Button';
import ExportIcon from 'shared/assets/icons/export.svg';
import cls from './SubjectsSchedule.module.scss';
import {
    fetchSubjectsScheduleAvailableYears,
} from '../../model/services/fetchSubjectsScheduleAvailableYears/fetchSubjectsScheduleAvailableYears';
import { fetchSubjectsSchedule } from '../../model/services/fetchSubjectsSchedule/fetchSubjectsSchedule';
import {
    getSubjectsScheduleData,
    getSubjectsScheduleError,
    getSubjectsScheduleIsLoading,
} from '../../model/selectors/getSubjectsSchedule/getSubjectsSchedule';
import {
    getSubjectsScheduleAvailableYearsData,
    getSubjectsScheduleAvailableYearsError,
    getSubjectsScheduleAvailableYearsIsLoading,
} from '../../model/selectors/getSubjectsScheduleAvailableYears/getSubjectsScheduleAvailableYears';
import { SubjectsScheduleTable } from '../SubjectsScheduleTable/SubjectsScheduleTable';

interface SubjectsScheduleProps {
    className?: string;
}

export const SubjectsSchedule = memo((props: SubjectsScheduleProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [selectedYear, setSelectedYear] = useState(String(getAcademicYear()));

    const subjectScheduleIsLoading = useSelector(getSubjectsScheduleIsLoading);
    const subjectScheduleError = useSelector(getSubjectsScheduleError);

    const subjectScheduleAvailableYears = useSelector(getSubjectsScheduleAvailableYearsData);
    const subjectScheduleAvailableYearsIsLoading = useSelector(getSubjectsScheduleAvailableYearsIsLoading);
    const subjectScheduleAvailableYearsError = useSelector(getSubjectsScheduleAvailableYearsError);

    const changeSelectedYear = (year: string) => {
        setSelectedYear(year.split('-')[0]);
    };

    useEffect(() => {
        dispatch(fetchSubjectsScheduleAvailableYears());
        dispatch(fetchSubjectsSchedule(String(getAcademicYear())));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchSubjectsSchedule(selectedYear));
    }, [dispatch, selectedYear]);

    let selectContent;

    if (subjectScheduleAvailableYearsIsLoading) {
        selectContent = (
            <Skeleton width={450} height={60} border="5px" />
        );
    } else if (subjectScheduleAvailableYearsError) {
        selectContent = (
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
        selectContent = (
            <SearchSelect
                options={subjectScheduleAvailableYears?.map((year) => `${year}-${Number(year) + 1}`) || []}
                optionValue={`${selectedYear}-${Number(selectedYear) + 1}`}
                onClickOption={changeSelectedYear}
                columnName=""
                searchDisabled
                label="Академический год"
                theme={SearchSelectTheme.GRAY}
                className={cls.select}
                activeItemClassName={cls.selectItemActive}
            />
        );
    }

    let content;

    if (subjectScheduleIsLoading) {
        content = (
            <Skeleton className={cls.content} width="100%" height={500} border="5px" />
        );
    } else if (subjectScheduleError) {
        content = (
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
        content = (
            <>
                <div className={cls.content}>
                    <SubjectsScheduleTable />
                </div>
                <div className={cls.settings}>
                    <Button
                        className={cls.btn}
                        disabled
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Экспорт
                        </Text>
                        <Icon Svg={ExportIcon} />
                    </Button>
                    <Button
                        className={cls.btn}
                        disabled
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Печать
                        </Text>
                        <Icon Svg={PrinterIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <div className={classNames(cls.SubjectsSchedule, {}, [className])}>
            <div className={cls.selectYearWrapper}>
                {selectContent}
            </div>

            {content}
        </div>
    );
});
