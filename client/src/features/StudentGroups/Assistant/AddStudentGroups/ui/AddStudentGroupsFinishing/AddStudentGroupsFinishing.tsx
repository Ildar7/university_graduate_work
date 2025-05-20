import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteAddAssistantStudentGroups, getRouteStudentGroups } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';
import { CSpinner } from '@coreui/react';
import cls from './AddStudentGroupsFinishing.module.scss';
import {
    getAddStudentGroupsBatchedData,
    getAddStudentGroupsBatchedError,
    getAddStudentGroupsBatchedIsLoading,
} from '../../model/selectors/getAddStudentGroupsBatched/getAddStudentGroupsBatched';

interface AddStudentGroupsFinishingProps {
    className?: string;
}

function getGroupWord(count: number): string {
    const lastDigit = count % 10;
    if (count === 1) {
        return 'группа';
    } if (lastDigit >= 2 && lastDigit <= 4 && (count < 10 || count >= 20)) {
        return 'группы';
    }
    return 'групп';
}

function getEducationalWord(count: number): string {
    const lastDigit = count % 10;
    if (count === 1) {
        return 'учебная';
    } if (lastDigit >= 2 && lastDigit <= 4 && (count < 10 || count >= 20)) {
        return 'учебные';
    }
    return 'учебных';
}

function getCreatedWord(count: number): string {
    if (count === 1) {
        return 'создана';
    }
    return 'создано';
}

export const AddStudentGroupsFinishing = (props: AddStudentGroupsFinishingProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();

    const batchedData = useSelector(getAddStudentGroupsBatchedData);
    const isLoadingBatched = useSelector(getAddStudentGroupsBatchedIsLoading);
    const errorBatched = useSelector(getAddStudentGroupsBatchedError);

    const goToStudentGroupsPage = useCallback(() => {
        navigate(getRouteStudentGroups());
    }, [navigate]);

    const goToFirstStep = useCallback(() => {
        window.location.replace(getRouteAddAssistantStudentGroups());
    }, []);

    if (isLoadingBatched) {
        return (
            <div className={classNames(cls.AddStudentGroupsProcessing, {}, [className])}>
                <CSpinner
                    color="primary"
                    className={cls.spinner}
                />
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Создание групп…
                </Text>
            </div>
        );
    }

    let content;

    if (errorBatched) {
        content = (
            <>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Во время создания групп произошла ошибка
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
                    Успешно
                    {' '}
                    {getCreatedWord(batchedData!.count)}
                    {' '}
                    {batchedData!.count}
                    {' '}
                    {getEducationalWord(batchedData!.count)}
                    {' '}
                    {getGroupWord(batchedData!.count)}
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
        <div className={classNames(cls.AddStudentGroupsFinishing, {}, [className])}>
            {content}
        </div>
    );
};
