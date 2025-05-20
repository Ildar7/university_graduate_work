import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { EditEmployeeEducation } from 'features/EmployeeEducations/EditEmployeeEducation';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { DeleteEmployeeEducation } from 'features/EmployeeEducations/DeleteEmployeeEducation';
import { fetchEmployeeEducations } from '../model/services/fetchEmployeeEducations/fetchEmployeeEducations';
import { getEmployeeEducationsError } from '../model/selectors/getEmployeeEducationsError/getEmployeeEducationsError';
import {
    getEmployeeEducationsIsLoading,
} from '../model/selectors/getEmployeeEducationsIsLoading/getEmployeeEducationsIsLoading';
import { EmployeeEducationsType } from '../model/types/employeeEducations';
import cls from './EmployeeEducations.module.scss';

interface EmployeeEducationsProps {
    className?: string;
    data: EmployeeEducationsType[];
    exportDisabled: boolean;
}
export const EmployeeEducations = (props: EmployeeEducationsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEmployeeEducationsIsLoading);
    const error = useSelector(getEmployeeEducationsError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteEmployeeEducations, setDeleteEmployeeEducations] = useState<EmployeeEducationsType>();
    const [visibleEditEmployeeEducations, setVisibleEditEmployeeEducations] = useState(false);
    const [visibleDeleteEmployeeEducations, setVisibleDeleteEmployeeEducations] = useState(false);
    const [employeeEducationsDetailId, setEmployeeEducationsDetailId] = useState<string>();

    const onShowEditEmployeeEducationsModal = (id: string) => {
        setVisibleEditEmployeeEducations(true);
        setEmployeeEducationsDetailId(id);
    };

    const onCloseEditEmployeeEducationsModal = useCallback(() => {
        setVisibleEditEmployeeEducations(false);
    }, []);

    const onShowDeleteEmployeeEducationsModal = useCallback((employeeEducations: EmployeeEducationsType) => {
        setVisibleDeleteEmployeeEducations(true);
        setDeleteEmployeeEducations(employeeEducations);
    }, []);

    const onCloseDeleteEmployeeEducationsModal = useCallback(() => {
        setVisibleDeleteEmployeeEducations(false);
    }, []);

    useEffect(() => {
        dispatch(tableSortActions.setSort('education_id'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchEmployeeEducations());
    }, [dispatch]);

    let employeeEducationsTable;

    if (isLoading) {
        employeeEducationsTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        employeeEducationsTable = (
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
        employeeEducationsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-employee-educations-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('education_id'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'education_id' }, [])
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
                            data?.map((employeeEducations) => (
                                <div className={cls.tableRow} key={employeeEducations.education_id}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-employee-educations-${employeeEducations.education_id}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeeEducations.education_id}
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeeEducations.name}
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employeeEducations.employees.length}
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
                                                onShowEditEmployeeEducationsModal(employeeEducations.education_id.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowDeleteEmployeeEducationsModal(employeeEducations);
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
            {employeeEducationsTable}

            <EditEmployeeEducation
                isOpen={visibleEditEmployeeEducations}
                onClose={onCloseEditEmployeeEducationsModal}
                employeeEducationId={employeeEducationsDetailId!}
            />

            <DeleteEmployeeEducation
                employeeEducation={deleteEmployeeEducations}
                isOpen={visibleDeleteEmployeeEducations}
                onClose={onCloseDeleteEmployeeEducationsModal}
            />
        </div>
    );
};
