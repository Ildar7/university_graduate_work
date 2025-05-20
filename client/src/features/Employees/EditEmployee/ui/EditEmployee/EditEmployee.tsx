import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CForm,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CNav,
    CNavItem,
    CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
    cilPlus, cilSave, cilTrash, cilWarning,
} from '@coreui/icons';
import React, {
    ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { Button, ButtonForm, ButtonTheme } from 'shared/ui/Button/Button';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { validateObjectFieldsNotNull } from 'shared/lib/helpers/validateObjectFieldsNotNull/validateObjectFieldsNotNull';
import {
    fetchEmployeeEducations,
    getEmployeeEducationsError,
    getEmployeeEducationsIsLoading,
} from 'entities/EmployeeEducations';
import { tableSortActions } from 'features/TableSort';
import {
    fetchEmployeePositions,
    getEmployeePositionsError,
    getEmployeePositionsIsLoading,
} from 'entities/EmployeePositions';
import {
    fetchEmployeeCategories,
    getEmployeeCategoriesError,
    getEmployeeCategoriesIsLoading,
} from 'entities/EmployeeCategories';
import { translateErrors } from 'shared/lib/errors/translateErrors/translateErrors';
import { EmployeesType } from 'entities/Employees';
import { EditEmployeePersonalDataTab } from 'features/Employees/EditEmployee/ui/EditEmployeePersonalDataTab/EditEmployeePersonalDataTab';
import { EditEmployeeProfActivityTab } from 'features/Employees/EditEmployee/ui/EditEmployeeProfActivityTab/EditEmployeeProfActivityTab';
import { tabsButtonsItems, TabsType } from 'features/Employees/AddEmployee';
import {
    fetchEmployeeDetail,
    getEmployeeDetailData,
    getEmployeeDetailError,
    getEmployeeDetailIsLoading,
} from 'entities/EmployeeDetail';
import {
    getEditEmployeeIsLoading,
} from 'features/Employees/EditEmployee/model/selectors/getEditEmployeeIsLoading/getEditEmployeeIsLoading';
import { getEditEmployeeNewFieldsData } from 'features/Employees/EditEmployee';
import {
    addEmployeePositionToEmployee,
    addEmployeePositionToEmployeeActions,
    getAddEmployeePositionToEmployeeData,
} from 'features/Employees/AddEmployeePosition';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import { addNewEmployee } from 'features/Employees/AddEmployee/model/services/addNewEmployee/addNewEmployee';
import { deleteEmployeePositionToEmployee } from 'features/Employees/DeleteEmployeePositionToEmployee';
import { getEditEmployeeData } from '../../model/selectors/getEditEmployeeData/getEditEmployeeData';
import {
    getEditEmployeeErrors,
} from '../../model/selectors/getEditEmployeeErrors/getEditEmployeeErrors';
import {
    EditEmployeeErrorDataBase, EditEmployeeErrors, EditEmployeeType,
} from '../../model/types/editEmployee';
import { editEmployeeActions } from '../../model/slice/editEmployeeSlice';
import cls from './EditEmployee.module.scss';
import { editEmployee } from '../../model/services/editEmployee/editEmployee';

interface EditEmployeeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    employeeId: string;
    onDeleteEmployee: (employee: EmployeesType) => void;
}

export const EditEmployee = (props: EditEmployeeProps) => {
    const {
        className,
        visible,
        setVisible,
        employeeId,
        onDeleteEmployee,
    } = props;
    const [tabsButtons] = useState<TabsType[]>(tabsButtonsItems);
    const [activeTab, setActiveTab] = useState(1);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [selectedPositionsNames, setSelectedPositionsNames] = useState<string[]>([]);

    const dispatch = useAppDispatch();

    const employeeDetailData = useSelector(getEmployeeDetailData);
    const isLoadingEmployeeDetail = useSelector(getEmployeeDetailIsLoading);
    const errorEmployeeDetail = useSelector(getEmployeeDetailError);

    const editEmployeeData = useSelector(getEditEmployeeData);
    const isLoadingEditEmployee = useSelector(getEditEmployeeIsLoading);
    const editEmployeeNewFieldsData = useSelector(getEditEmployeeNewFieldsData);

    const educationsIsLoading = useSelector(getEmployeeEducationsIsLoading);
    const educationsError = useSelector(getEmployeeEducationsError);

    const positionsIsLoading = useSelector(getEmployeePositionsIsLoading);
    const positionsError = useSelector(getEmployeePositionsError);

    const categoriesIsLoading = useSelector(getEmployeeCategoriesIsLoading);
    const categoriesError = useSelector(getEmployeeCategoriesError);

    const onChangeTabHandler = useCallback((tabId: number) => {
        setActiveTab(tabId);
        const activeTab = tabsButtons.filter((tab) => tab.active)[0].id;
        tabsButtons[activeTab - 1] = { ...tabsButtons[activeTab - 1], active: false, theme: ButtonTheme.LIGHT };
        tabsButtons[tabId - 1] = { ...tabsButtons[tabId - 1], active: true, theme: ButtonTheme.BACKGROUND };
    }, [tabsButtons]);

    const clearData = useCallback(() => {
        onChangeTabHandler(1);
        setValidated(false);
        setFormWithErrors(false);
        dispatch(editEmployeeActions.clearNewFields());
        dispatch(addEmployeePositionToEmployeeActions.clearData());
    }, [dispatch, onChangeTabHandler]);

    const onCloseModal = useCallback(() => {
        setVisible(false);
        clearData();
    }, [clearData, setVisible]);

    const onDeleteHandler = (employee: EmployeesType) => {
        onDeleteEmployee(employee);
        onCloseModal();
    };

    function findDeletedAndAddedPositionIds(arr1: number[], arr2: number[]): [number[], number[]] {
        const deleteArr: number[] = [];
        const addArr: number[] = [];

        arr1.forEach((item) => {
            if (!arr2.includes(item)) {
                deleteArr.push(item);
            }
        });

        arr2.forEach((item) => {
            if (!arr1.includes(item)) {
                addArr.push(item);
            }
        });

        return [deleteArr, addArr];
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            const data = clearObject(editEmployeeData, editEmployeeNewFieldsData);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
                return;
            }

            let dataToCheck;

            if (editEmployeeNewFieldsData?.is_teacher) {
                dataToCheck = excludePropertiesFromObject(editEmployeeNewFieldsData, ['middle_name', 'category_id']);
            } else {
                dataToCheck = excludePropertiesFromObject(editEmployeeNewFieldsData, ['middle_name', 'category_id', 'teaching_experience']);
            }

            if (validateObjectFieldsNotNull(dataToCheck) && editEmployeeNewFieldsData?.positions?.length) {
                const result = await dispatch(editEmployee(employeeId));
                const [delArr, addArr] = findDeletedAndAddedPositionIds(editEmployeeData?.positions || [], editEmployeeNewFieldsData.positions);

                if (delArr.length) {
                    const deleteResult = await dispatch(deleteEmployeePositionToEmployee([delArr, employeeId]));
                }

                if (addArr.length) {
                    dispatch(addEmployeePositionToEmployeeActions.setPositionIds(addArr));
                    const addResult = await dispatch(addEmployeePositionToEmployee(employeeId));
                }

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о сотруднике успешно обновлена'));
                    onCloseModal();
                }

                if (result.meta.requestStatus === 'rejected') {
                    addToast(Toast.error(translateErrors('Произошла ошибка при обновлении информации о сотруднике')));
                    setFormWithErrors(true);
                }
            } else {
                addToast(Toast.error('Заполните все необходимые поля!'));
                setFormWithErrors(true);
            }
        }
    };

    useEffect(() => {
        if (employeeId) {
            dispatch(fetchEmployeeDetail(employeeId));
        }
    }, [dispatch, employeeId]);

    useEffect(() => {
        dispatch(tableSortActions.setSort('education_id'));
        dispatch(fetchEmployeeEducations());
        dispatch(tableSortActions.setSort('position_id'));
        dispatch(fetchEmployeePositions());
        dispatch(tableSortActions.setSort('category_id'));
        dispatch(fetchEmployeeCategories());
    }, [dispatch]);

    let tabsContent;

    if (educationsIsLoading || positionsIsLoading || categoriesIsLoading || isLoadingEmployeeDetail) {
        tabsContent = (
            <Skeleton width="100%" height={500} />
        );
    } else if (educationsError || positionsError || categoriesError || errorEmployeeDetail) {
        tabsContent = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        tabsContent = (
            <>
                <CNav variant="pills" layout="fill" className={cls.tabsButtonsBlock}>
                    {
                        tabsButtons.map(({ id, title, theme }) => (
                            <CNavItem
                                key={id}
                            >
                                <Button
                                    buttonForm={ButtonForm.ALL_BORDERED}
                                    theme={theme}
                                    className={cls.tabBtn}
                                    onClick={() => { onChangeTabHandler(id); }}
                                >
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        {title}
                                    </Text>
                                </Button>
                            </CNavItem>
                        ))
                    }
                </CNav>
                {activeTab === 1 && (
                    <EditEmployeePersonalDataTab
                        className={cls.tab}
                        formWithErrors={formWithErrors}
                        visible={visible}
                    />
                )}
                {activeTab === 2 && (
                    <EditEmployeeProfActivityTab
                        className={cls.tab}
                        formWithErrors={formWithErrors}
                        visible={visible}
                        selectedPositionsNames={selectedPositionsNames}
                        setSelectedPositionsNames={setSelectedPositionsNames}
                    />
                )}
            </>
        );
    }

    return (
        <>
            <CModal
                className={classNames(cls.EditEmployee, {}, [className])}
                visible={visible}
                onClose={onCloseModal}
                size="xl"
                scrollable
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <CModalHeader>
                        {
                            isLoadingEmployeeDetail
                                ? <Skeleton width={200} height={30} />
                                : (
                                    <CModalTitle>
                                        Изменение сотрудника №
                                        {employeeDetailData?.employee_id}
                                    </CModalTitle>
                                )
                        }
                    </CModalHeader>
                    <CModalBody>
                        {tabsContent}
                    </CModalBody>
                    <CModalFooter
                        className={cls.footer}
                    >
                        <div className={cls.message}>
                            {(formWithErrors) && (
                                <>
                                    <CIcon icon={cilWarning} customClassName={cls.messageIcon} />
                                    <Text
                                        size={TextSize.M}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        Форма заполнена некорректно
                                    </Text>
                                </>
                            )}
                        </div>
                        <div className={cls.footerBtns}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.footerBtn}
                                onClick={onCloseModal}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Отмена
                                </Text>
                            </Button>
                            <Button
                                theme={ButtonTheme.ERROR}
                                className={classNames(cls.footerBtn, {}, [cls.redBtn])}
                                onClick={() => {
                                    onDeleteHandler(employeeDetailData!);
                                }}
                                disabled={isLoadingEmployeeDetail
                                    || isLoadingEditEmployee
                                    || !!errorEmployeeDetail}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Удалить
                                </Text>
                                <CIcon icon={cilTrash} className={cls.btnIcon} />
                            </Button>
                            <Button
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                                disabled={isLoadingEmployeeDetail
                                    || isLoadingEditEmployee
                                    || !!errorEmployeeDetail}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Сохранить
                                </Text>
                                <CIcon icon={cilSave} className={cls.btnIcon} />
                            </Button>
                        </div>
                    </CModalFooter>
                </CForm>
            </CModal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
