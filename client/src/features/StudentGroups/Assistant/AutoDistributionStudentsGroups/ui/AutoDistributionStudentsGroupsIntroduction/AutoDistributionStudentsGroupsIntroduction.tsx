import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import cls from './AutoDistributionStudentsGroupsIntroduction.module.scss';

interface AutoDistributionStudentsGroupsIntroductionProps {
    className?: string;
    changeActiveTab: (value: number) => void;
}

export const AutoDistributionStudentsGroupsIntroduction = memo((props: AutoDistributionStudentsGroupsIntroductionProps) => {
    const {
        className,
        changeActiveTab,
    } = props;

    return (
        <div className={classNames(cls.AutoDistributionStudentsGroupsIntroduction, {}, [className])}>
            <Text
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
            >
                В рамках данного процесса "Ассистент" распределяет
                известных системе студентов без группы - по уже существующим группам.
            </Text>
            <Text
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
            >
                Если для студента не была найдена подходящая группа - он останется без привязки к группе.
            </Text>
            <Button
                className={cls.nextBtn}
                size={ButtonSize.L}
                onClick={() => { changeActiveTab(2); }}
            >
                <Text
                    weight={TextWeight.SEMIBOLD}
                >
                    Далее
                </Text>
            </Button>
        </div>
    );
});
