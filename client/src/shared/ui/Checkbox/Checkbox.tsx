import React, {
    InputHTMLAttributes, memo, useCallback, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import CheckIcon from 'shared/assets/icons/check.svg';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import cls from './Checkbox.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
type LabelPosition = 'before' | 'after';

interface CheckboxProps extends HTMLInputProps {
    className?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly?: boolean;
    id?: string;
    label?: string;
    labelClassName?: string;
    labelSize?: TextSize;
    labelTheme?: TextTheme;
    labelWeight?: TextWeight;
    labelPosition?: LabelPosition;
    index?: number;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const {
        className,
        checked,
        onChange,
        placeholder,
        readonly,
        id,
        index,
        label,
        labelClassName,
        labelSize = TextSize.XS,
        labelTheme = TextTheme.LIGHT,
        labelWeight = TextWeight.REGULAR,
        labelPosition = 'before',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    }, [onChange]);

    return (
        <div className={classNames(cls.Checkbox, mods, [className])}>
            {label && (
                <label htmlFor={id} className={classNames(cls.label, {}, [labelClassName, cls[labelPosition]])}>
                    <Text
                        size={labelSize}
                        theme={labelTheme}
                        weight={labelWeight}
                    >
                        {index && (
                            <>
                                {index}
                                .
                                {' '}
                            </>
                        )}
                        {label}
                    </Text>
                </label>
            )}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
                className={classNames(cls.inputFake, { [cls.inputFakeActive]: checked }, [])}
                htmlFor={id}
            >
                <Icon className={cls.checkIcon} Svg={CheckIcon} />
            </label>
            <input
                type="checkbox"
                // @ts-ignore
                checked={checked}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeCheck}
                placeholder={placeholder}
                id={id}
                {...otherProps}
            />
        </div>
    );
});
