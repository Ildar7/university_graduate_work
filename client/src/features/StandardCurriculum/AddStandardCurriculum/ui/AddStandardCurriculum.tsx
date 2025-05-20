import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    AddStandardCurriculumModuleModal,
    AddStandardCurriculumModuleUnitModal,
    AddStandardCurriculumQualificationModal,
    EditStandardCurriculumModuleModal,
    EditStandardCurriculumModuleUnitModal,
    EditStandardCurriculumQualificationModal,
    fetchStandardCurriculum,
    StandardCurriculumGeneralInfo,
    StandardCurriculumQualifications,
    StandardCurriculumReturnBackModal,
    StandardCurriculumStructure,
    StandardCurriculumType,
} from 'entities/StandardCurriculum';
import { useSelector } from 'react-redux';
import { getSpecialtiesData, getSpecialtiesError, getSpecialtiesIsLoading } from 'entities/Specialties';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import React, {
    ReactElement, useCallback, useRef, useState,
} from 'react';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import {
    addStandardCurriculumActions,
    CurriculumStructureModeType,
} from 'features/StandardCurriculum/AddStandardCurriculum';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { format } from 'date-fns';
import { CButton, CForm, CToaster } from '@coreui/react';
import {
    getEduModulesError,
    getEduModulesIsLoading,
    getEduUnitsError,
    getEduUnitsIsLoading,
} from 'entities/EducationalModules';
import { getQualificationsError, getQualificationsIsLoading } from 'entities/Qualifications';
import { getSettingsMainCollegeError, getSettingsMainCollegeIsLoading } from 'entities/Settings/SettingsMainCollege';
import { Toast } from 'shared/ui/Toast/Toast';
import { useNavigate } from 'react-router-dom';
import { getRouteStandardCurriculum } from 'shared/const/router';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { deleteStandardCurriculum } from 'features/StandardCurriculum/DeleteStandardCurriculum';
import { addStandardCurriculum } from '../model/services/addStandardCurriculum/addStandardCurriculum';
import {
    addStandardCurriculumQualifications,
} from '../model/services/addStandardCurriculumQualifications/addStandardCurriculumQualifications';
import cls from './AddStandardCurriculum.module.scss';
import {
    getAddStandardCurriculumData,
} from '../model/selectors/getAddStandardCurriculumData/getAddStandardCurriculumData';
import {
    addStandardCurriculumModules,
} from '../model/services/addStandardCurriculumModules/addStandardCurriculumModules';

interface AddStandardCurriculumProps {
    className?: string;
}
export const AddStandardCurriculum = (props: AddStandardCurriculumProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(false);

    const [addModuleModalVisible, setAddModuleModalVisible] = useState(false);
    const [addModuleUnitModalVisible, setAddModuleUnitModalVisible] = useState(false);
    const [addQualificationModalVisible, setAddQualificationModalVisible] = useState(false);

    const [editModuleModalVisible, setEditModuleModalVisible] = useState(false);
    const [editModuleUnitModalVisible, setEditModuleUnitModalVisible] = useState(false);
    const [editQualificationModalVisible, setEditQualificationModalVisible] = useState(false);

    const [returnBackModalVisible, setReturnBackModalVisible] = useState(false);

    const [moduleId, setModuleId] = useState(0);
    const [unitId, setUnitId] = useState(0);
    const [qualId, setQualId] = useState(0);

    const [curriculumStructureMode, setCurriculumStructureMode] = useState<CurriculumStructureModeType>('general_modules');

    const addStandardCurriculumData = useSelector(getAddStandardCurriculumData);

    const specialities = useSelector(getSpecialtiesData);
    const specialitiesIsLoading = useSelector(getSpecialtiesIsLoading);
    const specialitiesError = useSelector(getSpecialtiesError);

    const qualificationsIsLoading = useSelector(getQualificationsIsLoading);
    const qualificationsError = useSelector(getQualificationsError);

    const coreOptionsIsLoading = useSelector(getSettingsMainCollegeIsLoading);
    const coreOptionsError = useSelector(getSettingsMainCollegeError);

    const modulesIsLoading = useSelector(getEduModulesIsLoading);
    const modulesError = useSelector(getEduModulesError);
    const unitsIsLoading = useSelector(getEduUnitsIsLoading);
    const unitsError = useSelector(getEduUnitsError);

    const onChangeSelectSpecialityId = (value: string, columnName: string) => {
        const filteredModule = specialities!.data.filter((speciality) => speciality.speciality === value)[0];

        dispatch(addStandardCurriculumActions.setSpecialityId(filteredModule.id_spec));
    };

    const onChangeSort = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addStandardCurriculumActions.setSort(Number(event.target.value)));
    };

    const onChangeDate = (date: Date | null) => {
        dispatch(addStandardCurriculumActions.setDate(date ? format(new Date(date), 'yyyy-MM-dd') : null));
    };

    const onDeleteModuleFromGeneralModulesHandler = useCallback((eduModuleId: number) => {
        dispatch(addStandardCurriculumActions.deleteModuleFromGeneralModules(eduModuleId));
    }, [dispatch]);

    const onDeleteModuleFromQualificationStructureHandler = useCallback((qualId: number, eduModuleId: number) => {
        dispatch(addStandardCurriculumActions.deleteModuleFromQualificationStructure([qualId, eduModuleId]));
    }, [dispatch]);

    const onDeleteModuleUnitFromGeneralModulesHandler = useCallback((eduModuleId: number, eduUnitId: number) => {
        dispatch(addStandardCurriculumActions.deleteUnitFromGeneralModulesModule([eduModuleId, eduUnitId]));
    }, [dispatch]);

    const onDeleteModuleUnitFromQualificationStructureHandler = useCallback((qualId: number, eduModuleId: number, eduUnitId: number) => {
        dispatch(addStandardCurriculumActions.deleteUnitFromQualificationModuleStructure([qualId, eduModuleId, eduUnitId]));
    }, [dispatch]);

    const onDeleteQualificationFromStructureHandler = useCallback((qualId: number) => {
        dispatch(addStandardCurriculumActions.deleteQualificationFromStructure(qualId));
    }, [dispatch]);

    const onShowReturnBackModal = useCallback(() => {
        setReturnBackModalVisible(true);
    }, []);

    async function addNewCurricula() {
        const result = await dispatch(addStandardCurriculum());

        if (result.meta.requestStatus === 'rejected') {
            setFormWithErrors(true);
        }

        return result.payload;
    }

    async function addNewQualifications(resultStandardCurriculum: StandardCurriculumType) {
        const qualificationsPromises = addStandardCurriculumData!.structure.qualifications
            .map((qualification) => dispatch(addStandardCurriculumQualifications([
                resultStandardCurriculum.standard_curriculum_id,
                qualification,
            ]))
                .then((resultQualifications) => resultQualifications.meta.requestStatus)
                .catch((err) => addToast(Toast.success(err.message))));

        const status = await Promise.all(qualificationsPromises);
        return status;
    }

    async function addNewModules(resultStandardCurriculum: StandardCurriculumType) {
        const generalModulesPromises = addStandardCurriculumData!.structure.general_modules
            .map((module) => dispatch(addStandardCurriculumModules([
                resultStandardCurriculum.standard_curriculum_id,
                // @ts-ignore
                {
                    ...module,
                    standard_curriculum_id: resultStandardCurriculum.standard_curriculum_id,
                },
            ]))
                .then((resultModules) => resultModules.meta.requestStatus)
                .catch((err) => addToast(Toast.success(err.message))));

        const status = await Promise.all(generalModulesPromises);
        return status;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);
        setLoading(true);

        if (form.checkValidity()) {
            if (addStandardCurriculumData?.general_info.speciality_id
                && addStandardCurriculumData.general_info.sort
                && addStandardCurriculumData?.structure.general_modules.length
                && addStandardCurriculumData.structure.qualifications.length
            ) {
                const resultStandardCurriculum = await addNewCurricula();
                const resultQualifications = await addNewQualifications(resultStandardCurriculum as StandardCurriculumType);
                const resultModules = await addNewModules(resultStandardCurriculum as StandardCurriculumType);

                const qualificationsRejectedStatuses = resultQualifications.filter((status) => status === 'rejected');
                const modulesRejectedStatuses = resultModules.filter((status) => status === 'rejected');

                if (qualificationsRejectedStatuses.length || modulesRejectedStatuses.length) {
                    addToast(Toast.error('ТУП создан некорректно, присутствуют неверные поля, попробуйте заново'));
                    dispatch(deleteStandardCurriculum(String((resultStandardCurriculum as StandardCurriculumType).standard_curriculum_id)));
                    setFormWithErrors(true);
                    setLoading(false);
                    return;
                }

                dispatch(addStandardCurriculumActions.clearData());
                addToast(Toast.success('Типовой учебный план успешно добавлен'));
                navigate(getRouteStandardCurriculum());
                dispatch(fetchStandardCurriculum());
                setLoading(false);
            } else {
                addToast(Toast.error('Необходимо заполнить все поля'));
                setFormWithErrors(true);
                setLoading(false);
            }
        }
    };

    let generalInfo;

    if (specialitiesIsLoading) {
        generalInfo = (
            <Skeleton
                width="50%"
                height="350px"
                border="4px"
                className={cls.blockItem}
            />
        );
    } else if (specialitiesError) {
        generalInfo = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.blockItem}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        generalInfo = (
            <StandardCurriculumGeneralInfo
                className={cls.blockItem}
                searchSelectActiveValue={addStandardCurriculumData && specialities && addStandardCurriculumData.general_info.speciality_id
                    ? specialities.data!.filter((speciality) => (
                        speciality.id_spec === addStandardCurriculumData?.general_info.speciality_id
                    ))[0].speciality
                    : 'null'}
                onChangeSearchSelect={onChangeSelectSpecialityId}
                sortValue={String(addStandardCurriculumData?.general_info.sort) || ''}
                onChangeSort={onChangeSort}
                dateValue={addStandardCurriculumData && addStandardCurriculumData.general_info.date_of_order
                    ? new Date(addStandardCurriculumData?.general_info.date_of_order)
                    : null}
                onChangeDate={onChangeDate}
            />
        );
    }

    let qualificationsBlock;

    if (qualificationsIsLoading) {
        qualificationsBlock = (
            <Skeleton
                width="50%"
                height="350px"
                border="4px"
                className={cls.blockItem}
            />
        );
    } else if (qualificationsError) {
        qualificationsBlock = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.blockItem}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        qualificationsBlock = (
            <StandardCurriculumQualifications
                className={cls.blockItem}
                data={addStandardCurriculumData}
            />
        );
    }

    return (
        <>
            <CForm
                className={classNames(cls.AddStandardCurriculum, {}, [className])}
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
                <div className={classNames(cls.blockWrapper, {}, [cls.top])}>
                    {generalInfo}
                    {qualificationsBlock}
                </div>
                <div className={classNames(cls.blockWrapper, {}, [cls.middle])}>
                    <StandardCurriculumStructure
                        className={cls.blockItem}
                        setAddModuleModalVisible={setAddModuleModalVisible}
                        setAddModuleUnitModalVisible={setAddModuleUnitModalVisible}
                        setAddQualificationModalVisible={setAddQualificationModalVisible}
                        setEditModuleModalVisible={setEditModuleModalVisible}
                        setEditModuleUnitModalVisible={setEditModuleUnitModalVisible}
                        setEditQualificationModalVisible={setEditQualificationModalVisible}
                        onDeleteModuleFromGeneralModulesHandler={onDeleteModuleFromGeneralModulesHandler}
                        onDeleteModuleFromQualificationStructureHandler={onDeleteModuleFromQualificationStructureHandler}
                        onDeleteModuleUnitFromGeneralModulesHandler={onDeleteModuleUnitFromGeneralModulesHandler}
                        onDeleteModuleUnitFromQualificationStructureHandler={onDeleteModuleUnitFromQualificationStructureHandler}
                        onDeleteQualificationFromStructureHandler={onDeleteQualificationFromStructureHandler}
                        data={addStandardCurriculumData}
                        setModuleId={setModuleId}
                        setUnitId={setUnitId}
                        setQualId={setQualId}
                        setCurriculumStructureMode={setCurriculumStructureMode}
                        isLoading={modulesIsLoading || unitsIsLoading || specialitiesIsLoading || qualificationsIsLoading || coreOptionsIsLoading}
                        error={modulesError || unitsError || specialitiesError || qualificationsError || coreOptionsError}
                    />
                </div>
                <div className={classNames(cls.blockWrapper, {}, [cls.bottom])}>
                    <div className={cls.blockItem}>
                        <div className={cls.btnWrapper}>
                            {(formWithErrors) && (
                                <Text
                                    size={TextSize.M}
                                    weight={TextWeight.SEMIBOLD}
                                    theme={TextTheme.ERROR}
                                >
                                    Форма заполнена некорректно
                                </Text>
                            )}
                        </div>
                        <div className={cls.btnWrapper}>
                            <Button
                                className={cls.btn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onShowReturnBackModal}
                            >
                                <Text
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Назад к списку
                                </Text>
                            </Button>
                            <Button
                                className={cls.btn}
                                type="submit"
                                disabled={loading}
                            >
                                <Text
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Сохранить
                                </Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </CForm>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />

            <AddStandardCurriculumModuleModal
                visible={addModuleModalVisible}
                setVisible={setAddModuleModalVisible}
                data={addStandardCurriculumData}
                mode="add"
                structureMode={curriculumStructureMode}
                qualId={qualId}
            />

            <AddStandardCurriculumModuleUnitModal
                visible={addModuleUnitModalVisible}
                setVisible={setAddModuleUnitModalVisible}
                data={addStandardCurriculumData}
                moduleId={moduleId}
                mode="add"
                structureMode={curriculumStructureMode}
                qualId={qualId}
            />

            <AddStandardCurriculumQualificationModal
                visible={addQualificationModalVisible}
                setVisible={setAddQualificationModalVisible}
                data={addStandardCurriculumData}
                mode="add"
            />

            <EditStandardCurriculumModuleModal
                visible={editModuleModalVisible}
                setVisible={setEditModuleModalVisible}
                data={addStandardCurriculumData}
                moduleId={moduleId}
                qualId={qualId}
                mode="add"
                structureMode={curriculumStructureMode}
            />

            <EditStandardCurriculumModuleUnitModal
                visible={editModuleUnitModalVisible}
                setVisible={setEditModuleUnitModalVisible}
                data={addStandardCurriculumData}
                qualId={qualId}
                moduleId={moduleId}
                unitId={unitId}
                mode="add"
                structureMode={curriculumStructureMode}
            />

            <EditStandardCurriculumQualificationModal
                visible={editQualificationModalVisible}
                setVisible={setEditQualificationModalVisible}
                data={addStandardCurriculumData}
                mode="add"
                qualId={qualId}
            />

            <StandardCurriculumReturnBackModal
                visible={returnBackModalVisible}
                setVisible={setReturnBackModalVisible}
            />
        </>
    );
};
