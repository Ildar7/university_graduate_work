import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import ExitIcon from 'shared/assets/icons/exit.svg';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import { getRouteWorkingCurriculum } from 'shared/const/router';
import {
    fetchCollegeCoreOptions,
    getSettingsMainCollegeError,
    getSettingsMainCollegeIsLoading,
} from 'entities/Settings/SettingsMainCollege';
import { CForm, CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import { WORKING_CURRICULUM_EXTRACT_TABLE_DATA } from 'shared/const/localstorage';
import FileIcon from 'shared/assets/icons/file.svg';
import { ToggleSwitcher } from 'widgets/ToggleSwitcher';
import {
    WorkingCurriculumExtractExitConfirmModal,
} from '../WorkingCurriculumExtractExitConfirmModal/WorkingCurriculumExtractExitConfirmModal';
import { WorkingCurriculumExtractSubjects } from '../../model/types/workingCurriculumExtractGeneral';
import {
    updateDistributionWorkingCurriculumExtract,
} from '../../model/services/updateDistributionWorkingCurriculumExtract/updateDistributionWorkingCurriculumExtract';
import {
    updateWorkingCurriculumExtract,
} from '../../model/services/updateWorkingCurriculumExtract/updateWorkingCurriculumExtract';
import cls from './WorkingCurriculumExtract.module.scss';
import {
    fetchWorkingCurriculumExtract,
} from '../../model/services/fetchWorkingCurriculumExtract/fetchWorkingCurriculumExtract';
import {
    WorkingCurriculumExtractTable,
} from '../WorkingCurriculumExtractTable/WorkingCurriculumExtractTable/WorkingCurriculumExtractTable';
import { workingCurriculumExtractActions } from '../../model/slice/workingCurriculumExtractSlice';
import {
    getWorkingCurriculumExtractDataParsed,
    getWorkingCurriculumExtractDataToWork,
    getWorkingCurriculumExtractError,
    getWorkingCurriculumExtractIsLoading,
    getWorkingCurriculumExtractReadOnly,
    getWorkingCurriculumExtractRedirectToMainPage,
    getWorkingCurriculumExtractShowAllDisciplines,
    getWorkingCurriculumExtractUpdatingError,
    getWorkingCurriculumExtractUpdatingIsLoading,
    getWorkingCurriculumExtractValidationErrors,
} from '../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';
import {
    WorkingCurriculumExtractErrorsModal,
} from '../WorkingCurriculumExtractErrorsModal/WorkingCurriculumExtractErrorsModal';

interface WorkingCurriculumExtractProps {
    className?: string;
}

const workingCurriculumExtractId = 'working-curriculum-extract-form';

export const WorkingCurriculumExtract = (props: WorkingCurriculumExtractProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [workingCurriculumId, setWorkingCurriculumId] = useState('');
    const [validated, setValidated] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [errorsModalVisible, setErrorsModalVisible] = useState(false);
    const [confirmExitingModalVisible, setConfirmExitingModalVisible] = useState(false);

    const extractIsLoading = useSelector(getWorkingCurriculumExtractIsLoading);
    const extractError = useSelector(getWorkingCurriculumExtractError);
    const extractValidationErrors = useSelector(getWorkingCurriculumExtractValidationErrors);
    const extractDataParsed = useSelector(getWorkingCurriculumExtractDataParsed);
    const extractDataToWork = useSelector(getWorkingCurriculumExtractDataToWork);

    const coreOptionsIsLoading = useSelector(getSettingsMainCollegeIsLoading);
    const coreOptionsError = useSelector(getSettingsMainCollegeError);

    const updatingLoading = useSelector(getWorkingCurriculumExtractUpdatingIsLoading);
    const updatingError = useSelector(getWorkingCurriculumExtractUpdatingError);

    const tableReadOnly = useSelector(getWorkingCurriculumExtractReadOnly);
    const isRedirectToMainPage = useSelector(getWorkingCurriculumExtractRedirectToMainPage);
    const showAllDisciplines = useSelector(getWorkingCurriculumExtractShowAllDisciplines);

    useEffect(() => {
        setWorkingCurriculumId(pathname.split('/')[pathname.split('/').length - 1]);
    }, [pathname]);

    useEffect(() => {
        if (workingCurriculumId) {
            dispatch(fetchWorkingCurriculumExtract(workingCurriculumId));
            dispatch(fetchCollegeCoreOptions());
        }
    }, [dispatch, workingCurriculumId]);

    const onCloseConfirmExitingModal = useCallback(() => {
        dispatch(workingCurriculumExtractActions.changeRedirectToMainPage(false));
        setConfirmExitingModalVisible(false);
    }, [dispatch]);

    const onExitHandler = useCallback(() => {
        if (JSON.stringify(extractDataParsed) !== JSON.stringify(extractDataToWork)) {
            dispatch(workingCurriculumExtractActions.changeRedirectToMainPage(true));
            setConfirmExitingModalVisible(true);
            return;
        }

        navigate(getRouteWorkingCurriculum());
    }, [dispatch, extractDataParsed, extractDataToWork, navigate]);

    const onCancelEditHandler = useCallback(() => {
        dispatch(workingCurriculumExtractActions.cancelChanges());
    }, [dispatch]);

    const onCloseErrorsModal = useCallback(() => {
        setErrorsModalVisible(false);
    }, []);

    const disabledButtons = extractIsLoading || !!extractError || updatingLoading;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            try {
                const errorsItems = [];
                extractValidationErrors?.amountOfStudyTime.forEach((error) => {
                    if (!error.validated) errorsItems.push(error.validated);
                });

                extractValidationErrors?.semestersDistribution.forEach((error) => {
                    if (!error.validated) errorsItems.push(error.validated);
                });

                if (errorsItems.length) {
                    addToast(Toast.error('Проверьте правильность распределения часов и попробуйте снова'));
                    return;
                }

                if (JSON.stringify(extractDataParsed) === JSON.stringify(extractDataToWork)) {
                    addToast(Toast.error('Для сохранения внесите изменения'));
                    return;
                }

                dispatch(workingCurriculumExtractActions.changeFormWithErrorsValue(false));

                const updateData = await dispatch(updateWorkingCurriculumExtract(workingCurriculumId));
                dispatch(workingCurriculumExtractActions.prepareSemestersDistributionToSend(updateData.payload as WorkingCurriculumExtractSubjects[]));
                await dispatch(updateDistributionWorkingCurriculumExtract(workingCurriculumId));
                addToast(Toast.success('Таблица успешно обновлена'));
                localStorage.removeItem(WORKING_CURRICULUM_EXTRACT_TABLE_DATA);

                if (isRedirectToMainPage) {
                    navigate(getRouteWorkingCurriculum());
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    const onEditClickHandler = useCallback(() => {
        dispatch(workingCurriculumExtractActions.changeReadOnly(false));
    }, [dispatch]);

    const onReadOnlyClickHandler = useCallback(() => {
        dispatch(workingCurriculumExtractActions.changeReadOnly(true));
        dispatch(workingCurriculumExtractActions.toggleShowAllDisciplines(true));
    }, [dispatch]);

    const toggleShowAllDisciplines = useCallback(() => {
        dispatch(workingCurriculumExtractActions.toggleShowAllDisciplines(!showAllDisciplines));
    }, [dispatch, showAllDisciplines]);

    useEffect(() => {
        if (updatingError) {
            setErrorsModalVisible(true);
        }
    }, [updatingError]);

    useEffect(() => {
        localStorage.removeItem(WORKING_CURRICULUM_EXTRACT_TABLE_DATA);
    }, []);

    let table;

    if (extractIsLoading || coreOptionsIsLoading) {
        table = (
            <Skeleton height={600} width="100%" />
        );
    } else if (extractError || coreOptionsError) {
        table = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
                align={TextAlign.CENTER}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        table = (
            <WorkingCurriculumExtractTable />
        );
    }

    return (
        <>
            <CForm
                className={classNames(cls.WorkingCurriculumExtract, {}, [className])}
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                id={workingCurriculumExtractId}
            >
                <div className={cls.content}>
                    {table}
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
                                <ToggleSwitcher
                                    leftText="Все дисциплины"
                                    rightText="Заполненные дисциплины"
                                    toggleOutside={toggleShowAllDisciplines}
                                    className={cls.toggleSwitcher}
                                />
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
                                    type="submit"
                                    className={cls.btn}
                                    theme={ButtonTheme.BACKGROUND}
                                    size={ButtonSize.XS}
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
            </CForm>

            <WorkingCurriculumExtractErrorsModal
                onClose={onCloseErrorsModal}
                isOpen={errorsModalVisible}
            />

            <WorkingCurriculumExtractExitConfirmModal
                onClose={onCloseConfirmExitingModal}
                isOpen={confirmExitingModalVisible}
                formId={workingCurriculumExtractId}
            />

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
