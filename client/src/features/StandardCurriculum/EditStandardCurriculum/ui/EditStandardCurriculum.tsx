import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    AddStandardCurriculumModuleModal,
    AddStandardCurriculumModuleUnitModal,
    AddStandardCurriculumQualificationModal,
    EditStandardCurriculumModuleModal,
    EditStandardCurriculumModuleUnitModal,
    EditStandardCurriculumQualificationModal,
    StandardCurriculumGeneralInfo,
    StandardCurriculumQualifications,
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
    CurriculumStructureModeType,
    editStandardCurriculumActions,
} from 'features/StandardCurriculum/EditStandardCurriculum';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { getRouteStandardCurriculum } from 'shared/const/router';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import {
    deleteStandardCurriculum,
    DeleteStandardCurriculum,
    deleteStandardCurriculumModules,
    deleteStandardCurriculumModuleUnit,
    deleteStandardCurriculumQualification,
} from 'features/StandardCurriculum/DeleteStandardCurriculum';
import { fetchStandardCurriculumDetail, getStandardCurriculumDetailData } from 'entities/StandardCurriculumDetail';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import {
    addStandardCurriculumModules,
    addStandardCurriculumModuleUnit,
    addStandardCurriculumQualifications,
} from 'features/StandardCurriculum/AddStandardCurriculum';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getEditStandardCurriculumNewFields,
} from '../model/selectors/getEditStandardCurriculumNewFields/getEditStandardCurriculumNewFields';
import { editStandardCurriculum } from '../model/services/editStandardCurriculum/editStandardCurriculum';
import {
    editStandardCurriculumQualifications,
} from '../model/services/editStandardCurriculumQualifications/editStandardCurriculumQualifications';
import cls from './EditStandardCurriculum.module.scss';
import {
    getEditStandardCurriculumData,
} from '../model/selectors/getEditStandardCurriculumData/getEditStandardCurriculumData';
import {
    editStandardCurriculumModules,
} from '../model/services/editStandardCurriculumModules/editStandardCurriculumModules';
import {
    EditStandardCurriculumModule,
    EditStandardCurriculumQualification,
    EditStandardCurriculumUnit,
} from '../model/types/editStandardCurriculum';
import { getModulesToDelete } from '../model/selectors/getModulesToDelete/getModulesToDelete';
import { getModuleUnitsToDelete } from '../model/selectors/getModuleUnitsToDelete/getModuleUnitsToDelete';
import { getQualificationsToDelete } from '../model/selectors/getQualificationsToDelete/getQualificationsToDelete';

interface EditStandardCurriculumProps {
    className?: string;
}
export const EditStandardCurriculum = (props: EditStandardCurriculumProps) => {
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
    const { pathname } = useLocation();

    const [addModuleModalVisible, setAddModuleModalVisible] = useState(false);
    const [addModuleUnitModalVisible, setAddModuleUnitModalVisible] = useState(false);
    const [addQualificationModalVisible, setAddQualificationModalVisible] = useState(false);

    const [editModuleModalVisible, setEditModuleModalVisible] = useState(false);
    const [editModuleUnitModalVisible, setEditModuleUnitModalVisible] = useState(false);
    const [editQualificationModalVisible, setEditQualificationModalVisible] = useState(false);

    const [visibleDeleteStandardCurriculum, setVisibleDeleteStandardCurriculum] = useState(false);
    const standardCurriculumDetail = excludePropertiesFromObject(
        useSelector(getStandardCurriculumDetailData),
        ['modules', 'qualifications'],
    );

    const [moduleId, setModuleId] = useState(0);
    const [unitId, setUnitId] = useState(0);
    const [qualId, setQualId] = useState(0);

    const curriculumPathnameItems = pathname.split('/');
    const curriculumId = curriculumPathnameItems[curriculumPathnameItems.length - 1];

    const [curriculumStructureMode, setCurriculumStructureMode] = useState<CurriculumStructureModeType>('general_modules');

    const editStandardCurriculumNewFields = useSelector(getEditStandardCurriculumNewFields);
    const editStandardCurriculumData = useSelector(getEditStandardCurriculumData);

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

    const modulesToDelete = useSelector(getModulesToDelete);
    const moduleUnitsToDelete = useSelector(getModuleUnitsToDelete);
    const qualificationsToDelete = useSelector(getQualificationsToDelete);

    const onChangeSelectSpecialityId = (value: string, columnName: string) => {
        const filteredModule = specialities!.data.filter((speciality) => speciality.speciality === value)[0];

        dispatch(editStandardCurriculumActions.setSpecialityId([
            'newFields', filteredModule.id_spec,
        ]));
    };

    const onChangeSort = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editStandardCurriculumActions.setSort([
            'newFields', Number(event.target.value),
        ]));
    };

    const onChangeDate = (date: Date | null) => {
        dispatch(editStandardCurriculumActions.setDate([
            'newFields', date ? format(new Date(date), 'yyyy-MM-dd') : null,
        ]));
    };

    const onDeleteModuleFromGeneralModulesHandler = useCallback((eduModuleId: number) => {
        dispatch(editStandardCurriculumActions.deleteModuleFromGeneralModules(eduModuleId));
    }, [dispatch]);

    const onDeleteModuleFromQualificationStructureHandler = useCallback((qualId: number, eduModuleId: number) => {
        dispatch(editStandardCurriculumActions.deleteModuleFromQualificationStructure([qualId, eduModuleId]));
    }, [dispatch]);

    const onDeleteModuleUnitFromGeneralModulesHandler = useCallback((eduModuleId: number, eduUnitId: number) => {
        dispatch(editStandardCurriculumActions.deleteUnitFromGeneralModulesModule([eduModuleId, eduUnitId]));
    }, [dispatch]);

    const onDeleteModuleUnitFromQualificationStructureHandler = useCallback((qualId: number, eduModuleId: number, eduUnitId: number) => {
        dispatch(editStandardCurriculumActions.deleteUnitFromQualificationModuleStructure([qualId, eduModuleId, eduUnitId]));
    }, [dispatch]);

    const onDeleteQualificationFromStructureHandler = useCallback((qualId: number) => {
        dispatch(editStandardCurriculumActions.deleteQualificationFromStructure(qualId));
    }, [dispatch]);

    const onShowReturnBackModal = useCallback(() => {
        navigate(getRouteStandardCurriculum());
    }, [navigate]);

    const onShowDeleteStandardCurriculumModal = useCallback(() => {
        setVisibleDeleteStandardCurriculum(true);
    }, []);

    const resetValues = useCallback(() => {
        const data = clearObject(editStandardCurriculumData, editStandardCurriculumNewFields);

        if (!isEmptyObject(data)) {
            dispatch(editStandardCurriculumActions.clearData());
            addToast(Toast.success('Изменения успешно отменены'));
        }
    }, [dispatch, editStandardCurriculumData, editStandardCurriculumNewFields]);

    async function editCurricula() {
        const result = await dispatch(editStandardCurriculum(standardCurriculumDetail.standard_curriculum_id));

        if (result.meta.requestStatus === 'rejected') {
            setFormWithErrors(true);
        }

        return result.payload;
    }

    async function editQualifications() {
        const filteredQualifications = editStandardCurriculumNewFields!.structure.qualifications
            .filter((qualification) => qualification.standard_curriculum_qualification_id !== null);

        const qualificationsPromises = filteredQualifications
            .map((qualification) => dispatch(editStandardCurriculumQualifications([
                standardCurriculumDetail.standard_curriculum_id,
                qualification,
            ]))
                .then((resultQualifications) => resultQualifications.meta.requestStatus)
                .catch((err) => addToast(Toast.success(err.message))));

        const status = await Promise.all(qualificationsPromises);
        return status;
    }

    async function editModules() {
        const filteredModules = editStandardCurriculumNewFields!.structure.general_modules
            .filter((module) => module.standard_curriculum_module_id && module.standard_curriculum_module_id !== null);

        const generalModulesPromises = filteredModules
            .map((module) => dispatch(editStandardCurriculumModules([
                standardCurriculumDetail.standard_curriculum_id,
                {
                    ...module,
                    standard_curriculum_id: standardCurriculumDetail.standard_curriculum_id,
                },
            ]))
                .then((resultModules) => resultModules.meta.requestStatus)
                .catch((err) => addToast(Toast.success(err.message))));

        const status = await Promise.all(generalModulesPromises);
        return status;
    }

    async function addNewModules(filteredModules: EditStandardCurriculumModule[]) {
        const generalModulesPromises = filteredModules
            .map((module) => dispatch(addStandardCurriculumModules([
                standardCurriculumDetail.standard_curriculum_id,
                {
                    ...module,
                    standard_curriculum_id: standardCurriculumDetail.standard_curriculum_id,
                },
            ]))
                .then((resultModules) => resultModules)
                .catch((err) => addToast(Toast.success(err.message))));

        const status = await Promise.all(generalModulesPromises);
        return status;
    }

    async function addNewQualifications(filteredQualifications: EditStandardCurriculumQualification[]) {
        const qualificationsPromises = filteredQualifications
            .map((qualification) => dispatch(addStandardCurriculumQualifications([
                standardCurriculumDetail.standard_curriculum_id,
                qualification,
            ]))
                .then((resultQualifications) => resultQualifications)
                .catch((err) => addToast(Toast.success(err.message))));

        const status = await Promise.all(qualificationsPromises);
        return status;
    }

    async function addNewUnits(unit: EditStandardCurriculumUnit, moduleId: number) {
        dispatch(addStandardCurriculumModuleUnit([
            standardCurriculumDetail.standard_curriculum_id,
            moduleId,
            unit,
        ]))
            .then((resultUnits) => resultUnits)
            .catch((err) => addToast(Toast.success(err.message)));
    }

    async function deleteModules(moduleId: number) {
        dispatch(deleteStandardCurriculumModules([
            standardCurriculumDetail.standard_curriculum_id,
            moduleId,
        ]))
            .then((resultDeleteModules) => resultDeleteModules)
            .catch((err) => addToast(Toast.success(err.message)));
    }

    async function deleteModuleUnits(moduleId: number, unitId: number) {
        dispatch(deleteStandardCurriculumModuleUnit([
            standardCurriculumDetail.standard_curriculum_id,
            moduleId,
            unitId,
        ]))
            .then((resultDeleteModules) => resultDeleteModules)
            .catch((err) => addToast(Toast.success(err.message)));
    }

    async function deleteQualifications(qualId: number) {
        dispatch(deleteStandardCurriculumQualification([
            standardCurriculumDetail.standard_curriculum_id,
            qualId,
        ]))
            .then((resultDeleteModules) => resultDeleteModules)
            .catch((err) => addToast(Toast.success(err.message)));
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
            const data = clearObject(editStandardCurriculumData, editStandardCurriculumNewFields);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
                setLoading(false);
            } else {
                setLoading(true);
                const resultEditStandardCurriculum = await editCurricula();
                const resultEditQualifications = await editQualifications();
                const resultEditModules = await editModules();

                const qualificationsRejectedStatuses = resultEditQualifications.filter((status) => status === 'rejected');
                const modulesRejectedStatuses = resultEditModules.filter((status) => status === 'rejected');

                if (qualificationsRejectedStatuses.length || modulesRejectedStatuses.length) {
                    addToast(Toast.error('ТУП отредактирован некорректно, присутствуют неверные поля, попробуйте заново'));
                    setFormWithErrors(true);
                    setLoading(false);
                    return;
                }

                const filteredModules = editStandardCurriculumNewFields!.structure.general_modules
                    .filter((module) => module.standard_curriculum_module_id === null);

                const filteredModulesInQualifications: EditStandardCurriculumModule[] = [];

                editStandardCurriculumNewFields!.structure.qualifications.forEach((qualification) => {
                    if (qualification.standard_curriculum_qualification_id) {
                        qualification.modules.forEach((module) => {
                            if (module.standard_curriculum_module_id === null) {
                                filteredModulesInQualifications.push({
                                    ...module,
                                    standard_curriculum_qualification_id: qualification.standard_curriculum_qualification_id,
                                });
                            }
                        });
                    }
                });

                const filteredQualifications = editStandardCurriculumNewFields!.structure.qualifications
                    .filter((qualification) => qualification.standard_curriculum_qualification_id === null);

                editStandardCurriculumNewFields!.structure.general_modules
                    .forEach((module) => {
                        if (module.standard_curriculum_module_id !== null) {
                            module.units.forEach((unit) => {
                                if (unit.standard_curriculum_module_id === null) {
                                    addNewUnits(unit, module.standard_curriculum_module_id!);
                                }
                            });
                        }
                    });

                editStandardCurriculumNewFields!.structure.qualifications
                    .forEach((qualification) => {
                        if (qualification.standard_curriculum_qualification_id !== null) {
                            qualification.modules.forEach((module) => {
                                if (module.standard_curriculum_module_id !== null) {
                                    module.units.forEach((unit) => {
                                        if (unit.standard_curriculum_module_id === null) {
                                            addNewUnits(unit, module.standard_curriculum_module_id!);
                                        }
                                    });
                                }
                            });
                        }
                    });

                if (filteredModules.length) {
                    const resultAddModules = await addNewModules(filteredModules);
                }

                if (filteredModulesInQualifications.length) {
                    const resultAddModulesInQualifications = await addNewModules(filteredModulesInQualifications);
                }

                if (filteredQualifications.length) {
                    const resultAddQualifications = await addNewQualifications(filteredQualifications);
                }

                if (modulesToDelete?.length) {
                    modulesToDelete.forEach((module) => {
                        deleteModules(module.standard_curriculum_module_id!);
                    });
                }

                if (moduleUnitsToDelete?.length) {
                    moduleUnitsToDelete.forEach((unit) => {
                        // @ts-ignore
                        deleteModuleUnits(unit.standard_curriculum_module_id!, unit.standard_curriculum_modules_unit_id);
                    });
                }

                if (qualificationsToDelete?.length) {
                    qualificationsToDelete.forEach((qualification) => {
                        deleteQualifications(qualification.standard_curriculum_qualification_id!);
                    });
                }

                setTimeout(() => {
                    addToast(Toast.success('Информация о ТУП успешно обновлена'));
                    dispatch(fetchStandardCurriculumDetail(curriculumId));
                    dispatch(editStandardCurriculumActions.clearData());
                    setLoading(false);
                }, 1000);
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
                searchSelectActiveValue={editStandardCurriculumNewFields && specialities && editStandardCurriculumNewFields.general_info.speciality_id
                    ? specialities.data!.filter((speciality) => (
                        speciality.id_spec === editStandardCurriculumNewFields?.general_info.speciality_id
                    ))[0].speciality
                    : 'null'}
                onChangeSearchSelect={onChangeSelectSpecialityId}
                sortValue={String(editStandardCurriculumNewFields?.general_info.sort) || ''}
                onChangeSort={onChangeSort}
                dateValue={editStandardCurriculumNewFields && editStandardCurriculumNewFields.general_info.date_of_order
                    ? new Date(editStandardCurriculumNewFields?.general_info.date_of_order)
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
                data={editStandardCurriculumNewFields}
            />
        );
    }

    return (
        <>
            <CForm
                className={classNames(cls.EditStandardCurriculum, {}, [className])}
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
                        data={editStandardCurriculumNewFields}
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
                            <Button
                                className={classNames(cls.btn, {}, [cls.deleteBtn])}
                                theme={ButtonTheme.ERROR}
                                onClick={onShowDeleteStandardCurriculumModal}
                                disabled={loading}
                            >
                                <Text
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Удалить
                                </Text>
                            </Button>
                        </div>
                        <div className={cls.btnWrapper}>
                            <Button
                                className={classNames(cls.btn, {}, [cls.defaultBtn])}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onShowReturnBackModal}
                                disabled={loading}
                            >
                                <Text
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Назад к списку
                                </Text>
                            </Button>
                            <Button
                                className={classNames(cls.btn, {}, [cls.defaultBtn])}
                                theme={ButtonTheme.OUTLINE}
                                onClick={resetValues}
                                disabled={loading}
                            >
                                <Text
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Отменить изменения
                                </Text>
                            </Button>
                            <Button
                                className={classNames(cls.btn, {}, [cls.saveBtn])}
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
                data={editStandardCurriculumNewFields}
                mode="edit"
                structureMode={curriculumStructureMode}
                qualId={qualId}
            />

            <AddStandardCurriculumModuleUnitModal
                visible={addModuleUnitModalVisible}
                setVisible={setAddModuleUnitModalVisible}
                data={editStandardCurriculumNewFields}
                moduleId={moduleId}
                mode="edit"
                structureMode={curriculumStructureMode}
                qualId={qualId}
            />

            <AddStandardCurriculumQualificationModal
                visible={addQualificationModalVisible}
                setVisible={setAddQualificationModalVisible}
                data={editStandardCurriculumNewFields}
                mode="edit"
            />

            <EditStandardCurriculumModuleModal
                visible={editModuleModalVisible}
                setVisible={setEditModuleModalVisible}
                data={editStandardCurriculumNewFields}
                moduleId={moduleId}
                qualId={qualId}
                mode="edit"
                structureMode={curriculumStructureMode}
            />

            <EditStandardCurriculumModuleUnitModal
                visible={editModuleUnitModalVisible}
                setVisible={setEditModuleUnitModalVisible}
                data={editStandardCurriculumNewFields}
                qualId={qualId}
                moduleId={moduleId}
                unitId={unitId}
                mode="edit"
                structureMode={curriculumStructureMode}
            />

            <EditStandardCurriculumQualificationModal
                visible={editQualificationModalVisible}
                setVisible={setEditQualificationModalVisible}
                data={editStandardCurriculumNewFields}
                mode="edit"
                qualId={qualId}
            />

            <DeleteStandardCurriculum
                standardCurriculum={standardCurriculumDetail as StandardCurriculumType}
                visible={visibleDeleteStandardCurriculum}
                setVisible={setVisibleDeleteStandardCurriculum}
                withReturnBack
            />

        </>
    );
};
