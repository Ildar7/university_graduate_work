import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useCallback, useEffect } from 'react';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './AutoDistributionStudentsGroupsProcess.module.scss';
import {
    fetchAutoDistributionStudentGroupsGeneratedDistribution,
} from '../../model/services/fetchAutoDistributionStudentGroupsGeneratedDistribution/fetchAutoDistributionStudentGroupsGeneratedDistribution';
import {
    getAutoDistributionStudentGroupsGeneratedDistributionData,
    getAutoDistributionStudentGroupsGeneratedDistributionError,
    getAutoDistributionStudentGroupsGeneratedDistributionIsLoading,
} from '../../model/selectors/getAutoDistributionStudentGroupsGeneratedDistributon/getAutoDistributionStudentGroupsGeneratedDistributon';
import {
    massLinkStudentsToGroups,
} from '../../model/services/massLinkStudentsToGroups/massLinkStudentsToGroups';

interface AutoDistributionStudentsGroupsProcessProps {
    className?: string;
    changeActiveTab: (value: number) => void;
    returnToStudentGroupsPage: () => void;
}

export const AutoDistributionStudentsGroupsProcess = memo((props: AutoDistributionStudentsGroupsProcessProps) => {
    const {
        className,
        changeActiveTab,
        returnToStudentGroupsPage,
    } = props;
    const dispatch = useAppDispatch();

    const groups = useSelector(getAutoDistributionStudentGroupsGeneratedDistributionData);
    const isLoadingGroups = useSelector(getAutoDistributionStudentGroupsGeneratedDistributionIsLoading);
    const errorGroups = useSelector(getAutoDistributionStudentGroupsGeneratedDistributionError);

    const onNextHandler = useCallback(() => {
        changeActiveTab(3);
        dispatch(massLinkStudentsToGroups());
    }, [changeActiveTab, dispatch]);

    useEffect(() => {
        dispatch(fetchAutoDistributionStudentGroupsGeneratedDistribution());
    }, [dispatch]);

    let content;

    if (isLoadingGroups) {
        content = (
            <Skeleton height={500} width="100%" />
        );
    } else if (errorGroups) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            groups?.groups.length
                ? (
                    <div className={cls.groups}>
                        {groups?.groups.map((group) => (
                            <div
                                className={cls.group}
                                key={group.id_group}
                            >
                                <Text
                                    size={TextSize.M}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Группа
                                    {' '}
                                    "
                                    {group.name}
                                    "
                                </Text>
                                <div className={cls.students}>
                                    {group.students.map((student, index) => {
                                        const fio = `${student.user.last_name} ${student.user.first_name} ${student.user.patronymic || ''}`;

                                        return (
                                            <div
                                                className={cls.student}
                                                key={student.students_id}
                                            >
                                                <Text
                                                    weight={TextWeight.MEDIUM}
                                                    size={TextSize.XM}
                                                >
                                                    {index + 1}
                                                    )
                                                    {' '}
                                                    {fio}
                                                </Text>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        {(groups?.studentsWithoutGroupsCount || 0) > 0 && (
                            <div className={cls.group}>
                                <Text
                                    size={TextSize.M}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Студенты без группы
                                </Text>
                                <div className={cls.students}>
                                    <div className={cls.student}>
                                        <Text
                                            weight={TextWeight.MEDIUM}
                                            size={TextSize.XM}
                                        >
                                            Количество студентов без группы:
                                            {' '}
                                            {groups?.studentsWithoutGroupsCount}
                                            {' '}
                                            чел.
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )
                : (
                    <Text
                        size={TextSize.L}
                        weight={TextWeight.SEMIBOLD}
                        align={TextAlign.CENTER}
                    >
                        Отсутствует распределение студентов по группам
                    </Text>
                )
        );
    }

    return (
        <>
            <div className={classNames(cls.AutoDistributionStudentsGroupsProcess, {}, [className])}>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Распределение студентов по группам
                </Text>
                <Text
                    size={TextSize.XM}
                    weight={TextWeight.MEDIUM}
                    className={cls.descr}
                >
                    Ниже перечислены группы и студенты, которые будут
                    привязаны к этим группам. Внимательно проверьте
                    правильность распределения студентов по группам,
                    если всё верно - переходите на следующий шаг.
                </Text>

                {content}
            </div>

            <div className={cls.settings}>
                <Button
                    theme={ButtonTheme.ERROR}
                    className={cls.backBtn}
                    onClick={returnToStudentGroupsPage}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Отмена
                    </Text>
                </Button>
                <Button
                    className={cls.nextBtn}
                    onClick={onNextHandler}
                    disabled={isLoadingGroups || !!errorGroups || !groups?.groups.length}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Далее
                    </Text>
                </Button>
            </div>
        </>

    );
});
