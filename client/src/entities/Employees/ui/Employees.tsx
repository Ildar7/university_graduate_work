import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { format } from 'date-fns';
import { DeleteEmployee } from 'features/Employees/DeleteEmployee';
import { EditEmployee } from 'features/Employees/EditEmployee';
import { ViewEmployee } from 'features/Employees/ViewEmployee';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchEmployees } from 'entities/Employees';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { employeesRender } from 'entities/Employees/const/employeesRender';
import { capitalizeFirstLetter } from 'shared/lib/helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { EmployeesTableFieldsType } from 'features/Employees/EmployeesTableFields';
import { getEmployeesIsLoading } from 'entities/Employees/model/selectors/getEmployeesIsLoading/getEmployeesIsLoading';
import { getEmployeesError } from 'entities/Employees/model/selectors/getEmployeesError/getEmployeesError';
import FileIcon from 'shared/assets/icons/file.svg';
import { ViewEmployeeSubjects } from 'features/Employees/ViewEmployeeSubjects';
import { AddEmployeeSubject } from 'features/Employees/AddEmployeeSubject';
import cls from './Employees.module.scss';
import { EmployeesType } from '../model/types/employees';

interface EmployeesProps {
    className?: string;
    data: EmployeesType[];
    visibleCells: EmployeesTableFieldsType | undefined;
    exportDisabled: boolean;
}

export const Employees = (props: EmployeesProps) => {
    const {
        className,
        data,
        visibleCells,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEmployeesIsLoading);
    const error = useSelector(getEmployeesError);
    const [deleteUser, setDeleteUser] = useState<EmployeesType>();
    const [employeeDetailId, setEmployeeDetailId] = useState<string>();

    const [visibleDeleteEmployee, setVisibleDeleteEmployee] = useState(false);
    const [visibleEditEmployee, setVisibleEditEmployee] = useState(false);
    const [visibleViewEmployee, setVisibleViewEmployee] = useState(false);
    const [visibleViewEmployeeSubjects, setVisibleViewEmployeeSubjects] = useState(false);
    const [visibleAddEmployeeSubject, setVisibleAddEmployeeSubject] = useState(false);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const onShowDeleteEmployeeModal = useCallback((employee: EmployeesType) => {
        setVisibleDeleteEmployee(true);
        setDeleteUser(employee);
    }, []);

    const onShowEditEmployeeModal = (id: string) => {
        setVisibleEditEmployee(true);
        setEmployeeDetailId(id);
    };

    const onShowViewEmployeeModal = (id: string) => {
        setVisibleViewEmployee(true);
        setEmployeeDetailId(id);
    };

    const onShowViewEmployeeSubjectsModal = (id: string) => {
        setVisibleViewEmployeeSubjects(true);
        setEmployeeDetailId(id);
    };

    const onCloseViewEmployeeSubjectsModal = () => {
        setVisibleViewEmployeeSubjects(false);
    };

    const onShowAddEmployeeSubjectModal = () => {
        setVisibleAddEmployeeSubject(true);
    };

    const onCloseAddEmployeeSubjectModal = () => {
        setVisibleAddEmployeeSubject(false);
    };

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchEmployees());
    }, [dispatch]);

    let employeesTable;

    if (isLoading) {
        employeesTable = (
            <Skeleton height={400} />
        );
    } else if (error) {
        employeesTable = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке Данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        employeesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-employee-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('employee_id'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'employee_id' }, [])
                                    }
                                />
                            </Button>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellFio])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ФИО
                                </Text>
                            </div>
                            {
                                employeesRender.map((employeeInfo) => (
                                    visibleCells?.[employeeInfo.dataBaseName] && (
                                        employeeInfo.canSort
                                            ? (
                                                <Button
                                                    key={employeeInfo.dataBaseName}
                                                    theme={ButtonTheme.CLEAR}
                                                    className={cls.tableCell}
                                                    onClick={() => { onClickSortCell(employeeInfo.dataBaseName); }}
                                                >
                                                    <Text
                                                        size={TextSize.XS}
                                                        weight={TextWeight.SEMIBOLD}
                                                    >
                                                        {employeeInfo.name}
                                                    </Text>
                                                    <Icon
                                                        Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                                        className={
                                                            classNames(
                                                                cls.tableSortIcon,
                                                                {
                                                                    [cls.active]: sortByField === employeeInfo.dataBaseName,
                                                                },
                                                                [],
                                                            )
                                                        }
                                                    />
                                                </Button>
                                            )
                                            : (
                                                <div
                                                    className={classNames(cls.tableCell, {}, [cls.tableCellFio])}
                                                    key={employeeInfo.dataBaseName}
                                                >
                                                    <Text
                                                        size={TextSize.XS}
                                                        weight={TextWeight.SEMIBOLD}
                                                    >
                                                        {employeeInfo.name}
                                                    </Text>
                                                </div>
                                            )
                                    )
                                ))
                            }
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((employee) => (
                                <div className={cls.tableRow} key={employee.employee_id}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-employee-${employee.employee_id}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employee.employee_id}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellFio])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {employee.fio}
                                        </Text>
                                    </div>
                                    {visibleCells?.positions && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {employee.positions && String(employee.positions.map((position, index) => (
                                                    index !== 0 ? ` ${position.name}` : position.name
                                                )))}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.phone_number && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {employee.phone_number}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.address && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {employee.address && capitalizeFirstLetter(employee.address)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.govid && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {employee.govid && (employee.govid)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.birth_date && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {
                                                    employee.birth_date
                                                        ? format(new Date(employee.birth_date), 'dd.MM.yyyy')
                                                        : ''
                                                }
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.is_staff && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={employee.is_staff ? TextTheme.BG_GREEN : TextTheme.BG_RED}
                                            >
                                                {employee.is_staff ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.date_of_employment && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {
                                                    employee.date_of_employment
                                                        ? format(new Date(employee.date_of_employment), 'dd.MM.yyyy')
                                                        : ''
                                                }
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.work_experience && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {employee.work_experience ? employee.work_experience : '0'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.teaching_experience && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {employee.teaching_experience ? employee.teaching_experience : '0'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.arrival_order_number && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {employee.arrival_order_number && (employee.arrival_order_number)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.category_id && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {employee.category ? employee.category.name : 'Без категории'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.is_teacher && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={employee.is_teacher ? TextTheme.BG_GREEN : TextTheme.BG_RED}
                                            >
                                                {employee.is_teacher ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.education_id && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {employee.education && employee.education.name}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.specialty && (

                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {employee.specialty && (employee.specialty)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.qualification && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {employee.qualification && (employee.qualification)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.tariff_rate && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {employee.tariff_rate}
                                            </Text>
                                        </div>
                                    )}

                                    {visibleCells?.work_experience_since_employment && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {new Date(new Date().getTime() - new Date(employee.date_of_employment).getTime()).getFullYear() - 1970}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.total_work_experience && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {
                                                    employee.work_experience
                                                    + (new Date(new Date().getTime() - new Date(employee.date_of_employment)
                                                        .getTime())
                                                        .getFullYear() - 1970)
                                                }
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.total_teaching_experience && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {
                                                    employee.teaching_experience
                                                    + (employee.is_teacher
                                                        ? new Date(new Date().getTime() - new Date(employee.date_of_employment)
                                                            .getTime())
                                                            .getFullYear() - 1970
                                                        : 0)
                                                }
                                            </Text>
                                        </div>
                                    )}

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewEmployeeModal(employee!.employee_id!.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Список предметов"
                                            className={classNames(cls.editBtn, { [cls.disabledBtn]: !employee.is_teacher }, [])}
                                            onClick={() => { onShowViewEmployeeSubjectsModal(employee!.employee_id!.toString()); }}
                                            disabled={!employee.is_teacher}
                                        >
                                            <Icon Svg={FileIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditEmployeeModal(employee!.employee_id!.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteEmployeeModal(employee); }}
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
            {employeesTable}

            <ViewEmployee
                visible={visibleViewEmployee}
                setVisible={setVisibleViewEmployee}
                employeeId={employeeDetailId!}
                onDeleteEmployee={onShowDeleteEmployeeModal}
                onEditEmployee={onShowEditEmployeeModal}
            />

            <EditEmployee
                visible={visibleEditEmployee}
                setVisible={setVisibleEditEmployee}
                employeeId={employeeDetailId!}
                onDeleteEmployee={onShowDeleteEmployeeModal}
            />

            <DeleteEmployee
                visible={visibleDeleteEmployee}
                setVisible={setVisibleDeleteEmployee}
                employee={deleteUser}
            />

            <ViewEmployeeSubjects
                onClose={onCloseViewEmployeeSubjectsModal}
                isOpen={visibleViewEmployeeSubjects}
                employeeId={employeeDetailId!}
                onShowAddSubjectModal={onShowAddEmployeeSubjectModal}
            />

            <AddEmployeeSubject
                onClose={onCloseAddEmployeeSubjectModal}
                onShowViewSubjectsModal={onShowViewEmployeeSubjectsModal}
                isOpen={visibleAddEmployeeSubject}
            />
        </div>
    );
};
