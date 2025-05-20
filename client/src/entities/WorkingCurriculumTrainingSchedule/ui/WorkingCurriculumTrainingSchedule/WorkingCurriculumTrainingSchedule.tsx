import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import ExitIcon from 'shared/assets/icons/exit.svg';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { getRouteWorkingCurriculum } from 'shared/const/router';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import FileIcon from 'shared/assets/icons/file.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import {
    editWorkingCurriculumTrainingSchedule,
} from 'entities/WorkingCurriculumTrainingSchedule/model/services/editWorkingCurriculumTrainingSchedule/editWorkingCurriculumTrainingSchedule';
import {
    WorkingCurriculumTrainingScheduleExitConfirmModal,
} from '../WorkingCurriculumTrainingScheduleExitConfirmModal/WorkingCurriculumTrainingScheduleExitConfirmModal';
import {
    createWorkingCurriculumTrainingSchedule,
} from '../../model/services/createWorkingCurriculumTrainingSchedule/createWorkingCurriculumTrainingSchedule';
import cls from './WorkingCurriculumTrainingSchedule.module.scss';
import {
    WorkingCurriculumTrainingScheduleGeneralInfo,
} from '../WorkingCurriculumTrainingScheduleGeneralInfo/WorkingCurriculumTrainingScheduleGeneralInfo';
import {
    WorkingCurriculumTrainingScheduleTable,
} from '../WorkingCurriculumTrainingScheduleTable/WorkingCurriculumTrainingScheduleTable/WorkingCurriculumTrainingScheduleTable';
import { workingCurriculumTrainingScheduleActions } from '../../model/slice/workingCurriculumTrainingScheduleSlice';
import {
    getWorkingCurriculumTrainingScheduleCreateData,
    getWorkingCurriculumTrainingScheduleDataParsed,
    getWorkingCurriculumTrainingScheduleEditData,
    getWorkingCurriculumTrainingScheduleEditDataInfo,
    getWorkingCurriculumTrainingScheduleError,
    getWorkingCurriculumTrainingScheduleIsLoading,
    getWorkingCurriculumTrainingScheduleReadOnly,
    getWorkingCurriculumTrainingScheduleRedirectToMainPage,
} from '../../model/selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';
import {
    WorkingCurriculumTrainingScheduleSummaryData,
} from '../WorkingCurriculumTrainingScheduleSummaryData/WorkingCurriculumTrainingScheduleSummaryData';
import {
    deleteWorkingCurriculumTrainingSchedule,
} from '../../model/services/deleteWorkingCurriculumTrainingSchedule/deleteWorkingCurriculumTrainingSchedule';

interface WorkingCurriculumTrainingScheduleProps {
    className?: string;
}

export const WorkingCurriculumTrainingSchedule = memo((props: WorkingCurriculumTrainingScheduleProps) => {
    const {
        className,
    } = props;
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [workingCurriculumId, setWorkingCurriculumId] = useState('');
    const [confirmExitingModalVisible, setConfirmExitingModalVisible] = useState(false);

    const trainingScheduleDataParsed = useSelector(getWorkingCurriculumTrainingScheduleDataParsed);
    const trainingScheduleEditData = useSelector(getWorkingCurriculumTrainingScheduleEditData);
    const trainingScheduleIsLoading = useSelector(getWorkingCurriculumTrainingScheduleIsLoading);
    const trainingScheduleError = useSelector(getWorkingCurriculumTrainingScheduleError);

    const createTrainingScheduleIsLoading = useSelector(getWorkingCurriculumTrainingScheduleCreateData)?.isLoading;
    const editTrainingScheduleIsLoading = useSelector(getWorkingCurriculumTrainingScheduleEditDataInfo)?.isLoading;

    const tableReadOnly = useSelector(getWorkingCurriculumTrainingScheduleReadOnly);
    const isRedirectToMainPage = useSelector(getWorkingCurriculumTrainingScheduleRedirectToMainPage);

    const onExitHandler = useCallback(() => {
        if (JSON.stringify(trainingScheduleEditData) !== JSON.stringify(trainingScheduleDataParsed)) {
            dispatch(workingCurriculumTrainingScheduleActions.changeRedirectToMainPage(true));
            setConfirmExitingModalVisible(true);
            return;
        }

        navigate(getRouteWorkingCurriculum());
    }, [dispatch, navigate, trainingScheduleDataParsed, trainingScheduleEditData]);

    const onCloseConfirmExitingModal = useCallback(() => {
        dispatch(workingCurriculumTrainingScheduleActions.changeRedirectToMainPage(false));
        setConfirmExitingModalVisible(false);
    }, [dispatch]);

    const onCancelEditHandler = useCallback(() => {
        dispatch(workingCurriculumTrainingScheduleActions.cancelEditing());
    }, [dispatch]);

    const onReadOnlyClickHandler = useCallback(() => {
        dispatch(workingCurriculumTrainingScheduleActions.changeReadOnly(true));
    }, [dispatch]);

    const onEditClickHandler = useCallback(() => {
        dispatch(workingCurriculumTrainingScheduleActions.changeReadOnly(false));
    }, [dispatch]);

    const onSaveHandler = useCallback(() => {
        if (trainingScheduleEditData && trainingScheduleEditData.data.length) {
            if (trainingScheduleError?.status === 404) {
                dispatch(workingCurriculumTrainingScheduleActions.createNewTrainingSchedule());
                dispatch(createWorkingCurriculumTrainingSchedule(workingCurriculumId))
                    .then((res) => {
                        if (res.meta.requestStatus === 'fulfilled' && isRedirectToMainPage) {
                            navigate(getRouteWorkingCurriculum());
                        }
                    })
                    .catch((err) => { console.log(err); });
            } else {
                dispatch(editWorkingCurriculumTrainingSchedule(workingCurriculumId))
                    .then((res) => {
                        if (res.meta.requestStatus === 'fulfilled') {
                            if (isRedirectToMainPage) {
                                navigate(getRouteWorkingCurriculum());
                            }
                        }
                    })
                    .catch((err) => { console.log(err); });
            }
        } else {
            addToast(Toast.error('Пожалуйста, добавьте хотя бы один курс в график'));
        }
    }, [dispatch, isRedirectToMainPage, navigate, trainingScheduleEditData, trainingScheduleError?.status, workingCurriculumId]);

    const disabledButtons = trainingScheduleIsLoading
        || createTrainingScheduleIsLoading
        || editTrainingScheduleIsLoading;

    useEffect(() => {
        setWorkingCurriculumId(pathname.split('/')[pathname.split('/').length - 1]);
    }, [pathname]);

    return (
        <>
            <div className={classNames(cls.WorkingCurriculumTrainingSchedule, {}, [className])}>
                <div className={cls.content}>
                    <WorkingCurriculumTrainingScheduleGeneralInfo
                        workingCurriculumId={workingCurriculumId}
                    />
                    <WorkingCurriculumTrainingScheduleTable
                        workingCurriculumId={workingCurriculumId}
                    />
                    <WorkingCurriculumTrainingScheduleSummaryData />
                </div>

                <div className={cls.buttons}>
                    <div className={cls.buttonsLeftWrapper}>
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
                    </div>

                    <div className={cls.buttonsRightWrapper}>
                        {tableReadOnly && (
                            <Button
                                className={cls.btn}
                                theme={ButtonTheme.BACKGROUND}
                                size={ButtonSize.XS}
                                disabled={disabledButtons}
                                onClick={onEditClickHandler}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Редактировать документ
                                </Text>
                                <Icon className={cls.editIcon} Svg={EditIcon} />
                            </Button>
                        )}
                        {!tableReadOnly && (
                            <>
                                <Button
                                    className={cls.btn}
                                    theme={ButtonTheme.BACKGROUND_GRAY}
                                    size={ButtonSize.XS}
                                    onClick={onReadOnlyClickHandler}
                                    disabled={disabledButtons}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        Перейти в режим просмотра документа
                                    </Text>
                                    <Icon className={cls.fileIcon} Svg={FileIcon} />
                                </Button>
                                <Button
                                    className={cls.btn}
                                    theme={ButtonTheme.BACKGROUND_GRAY}
                                    size={ButtonSize.XS}
                                    onClick={onCancelEditHandler}
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
                            </>
                        )}
                    </div>
                </div>
            </div>

            <WorkingCurriculumTrainingScheduleExitConfirmModal
                onClose={onCloseConfirmExitingModal}
                isOpen={confirmExitingModalVisible}
                onSubmitForm={onSaveHandler}
            />

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
