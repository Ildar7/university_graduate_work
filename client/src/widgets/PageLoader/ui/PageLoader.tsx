import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import { getRouteLogin } from 'shared/const/router';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
    const location = useLocation();
    const [isLoginPage, setIsLoginPage] = useState(false);

    useEffect(() => {
        setIsLoginPage(location.pathname === getRouteLogin());
    }, [location.pathname]);

    return (
        <div className={classNames(cls.PageLoader, { [cls.loginPage]: isLoginPage }, [className])}>
            <Loader />
        </div>
    );
});
