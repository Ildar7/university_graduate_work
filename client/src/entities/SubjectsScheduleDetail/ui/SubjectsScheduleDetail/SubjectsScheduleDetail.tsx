import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import PrinterIcon from 'shared/assets/icons/printer.svg';
import ExitIcon from 'shared/assets/icons/exit.svg';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getSubjectsScheduleDetailActions,
    getSubjectsScheduleDetailActionsError,
    getSubjectsScheduleDetailActionsIsLoading, getSubjectsScheduleDetailActionsUpdated,
    subjectsScheduleDetailActionsActions,
} from 'features/SubjectsScheduleDetail';
import {
    updateSubjectsScheduleDetail,
} from 'features/SubjectsScheduleDetail/model/services/updateSubjectsScheduleDetail/updateSubjectsScheduleDetail';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRouteSubjectsSchedule } from 'shared/const/router';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import { fetchSubjectsScheduleDetail } from 'entities/SubjectsScheduleDetail';
import { subjectsScheduleWorkloadActions } from 'entities/SubjectsScheduleWorkload';
import { subjectsScheduleDetailActions } from '../../model/slice/subjectsScheduleDetailSlice';
import {
    SubjectsScheduleTable,
} from '../SubjectsScheduleTable/SubjectsScheduleTable/SubjectsScheduleTable';
import cls from './SubjectsScheduleDetail.module.scss';
import { SubjectsScheduleDetailFilters } from '../SubjectsScheduleDetailFilters/SubjectsScheduleDetailFilters';

interface SubjectsScheduleDetailProps {
    className?: string;
}

export const SubjectsScheduleDetail = memo((props: SubjectsScheduleDetailProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = window.location;
    const navigate = useNavigate();
    const pathnameArr = pathname.split('/');
    const year = pathnameArr[pathnameArr.length - 2];
    const week = pathnameArr[pathnameArr.length - 1];
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const updateActions = useSelector(getSubjectsScheduleDetailActions);
    const updateIsLoading = useSelector(getSubjectsScheduleDetailActionsIsLoading);
    const updateError = useSelector(getSubjectsScheduleDetailActionsError);
    const updateSuccessfull = useSelector(getSubjectsScheduleDetailActionsUpdated);

    const onCancelChanges = useCallback(() => {
        dispatch(subjectsScheduleDetailActions.clearData());
        dispatch(subjectsScheduleDetailActionsActions.clearActions());
        dispatch(subjectsScheduleDetailActions.fillDataWithEmptyObjects());
        dispatch(subjectsScheduleWorkloadActions.clearData());
        addToast(Toast.success('Изменения отменены'));
    }, [dispatch]);

    const onSaveHandler = useCallback(() => {
        if (updateActions?.create || updateActions?.delete || updateActions?.update) {
            dispatch(updateSubjectsScheduleDetail([year, week]))
                .then((res) => {
                    if (res.meta.requestStatus === 'fulfilled') {
                        dispatch(fetchSubjectsScheduleDetail([year, week]))
                            .then((res) => {
                                if (res.meta.requestStatus === 'fulfilled') {
                                    dispatch(subjectsScheduleDetailActions.fillDataWithEmptyObjects());
                                }
                            });
                    }
                });
            return;
        }

        addToast(Toast.info('Для сохранения внесите изменения'));
    }, [dispatch, updateActions?.create, updateActions?.delete, updateActions?.update, week, year]);

    const onExitHandler = useCallback(() => {
        navigate(getRouteSubjectsSchedule());
    }, [navigate]);

    const disabledButtons = updateIsLoading;

    useEffect(() => {
        if (updateError) {
            addToast(Toast.error('Произошла ошибка при сохранении изменений'));
        }
    }, [updateError]);

    useEffect(() => {
        if (updateSuccessfull) {
            addToast(Toast.success('Данные успешно обновлены'));
        }
    }, [updateSuccessfull]);

    return (
        <>
            <div className={classNames(cls.SubjectsScheduleDetail, {}, [className])}>
                <SubjectsScheduleDetailFilters
                    year={year}
                    week={week}
                />

                <div className={cls.content}>
                    <SubjectsScheduleTable
                        year={year}
                        week={week}
                    />
                </div>

                <div className={cls.settings}>
                    <Button
                        className={cls.btn}
                        theme={ButtonTheme.BACKGROUND_GRAY}
                        size={ButtonSize.XS}
                        onClick={onExitHandler}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Выйти
                        </Text>
                        <Icon className={cls.exitBtnIcon} Svg={ExitIcon} />
                    </Button>
                    <Button
                        size={ButtonSize.XS}
                        className={classNames(cls.printBtn, {}, [cls.btn])}
                        disabled
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Печать
                        </Text>
                        <Icon Svg={PrinterIcon} />
                    </Button>
                    <div className={cls.buttons}>
                        <Button
                            className={cls.btn}
                            theme={ButtonTheme.BACKGROUND_GRAY}
                            size={ButtonSize.XS}
                            onClick={onCancelChanges}
                            disabled={disabledButtons}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Отменить
                            </Text>
                            <Icon Svg={CloseBorderedIcon} />
                        </Button>
                        <Button
                            className={cls.btn}
                            theme={ButtonTheme.BACKGROUND}
                            size={ButtonSize.XS}
                            onClick={onSaveHandler}
                            disabled={disabledButtons}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Сохранить
                            </Text>
                            <Icon Svg={CheckIcon} />
                        </Button>
                    </div>
                </div>
            </div>
            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
