import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import {
    addCurriculumSubject,
    addCurriculumSubjectActions,
    getAddCurriculumSubjectData,
} from 'features/CurriculumSubjects/AddCurriculumSubject';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import { useLocation } from 'react-router-dom';
import {
    fetchEducationalModuleDetail,
    getEducationalModuleDetailData,
    getEducationalModuleDetailError,
    getEducationalModuleDetailIsLoading,
} from 'entities/EducationalModuleDetail';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { workingCurriculumExtractActions } from 'entities/WorkingCurriculumExtract';
import {
    WorkingCurriculumExtractSubject,
} from 'entities/WorkingCurriculumExtract/model/types/workingCurriculumExtractGeneral';
import { WORKING_CURRICULUM_EXTRACT_TABLE_DATA } from 'shared/const/localstorage';
import cls from './AddDiscipline.module.scss';
import {
    WorkingCurriculumExtractModules,
    WorkingCurriculumExtractQualifications,
    WorkingCurriculumExtractUnits,
} from '../../../../model/types/workingCurriculumExtractQualifications';
import {
    fetchWorkingCurriculumExtract,
} from '../../../../model/services/fetchWorkingCurriculumExtract/fetchWorkingCurriculumExtract';
import {
    getWorkingCurriculumExtractDataParsed,
    getWorkingCurriculumExtractDataToWork,
} from '../../../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';

interface AddDisciplineProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    qualification?: WorkingCurriculumExtractQualifications;
    moduleDetail?: WorkingCurriculumExtractModules,
    unitDetail?: WorkingCurriculumExtractUnits;
    generalModule?: boolean;
}

export const AddDiscipline = memo((
    props: AddDisciplineProps,
) => {
    const {
        className,
        onClose,
        isOpen,
        qualification,
        moduleDetail,
        unitDetail,
        generalModule,
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [workingCurriculumId, setWorkingCurriculumId] = useState('');

    const addCurriculumSubjectData = useSelector(getAddCurriculumSubjectData);

    const eduModuleDetail = useSelector(getEducationalModuleDetailData);
    const eduModuleDetailIsLoading = useSelector(getEducationalModuleDetailIsLoading);
    const eduModuleDetailError = useSelector(getEducationalModuleDetailError);

    const extractDataToWork = useSelector(getWorkingCurriculumExtractDataToWork);
    const extractDataParsed = useSelector(getWorkingCurriculumExtractDataParsed);

    const onCancelHandler = useCallback(() => {
        onClose();
        dispatch(addCurriculumSubjectActions.setName(null));
        dispatch(addCurriculumSubjectActions.setSort('100'));
    }, [dispatch, onClose]);

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addCurriculumSubjectActions.setName(event.target.value));
    };

    const addSubjectToData = (subject: WorkingCurriculumExtractSubject) => {
        let subjectSortMaxValue;
        if (generalModule) {
            subjectSortMaxValue = extractDataParsed?.data.general[0].subjects[extractDataParsed!.data.general[0].subjects.length - 1]?.sort || 0;
        } else {
            const filteredSubjects = extractDataParsed?.data.qualifications
                .filter((qual) => (
                    qual.standard_curriculum_qualification_id === qualification?.standard_curriculum_qualification_id
                ))[0].modules
                .filter((module) => (
                    module.module_id === moduleDetail!.module_id
                ))[0].units
                .filter((unit) => (
                    unit.educational_modules_unit_id === unitDetail!.educational_modules_unit_id
                ))[0].subjects;

            subjectSortMaxValue = filteredSubjects![filteredSubjects!.length - 1]?.sort || 0;
        }
        dispatch(workingCurriculumExtractActions.addSubject([
            generalModule ? null : qualification!.standard_curriculum_qualification_id,
            generalModule ? 1 : addCurriculumSubjectData!.module_id!,
            generalModule ? undefined : addCurriculumSubjectData!.unit_id!,
            subject,
            Number(workingCurriculumId),
            subjectSortMaxValue! + 100,
        ]));
    };

    const handleSubmit = async () => {
        if (!addCurriculumSubjectData?.name) {
            addToast(Toast.error('Заполните название'));
            return;
        }

        let dataToSend;
        if (generalModule) {
            dataToSend = {
                ...addCurriculumSubjectData,
                module_id: 1,
                unit_id: null,
            };
        } else {
            dataToSend = addCurriculumSubjectData;
        }
        const result = await dispatch(addCurriculumSubject(dataToSend));

        if (result.meta.requestStatus === 'fulfilled') {
            addToast(Toast.success('Дисциплина успешно добавлена'));
            localStorage.setItem(WORKING_CURRICULUM_EXTRACT_TABLE_DATA, JSON.stringify(extractDataToWork));
            addSubjectToData(result.payload as WorkingCurriculumExtractSubject);
            onCancelHandler();
        }
    };

    useEffect(() => {
        setWorkingCurriculumId(pathname.split('/')[pathname.split('/').length - 1]);
    }, [pathname]);

    useEffect(() => {
        dispatch(addCurriculumSubjectActions.setSort('100'));
    }, [dispatch]);

    useEffect(() => {
        if (moduleDetail) {
            dispatch(addCurriculumSubjectActions.setModuleId(String(moduleDetail.educational_module_id)));
        }
    }, [dispatch, moduleDetail]);

    useEffect(() => {
        if (unitDetail) {
            dispatch(addCurriculumSubjectActions.setUnitId(String(unitDetail.educational_modules_unit_id)));
        }
    }, [dispatch, unitDetail]);

    useEffect(() => {
        if (generalModule) {
            dispatch(fetchEducationalModuleDetail('1'));
        }
    }, [dispatch, generalModule]);

    let content;

    if (generalModule && eduModuleDetailIsLoading) {
        content = (
            <Skeleton width="100%" height={300} />
        );
    } else if (generalModule && eduModuleDetailError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <>
                <Input
                    label="Название"
                    placeholder="Физическая культура"
                    value={addCurriculumSubjectData?.name || ''}
                    onChange={onChangeName}
                    required
                />

                <Input
                    label="Модуль"
                    value={generalModule ? eduModuleDetail?.name : moduleDetail?.name || 'Нет'}
                    readonly
                />

                <Input
                    label="Модульная единица"
                    value={unitDetail?.name || 'Нет'}
                    readonly
                />

                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_DARK}
                        className={cls.footerBtn}
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
                        onClick={handleSubmit}
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.footerBtn}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Добавить
                        </Text>
                        <Icon Svg={PlusBorderedIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                contentClassName={classNames(cls.AddDiscipline, {}, [className])}
                onClose={onCancelHandler}
                isOpen={isOpen}
                title="Создать дисциплину"
            >
                <div className={cls.form}>
                    {content}
                </div>
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
