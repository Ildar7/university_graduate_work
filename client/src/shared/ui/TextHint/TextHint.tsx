import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Icon, IconNames } from 'shared/ui/Icon/Icon';
import cls from './TextHint.module.scss';

interface TextHintProps {
    className?: string;
    children?: ReactNode;
    hint: string;
    size?: TextSize;
    theme?: TextTheme;
    weight?: TextWeight;
    align?: TextAlign;
}

export const TextHint = memo((props: TextHintProps) => {
    const {
        className,
        children,
        hint,
        size,
        theme,
        weight,
        align,
    } = props;

    return (
        <div className={classNames(cls.TextHint, {}, [className])}>
            <Text
                size={size}
                weight={weight}
                theme={theme}
                align={align}

            >
                {children}
            </Text>

            <div className={cls.hint}>
                <Icon name={IconNames.HELP_CIRCLE} className={cls.hintIcon} />

                <div className={cls.hintText}>{hint}</div>
            </div>
        </div>
    );
});
