import { ForwardedRef, forwardRef, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Icon } from 'shared/ui/Icon/Icon';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './DatepickerInput.module.scss';

interface DatepickerInputProps {
    className?: string;
    value?: string;
    onClick?: () => void;
    placeholder?: string;
}

export const DatepickerInput = memo(forwardRef((props: DatepickerInputProps, ref: ForwardedRef<any>) => {
    const {
        className,
        value,
        onClick,
        placeholder,
    } = props;

    return (
        <div className={cls.inputWrapper}>
            <Input
                className={classNames(cls.DatepickerInput, {}, [className])}
                ref={ref}
                value={value}
                onClick={onClick}
                placeholder={placeholder}
            />
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onClick}
                className={cls.calendarBtn}
            >
                <Icon className={cls.calendarIcon} Svg={CalendarIcon} />
            </Button>
        </div>
    );
}));
