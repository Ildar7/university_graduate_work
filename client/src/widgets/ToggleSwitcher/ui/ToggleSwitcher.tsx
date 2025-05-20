import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import cls from './ToggleSwitcher.module.scss';

interface ToggleSwitcherProps {
    className?: string;
    toggleOutside?: () => void;
    leftText?: string;
    rightText?: string;
}

export const ToggleSwitcher = memo((props: ToggleSwitcherProps) => {
    const {
        className,
        toggleOutside,
        leftText,
        rightText,
    } = props;
    const [on, setOn] = useState(false);

    const toggle = useCallback(() => {
        setOn((prevState) => !prevState);
        toggleOutside?.();
    }, [toggleOutside]);

    return (
        <div className={classNames(cls.ToggleSwitcherWrapper, {}, [className])}>
            {leftText && (
                <Text
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                    align={TextAlign.CENTER}
                    className={cls.text}
                >
                    {leftText}
                </Text>
            )}
            <button
                type="button"
                className={classNames(
                    cls.ToggleSwitcher,
                    { [cls.active]: on },
                    [],
                )}
                onClick={toggle}
            >
                <span className={cls.pin} />
            </button>
            {rightText && (
                <Text
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                    align={TextAlign.CENTER}
                    className={cls.text}
                >
                    {rightText}
                </Text>
            )}
        </div>
    );
});
