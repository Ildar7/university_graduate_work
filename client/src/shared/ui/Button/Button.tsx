import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonForm {
    PARTIAL_BORDERED = 'partial_bordered',
    ALL_BORDERED = 'all_bordered',
    NOT_BORDERED = 'not_bordered',
}
export enum ButtonTheme {
    CLEAR = 'clear',
    BACKGROUND = 'background',
    BACKGROUND_DARK = 'background_dark',
    BACKGROUND_GRAY = 'background_gray',
    LIGHT = 'light',
    ERROR = 'error',
    OUTLINE = 'outline',
}

export enum ButtonSize {
    XXS = 'size_xxs',
    XS = 'size_xs',
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    buttonForm?: ButtonForm;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.BACKGROUND,
        square,
        disabled,
        size = ButtonSize.M,
        buttonForm = ButtonForm.PARTIAL_BORDERED,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[buttonForm]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
