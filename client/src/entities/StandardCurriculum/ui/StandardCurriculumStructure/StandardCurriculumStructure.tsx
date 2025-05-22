import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import {
    CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CButton,
} from '@coreui/react';
import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import {
    AddStandardCurriculumData,
} from 'features/StandardCurriculum/AddStandardCurriculum/model/types/addStandardCurriculum';
import { useSelector } from 'react-redux';
import { getEduModulesData, getEduUnitsData } from 'entities/EducationalModules';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { getQualificationsData } from 'entities/Qualifications';
import { getSettingsMainCollegeData } from 'entities/Settings/SettingsMainCollege';
import { Button } from 'shared/ui/Button/Button';
import cls from './StandardCurriculumStructure.module.scss';

type CurriculumStructureModeType = 'general_modules' | 'qualifications';
interface StandardCurriculumStructureProps {
    className?: string;
    setAddModuleModalVisible: (value: boolean) => void;
    setAddModuleUnitModalVisible: (value: boolean) => void;
    setAddQualificationModalVisible: (value: boolean) => void;
    setEditModuleModalVisible: (value: boolean) => void;
    setEditModuleUnitModalVisible: (value: boolean) => void;
    setEditQualificationModalVisible: (value: boolean) => void;
    onDeleteModuleFromGeneralModulesHandler: (id: number) => void;
    onDeleteModuleFromQualificationStructureHandler: (qualId: number, moduleId: number) => void;
    onDeleteModuleUnitFromGeneralModulesHandler: (moduleId: number, unitId: number) => void;
    onDeleteModuleUnitFromQualificationStructureHandler: (qualId: number, moduleId: number, unitId: number) => void;
    onDeleteQualificationFromStructureHandler: (qualId: number) => void;
    setModuleId: (id: number) => void;
    setUnitId: (id: number) => void;
    setQualId: (id: number) => void;
    setCurriculumStructureMode: (mode: CurriculumStructureModeType) => void;
    isLoading?: boolean;
    error?: any;
    data?: AddStandardCurriculumData;
}
export const StandardCurriculumStructure = (props: StandardCurriculumStructureProps) => {
    const {
        className,
        setAddModuleModalVisible,
        setAddModuleUnitModalVisible,
        setAddQualificationModalVisible,
        setEditModuleModalVisible,
        setEditModuleUnitModalVisible,
        setEditQualificationModalVisible,
        onDeleteModuleFromGeneralModulesHandler,
        onDeleteModuleFromQualificationStructureHandler,
        onDeleteModuleUnitFromGeneralModulesHandler,
        onDeleteModuleUnitFromQualificationStructureHandler,
        onDeleteQualificationFromStructureHandler,
        setModuleId,
        setUnitId,
        setQualId,
        setCurriculumStructureMode,
        isLoading,
        error,
        data,
    } = props;

    const eduModules = useSelector(getEduModulesData);
    const eduModuleUnits = useSelector(getEduUnitsData);
    const qualifications = useSelector(getQualificationsData);
    const coreOptions = useSelector(getSettingsMainCollegeData);

    const creditInHours = coreOptions?.knrtu_kai.options.filter((option) => option.name === 'credit_in_hours')[0];

    const filteredQualifications = qualifications?.data
        .filter((qualification) => qualification.specialty_id === data?.general_info.speciality_id);

    const onShowAddNewModuleModal = useCallback((structureMode: CurriculumStructureModeType, qualId?: number) => {
        setAddModuleModalVisible(true);
        setCurriculumStructureMode(structureMode);
        if (structureMode === 'qualifications') {
            setQualId(qualId!);
        }
    }, [setAddModuleModalVisible, setCurriculumStructureMode, setQualId]);

    const onShowAddNewModuleUnitModal = useCallback((eduModuleId: number, structureMode: CurriculumStructureModeType, qualId?: number) => {
        setAddModuleUnitModalVisible(true);
        setModuleId(eduModuleId);
        setCurriculumStructureMode(structureMode);
        if (structureMode === 'qualifications') {
            setQualId(qualId!);
        }
    }, [setAddModuleUnitModalVisible, setCurriculumStructureMode, setModuleId, setQualId]);

    const onShowAddNewQualificationModal = useCallback(() => {
        setAddQualificationModalVisible(true);
    }, [setAddQualificationModalVisible]);

    const onShowEditModuleModal = useCallback((id: number, structureMode: CurriculumStructureModeType, qualId?: number) => {
        setEditModuleModalVisible(true);
        setModuleId(id);
        setCurriculumStructureMode(structureMode);
        if (structureMode === 'qualifications') {
            setQualId(qualId!);
        }
    }, [setCurriculumStructureMode, setEditModuleModalVisible, setModuleId, setQualId]);

    const onShowEditModuleUnitModal = useCallback((
        moduleId: number,
        unitId: number,
        structureMode: CurriculumStructureModeType,
        qualId?: number,
    ) => {
        setEditModuleUnitModalVisible(true);
        setModuleId(moduleId);
        setUnitId(unitId);
        setCurriculumStructureMode(structureMode);
        if (structureMode === 'qualifications') {
            setQualId(qualId!);
        }
    }, [setCurriculumStructureMode, setEditModuleUnitModalVisible, setModuleId, setQualId, setUnitId]);

    const onShowEditQualificationModal = useCallback((id: number) => {
        setEditQualificationModalVisible(true);
        setQualId(id);
    }, [setEditQualificationModalVisible, setQualId]);

    let content;

    if (isLoading) {
        content = (
            <Skeleton width="100%" height={300} border="4px" />
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <div className={classNames(cls.StandardCurriculumStructure, {}, [className, 'accordion-custom'])}>
                <Text
                    weight={TextWeight.MEDIUM}
                    className={cls.title}
                >
                    Структура учебного плана
                </Text>

                <div className={cls.content}>
                    <CAccordion
                        className={classNames(cls.accordion, {}, [cls.modulesAccordion])}
                    >
                        <CAccordionItem
                            className={classNames(cls.accordionItem, {}, [cls.modulesAccordionItem])}
                        >
                            <CAccordionHeader
                                className={classNames(cls.accordionHeader, {}, [cls.modulesAccordionHeader])}
                            >
                                <div className={cls.cell}>
                                    <Text
                                        size={TextSize.XS}
                                        className={cls.accordionTitle}
                                    >
                                        Общие образовательные модули
                                    </Text>
                                </div>
                            </CAccordionHeader>
                            <CAccordionBody className={classNames(cls.accordionBody, {}, [cls.modulesAccordionBody])}>
                                {
                                    data?.structure.general_modules?.map((module) => (
                                        <CAccordion
                                            className={classNames(cls.accordion, {}, [cls.accordionInner])}
                                            key={module.educational_module_id}
                                        >
                                            <CAccordionItem
                                                className={classNames(cls.accordionItem, {}, [])}
                                            >
                                                <CAccordionHeader
                                                    className={classNames(cls.accordionHeader, {}, [])}
                                                >
                                                    <div className={cls.cell}>
                                                        <Text
                                                            size={TextSize.XS}
                                                            className={cls.accordionTitle}
                                                        >
                                                            {eduModules?.filter((allModule) => (
                                                                allModule.module_id === module.educational_module_id
                                                            ))[0].name}
                                                        </Text>
                                                    </div>
                                                    <div className={cls.cell}>
                                                        <Text
                                                            size={TextSize.XS}
                                                            weight={TextWeight.MEDIUM}
                                                            className={cls.accordionSort}
                                                        >
                                                            {module.sort}
                                                        </Text>
                                                    </div>
                                                    <div className={classNames(cls.cell, {}, [cls.bubbles])}>
                                                        <div className={classNames(
                                                            cls.bubble,
                                                            {
                                                                [cls.greenBubble]: module.has_in_basic_education,
                                                                [cls.redBubble]: !module.has_in_basic_education,
                                                            },
                                                            [],
                                                        )}
                                                        >
                                                            <Text
                                                                size={TextSize.XXS}
                                                            >
                                                                На базе 9 классов -
                                                                {' '}
                                                                {module.has_in_basic_education ? 'Да' : 'Нет'}
                                                            </Text>
                                                        </div>
                                                        <div className={classNames(
                                                            cls.bubble,
                                                            {
                                                                [cls.greenBubble]: module.has_in_general_education,
                                                                [cls.redBubble]: !module.has_in_general_education,
                                                            },
                                                            [],
                                                        )}
                                                        >
                                                            <Text
                                                                size={TextSize.XXS}
                                                            >
                                                                На базе 11 классов -
                                                                {' '}
                                                                {module.has_in_general_education ? 'Да' : 'Нет'}
                                                            </Text>
                                                        </div>
                                                    </div>
                                                    <div className={cls.cell}>
                                                        <button
                                                            type="button"
                                                            className={classNames(cls.cellBtn, {}, [cls.editBtn])}
                                                            onClick={() => {
                                                                onShowEditModuleModal(module.educational_module_id!, 'general_modules');
                                                            }}
                                                        >
                                                            <FontAwesomeIcon icon={faPenToSquare} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={classNames(cls.cellBtn, {}, [cls.deleteBtn])}
                                                            onClick={() => {
                                                                onDeleteModuleFromGeneralModulesHandler(module.educational_module_id!);
                                                            }}
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                    </div>
                                                </CAccordionHeader>
                                                <CAccordionBody className={classNames(cls.accordionBody, {}, [])}>
                                                    {
                                                        module.units.map((unit) => (
                                                            <CAccordion
                                                                className={classNames(
                                                                    cls.accordion,
                                                                    {},
                                                                    [cls.accordionInnerSecond],
                                                                )}
                                                                key={unit.educational_modules_unit_id}
                                                            >
                                                                <CAccordionItem
                                                                    className={
                                                                        classNames(
                                                                            cls.accordionItem,
                                                                            {},
                                                                            [cls.moduleUnitsAccordionItem],
                                                                        )
                                                                    }
                                                                >
                                                                    <CAccordionHeader
                                                                        className={
                                                                            classNames(
                                                                                cls.accordionHeader,
                                                                                {},
                                                                                [cls.moduleUnitsAccordionHeader],
                                                                            )
                                                                        }
                                                                    >
                                                                        <div className={cls.cell}>
                                                                            <Text
                                                                                size={TextSize.XS}
                                                                                className={cls.accordionTitle}
                                                                            >
                                                                                {
                                                                                    unit.educational_modules_unit_id
                                                                                        ? eduModuleUnits?.filter((allUnit) => (
                                                                                            allUnit
                                                                                                .unit_id === unit
                                                                                                .educational_modules_unit_id
                                                                                        ))[0].name : 'Нет'
                                                                                }
                                                                            </Text>
                                                                        </div>
                                                                        <div className={cls.cell}>
                                                                            <Text
                                                                                size={TextSize.XS}
                                                                                weight={TextWeight.MEDIUM}
                                                                                className={cls.accordionSort}
                                                                            >
                                                                                {unit.sort}
                                                                            </Text>
                                                                        </div>
                                                                        <div className={classNames(cls.cell, {}, [cls.bubbles])}>
                                                                            <div className={classNames(
                                                                                cls.bubble,
                                                                                {
                                                                                    [cls.greenBubble]: unit.has_in_basic_education,
                                                                                    [cls.redBubble]: !unit.has_in_basic_education,
                                                                                },
                                                                                [],
                                                                            )}
                                                                            >
                                                                                <Text
                                                                                    size={TextSize.XXS}
                                                                                >
                                                                                    На базе 9 классов -
                                                                                    {' '}
                                                                                    {unit.has_in_basic_education ? 'Да' : 'Нет'}
                                                                                </Text>
                                                                            </div>
                                                                            <div className={classNames(
                                                                                cls.bubble,
                                                                                {
                                                                                    [cls.greenBubble]: unit.has_in_general_education,
                                                                                    [cls.redBubble]: !unit.has_in_general_education,
                                                                                },
                                                                                [],
                                                                            )}
                                                                            >
                                                                                <Text
                                                                                    size={TextSize.XXS}
                                                                                >
                                                                                    На базе 11 классов -
                                                                                    {' '}
                                                                                    {unit.has_in_general_education ? 'Да' : 'Нет'}
                                                                                </Text>
                                                                            </div>
                                                                        </div>
                                                                        <div className={cls.cell}>
                                                                            <button
                                                                                type="button"
                                                                                className={classNames(cls.cellBtn, {}, [cls.editBtn])}
                                                                                onClick={() => {
                                                                                    onShowEditModuleUnitModal(
                                                                                        module.educational_module_id!,
                                                                                        unit.educational_modules_unit_id!,
                                                                                        'general_modules',
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                className={classNames(cls.cellBtn, {}, [cls.deleteBtn])}
                                                                                onClick={() => {
                                                                                    onDeleteModuleUnitFromGeneralModulesHandler(
                                                                                        module.educational_module_id!,
                                                                                        unit.educational_modules_unit_id!,
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <FontAwesomeIcon icon={faTrash} />
                                                                            </button>
                                                                        </div>
                                                                    </CAccordionHeader>
                                                                </CAccordionItem>
                                                            </CAccordion>
                                                        ))
                                                    }

                                                    {
                                                        eduModuleUnits?.filter((unit) => unit.module_id === module.educational_module_id)
                                                            .length
                                                        && (
                                                            eduModuleUnits?.filter((unit) => unit
                                                                .module_id === module
                                                                .educational_module_id)
                                                                .length !== module.units.length)
                                                            ? (
                                                                <Button
                                                                    className={classNames(cls.btnAdd, {}, [cls.innerBtnAdd])}
                                                                    onClick={() => {
                                                                        onShowAddNewModuleUnitModal(module.educational_module_id!, 'general_modules');
                                                                    }}
                                                                >
                                                                    <Text
                                                                        size={TextSize.XS}
                                                                    >
                                                                        Добавить модульную единицу
                                                                    </Text>
                                                                </Button>
                                                            ) : ''
                                                    }

                                                </CAccordionBody>
                                            </CAccordionItem>
                                        </CAccordion>
                                    ))
                                }

                                {
                                    data?.structure.general_modules?.length === eduModules?.length
                                        ? ''
                                        : (
                                            <Button
                                                className={classNames(cls.btnAdd, {}, [cls.btnAddParent])}
                                                onClick={() => { onShowAddNewModuleModal('general_modules'); }}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                >
                                                    Добавить модуль
                                                </Text>
                                            </Button>
                                        )
                                }
                            </CAccordionBody>
                        </CAccordionItem>
                    </CAccordion>

                    <CAccordion
                        className={classNames(cls.accordion, {}, [cls.qualificationsAccordion])}
                    >
                        <CAccordionItem
                            className={classNames(cls.accordionItem, {}, [cls.modulesAccordionItem])}
                        >
                            <CAccordionHeader
                                className={classNames(cls.accordionHeader, {}, [cls.modulesAccordionHeader])}
                            >
                                <Text
                                    size={TextSize.XS}
                                >
                                    Квалификации
                                </Text>
                            </CAccordionHeader>
                            <CAccordionBody className={classNames(cls.accordionBody, {}, [cls.modulesAccordionBody])}>
                                {
                                    data?.structure.qualifications.map((qualification) => (
                                        <CAccordion
                                            className={classNames(cls.accordion, {}, [cls.accordionInner])}
                                            key={qualification.qualification_id}
                                        >
                                            <CAccordionItem
                                                className={classNames(cls.accordionItem, {}, [])}
                                            >
                                                <CAccordionHeader
                                                    className={classNames(cls.accordionHeader, {}, [])}
                                                >
                                                    <div className={cls.cell}>
                                                        <Text
                                                            size={TextSize.XS}
                                                            className={cls.accordionTitle}
                                                        >
                                                            Квалификация
                                                            {' '}
                                                            {qualifications?.data.filter((allQual) => (
                                                                allQual.id_qual === qualification.qualification_id
                                                            ))[0].shifr_qual}
                                                            {' '}
                                                            -
                                                            {' '}
                                                            {qualifications?.data.filter((allQual) => (
                                                                allQual.id_qual === qualification.qualification_id
                                                            ))[0].qualification}
                                                        </Text>
                                                    </div>
                                                    <div className={cls.cell}>
                                                        <Text
                                                            size={TextSize.XS}
                                                            weight={TextWeight.MEDIUM}
                                                            className={cls.accordionSort}
                                                        >
                                                            {qualification.sort}
                                                        </Text>
                                                    </div>
                                                    <div className={classNames(cls.cell, {}, [cls.bubbles])} />
                                                    <div className={cls.cell}>
                                                        <button
                                                            type="button"
                                                            className={classNames(cls.cellBtn, {}, [cls.editBtn])}
                                                            onClick={() => {
                                                                onShowEditQualificationModal(qualification.qualification_id!);
                                                            }}
                                                        >
                                                            <FontAwesomeIcon icon={faPenToSquare} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={classNames(cls.cellBtn, {}, [cls.deleteBtn])}
                                                            onClick={() => {
                                                                onDeleteQualificationFromStructureHandler(qualification.qualification_id!);
                                                            }}
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                    </div>
                                                </CAccordionHeader>
                                                <CAccordionBody className={classNames(cls.accordionBody, {}, [])}>
                                                    {qualification.modules.map((module) => (
                                                        <CAccordion
                                                            className={classNames(cls.accordion, {}, [cls.accordionInnerSecond])}
                                                            key={module.educational_module_id}
                                                        >
                                                            <CAccordionItem
                                                                className={classNames(cls.accordionItem, {}, [])}
                                                            >
                                                                <CAccordionHeader
                                                                    className={classNames(cls.accordionHeader, {}, [])}
                                                                >
                                                                    <div className={cls.cell}>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                            className={cls.accordionTitle}
                                                                        >
                                                                            {eduModules?.filter((allModule) => (
                                                                                allModule.module_id === module.educational_module_id
                                                                            ))[0].name}
                                                                        </Text>
                                                                    </div>
                                                                    <div className={cls.cell}>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                            weight={TextWeight.MEDIUM}
                                                                            className={cls.accordionSort}
                                                                        >
                                                                            {module.sort}
                                                                        </Text>
                                                                    </div>
                                                                    <div className={classNames(cls.cell, {}, [cls.bubbles])} />
                                                                    <div className={cls.cell}>
                                                                        <button
                                                                            type="button"
                                                                            className={classNames(cls.cellBtn, {}, [cls.editBtn])}
                                                                            onClick={() => {
                                                                                onShowEditModuleModal(
                                                                                    module.educational_module_id!,
                                                                                    'qualifications',
                                                                                    qualification.qualification_id!,
                                                                                );
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faPenToSquare} />
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className={classNames(cls.cellBtn, {}, [cls.deleteBtn])}
                                                                            onClick={() => {
                                                                                onDeleteModuleFromQualificationStructureHandler(
                                                                                    qualification.qualification_id!,
                                                                                    module.educational_module_id!,
                                                                                );
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faTrash} />
                                                                        </button>
                                                                    </div>
                                                                </CAccordionHeader>
                                                                <CAccordionBody className={classNames(cls.accordionBody, {}, [])}>
                                                                    {
                                                                        module.units.map((unit) => (
                                                                            <CAccordion
                                                                                className={classNames(
                                                                                    cls.accordion,
                                                                                    {},
                                                                                    [cls.accordionInnerThird],
                                                                                )}
                                                                                key={unit.educational_modules_unit_id}
                                                                            >
                                                                                <CAccordionItem
                                                                                    className={
                                                                                        classNames(
                                                                                            cls.accordionItem,
                                                                                            {},
                                                                                            [cls.moduleUnitsAccordionItem],
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <CAccordionHeader
                                                                                        className={
                                                                                            classNames(
                                                                                                cls.accordionHeader,
                                                                                                {},
                                                                                                [cls.moduleUnitsAccordionHeader],
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        <div className={cls.cell}>
                                                                                            <Text
                                                                                                size={TextSize.XS}
                                                                                                className={cls.accordionTitle}
                                                                                            >
                                                                                                {
                                                                                                    unit.educational_modules_unit_id
                                                                                                        ? eduModuleUnits?.filter((allUnit) => (
                                                                                                            allUnit
                                                                                                                .unit_id === unit
                                                                                                                .educational_modules_unit_id
                                                                                                        ))[0].name : 'Нет'
                                                                                                }
                                                                                            </Text>
                                                                                        </div>
                                                                                        <div className={cls.cell}>
                                                                                            <Text
                                                                                                size={TextSize.XS}
                                                                                                weight={TextWeight.MEDIUM}
                                                                                                className={cls.accordionSort}
                                                                                            >
                                                                                                {unit.sort}
                                                                                            </Text>
                                                                                        </div>
                                                                                        <div className={classNames(cls.cell, {}, [cls.bubbles])}>
                                                                                            <div className={classNames(
                                                                                                cls.bubble,
                                                                                                {
                                                                                                    [cls.greenBubble]: unit.has_in_basic_education,
                                                                                                    [cls.redBubble]: !unit.has_in_basic_education,
                                                                                                },
                                                                                                [],
                                                                                            )}
                                                                                            >
                                                                                                <Text
                                                                                                    size={TextSize.XXS}
                                                                                                >
                                                                                                    На базе 9 классов -
                                                                                                    {' '}
                                                                                                    {unit.has_in_basic_education ? 'Да' : 'Нет'}
                                                                                                </Text>
                                                                                            </div>
                                                                                            <div className={classNames(
                                                                                                cls.bubble,
                                                                                                {
                                                                                                    [cls.greenBubble]: unit.has_in_general_education,
                                                                                                    [cls.redBubble]: !unit.has_in_general_education,
                                                                                                },
                                                                                                [],
                                                                                            )}
                                                                                            >
                                                                                                <Text
                                                                                                    size={TextSize.XXS}
                                                                                                >
                                                                                                    На базе 11 классов -
                                                                                                    {' '}
                                                                                                    {unit.has_in_general_education ? 'Да' : 'Нет'}
                                                                                                </Text>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={cls.cell}>
                                                                                            <button
                                                                                                type="button"
                                                                                                className={classNames(cls.cellBtn, {}, [cls.editBtn])}
                                                                                                onClick={() => {
                                                                                                    onShowEditModuleUnitModal(
                                                                                                        module.educational_module_id!,
                                                                                                        unit.educational_modules_unit_id!,
                                                                                                        'qualifications',
                                                                                                        qualification.qualification_id!,
                                                                                                    );
                                                                                                }}
                                                                                            >
                                                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                                                            </button>
                                                                                            <button
                                                                                                type="button"
                                                                                                className={classNames(
                                                                                                    cls.cellBtn,
                                                                                                    {},
                                                                                                    [cls.deleteBtn],
                                                                                                )}
                                                                                                onClick={() => {
                                                                                                    onDeleteModuleUnitFromQualificationStructureHandler(
                                                                                                        qualification.qualification_id!,
                                                                                                        module.educational_module_id!,
                                                                                                        unit.educational_modules_unit_id!,
                                                                                                    );
                                                                                                }}
                                                                                            >
                                                                                                <FontAwesomeIcon icon={faTrash} />
                                                                                            </button>
                                                                                        </div>
                                                                                    </CAccordionHeader>
                                                                                </CAccordionItem>
                                                                            </CAccordion>
                                                                        ))
                                                                    }

                                                                    {
                                                                        eduModuleUnits?.filter((unit) => unit.module_id
                                                                            === module.educational_module_id)
                                                                            .length
                                                                        && (
                                                                            eduModuleUnits?.filter((unit) => unit
                                                                                .module_id === module
                                                                                .educational_module_id)
                                                                                .length !== module.units.length)
                                                                            ? (
                                                                                <Button
                                                                                    className={classNames(cls.btnAdd, {}, [cls.innerBtnAdd])}
                                                                                    onClick={() => {
                                                                                        onShowAddNewModuleUnitModal(
                                                                                            module.educational_module_id!,
                                                                                            'qualifications',
                                                                                            qualification.qualification_id!,
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    <Text
                                                                                        size={TextSize.XS}
                                                                                    >
                                                                                        Добавить модульную единицу
                                                                                    </Text>
                                                                                </Button>
                                                                            ) : ''
                                                                    }

                                                                </CAccordionBody>
                                                            </CAccordionItem>
                                                        </CAccordion>
                                                    ))}

                                                    <Button
                                                        className={classNames(cls.btnAdd, {}, [cls.innerBtnAdd])}
                                                        onClick={() => {
                                                            onShowAddNewModuleModal('qualifications', qualification.qualification_id!);
                                                        }}
                                                    >
                                                        <Text
                                                            size={TextSize.XS}
                                                        >
                                                            Добавить модуль
                                                        </Text>
                                                    </Button>

                                                    <CAccordion
                                                        className={classNames(cls.accordion, {}, [cls.accordionInnerSecond])}
                                                    >
                                                        <CAccordionItem
                                                            className={classNames(cls.accordionItem, {}, [])}
                                                        >
                                                            <CAccordionHeader
                                                                className={classNames(cls.accordionHeader, {}, [])}
                                                            >
                                                                <div className={cls.cell}>
                                                                    <Text
                                                                        size={TextSize.XS}
                                                                        className={cls.accordionTitle}
                                                                    >
                                                                        Сроки обучения
                                                                    </Text>
                                                                </div>
                                                                <div className={cls.cell} />
                                                                <div className={classNames(cls.cell, {}, [cls.bubbles])}>
                                                                    <Text
                                                                        size={TextSize.XS}
                                                                    >
                                                                        {Math.round(qualification.total.basicEducationFrom.credits!)}
                                                                        /
                                                                        {Math.round(qualification.total.basicEducationFrom.hours!)}
                                                                        {' '}
                                                                        -
                                                                        {' '}
                                                                        {Math.round(qualification.total.basicEducationTo.credits!)}
                                                                        /
                                                                        {Math.round(qualification.total.basicEducationTo.hours!)}
                                                                    </Text>
                                                                    <Text
                                                                        size={TextSize.XS}
                                                                    >
                                                                        {Math.round(qualification.total.generalEducationFrom.credits!)}
                                                                        /
                                                                        {Math.round(qualification.total.generalEducationFrom.hours!)}
                                                                        {' '}
                                                                        -
                                                                        {' '}
                                                                        {Math.round(qualification.total.generalEducationTo.credits!)}
                                                                        /
                                                                        {Math.round(qualification.total.generalEducationTo.hours!)}
                                                                    </Text>
                                                                </div>
                                                                <div className={cls.cell} />
                                                            </CAccordionHeader>

                                                            <CAccordionBody className={classNames(cls.accordionBody, {}, [])}>
                                                                <div className={cls.accordionBodyContent}>
                                                                    <div className={cls.cell}>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                        >
                                                                            Итого на обязательное обучение
                                                                        </Text>
                                                                    </div>
                                                                    <div className={cls.cell} />
                                                                    <div className={classNames(cls.cell, {}, [cls.bubbles])}>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                        >
                                                                            {
                                                                                qualification
                                                                                    .compulsory_education_basic_credits_from === qualification
                                                                                    .compulsory_education_basic_credits_to
                                                                                    ? (
                                                                                        <>
                                                                                            {qualification.compulsory_education_basic_credits_from}
                                                                                            /
                                                                                            {
                                                                                                Math.round(
                                                                                                    qualification
                                                                                                        .compulsory_education_basic_credits_from!
                                                                                                    * Number(creditInHours!.value),
                                                                                                )
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                    : (
                                                                                        <>
                                                                                            {qualification.compulsory_education_basic_credits_from}
                                                                                            /
                                                                                            {
                                                                                                Math.round(
                                                                                                    qualification
                                                                                                        .compulsory_education_basic_credits_from!
                                                                                                    * Number(creditInHours!.value),
                                                                                                )
                                                                                            }
                                                                                            {' '}
                                                                                            -
                                                                                            {' '}
                                                                                            {qualification.compulsory_education_basic_credits_to}
                                                                                            /
                                                                                            {
                                                                                                Math.round(
                                                                                                    qualification
                                                                                                        .compulsory_education_basic_credits_to!
                                                                                                    * Number(creditInHours!.value),
                                                                                                )
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                            }
                                                                        </Text>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                        >
                                                                            {
                                                                                qualification
                                                                                    .compulsory_education_general_credits_from === qualification
                                                                                    .compulsory_education_general_credits_to
                                                                                    ? (
                                                                                        <>
                                                                                            {qualification.compulsory_education_general_credits_from}
                                                                                            /
                                                                                            {
                                                                                                Math.round(
                                                                                                    qualification
                                                                                                        .compulsory_education_general_credits_from!
                                                                                                    * Number(creditInHours!.value),
                                                                                                )
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                                    : (
                                                                                        <>
                                                                                            {qualification.compulsory_education_general_credits_from}
                                                                                            /
                                                                                            {
                                                                                                Math.round(
                                                                                                    qualification
                                                                                                        .compulsory_education_general_credits_from!
                                                                                                    * Number(creditInHours!.value),
                                                                                                )
                                                                                            }
                                                                                            {' '}
                                                                                            -
                                                                                            {' '}
                                                                                            {qualification.compulsory_education_general_credits_to}
                                                                                            /
                                                                                            {
                                                                                                Math.round(
                                                                                                    qualification
                                                                                                        .compulsory_education_general_credits_to!
                                                                                                    * Number(creditInHours!.value),
                                                                                                )
                                                                                            }
                                                                                        </>
                                                                                    )
                                                                            }
                                                                        </Text>
                                                                    </div>
                                                                    <div className={cls.cell} />
                                                                </div>
                                                                <div className={cls.accordionBodyContent}>
                                                                    <div className={cls.cell}>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                        >
                                                                            Факультативные занятия
                                                                        </Text>
                                                                    </div>
                                                                    <div className={cls.cell} />
                                                                    <div className={classNames(cls.cell, {}, [cls.bubbles])}>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                        >
                                                                            не более
                                                                            {' '}
                                                                            {qualification.extracurricular_activities_hours_per_week}
                                                                            -х часов в неделю
                                                                        </Text>
                                                                    </div>
                                                                    <div className={cls.cell} />
                                                                </div>
                                                                <div className={cls.accordionBodyContent}>
                                                                    <div className={cls.cell}>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                        >
                                                                            Консультации
                                                                        </Text>
                                                                    </div>
                                                                    <div className={cls.cell} />
                                                                    <div className={classNames(cls.cell, {}, [cls.bubbles])}>
                                                                        <Text
                                                                            size={TextSize.XS}
                                                                        >
                                                                            не более
                                                                            {' '}
                                                                            {qualification.consultations_hours_per_academic_year}
                                                                            {' '}
                                                                            часов на учебный год
                                                                        </Text>
                                                                    </div>
                                                                    <div className={cls.cell} />
                                                                </div>
                                                            </CAccordionBody>
                                                        </CAccordionItem>
                                                    </CAccordion>
                                                </CAccordionBody>
                                            </CAccordionItem>
                                        </CAccordion>
                                    ))
                                }

                                {
                                    data?.structure.qualifications?.length === filteredQualifications?.length
                                        && filteredQualifications?.length
                                        ? ''
                                        : (
                                            <Button
                                                className={classNames(cls.btnAdd, {}, [cls.btnAddParent])}
                                                onClick={onShowAddNewQualificationModal}
                                                disabled={!data?.general_info.speciality_id || !filteredQualifications?.length}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                >
                                                    Добавить квалификацию
                                                </Text>
                                            </Button>
                                        )
                                }
                            </CAccordionBody>
                        </CAccordionItem>
                    </CAccordion>
                </div>
            </div>
        );
    }

    return content;
};
