import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { CPagination, CPaginationItem } from '@coreui/react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { StudentsError, StudentsType } from 'entities/Students';
import React, { memo } from 'react';
import { EnrollmentTypesError, EnrollmentTypesType } from 'entities/EnrollmentTypes';
import { CitizenshipError, CitizenshipType } from 'entities/Citizenship';
import { NationalitiesError, NationalitiesType } from 'entities/Nationalities';
import { EduLanguagesError, EduLanguagesType } from 'entities/EduLanguages';
import { FinishedEduTypesError, FinishedEduTypesType } from 'entities/FinishedEduTypes';
import { EduCoursesError, EduCoursesType } from 'entities/EduCourses';
import { StudyDirectionsError, StudyDirectionsType } from 'entities/StudyDirections';
import { StudyDurationsError, StudyDurationsType } from 'entities/StudyDurations';
import { QualificationsError, QualificationsType } from 'entities/Qualifications';
import { EduFormsError, EduFormsType } from 'entities/EduForms';
import { ResidenceTypesError, ResidenceTypesType } from 'entities/ResidenceTypes';
import { SpecialtiesError, SpecialtiesType } from 'entities/Specialties';
import { FinSourcesError, FinSourcesType } from 'entities/FinSources';
import { ArrivalSourcesError, ArrivalSourcesType } from 'entities/ArrivalSources';
import { PracticeTypesError, PracticeTypesType } from 'entities/PracticeTypes';
import { EventsTypesError, EventsTypesType } from 'entities/EventsTypes';
import { StudentSectionsError, StudentSectionsType } from 'entities/StudentSections';
import { PerformanceTypesError, PerformanceTypesType } from 'entities/PerformanceTypes';
import { StudentClubsError, StudentClubsType } from 'entities/StudentClubs';
import { Icon } from 'shared/ui/Icon/Icon';
import NextPageIcon from 'shared/assets/icons/pagination-next.svg';
import LastPageIcon from 'shared/assets/icons/pagination-last.svg';
import { EmployeesError, EmployeesType } from 'entities/Employees';
import { EmployeeCategoriesError, EmployeeCategoriesType } from 'entities/EmployeeCategories';
import { EmployeePositionsError, EmployeePositionsType } from 'entities/EmployeePositions';
import { EmployeeEducationsError, EmployeeEducationsType } from 'entities/EmployeeEducations';
import { WorkingCurriculumError, WorkingCurriculumType } from 'entities/WorkingCurriculum';
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
        | CitizenshipType[]
        | NationalitiesType[]
        | EduLanguagesType[]
        | FinishedEduTypesType[]
        | EduCoursesType[]
        | StudyDirectionsType[]
        | StudyDurationsType[]
        | QualificationsType[]
        | EduFormsType[]
        | ResidenceTypesType[]
        | SpecialtiesType[]
        | FinSourcesType[]
        | ArrivalSourcesType[]
        | PracticeTypesType[]
        | EventsTypesType[]
        | StudentSectionsType[]
        | PerformanceTypesType[]
        | StudentClubsType[]
        | EmployeesType[]
        | EmployeeCategoriesType[]
        | EmployeePositionsType[]
        | EmployeeEducationsType[]
        | WorkingCurriculumType[]
    ;
    paginationData?: PaginationData | null;
    isLoading: boolean;
    error?:
        StudentsError
        | EnrollmentTypesError
        | CitizenshipError
        | NationalitiesError
        | EduLanguagesError
        | FinishedEduTypesError
        | EduCoursesError
        | StudyDirectionsError
        | StudyDurationsError
        | QualificationsError
        | EduFormsError
        | ResidenceTypesError
        | SpecialtiesError
        | FinSourcesError
        | ArrivalSourcesError
        | PracticeTypesError
        | EventsTypesError
        | StudentSectionsError
        | PerformanceTypesError
        | StudentClubsError
        | EmployeesError
        | EmployeeCategoriesError
        | EmployeePositionsError
        | EmployeeEducationsError
        | WorkingCurriculumError
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
