import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { SearchSelect, SearchSelectTheme } from 'shared/ui/SearchSelect/SearchSelect';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import ScheduleIcon from 'shared/assets/icons/schedule.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchEduCourses, getEduCoursesData, getEduCoursesError, getEduCoursesIsLoading,
} from 'entities/EduCourses';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { tableSortActions } from 'features/TableSort';
import {
    fetchEduLanguages,
    getEduLanguagesData,
    getEduLanguagesError,
    getEduLanguagesIsLoading,
} from 'entities/EduLanguages';
import { subjectsScheduleDetailActions } from 'entities/SubjectsScheduleDetail';
import { useNavigate } from 'react-router-dom';
import { getRouteSubjectsScheduleWorkload } from 'shared/const/router';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './SubjectsScheduleDetailFilters.module.scss';

interface SubjectsScheduleDetailFiltersProps {
    className?: string;
    year: string;
    week: string;
}

const shfits = ['1', '2'];

export const SubjectsScheduleDetailFilters = memo((props: SubjectsScheduleDetailFiltersProps) => {
    const {
        className,
        year,
        week,
    } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [selectedEduCourses, setSelectedEduCourses] = useState<string[]>([]);
    const [selectedShifts, setSelectedShifts] = useState<string[]>([]);
    const [selectedEduLangs, setSelectedEduLangs] = useState<string[]>([]);

    const eduCourses = useSelector(getEduCoursesData);
    const isLoadingEduCourses = useSelector(getEduCoursesIsLoading);
    const errorEduCourses = useSelector(getEduCoursesError);

    const eduLangs = useSelector(getEduLanguagesData);
    const isLoadingEduLangs = useSelector(getEduLanguagesIsLoading);
    const errorEduLangs = useSelector(getEduLanguagesError);

    const onSelectEduCoursesFilter = useCallback((value: string, columnName: string) => {
        const foundItem = selectedEduCourses.filter((item) => item === value)[0];
        if (foundItem) {
            const filteredItems = selectedEduCourses.filter((item) => item !== value);
            setSelectedEduCourses(filteredItems);
        } else {
            setSelectedEduCourses((prevState) => [...prevState, value]);
        }
    }, [selectedEduCourses]);
    const onSelectShiftsFilter = useCallback((value: string, columnName: string) => {
        const foundItem = selectedShifts.filter((item) => item === value)[0];
        if (foundItem) {
            const filteredItems = selectedShifts.filter((item) => item !== value);
            setSelectedShifts(filteredItems);
        } else {
            setSelectedShifts((prevState) => [...prevState, value]);
        }
    }, [selectedShifts]);
    const onSelectEduLangsFilter = useCallback((value: string, columnName: string) => {
        const foundItem = selectedEduLangs.filter((item) => item === value)[0];
        if (foundItem) {
            const filteredItems = selectedEduLangs.filter((item) => item !== value);
            setSelectedEduLangs(filteredItems);
        } else {
            setSelectedEduLangs((prevState) => [...prevState, value]);
        }
    }, [selectedEduLangs]);

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_courseoftraining'));
        dispatch(fetchEduCourses());
        dispatch(tableSortActions.setSort('id_languageofedu'));
        dispatch(fetchEduLanguages());
    }, [dispatch]);

    useEffect(() => {
        if (selectedEduCourses.length) {
            const selectedEduCoursesIds: number[] = [];

            eduCourses!.data.forEach((course) => {
                selectedEduCourses.forEach((courseValue) => {
                    if (course.courseoftraining === courseValue) {
                        selectedEduCoursesIds.push(course.id_courseoftraining);
                    }
                });
            });

            dispatch(subjectsScheduleDetailActions.setFilter(['courses', selectedEduCoursesIds]));
        } else {
            dispatch(subjectsScheduleDetailActions.setFilter(['courses', []]));
        }
    }, [dispatch, eduCourses, selectedEduCourses]);
    useEffect(() => {
        if (selectedShifts.length) {
            dispatch(subjectsScheduleDetailActions.setFilter(['shifts', selectedShifts.map((shift) => +shift)]));
        } else {
            dispatch(subjectsScheduleDetailActions.setFilter(['shifts', []]));
        }
    }, [dispatch, selectedShifts]);
    useEffect(() => {
        if (selectedEduLangs.length) {
            const selectedEduLangsIds: number[] = [];

            eduLangs!.data.forEach((lang) => {
                selectedEduLangs.forEach((langValue) => {
                    if (lang.languageofedu === langValue) {
                        selectedEduLangsIds.push(lang.id_languageofedu);
                    }
                });
            });

            dispatch(subjectsScheduleDetailActions.setFilter(['eduLangs', selectedEduLangsIds]));
        } else {
            dispatch(subjectsScheduleDetailActions.setFilter(['eduLangs', []]));
        }
    }, [dispatch, eduLangs, selectedEduLangs]);

    return (
        <div className={classNames(cls.SubjectsScheduleDetailFilters, {}, [className])}>
            {
                isLoadingEduCourses
                    ? (<Skeleton className={cls.select} border="6px" />)
                    : (
                        <SearchSelect
                            label="Курс обучения"
                            options={eduCourses?.data.map((course) => course.courseoftraining) || []}
                            optionValue={selectedEduCourses}
                            onClickOption={onSelectEduCoursesFilter}
                            columnName=""
                            theme={SearchSelectTheme.GRAY}
                            className={cls.select}
                            activeItemClassName={cls.selectActiveItem}
                            multiSelect
                            searchDisabled
                            disabled={!!errorEduCourses}
                        />
                    )
            }
            <SearchSelect
                label="Смена"
                options={shfits}
                optionValue={selectedShifts}
                onClickOption={onSelectShiftsFilter}
                columnName=""
                theme={SearchSelectTheme.GRAY}
                className={cls.select}
                activeItemClassName={cls.selectActiveItem}
                multiSelect
                searchDisabled
            />
            {
                isLoadingEduLangs
                    ? (<Skeleton className={cls.select} border="6px" />)
                    : (
                        <SearchSelect
                            label="Язык обучения"
                            options={eduLangs?.data.map((lang) => lang.languageofedu) || []}
                            optionValue={selectedEduLangs}
                            onClickOption={onSelectEduLangsFilter}
                            columnName=""
                            theme={SearchSelectTheme.GRAY}
                            className={cls.select}
                            activeItemClassName={cls.selectActiveItem}
                            multiSelect
                            searchDisabled
                            disabled={!!errorEduLangs}
                        />
                    )
            }
            <AppLink to={getRouteSubjectsScheduleWorkload(year, week)} target="_blank">
                <Button
                    size={ButtonSize.XXS}
                    className={cls.btn}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Учебная нагрузка
                    </Text>
                    <ScheduleIcon />
                </Button>
            </AppLink>
        </div>
    );
});
