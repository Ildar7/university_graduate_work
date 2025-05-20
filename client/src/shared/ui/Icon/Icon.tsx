import React, { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconNames {
    HELP_CIRCLE = 'help_circle',
    REFRESH = 'refresh',
    BAR_CHART = 'bar_chart'
}

interface IconProps {
    className?: string;
    Svg?: React.VFC<React.SVGProps<SVGSVGElement>>;
    name?: IconNames;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        name,
    } = props;

    if (name) {
        return (
            <i className={classNames(cls.IconWithName, {}, [className, cls[name]])} style={{ lineHeight: 1 }} />
        );
    }

    if (Svg) {
        return (
            <Svg className={classNames(cls.Icon, {}, [className])} />
        );
    }

    return (
        <></>
    );
});
