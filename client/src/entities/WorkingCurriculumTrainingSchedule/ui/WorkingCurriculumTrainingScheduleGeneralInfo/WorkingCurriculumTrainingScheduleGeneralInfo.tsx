import React, {
    memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchWorkingCurriculumDetail,
    getWorkingCurriculumDetailData,
    getWorkingCurriculumDetailError,
    getWorkingCurriculumDetailIsLoading,
} from 'entities/WorkingCurriculumDetail';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    fetchStandardCurriculumDetail,
    getStandardCurriculumDetailData,
    getStandardCurriculumDetailError,
    getStandardCurriculumDetailIsLoading, StandardCurriculumDetailQualificationsType,
} from 'entities/StandardCurriculumDetail';
import { fetchTrainingScheduleSchema } from 'entities/TrainingScheduleSchema';
import cls from './WorkingCurriculumTrainingScheduleGeneralInfo.module.scss';

interface WorkingCurriculumTrainingScheduleGeneralInfoProps {
    className?: string;
    workingCurriculumId: string;
}

export const WorkingCurriculumTrainingScheduleGeneralInfo = memo((props: WorkingCurriculumTrainingScheduleGeneralInfoProps) => {
    const {
        className,
        workingCurriculumId,
    } = props;
    const dispatch = useAppDispatch();
    const [qualificationItems, setQualificationItems] = useState<StandardCurriculumDetailQualificationsType[]>([]);
    const [shownMore, setShownMore] = useState(false);

    const workingCurriculumDetailData = useSelector(getWorkingCurriculumDetailData);
    const workingCurriculumDetailIsLoading = useSelector(getWorkingCurriculumDetailIsLoading);
    const workingCurriculumDetailError = useSelector(getWorkingCurriculumDetailError);

    const standardCurriculumDetailData = useSelector(getStandardCurriculumDetailData);
    const standardCurriculumDetailIsLoading = useSelector(getStandardCurriculumDetailIsLoading);
    const standardCurriculumDetailError = useSelector(getStandardCurriculumDetailError);

    const showMoreOrLessHandler = useCallback(() => {
        setShownMore((prevState) => !prevState);
    }, []);

    useEffect(() => {
        if (workingCurriculumId) {
            dispatch(fetchWorkingCurriculumDetail(workingCurriculumId));
        }
    }, [dispatch, workingCurriculumId]);

    useEffect(() => {
        if (workingCurriculumDetailData && !workingCurriculumDetailIsLoading) {
            dispatch(fetchStandardCurriculumDetail(
                String(workingCurriculumDetailData.standard_curricula.standard_curriculum_id),
            ));
            dispatch(fetchTrainingScheduleSchema(
                String(workingCurriculumDetailData.academic_year_from),
            ));
        }
    }, [dispatch, workingCurriculumDetailData, workingCurriculumDetailIsLoading]);

    useEffect(() => {
        if (standardCurriculumDetailData) {
            if (shownMore) {
                setQualificationItems(standardCurriculumDetailData.qualifications);
            } else {
                setQualificationItems(standardCurriculumDetailData.qualifications.slice(0, 1));
            }
        }
    }, [shownMore, standardCurriculumDetailData]);

    let content;

    if (workingCurriculumDetailIsLoading || standardCurriculumDetailIsLoading) {
        content = (
            <Skeleton width="100%" height={200} />
        );
    } else if (workingCurriculumDetailError || standardCurriculumDetailError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (

            <>
                <div className={classNames(cls.table, { }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                            >
                                <Text
                                    size={TextSize.XS}
                                >
                                    ID
                                </Text>
                            </div>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellTitle])}
                            >
                                <Text
                                    size={TextSize.XS}
                                >
                                    Название
                                </Text>
                            </div>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellSpecialty])}
                            >
                                <Text
                                    size={TextSize.XS}
                                >
                                    Специальность
                                </Text>
                            </div>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellQualification])}
                            >
                                <Text
                                    size={TextSize.XS}
                                >
                                    Квалификация
                                </Text>
                            </div>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellEducationBase])}
                            >
                                <Text
                                    size={TextSize.XS}
                                >
                                    База образования
                                </Text>
                            </div>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellEduForm])}
                            >
                                <Text
                                    size={TextSize.XS}
                                >
                                    Форма обучения
                                </Text>
                            </div>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellAcademYear])}
                            >
                                <Text
                                    size={TextSize.XS}
                                >
                                    Академический год
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            qualificationItems.length
                                ? qualificationItems.map((qualification) => (
                                    <div
                                        key={qualification.qualification_id}
                                        className={cls.tableRow}
                                    >
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {workingCurriculumDetailData?.working_curriculum_id}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellTitle])}
                                        >
                                            <Text
                                                size={TextSize.XXS}
                                            >
                                                {workingCurriculumDetailData?.title}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellSpecialty])}
                                        >
                                            <Text
                                                size={TextSize.XXS}
                                            >
                                                {workingCurriculumDetailData?.standard_curricula.specialty.shifr_spec}
                                                {' '}
                                                -
                                                {' '}
                                                {workingCurriculumDetailData?.standard_curricula.specialty.speciality}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellQualification])}
                                        >
                                            <Text
                                                size={TextSize.XXS}
                                            >
                                                {qualification.qualification.shifr_qual}
                                                {' '}
                                                -
                                                {' '}
                                                {qualification.qualification.qualification}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellEducationBase])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {workingCurriculumDetailData?.education_basis.short_name}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellEduForm])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {workingCurriculumDetailData?.is_full_time_education ? 'Очная' : 'Заочная'}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellAcademYear])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {workingCurriculumDetailData?.academic_year_from}
                                                {' '}
                                                -
                                                {' '}
                                                {workingCurriculumDetailData?.academic_year_to}
                                            </Text>
                                        </div>
                                    </div>
                                ))
                                : (
                                    <div className={cls.tableRow}>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {workingCurriculumDetailData?.working_curriculum_id}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellTitle])}
                                        >
                                            <Text
                                                size={TextSize.XXS}
                                            >
                                                {workingCurriculumDetailData?.title}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellSpecialty])}
                                        >
                                            <Text
                                                size={TextSize.XXS}
                                            >
                                                {workingCurriculumDetailData?.standard_curricula.specialty.shifr_spec}
                                                {' '}
                                                -
                                                {' '}
                                                {workingCurriculumDetailData?.standard_curricula.specialty.speciality}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellQualification])}
                                        />
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellEducationBase])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {workingCurriculumDetailData?.education_basis.short_name}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellEduForm])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {workingCurriculumDetailData?.is_full_time_education ? 'Очная' : 'Заочная'}
                                            </Text>
                                        </div>
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellAcademYear])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {workingCurriculumDetailData?.academic_year_from}
                                                {' '}
                                                -
                                                {' '}
                                                {workingCurriculumDetailData?.academic_year_to}
                                            </Text>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
                {
                    qualificationItems.length && standardCurriculumDetailData!.qualifications.length > 1
                        ? (
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.showMoreBtn}
                                onClick={showMoreOrLessHandler}
                            >
                                {shownMore ? 'Показать меньше информации' : 'Показать больше информации'}
                            </Button>
                        ) : ''
                }
            </>
        );
    }

    return (
        <div className={classNames(cls.WorkingCurriculumTrainingScheduleGeneralInfo, {}, [className])}>
            <Text
                size={TextSize.M}
                theme={TextTheme.PRIMARY}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
                className={cls.title}
            >
                Общая информация о РУП
            </Text>

            <div className={cls.content}>
                {content}
            </div>
        </div>
    );
});
