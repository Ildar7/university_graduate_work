import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { DeleteEduModule } from 'features/EduModules/DeleteEduModule';
import { EditEduModule } from 'features/EduModules/EditEduModule';
import { AddEduUnit } from 'features/EduUnits/AddEduUnit';
import { DeleteEduUnit } from 'features/EduUnits/DeleteEduUnit';
import { EditEduUnit } from 'features/EduUnits/EditEduUnit';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './EducationalModules.module.scss';
import { getEduModulesData } from '../model/selectors/getEduModulesData/getEduModulesData';
import { getEduModulesIsLoading } from '../model/selectors/getEduModulesIsLoading/getEduModulesIsLoading';
import { getEduModulesError } from '../model/selectors/getEduModulesError/getEduModulesError';
import { getEduUnitsData } from '../model/selectors/getEduUnitsData/getEduUnitsData';
import { getEduUnitsIsLoading } from '../model/selectors/getEduUnitsIsLoading/getEduUnitsIsLoading';
import { getEduUnitsError } from '../model/selectors/getEduUnitsError/getEduUnitsError';
import { EducationalModulesData, EducationalUnitsData } from '../model/types/educationalModules';
import { educationalModulesActions } from '../model/slice/educationalModulesSlice';

interface EducationalModulesProps {
    className?: string;
    data: EducationalModulesData[];
}
export const EducationalModules = (props: EducationalModulesProps) => {
    const {
        className,
        data,
    } = props;
    const dispatch = useAppDispatch();

    const modules = useSelector(getEduModulesData);
    const units = useSelector(getEduUnitsData);
    const modulesIsLoading = useSelector(getEduModulesIsLoading);
    const unitsIsLoading = useSelector(getEduUnitsIsLoading);
    const modulesError = useSelector(getEduModulesError);
    const unitsError = useSelector(getEduUnitsError);

    const [visibleEditEduModule, setVisibleEditEduModule] = useState(false);
    const [visibleDeleteEduModule, setVisibleDeleteEduModule] = useState(false);
    const [deleteEduModule, setDeleteEduModule] = useState<EducationalModulesData>();

    const [eduModuleDetailId, setEduModuleDetailId] = useState<string>();

    const [visibleAddEduUnit, setVisibleAddEduUnit] = useState(false);
    const [visibleEditEduUnit, setVisibleEditEduUnit] = useState(false);
    const [visibleDeleteEduUnit, setVisibleDeleteEduUnit] = useState(false);
    const [deleteEduUnit, setDeleteEduUnit] = useState<EducationalUnitsData>();

    const [eduUnitDetailId, setEduUnitDetailId] = useState<string>();

    useEffect(() => {
        if (!modulesIsLoading && !modulesError && modules && !unitsIsLoading && !unitsError && units) {
            dispatch(educationalModulesActions.setUnitsToData());
        }
        // eslint-disable-next-line
    }, [dispatch, modulesError, modulesIsLoading, unitsError, unitsIsLoading, units]);

    const onShowDeleteEduModuleModal = useCallback((eduModule: EducationalModulesData) => {
        setVisibleDeleteEduModule(true);
        setDeleteEduModule(eduModule);
    }, []);

    const onShowAddEduUnitModal = (id: string) => {
        setVisibleAddEduUnit(true);
        setEduModuleDetailId(id);
    };

    const onShowEditEduUnitModal = (moduleId: string, unitId: string) => {
        setVisibleEditEduUnit(true);
        setEduModuleDetailId(moduleId);
        setEduUnitDetailId(unitId);
    };

    const onShowDeleteEduModuleUnit = useCallback((eduUnit: EducationalUnitsData) => {
        setVisibleDeleteEduUnit(true);
        setDeleteEduUnit(eduUnit);
    }, []);

    let content;

    if (modulesIsLoading || unitsIsLoading) {
        content = (
            <Skeleton width="100%" height={400} border="8px" />
        );
    } else if (modulesError || unitsError) {
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
            data && data.length
                ? (
                    <>
                        <div className={classNames(cls.row, {}, [cls.mainRow])}>
                            <div className={classNames(cls.column, {}, [cls.firstColumn])}>
                                ID
                            </div>
                            <div className={classNames(cls.column, {}, [cls.secondColumn])}>
                                Название
                            </div>
                            <div className={classNames(cls.column, {}, [cls.thirdColumn])}>
                                Сокращение
                            </div>
                            <div className={classNames(cls.column, {}, [cls.fourthColumn])}>
                                Сортировка
                            </div>
                            <div className={classNames(cls.column, {}, [cls.fifthColumn])} />
                            <div className={classNames(cls.column, {}, [cls.sixthColumn])} />
                        </div>
                        {
                            data?.map((module) => (
                                <CAccordionItem
                                    itemKey={module.module_id}
                                    className={classNames(cls.row, {}, [cls.rowAccordion])}
                                    key={module.module_id}
                                >
                                    <CAccordionHeader className={cls.rowHeader}>
                                        <div className={classNames(cls.column, {}, [cls.firstColumn])}>
                                            {module.module_id}
                                        </div>
                                        <div className={classNames(cls.column, {}, [cls.secondColumn])}>
                                            {module.name}
                                        </div>
                                        <div className={classNames(cls.column, {}, [cls.thirdColumn])}>
                                            {module.short_name}
                                        </div>
                                        <div className={classNames(cls.column, {}, [cls.fourthColumn])}>
                                            {module.sort}
                                        </div>
                                        <div className={classNames(cls.column, {}, [cls.fifthColumn])} />
                                        <div className={classNames(cls.column, {}, [cls.sixthColumn])} />
                                    </CAccordionHeader>
                                    <CAccordionBody className={cls.rowBody}>
                                        {module.units && module.units.length ? (
                                            <div className={cls.rowList}>
                                                {
                                                    module.units.map((unit) => (
                                                        <div
                                                            className={classNames(cls.row, {}, [cls.rowInner])}
                                                            key={unit.unit_id}
                                                        >
                                                            <div className={classNames(cls.column, {}, [cls.firstColumn])} />
                                                            <div
                                                                className={classNames(
                                                                    cls.column,
                                                                    {},
                                                                    [cls.secondColumn, cls.secondColumnInner],
                                                                )}
                                                            >
                                                                <span className={cls.unitId}>

                                                                    {unit.unit_id}
                                                                </span>
                                                                <span>
                                                                    {unit.name}
                                                                </span>
                                                            </div>
                                                            <div className={classNames(cls.column, {}, [cls.thirdColumn])} />
                                                            <div className={classNames(cls.column, {}, [cls.fourthColumn])}>
                                                                {unit.sort}
                                                            </div>
                                                            <div className={classNames(cls.column, {}, [cls.fifthColumn])} />
                                                            <div className={classNames(cls.column, {}, [cls.sixthColumn])}>
                                                                <Button
                                                                    theme={ButtonTheme.OUTLINE}
                                                                    title="Редактировать"
                                                                    className={cls.editBtn}
                                                                    onClick={() => {
                                                                        onShowEditEduUnitModal(
                                                                            String(unit.module_id),
                                                                            String(unit.unit_id),
                                                                        );
                                                                    }}
                                                                >
                                                                    <CIcon
                                                                        icon={cilPencil}
                                                                        customClassName={cls.btnIcon}
                                                                    />
                                                                </Button>
                                                                <Button
                                                                    theme={ButtonTheme.OUTLINE}
                                                                    title="Удалить"
                                                                    className={cls.editBtn}
                                                                    onClick={() => { onShowDeleteEduModuleUnit(unit); }}
                                                                >
                                                                    <CIcon
                                                                        icon={cilTrash}
                                                                        customClassName={cls.btnIcon}
                                                                    />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ) : ''}
                                        <div className={cls.row}>
                                            <div className={classNames(cls.column, {}, [cls.firstColumn])} />
                                            <div className={classNames(cls.column, {}, [cls.secondColumn])}>
                                                <Button
                                                    theme={ButtonTheme.OUTLINE}
                                                    className={cls.btn}
                                                    onClick={() => { onShowAddEduUnitModal(String(module.module_id)); }}
                                                >
                                                    <Text
                                                        size={TextSize.XS}
                                                    >
                                                        Добавить модульную единицу
                                                    </Text>
                                                </Button>
                                            </div>
                                            <div className={classNames(cls.column, {}, [cls.thirdColumn])} />
                                            <div className={classNames(cls.column, {}, [cls.fourthColumn])} />
                                            <div className={classNames(cls.column, {}, [cls.fifthColumn])} />
                                            <div className={classNames(cls.column, {}, [cls.sixthColumn])} />
                                        </div>
                                    </CAccordionBody>
                                </CAccordionItem>
                            ))
                        }
                    </>
                )
                : (
                    'Ничего не найдено...'
                )
        );
    }

    return (
        <div className={classNames(cls.EducationalModules, {}, [className])}>
            <CAccordion alwaysOpen className={cls.table}>
                {content}
            </CAccordion>

            <EditEduModule
                visible={visibleEditEduModule}
                setVisible={setVisibleEditEduModule}
                eduModuleId={eduModuleDetailId!}
                onDeleteEduModule={onShowDeleteEduModuleModal}
            />

            <DeleteEduModule
                eduModule={deleteEduModule}
                visible={visibleDeleteEduModule}
                setVisible={setVisibleDeleteEduModule}
            />

            <AddEduUnit
                visible={visibleAddEduUnit}
                setVisible={setVisibleAddEduUnit}
                moduleId={Number(eduModuleDetailId!)}
            />

            <EditEduUnit
                visible={visibleEditEduUnit}
                setVisible={setVisibleEditEduUnit}
                eduUnitId={eduUnitDetailId!}
                eduModuleId={eduModuleDetailId!}
                onDeleteEduUnit={onShowDeleteEduModuleUnit}
            />

            <DeleteEduUnit
                eduUnit={deleteEduUnit}
                visible={visibleDeleteEduUnit}
                setVisible={setVisibleDeleteEduUnit}
            />

        </div>
    );
};
