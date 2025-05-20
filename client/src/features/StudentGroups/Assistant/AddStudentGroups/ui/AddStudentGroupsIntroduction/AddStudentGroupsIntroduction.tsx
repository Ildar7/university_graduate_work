import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import cls from './AddStudentGroupsIntroduction.module.scss';

interface AddStudentGroupsIntroductionProps {
    className?: string;
    changeActiveTab: (value: number) => void;
}

export const AddStudentGroupsIntroduction = memo((props: AddStudentGroupsIntroductionProps) => {
    const {
        className,
        changeActiveTab,
    } = props;

    return (
        <div className={classNames(cls.AddStudentGroupsIntroduction, {}, [className])}>
            <Text
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
            >
                Вы находитесь на странице автоматического создания учебных групп студентов.
                В рамках данной задачи, "Ассистент" постарается автоматически создать
                учебные группы студентов на основе анализа списка всех студентов в системе.
            </Text>
            <Text
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                align={TextAlign.CENTER}
            >
                Учитывайте, что ассистент может допускать ошибки при анализе студентов,
                поэтому перед массовым созданием групп студентов - внимательно
                проверьте предлагаемый ассистентом результат, перед его одобрением.
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
