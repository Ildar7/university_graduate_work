import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteAssistantAutoDistributionStudentGroups, getRouteStudentGroups } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';
import { CSpinner } from '@coreui/react';
import { useSelector } from 'react-redux';
import cls from './AutoDistributionStudentGroupsFinishing.module.scss';
import {
    getAutoDistributionStudentGroupsMassLinkData,
    getAutoDistributionStudentGroupsMassLinkError,
    getAutoDistributionStudentGroupsMassLinkIsLoading,
} from '../../model/selectors/getAutoDistributionStudentGroupsMassLink/getAutoDistributionStudentGroupsMassLink';

interface AutoDistributionStudentGroupsFinishingProps {
    className?: string;
}

export const AutoDistributionStudentGroupsFinishing = (props: AutoDistributionStudentGroupsFinishingProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();

    const massLinkData = useSelector(getAutoDistributionStudentGroupsMassLinkData);
    const isLoadingMassLink = useSelector(getAutoDistributionStudentGroupsMassLinkIsLoading);
    const errorMassLink = useSelector(getAutoDistributionStudentGroupsMassLinkError);

    const goToStudentGroupsPage = useCallback(() => {
        navigate(getRouteStudentGroups());
    }, [navigate]);

    const goToFirstStep = useCallback(() => {
        window.location.replace(getRouteAssistantAutoDistributionStudentGroups());
    }, []);

    if (isLoadingMassLink) {
        return (
            <div className={classNames(cls.AutoDistributionStudentGroupsProcessing, {}, [className])}>
                <CSpinner
                    color="primary"
                    className={cls.spinner}
                />
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Идет распределение студентов по группам…
                </Text>
            </div>
        );
    }

    let content;

    if (errorMassLink) {
        content = (
            <>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    При распределении студентов произошла ошибка
                </Text>
                <div className={cls.buttons}>
                    <Button
                        onClick={goToFirstStep}
                    >
                        <Text
                            weight={TextWeight.SEMIBOLD}
                        >
                            Попробовать снова
                        </Text>
                    </Button>
                    <Button
                        onClick={goToStudentGroupsPage}
                        className={cls.button}
                    >
                        <Text
                            weight={TextWeight.SEMIBOLD}
                        >
                            Вернуться в таблицу групп
                        </Text>
                    </Button>
                </div>
            </>
        );
    } else {
        content = (
            <>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    По учебным группам распределено
                    {' '}
                    {massLinkData?.count}
                    {' '}
                    студентов
                </Text>
                <Button
                    onClick={goToStudentGroupsPage}
                    className={cls.button}
                >
                    <Text
                        weight={TextWeight.SEMIBOLD}
                    >
                        Открыть таблицу групп
                    </Text>
                </Button>
            </>
        );
    }

    return (
        <div className={classNames(cls.AutoDistributionStudentGroupsFinishing, {}, [className])}>
            {content}
        </div>
    );
};
