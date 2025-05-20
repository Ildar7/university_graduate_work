import React from 'react';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { useLocation } from 'react-router-dom';
import { getRouteLogin } from 'shared/const/router';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './DefaultLayout.module.scss';

const DefaultLayout = () => {
    const location = useLocation();

    if (location.pathname === getRouteLogin()) {
        return (
            <AppRouter />
        );
    }

    return (
        <div>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <Header />
                <div className={classNames(cls.content, {}, ['body flex-grow-1'])}>
                    <AppRouter />
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default DefaultLayout;
