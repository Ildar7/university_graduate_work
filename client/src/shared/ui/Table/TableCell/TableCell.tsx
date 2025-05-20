import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { ReactNode } from 'react';
import cls from './TableCell.module.scss';

export enum TableCellTheme {
    NORMAL = 'normal',
    YELLOW = 'yellow',
    BLUE = 'blue',
}
export enum TableCellRotate {
    NORMAL = 'normal',
    ROTATED = 'rotated',
}
interface TableCellProps {
    className?: string;
    children: ReactNode;
    rotate?: TableCellRotate;
    theme?: TableCellTheme;
}

export const TableCell = (props: TableCellProps) => {
    const {
        className,
        children,
        rotate = TableCellRotate.NORMAL,
        theme = TableCellTheme.NORMAL,
    } = props;

    return (
        <div className={classNames(cls.TableCell, {}, [className, cls[rotate], cls[theme]])}>
            <div>
                {children}
            </div>
        </div>
    );
};
