import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { CPagination, CPaginationItem } from '@coreui/react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { StudentsError, StudentsType } from 'entities/Students';
import React, { memo } from 'react';
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
import { Icon } from 'shared/ui/Icon/Icon';
import NextPageIcon from 'shared/assets/icons/pagination-next.svg';
import LastPageIcon from 'shared/assets/icons/pagination-last.svg';
import cls from './Pagintaion.module.scss';

interface PaginationData {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
interface PagintaionProps {
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
    paginationData?: PaginationData | null;
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
    onChange: (value: string) => void;
    itemsPage: string;
}
export const Pagintaion = memo((props: PagintaionProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        paginationData,
        onChange,
        itemsPage,
    } = props;

    let paginationContent;

    if (isLoading) {
        paginationContent = (
            <Skeleton width={250} height={40} border="6px" className={cls.skeleton} />
        );
    } else if (error) {
        paginationContent = (
            <div />
        );
    } else {
        paginationContent = (
            data.length === 0 ? (
                <div />
            ) : (
                <div className={classNames(cls.Pagintaion, {}, [className])}>
                    <CPagination aria-label="TrainingSchedule pagination" align="end">
                        {paginationData?.prev_page && (
                            <>
                                <CPaginationItem
                                    onClick={() => { onChange('1'); }}
                                    className={classNames(cls.paginationItem, {}, [cls.arrowBtn])}
                                >
                                    <Icon className={cls.firstPageIcon} Svg={LastPageIcon} />
                                </CPaginationItem>
                                <CPaginationItem
                                    onClick={() => { onChange(`${+itemsPage - 1}`); }}
                                    className={classNames(cls.paginationItem, {}, [cls.arrowBtn])}
                                >
                                    <Icon className={cls.prevPageIcon} Svg={NextPageIcon} />
                                </CPaginationItem>
                            </>
                        )}
                        {
                            paginationData?.total_pages
                                ? (
                                    <>
                                        {paginationData.total_pages <= 7 && (
                                            [...Array(paginationData.total_pages)].map((_, index) => (
                                                <CPaginationItem
                                                    className={classNames(cls.paginationItem, {}, [cls.pageChangeItem])}
                                                    active={+itemsPage === (index + 1)}
                                                    onClick={() => { onChange(`${index + 1}`); }}
                                                    key={
                                                        // eslint-disable-next-line
                                                        index
                                                    }
                                                >
                                                    {index + 1}
                                                </CPaginationItem>
                                            ))
                                        )}

                                        {paginationData.total_pages > 7 && (
                                            <>
                                                {
                                                    // eslint-disable-next-line array-callback-return,consistent-return
                                                    [...Array(paginationData.total_pages)].map((_, index) => {
                                                        if (
                                                            (+itemsPage === index + 1
                                                                || +itemsPage + 1 === index + 1
                                                                || +itemsPage + 2 === index + 1)
                                                            && (
                                                                +itemsPage !== paginationData!.total_pages
                                                                && index + 1 !== paginationData!.total_pages
                                                                && index + 2 !== paginationData!.total_pages
                                                                && index + 3 !== paginationData!.total_pages
                                                            )
                                                        ) {
                                                            return (
                                                                <CPaginationItem
                                                                    className={classNames(cls.paginationItem, {}, [cls.pageChangeItem])}
                                                                    active={+itemsPage === (index + 1)}
                                                                    onClick={() => { onChange(`${index + 1}`); }}
                                                                    key={
                                                                        // eslint-disable-next-line
                                                                        index
                                                                    }
                                                                >
                                                                    {index + 1}
                                                                </CPaginationItem>
                                                            );
                                                        }
                                                    })
                                                }
                                                {
                                                    (
                                                        (paginationData!.total_pages === +itemsPage
                                                            || paginationData!.total_pages - 1 === +itemsPage
                                                            || paginationData!.total_pages - 2 === +itemsPage)
                                                        || paginationData!.total_pages - 2 - +itemsPage === 3
                                                        || paginationData!.total_pages - 2 - +itemsPage === 2
                                                        || paginationData!.total_pages - 2 - +itemsPage === 1
                                                    )
                                                        ? (
                                                            ''
                                                        )
                                                        : (
                                                            <CPaginationItem
                                                                className={classNames(cls.paginationItem, {}, [cls.pageChangeItem, cls.pageManyDotsBtn])}
                                                                onClick={() => { onChange(`${+itemsPage + 1}`); }}
                                                            >
                                                                ...
                                                            </CPaginationItem>
                                                        )
                                                }
                                                {
                                                    // eslint-disable-next-line array-callback-return,consistent-return
                                                    [...Array(paginationData.total_pages)].map((_, index) => {
                                                        if (
                                                            paginationData!.total_pages - index + 1 === 4
                                                            || paginationData!.total_pages - index + 1 === 3
                                                            || paginationData!.total_pages - index + 1 === 2
                                                            || paginationData!.total_pages - index + 1 === 1
                                                        ) {
                                                            return (
                                                                <CPaginationItem
                                                                    className={classNames(cls.paginationItem, {}, [cls.pageChangeItem])}
                                                                    active={+itemsPage === (index + 1)}
                                                                    onClick={() => { onChange(`${index + 1}`); }}
                                                                    key={index}
                                                                >
                                                                    {index + 1}
                                                                </CPaginationItem>
                                                            );
                                                        }
                                                    })
                                                }
                                            </>
                                        )}
                                    </>
                                )
                                : <div />
                        }

                        {paginationData?.next_page && (
                            <>
                                <CPaginationItem
                                    onClick={() => { onChange(`${+itemsPage + 1}`); }}
                                    className={classNames(cls.paginationItem, {}, [cls.arrowBtn])}
                                >
                                    <Icon Svg={NextPageIcon} />
                                </CPaginationItem>
                                <CPaginationItem
                                    onClick={() => { onChange(`${paginationData?.total_pages}`); }}
                                    className={classNames(cls.paginationItem, {}, [cls.arrowBtn])}
                                >
                                    <Icon Svg={LastPageIcon} />
                                </CPaginationItem>
                            </>
                        )}
                    </CPagination>
                </div>
            )
        );
    }

    return paginationContent;
});
