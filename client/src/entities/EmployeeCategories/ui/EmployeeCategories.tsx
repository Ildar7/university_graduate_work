import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { EditEmployeeCategory } from 'features/EmployeeCategories/EditEmployeeCategory';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { DeleteEmployeeCategory } from 'features/EmployeeCategories/DeleteEmployeeCategory';
import { fetchEmployeeCategories } from '../model/services/fetchEmployeeCategories/fetchEmployeeCategories';
import { getEmployeeCategoriesError } from '../model/selectors/getEmployeeCategoriesError/getEmployeeCategoriesError';
import {
    getEmployeeCategoriesIsLoading,
} from '../model/selectors/getEmployeeCategoriesIsLoading/getEmployeeCategoriesIsLoading';
import { EmployeeCategoriesType } from '../model/types/employeeCategories';
import cls from './EmployeeCategories.module.scss';

interface EmployeeCategoriesProps {
    className?: string;
    data: EmployeeCategoriesType[];
    exportDisabled: boolean;
}
export const EmployeeCategories = (props: EmployeeCategoriesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEmployeeCategoriesIsLoading);
    const error = useSelector(getEmployeeCategoriesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteEmployeeCategories, setDeleteEmployeeCategories] = useState<EmployeeCategoriesType>();
    const [visibleEditEmployeeCategories, setVisibleEditEmployeeCategories] = useState(false);
    const [visibleDeleteEmployeeCategories, setVisibleDeleteEmployeeCategories] = useState(false);
    const [employeeCategoriesDetailId, setEmployeeCategoriesDetailId] = useState<string>();

    const onShowEditEmployeeCategoriesModal = (id: string) => {
        setVisibleEditEmployeeCategories(true);
        setEmployeeCategoriesDetailId(id);
    };

    const onCloseEditEmployeeCategoriesModal = useCallback(() => {
        setVisibleEditEmployeeCategories(false);
    }, []);

    const onShowDeleteEmployeeCategoriesModal = useCallback((employeeCategories: EmployeeCategoriesType) => {
        setVisibleDeleteEmployeeCategories(true);
        setDeleteEmployeeCategories(employeeCategories);
    }, []);

    const onCloseDeleteEmployeeCategoriesModal = useCallback(() => {
        setVisibleDeleteEmployeeCategories(false);
    }, []);

    useEffect(() => {
        dispatch(tableSortActions.setSort('category_id'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchEmployeeCategories());
    }, [dispatch]);

    let employeeCategoriesTable;

    if (isLoading) {
        employeeCategoriesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        employeeCategoriesTable = (
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
        employeeCategoriesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-employee-categories-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('category_id'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'category_id' }, [])
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
                            data?.map((employeeCategories) => (
                                <div className={cls.tableRow} key={employeeCategories.category_id}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-employee-categories-${employeeCategories.category_id}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeeCategories.category_id}
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeeCategories.name}
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeeCategories.employees.length}
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
                                                onShowEditEmployeeCategoriesModal(employeeCategories.category_id.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowDeleteEmployeeCategoriesModal(employeeCategories);
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
            {employeeCategoriesTable}

            <EditEmployeeCategory
                isOpen={visibleEditEmployeeCategories}
                onClose={onCloseEditEmployeeCategoriesModal}
                employeeCategoryId={employeeCategoriesDetailId!}
            />

            <DeleteEmployeeCategory
                employeeCategory={deleteEmployeeCategories}
                isOpen={visibleDeleteEmployeeCategories}
                onClose={onCloseDeleteEmployeeCategoriesModal}
            />
        </div>
    );
};
