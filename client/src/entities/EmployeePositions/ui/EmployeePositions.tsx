import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { EditEmployeePosition } from 'features/EmployeePositions/EditEmployeePosition';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { DeleteEmployeePosition } from 'features/EmployeePositions/DeleteEmployeePosition';
import { fetchEmployeePositions } from '../model/services/fetchEmployeePositions/fetchEmployeePositions';
import { getEmployeePositionsError } from '../model/selectors/getEmployeePositionsError/getEmployeePositionsError';
import {
    getEmployeePositionsIsLoading,
} from '../model/selectors/getEmployeePositionsIsLoading/getEmployeePositionsIsLoading';
import { EmployeePositionsType } from '../model/types/employeePositions';
import cls from './EmployeePositions.module.scss';

interface EmployeePositionsProps {
    className?: string;
    data: EmployeePositionsType[];
    exportDisabled: boolean;
}
export const EmployeePositions = (props: EmployeePositionsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEmployeePositionsIsLoading);
    const error = useSelector(getEmployeePositionsError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteEmployeePositions, setDeleteEmployeePositions] = useState<EmployeePositionsType>();
    const [visibleEditEmployeePositions, setVisibleEditEmployeePositions] = useState(false);
    const [visibleDeleteEmployeePositions, setVisibleDeleteEmployeePositions] = useState(false);
    const [employeePositionsDetailId, setEmployeePositionsDetailId] = useState<string>();

    const onShowEditEmployeePositionsModal = (id: string) => {
        setVisibleEditEmployeePositions(true);
        setEmployeePositionsDetailId(id);
    };

    const onCloseEditEmployeePositionsModal = useCallback(() => {
        setVisibleEditEmployeePositions(false);
    }, []);

    const onShowDeleteEmployeePositionsModal = useCallback((employeePositions: EmployeePositionsType) => {
        setVisibleDeleteEmployeePositions(true);
        setDeleteEmployeePositions(employeePositions);
    }, []);

    const onCloseDeleteEmployeePositionsModal = useCallback(() => {
        setVisibleDeleteEmployeePositions(false);
    }, []);

    useEffect(() => {
        dispatch(tableSortActions.setSort('position_id'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchEmployeePositions());
    }, [dispatch]);

    let employeePositionsTable;

    if (isLoading) {
        employeePositionsTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        employeePositionsTable = (
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
        employeePositionsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-employee-positions-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('position_id'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'position_id' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('name'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'name' }, [])
                                    }
                                />
                            </Button>
                            <div
                                className={cls.tableCell}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Сотрудников
                                </Text>
                            </div>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((employeePositions) => (
                                <div className={cls.tableRow} key={employeePositions.position_id}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-employee-positions-${employeePositions.position_id}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeePositions.position_id}
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeePositions.name}
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeePositions.employees.length}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowEditEmployeePositionsModal(employeePositions.position_id.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowDeleteEmployeePositionsModal(employeePositions);
                                            }}
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
            {employeePositionsTable}

            <EditEmployeePosition
                isOpen={visibleEditEmployeePositions}
                onClose={onCloseEditEmployeePositionsModal}
                employeePositionId={employeePositionsDetailId!}
            />

            <DeleteEmployeePosition
                employeePosition={deleteEmployeePositions}
                isOpen={visibleDeleteEmployeePositions}
                onClose={onCloseDeleteEmployeePositionsModal}
            />
        </div>
    );
};
