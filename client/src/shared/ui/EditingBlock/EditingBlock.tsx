import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    FocusEventHandler,
    ReactElement, ReactNode, useCallback, useRef, useState,
} from 'react';
import { Input } from 'shared/ui/Input/Input';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import cls from './EditingBlock.module.scss';

interface EditingBlockProps {
    className?: string;
    inputValue: number | string | null;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    disabled?: boolean;
    min?: number;
    step?: number;
    required?: boolean;
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
    title?: string;
}

export const EditingBlock = (props: EditingBlockProps) => {
    const {
        className,
        inputValue,
        onChangeHandler,
        type,
        disabled,
        min,
        step,
        required,
        onBlur,
        title,
    } = props;

    return (
        <div
            className={classNames(cls.EditingBlock, { [cls.disabled]: disabled }, [className])}
        >
            <Input
                type={type}
                min={type === 'number' ? min : undefined}
                step={type === 'number' ? step : undefined}
                value={inputValue || ''}
                onChange={onChangeHandler}
                className={cls.inputWrapper}
                title={title}
                inputClassName={classNames(
                    cls.input,
                    {
                        [cls.disabled]: disabled,
                    },
                    [],
                )}
                required={required}
                disabled={disabled}
                tableCell
                onBlur={onBlur}
            />
        </div>
    );
};
