import React, { ForwardedRef, forwardRef, memo } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { CFormInput } from '@coreui/react';
import { CFormInputProps } from '@coreui/react/dist/components/form/CFormInput';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import cls from './Input.module.scss';

interface InputProps extends CFormInputProps {
    className?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
    inputClassName?: string;
    tableCell?: boolean;
    mask?: any;
    size?: 'sm' | 'lg' | undefined;
}

export const Input = memo(forwardRef((props: InputProps, ref: ForwardedRef<any>) => {
    const {
        className,
        inputClassName,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        label,
        tableCell,
        mask,
        size,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {label && (
                <Text
                    className={cls.label}
                    size={TextSize.XXS}
                >
                    {label}
                </Text>
            )}
            <div className={cls.inputWrapper}>
                {!mask && (
                    <CFormInput
                        type={type}
                        value={value}
                        className={classNames(cls.input, {
                            [cls.inputActive]: !!value && !tableCell,
                            [cls.tableCellInput]: tableCell,
                        }, [inputClassName])}
                        readOnly={readonly}
                        onChange={onChange}
                        placeholder={placeholder}
                        ref={ref}
                        {...otherProps}
                    />
                )}
                {mask && (
                    <CFormInputWithMask
                        mask={mask}
                        type={type}
                        value={String(value)}
                        className={classNames(cls.input, {
                            [cls.inputActive]: !!value && !tableCell,
                            [cls.tableCellInput]: tableCell,
                        }, [inputClassName])}
                        readOnly={readonly}
                        onChange={onChange}
                        placeholder={placeholder}
                        ref={ref}
                        {...otherProps}
                    />
                )}
            </div>
        </div>
    );
}));
