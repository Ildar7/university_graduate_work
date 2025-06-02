import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { paginationLimits } from 'shared/const/pagination';
import { StudentsError, StudentsType } from 'entities/Students';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { EnrollmentTypesError, EnrollmentTypesType } from 'entities/EnrollmentTypes';
import { EduLanguagesError, EduLanguagesType } from 'entities/EduLanguages';
import { FinishedEduTypesError, FinishedEduTypesType } from 'entities/FinishedEduTypes';
import { StudyDirectionsError, StudyDirectionsType } from 'entities/StudyDirections';
import { QualificationsError, QualificationsType } from 'entities/Qualifications';
import { EduFormsError, EduFormsType } from 'entities/EduForms';
import { ResidenceTypesError, ResidenceTypesType } from 'entities/ResidenceTypes';
import { SpecialtiesError, SpecialtiesType } from 'entities/Specialties';
import { FinSourcesError, FinSourcesType } from 'entities/FinSources';
import { ArrivalSourcesError, ArrivalSourcesType } from 'entities/ArrivalSources';
import { Select } from 'shared/ui/Select/Select';
import cls from './LimitShow.module.scss';

interface PaginationData {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
interface LimitShowProps {
    className?: string;
    data:
        StudentsType[]
        | EnrollmentTypesType[]
        | EduLanguagesType[]
        | FinishedEduTypesType[]
        | StudyDirectionsType[]
        | QualificationsType[]
        | EduFormsType[]
        | ResidenceTypesType[]
        | SpecialtiesType[]
        | FinSourcesType[]
        | ArrivalSourcesType[]
    ;
    onChange: (value: string) => void;
    itemsLimit: string;
    paginationData?: PaginationData | null;
    withRecords?: boolean;
    isLoading: boolean;
    error?:
        StudentsError
        | EnrollmentTypesError
        | EduLanguagesError
        | FinishedEduTypesError
        | StudyDirectionsError
        | QualificationsError
        | EduFormsError
        | ResidenceTypesError
        | SpecialtiesError
        | FinSourcesError
        | ArrivalSourcesError
    ;
    onChangePage: (value: string) => void;
}
export const LimitShow = memo((props: LimitShowProps) => {
    const {
        className,
        onChange,
        itemsLimit,
        withRecords,
        paginationData,
        isLoading,
        error,
        data,
        onChangePage,
    } = props;

    const onChangeLimit = (value: string) => {
        onChange(value);
        onChangePage('1');
    };

    const firstRecord = paginationData?.current_page ? ((paginationData.current_page - 1) * Number(itemsLimit) + 1) : 0;
    const lastRecord = paginationData?.current_page ? (paginationData.current_page * Number(itemsLimit)) : 0;

    let content;

    if (isLoading) {
        content = (
            <Skeleton width="100%" height={40} border="6px" className={cls.skeleton} />
        );
    } else if (error) {
        content = (
            <div />
        );
    } else {
        content = (
            !data.length ? (
                <div />
            ) : (
                <div className={classNames(cls.LimitShow, {}, [className])}>
                    {withRecords && firstRecord && lastRecord && (
                        <Text
                            theme={TextTheme.LIGHT}
                            className={cls.recordsText}
                        >
                            Записи
                            {' '}
                            {firstRecord}
                            {' '}
                            -
                            {' '}
                            {lastRecord}
                            {' '}
                            | Всего
                            {' '}
                            {paginationData?.total_records}
                        </Text>
                    )}
                    <div className={cls.limitSelectWrapper}>
                        <Text
                            theme={TextTheme.LIGHT}
                            className={cls.textResults}
                        >
                            Результатов на странице
                        </Text>
                        <Select
                            items={paginationLimits}
                            value={itemsLimit}
                            onChange={onChangeLimit}
                        />
                    </div>
                </div>
            )
        );
    }

    return content;
});
