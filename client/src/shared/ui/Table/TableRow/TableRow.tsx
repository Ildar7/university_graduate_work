import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import cls from './TableRow.module.scss';

interface TableRowProps {
    className?: string;
    children: ReactNode;
}
export const TableRow = memo((props: TableRowProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <div className={classNames(cls.TableRow, {}, [className])}>
            {children}
        </div>
    );
});
