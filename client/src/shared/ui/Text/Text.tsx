import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { ReactNode } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    ERROR = 'error',
    LIGHT = 'light',
    BG_LIGHT = 'bg_light',
    BG_RED = 'bg_red',
    BG_GREEN = 'bg_green',
    BG_ORANGE = 'bg_orange',
    BG_BLUE = 'bg_blue',
    BG_BLUE_ORANGE = 'bg_blue_orange',
    RED_UNDERLINE = 'red_underline',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    XXS = 'xxs',
    XS = 'xs',
    S = 's',
    XM = 'xm',
    M = 'm',
    L = 'l',
    XL = 'xl',
    XXL = 'xxl',
}

export enum TextWeight {
    REGULAR = 'regular',
    MEDIUM = 'medium',
    SEMIBOLD = 'semibold',
    BOLD = 'bold',
    EXTRABOLD = 'extrabold'
}
interface TextProps {
    children?: ReactNode;
    className?: string;
    theme?: TextTheme;
    size?: TextSize;
    weight?: TextWeight;
    align?: TextAlign;
}
export const Text = (props: TextProps) => {
    const {
        children,
        className,
        theme = TextTheme.DEFAULT,
        weight = TextWeight.REGULAR,
        size = TextSize.S,
        align = TextAlign.LEFT,
    } = props;

    if (theme === TextTheme.ERROR) {
        return (
            <div className={classNames(
                cls.Text,
                {},
                [className, cls[theme], cls[size], cls[weight], cls[align]],
            )}
            >
                {children}
            </div>
        );
    }
    return (
        <div className={classNames(
            cls.Text,
            {},
            [className, cls[theme], cls[size], cls[weight], cls[align]],
        )}
        >
            {children}
        </div>

    );
};
