import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import {
    CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
    cilPencil, cilSortAscending, cilSortDescending, cilTrash, cilUser,
} from '@coreui/icons';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { fetchPerformanceTypes } from 'entities/PerformanceTypes/model/services/fetchPerformanceTypes/fetchPerformanceTypes';
import { EditPerformanceType } from 'features/PerformanceTypes/EditPerformanceType';
import { DeletePerformanceType } from 'features/PerformanceTypes/DeletePerformanceType';
import { ViewPerformanceType } from 'features/PerformanceTypes/ViewPerformanceType';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './PerformanceTypes.module.scss';
import { getPerformanceTypesIsLoading } from '../model/selectors/getPerformanceTypesIsLoading/getPerformanceTypesIsLoading';
import { getPerformanceTypesError } from '../model/selectors/getPerformanceTypesError/getPerformanceTypesError';
import { PerformanceTypesType } from '../model/types/performanceTypes';

interface PerformanceTypesProps {
    className?: string;
    data: PerformanceTypesType[];
    exportDisabled: boolean;
}
export const PerformanceTypes = (props: PerformanceTypesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getPerformanceTypesIsLoading);
    const error = useSelector(getPerformanceTypesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deletePerformanceType, setDeletePerformanceType] = useState<PerformanceTypesType>();
    const [visibleViewPerformanceType, setVisibleViewPerformanceType] = useState(false);
    const [visibleEditPerformanceType, setVisibleEditPerformanceType] = useState(false);
    const [visibleDeletePerformanceType, setVisibleDeletePerformanceType] = useState(false);
    const [performanceTypeDetailId, setPerformanceTypeDetailId] = useState<string>();

    const onShowEditPerformanceTypeModal = (id: string) => {
        setVisibleEditPerformanceType(true);
        setPerformanceTypeDetailId(id);
    };

    const onShowDeletePerformanceTypeModal = useCallback((performanceType: PerformanceTypesType) => {
        setVisibleDeletePerformanceType(true);
        setDeletePerformanceType(performanceType);
    }, []);

    const onShowViewPerformanceTypeModal = (id: string) => {
        setVisibleViewPerformanceType(true);
        setPerformanceTypeDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_academicperformancesemester'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchPerformanceTypes());
    }, [dispatch]);

    let performanceTypesTable;

    if (isLoading) {
        performanceTypesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        performanceTypesTable = (
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
        performanceTypesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-performance-types-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_academicperformancesemester'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID категории
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_academicperformancesemester' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('academicperformancesemester'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Наименование
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'academicperformancesemester' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('perfomance_value'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Сумма
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'perfomance_value' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((performanceType) => (
                                <div className={cls.tableRow} key={performanceType.id_academicperformancesemester}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-performance-types-${performanceType.id_academicperformancesemester}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {performanceType.id_academicperformancesemester}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {performanceType.academicperformancesemester}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {performanceType.perfomance_value}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowViewPerformanceTypeModal(performanceType.id_academicperformancesemester.toString());
                                            }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowEditPerformanceTypeModal(performanceType.id_academicperformancesemester.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeletePerformanceTypeModal(performanceType); }}
                                        >
                                            <Icon Svg={TrashIcon} />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        );
    }

    const mods: Mods = {
        [cls.error]: !!error,
    };

    return (
        <div className={classNames(cls.TableBlock, mods, [className])}>
            {performanceTypesTable}

            <ViewPerformanceType
                visible={visibleViewPerformanceType}
                setVisible={setVisibleViewPerformanceType}
                performanceTypeId={performanceTypeDetailId!}
                onDeletePerformanceType={onShowDeletePerformanceTypeModal}
                onEditPerformanceType={onShowEditPerformanceTypeModal}
            />

            <EditPerformanceType
                visible={visibleEditPerformanceType}
                setVisible={setVisibleEditPerformanceType}
                performanceTypeId={performanceTypeDetailId!}
                onDeletePerformanceType={onShowDeletePerformanceTypeModal}
            />

            <DeletePerformanceType
                performanceType={deletePerformanceType}
                visible={visibleDeletePerformanceType}
                setVisible={setVisibleDeletePerformanceType}
            />
        </div>
    );
};
