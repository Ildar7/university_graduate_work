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
import { cilPlus, cilWarning } from '@coreui/icons';
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
import {
    addEmployeePositionToEmployee,
    addEmployeePositionToEmployeeActions, AddEmployeePositionToEmployeeErrors,
    getAddEmployeePositionToEmployeeData,
} from 'features/Employees/AddEmployeePosition';
import { EmployeesType } from 'entities/Employees';
import { getAddEmployeeData } from '../../model/selectors/getAddEmployeeData/getAddEmployeeData';
import {
    getAddEmployeeErrors,
} from '../../model/selectors/getAddEmployeeErrors/getAddEmployeeErrors';
import { AddEmployeePersonalDataTab } from '../AddEmployeePersonalDataTab/AddEmployeePersonalDataTab';
import { AddEmployeeProfActivityTab } from '../AddEmployeeProfActivityTab/AddEmployeeProfActivityTab';
import {
    AddEmployeeErrorDataBase, AddEmployeeErrors, AddEmployeeType, TabsType,
} from '../../model/types/addEmployee';
import { addEmployeeActions } from '../../model/slice/addEmployeeSlice';
import { tabsButtonsItems } from '../../const/tabs';
import cls from './AddEmployee.module.scss';
import { addNewEmployee } from '../../model/services/addNewEmployee/addNewEmployee';

interface AddEmployeeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
}

export const AddEmployee = (props: AddEmployeeProps) => {
    const {
        className,
        visible,
        setVisible,
    } = props;
    const [tabsButtons] = useState<TabsType[]>(tabsButtonsItems);
    const [activeTab, setActiveTab] = useState(1);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [selectedPositionsNames, setSelectedPositionsNames] = useState<string[]>([]);

    const dispatch = useAppDispatch();

    const addEmployeeData = useSelector(getAddEmployeeData);
    const addEmployeeValidationErrors = useSelector(getAddEmployeeErrors);
    const addEmployeePositionData = useSelector(getAddEmployeePositionToEmployeeData);

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
        dispatch(addEmployeeActions.clearData());
        dispatch(addEmployeePositionToEmployeeActions.clearData());
    }, [dispatch, onChangeTabHandler]);

    const onCloseModal = useCallback(() => {
        setVisible(false);
        clearData();
    }, [clearData, setVisible]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            let dataToCheck;

            if (addEmployeeData?.is_teacher) {
                dataToCheck = excludePropertiesFromObject(addEmployeeData, ['middle_name', 'category_id']);
            } else {
                dataToCheck = excludePropertiesFromObject(addEmployeeData, ['middle_name', 'category_id', 'teaching_experience']);
            }

            if (validateObjectFieldsNotNull(dataToCheck) && addEmployeePositionData?.position_ids?.length) {
                const result = await dispatch(addNewEmployee());
                let resultAddPosition;

                if (result.meta.requestStatus === 'fulfilled') {
                    resultAddPosition = await dispatch(addEmployeePositionToEmployee((result.payload as EmployeesType).employee_id.toString()));
                }

                if (result.meta.requestStatus === 'rejected') {
                    addToast(Toast.error(translateErrors('Произошла ошибка при добавлении сотрудника')));
                    setFormWithErrors(true);
                }

                if (resultAddPosition?.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Сотрудник добавлен'));
                    onCloseModal();
                }

                if (resultAddPosition?.meta.requestStatus === 'rejected') {
                    addToast(Toast.error(translateErrors('Произошла ошибка при привязке должности к преподавателю')));
                    setFormWithErrors(true);
                }
            } else {
                addToast(Toast.error('Заполните все необходимые поля!'));
                setFormWithErrors(true);
            }
        }
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('education_id'));
        dispatch(fetchEmployeeEducations());
        dispatch(tableSortActions.setSort('position_id'));
        dispatch(fetchEmployeePositions());
        dispatch(tableSortActions.setSort('category_id'));
        dispatch(fetchEmployeeCategories());
    }, [dispatch]);

    let tabsContent;

    if (educationsIsLoading || positionsIsLoading || categoriesIsLoading) {
        tabsContent = (
            <Skeleton width="100%" height={500} />
        );
    } else if (educationsError || positionsError || categoriesError) {
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
                    <AddEmployeePersonalDataTab
                        className={cls.tab}
                        formWithErrors={formWithErrors}
                        visible={visible}
                    />
                )}
                {activeTab === 2 && (
                    <AddEmployeeProfActivityTab
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
                className={classNames(cls.AddEmployee, {}, [className])}
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
                        <CModalTitle>Добавление сотрудника</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        {tabsContent}
                    </CModalBody>
                    <CModalFooter
                        className={cls.footer}
                    >
                        <div className={cls.message}>
                            {(formWithErrors || addEmployeeValidationErrors) && (
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
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Добавить
                                </Text>
                                <CIcon icon={cilPlus} className={cls.btnIcon} />
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
