import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => (
    <div className={classNames(cls.PageError, {}, [className])}>
        <p>Произошла непредвиденная ошибка</p>
    </div>
));
