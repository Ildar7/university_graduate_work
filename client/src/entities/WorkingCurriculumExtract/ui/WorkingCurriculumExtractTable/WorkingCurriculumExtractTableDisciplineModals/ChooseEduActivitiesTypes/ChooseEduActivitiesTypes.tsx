import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchEduActivitiesTypes,
    getEduActivitiesTypesData,
    getEduActivitiesTypesError,
    getEduActivitiesTypesIsLoading,
} from 'entities/EduActivitiesTypes';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import CheckIcon from 'shared/assets/icons/check.svg';
import { Toast } from 'shared/ui/Toast/Toast';
import { useLocation } from 'react-router-dom';
import { CToaster } from '@coreui/react';
import cls from './ChooseEduActivitiesTypes.module.scss';
import { WorkingCurriculumExtractQualifications } from '../../../../model/types/workingCurriculumExtractQualifications';
import { workingCurriculumExtractActions } from '../../../../model/slice/workingCurriculumExtractSlice';
import {
    getWorkingCurriculumExtractDataToWork,
} from '../../../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';

interface ChooseEduActivitiesTypesProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    qualification?: WorkingCurriculumExtractQualifications;
}

export const ChooseEduActivitiesTypes = memo((
    props: ChooseEduActivitiesTypesProps,
) => {
    const {
        className,
        onClose,
        isOpen,
        qualification,
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const [selectedItem, setSelectedItem] = useState<string>('null');
    const [optionsToSelect, setOptionsToSelect] = useState<string[]>([]);
    const [workingCurriculumId, setWorkingCurriculumId] = useState('');
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const eduActivitiesTypesData = useSelector(getEduActivitiesTypesData);
    const eduActivitiesTypesIsLoading = useSelector(getEduActivitiesTypesIsLoading);
    const eduActivitiesTypesError = useSelector(getEduActivitiesTypesError);

    const dataToWork = useSelector(getWorkingCurriculumExtractDataToWork);

    const onCancelHandler = useCallback(() => {
        onClose();
        setSelectedItem('null');
    }, [onClose]);

    const onSelectOption = useCallback((value: string, columnName: string) => {
        setSelectedItem(value);
    }, []);

    const onConfirmSelecting = useCallback(() => {
        const selectedActivity = eduActivitiesTypesData?.filter((activity) => activity.name === selectedItem)[0];

        let foundSubject;

        if (qualification) {
            foundSubject = dataToWork?.data.qualifications
                .filter((qual) => (
                    qual.standard_curriculum_qualification_id === qualification?.standard_curriculum_qualification_id
                ))[0].educationalActivities
                .filter((activity) => (
                    activity.educational_activity_type_id === selectedActivity?.educational_activity_type_id
                ))[0];
        } else {
            foundSubject = dataToWork?.data.general[0].educationalActivities
                .filter((activity) => (
                    activity.educational_activity_type_id === selectedActivity?.educational_activity_type_id
                ))[0];
        }

        if (foundSubject) {
            addToast(Toast.error('Данная дисциплина уже присутствует в списке'));
            return;
        }

        if (selectedActivity) {
            dispatch(workingCurriculumExtractActions.addEducationalActivityType([
                qualification?.standard_curriculum_qualification_id || null,
                selectedActivity,
                Number(workingCurriculumId),
            ]));

            onCancelHandler();
        }
    }, [
        eduActivitiesTypesData,
        qualification,
        selectedItem,
        dataToWork?.data.qualifications,
        dataToWork?.data.general,
        dispatch,
        workingCurriculumId,
        onCancelHandler]);

    useEffect(() => {
        setWorkingCurriculumId(pathname.split('/')[pathname.split('/').length - 1]);
    }, [pathname]);

    useEffect(() => {
        dispatch(fetchEduActivitiesTypes());
    }, [dispatch]);

    useEffect(() => {
        if (eduActivitiesTypesData) {
            setOptionsToSelect(eduActivitiesTypesData.map((activity) => activity.name));
        }
    }, [eduActivitiesTypesData]);

    let content;

    if (eduActivitiesTypesIsLoading) {
        content = (
            <Skeleton height={400} width="100%" />
        );
    } else if (eduActivitiesTypesError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <>
                <SearchSelect
                    label="Выбрать иной вид учебной деятельности"
                    options={optionsToSelect}
                    optionValue={selectedItem}
                    onClickOption={onSelectOption}
                    columnName=""
                />

                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_DARK}
                        size={ButtonSize.XS}
                        className={cls.btn}
                        onClick={onCancelHandler}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Отмена
                        </Text>
                        <Icon Svg={CloseBorderedIcon} />
                    </Button>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        size={ButtonSize.XS}
                        className={cls.btn}
                        onClick={onConfirmSelecting}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Выбрать
                        </Text>
                        <Icon Svg={CheckIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                contentClassName={classNames(
                    cls.ChooseEduActivitiesTypes,
                    {},
                    [className],
                )}
                onClose={onCancelHandler}
                isOpen={isOpen}
            >
                {content}
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
