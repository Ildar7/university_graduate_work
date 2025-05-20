import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import ExitIcon from 'shared/assets/icons/exit.svg';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { getRouteTrainingSchedule } from 'shared/const/router';
import cls from './TrainingScheduleDetail.module.scss';
import {
    TrainingScheduleDetailTable,
} from '../TrainingScheduleDetailTable/TrainingScheduleDetailTable/TrainingScheduleDetailTable';

interface TrainingScheduleDetailProps {
    className?: string;
}

export const TrainingScheduleDetail = memo((props: TrainingScheduleDetailProps) => {
    const {
        className,
    } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [trainingScheduleYearFrom, setTrainingScheduleYearFrom] = useState('');

    const onExitHandler = useCallback(() => {
        navigate(getRouteTrainingSchedule());
    }, [navigate]);

    useEffect(() => {
        setTrainingScheduleYearFrom(pathname.split('/')[pathname.split('/').length - 1]);
    }, [pathname]);

    return (
        <div className={classNames(cls.TrainingScheduleDetail, {}, [className])}>
            <div className={cls.content}>
                <TrainingScheduleDetailTable
                    trainingScheduleYearFrom={trainingScheduleYearFrom}
                />
            </div>

            <div className={cls.buttons}>
                <div className={cls.buttonsLeftWrapper}>
                    <Button
                        className={cls.btn}
                        theme={ButtonTheme.BACKGROUND_GRAY}
                        size={ButtonSize.XS}
                        onClick={onExitHandler}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Выйти
                        </Text>
                        <Icon className={cls.exitBtnIcon} Svg={ExitIcon} />
                    </Button>
                </div>
            </div>
        </div>
    );
});
