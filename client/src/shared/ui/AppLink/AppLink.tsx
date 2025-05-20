import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    ACTIVE = 'active',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    disabled?: boolean;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    if (!to) {
        return (
            <div
                className={classNames(cls.AppLink, mods, [className, cls[theme]])}
            >
                {children}
            </div>
        );
    }

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
