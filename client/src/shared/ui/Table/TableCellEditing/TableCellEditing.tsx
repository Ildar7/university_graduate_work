import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    ReactElement, ReactNode, useCallback, useRef, useState,
} from 'react';
import { EditingBlock } from 'shared/ui/EditingBlock/EditingBlock';
import { Toast } from 'shared/ui/Toast/Toast';
import { WorkingCurriculumExtractEducationalActivities, WorkingCurriculumExtractSubjects } from 'entities/WorkingCurriculumExtract';
import cls from './TableCellEditing.module.scss';
import { TableCell } from '../TableCell/TableCell';

interface TableCellEditingProps {
    className?: string;
    inputValue: string | number | null;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    disabled?: boolean;
    min?: number;
    step?: number;
    required?: boolean;
    error?: boolean;
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
    title?: string;
}

export const TableCellEditing = (props: TableCellEditingProps) => {
    const {
        className,
        inputValue,
        onChangeHandler,
        type,
        disabled,
        min,
        step,
        required,
        error,
        onBlur,
        title,
    } = props;

    return (
        <TableCell
            className={classNames(cls.TableCellEditing, { [cls.error]: error }, [className])}
        >
            <EditingBlock
                inputValue={inputValue}
                onChangeHandler={onChangeHandler}
                type={type}
                disabled={disabled}
                min={min}
                step={step}
                required={required}
                onBlur={onBlur}
                title={title}
            />
        </TableCell>
    );
};
