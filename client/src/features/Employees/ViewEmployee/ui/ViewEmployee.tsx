import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CNav, CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPen, cilTrash } from '@coreui/icons';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import React, { useEffect, useState } from 'react';
import { TabsType } from 'features/Employees/AddEmployee/model/types/addEmployee';
import { tabsButtonsItems } from 'features/Employees/AddEmployee';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useSelector } from 'react-redux';
import { getEmployeeDetailData, getEmployeeDetailError, getEmployeeDetailIsLoading } from 'entities/EmployeeDetail';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchEmployeeDetail } from 'entities/EmployeeDetail/model/services/fetchEmployeeDetail/fetchEmployeeDetail';
import { EmployeesType } from 'entities/Employees';
import { format } from 'date-fns';
import { capitalizeFirstLetter } from 'shared/lib/helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import { Button, ButtonForm, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewEmployee.module.scss';

interface ViewEmployeeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    employeeId: string;
    onDeleteEmployee: (employee: EmployeesType) => void;
    onEditEmployee: (id: string) => void;
}
export const ViewEmployee = (props: ViewEmployeeProps) => {
    const {
        className,
        visible,
        setVisible,
        employeeId,
        onDeleteEmployee,
        onEditEmployee,
    } = props;
    const dispatch = useAppDispatch();
    const [tabsButtons] = useState<TabsType[]>(tabsButtonsItems);
    const [activeTab, setActiveTab] = useState(1);

    const employeeDetailData = useSelector(getEmployeeDetailData);
    const isLoadingEmployeeDetail = useSelector(getEmployeeDetailIsLoading);
    const errorEmployeeDetail = useSelector(getEmployeeDetailError);

    useEffect(() => {
        if (employeeId) {
            dispatch(fetchEmployeeDetail(employeeId));
        }
    }, [dispatch, employeeId]);

    const onChangeTabHandler = (tabId: number) => {
        setActiveTab(tabId);
        const activeTab = tabsButtons.filter((tab) => tab.active)[0].id;
        tabsButtons[activeTab - 1] = { ...tabsButtons[activeTab - 1], active: false, theme: ButtonTheme.LIGHT };
        tabsButtons[tabId - 1] = { ...tabsButtons[tabId - 1], active: true, theme: ButtonTheme.BACKGROUND };
    };

    const onCloseModal = () => {
        setVisible(false);
        onChangeTabHandler(1);
    };

    const onDeleteHandler = (employee: EmployeesType) => {
        onDeleteEmployee(employee);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditEmployee(id);
        onCloseModal();
    };

    const returnYesOrNo = (value: boolean | undefined) => {
        if (value === true) {
            return 'Да';
        }
        if (value === false) {
            return 'Нет';
        }
        return 'Не указано';
    };

    let tabsContent;

    if (isLoadingEmployeeDetail) {
        tabsContent = (
            <Skeleton width="100%" height={500} />
        );
    } else if (errorEmployeeDetail) {
        tabsContent = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.BOLD}
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
                    <div className={cls.tab}>
                        <div className={cls.tabBlock}>
                            <h5 className={cls.title}>Личные данные</h5>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Фамилия</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.last_name
                                                ? capitalizeFirstLetter(employeeDetailData?.last_name)
                                                : 'Не указана'
                                        }
                                    </Text>
                                </div>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Имя</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.first_name
                                                ? capitalizeFirstLetter(employeeDetailData?.first_name)
                                                : 'Не указана'
                                        }
                                    </Text>
                                </div>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Отчество</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.middle_name
                                                ? capitalizeFirstLetter(employeeDetailData?.middle_name)
                                                : 'Не указана'
                                        }
                                    </Text>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Паспорт (серия, номер)</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.govid
                                                ? capitalizeFirstLetter(employeeDetailData?.govid)
                                                : 'Не указан'
                                        }
                                    </Text>
                                </div>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Дата рождения</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {format(new Date(employeeDetailData?.birth_date || new Date()), 'dd.MM.yyyy')}
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className={cls.tabBlock}>
                            <h5 className={cls.title}>Контактные данные</h5>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Номер телефона</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.phone_number
                                                ? employeeDetailData?.phone_number
                                                : 'Не указан'
                                        }
                                    </Text>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Адрес проживания</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.address
                                                ? capitalizeFirstLetter(employeeDetailData?.address)
                                                : 'Не указан'
                                        }
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className={cls.tabBlock}>
                            <h5 className={cls.title}>Образование</h5>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Образование</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.education
                                                ? capitalizeFirstLetter(employeeDetailData?.education.name)
                                                : 'Не указан'
                                        }
                                    </Text>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Специальность</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.specialty
                                                ? capitalizeFirstLetter(employeeDetailData?.specialty)
                                                : 'Не указана'
                                        }
                                    </Text>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Квалификация</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.qualification
                                                ? capitalizeFirstLetter(employeeDetailData?.qualification)
                                                : 'Не указана'
                                        }
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 2 && (
                    <div className={cls.tab}>
                        <div className={cls.tabBlock}>
                            <h5 className={cls.title}>Должности</h5>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Должности</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.positions
                                                ? String(employeeDetailData.positions.map((position, index) => (
                                                    index !== 0 ? ` ${position.name}` : position.name
                                                )))
                                                : 'Не указаны'
                                        }
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className={cls.tabBlock}>
                            <h5 className={cls.title}>Информация о сотруднике</h5>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Дата трудоустройства</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {format(new Date(employeeDetailData?.date_of_employment || new Date()), 'dd.MM.yyyy')}
                                    </Text>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Номер приказа о принятии на работу</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.arrival_order_number
                                                ? employeeDetailData.arrival_order_number
                                                : 'Не указан'
                                        }
                                    </Text>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>
                                        Штатный:
                                        {' '}
                                        <span className={cls.checkboxText}>
                                            {returnYesOrNo(employeeDetailData?.is_staff)}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>
                                        Является преподавателем:
                                        {' '}
                                        <span className={cls.checkboxText}>
                                            {returnYesOrNo(employeeDetailData?.is_teacher)}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Категория</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.category
                                                ? employeeDetailData.category.name
                                                : 'Не указана'
                                        }
                                    </Text>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>Ставка</h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.tariff_rate
                                                ? employeeDetailData.tariff_rate
                                                : 'Не указана'
                                        }
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className={cls.tabBlock}>
                            <h5 className={cls.title}>Опыт работы</h5>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>
                                        Общий стаж работы на момент принятия на
                                        работу
                                    </h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.work_experience
                                                ? employeeDetailData.work_experience
                                                : 'Не указан'
                                        }
                                    </Text>
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <h6 className={cls.newAddFieldTitle}>
                                        Стаж преподавания на момент принятия на работу
                                    </h6>
                                    <Text
                                        size={TextSize.S}
                                        weight={TextWeight.BOLD}
                                    >
                                        {
                                            employeeDetailData?.teaching_experience
                                                ? employeeDetailData.teaching_experience
                                                : 'Не указан'
                                        }
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewEmployee, {}, [className, 'view-employee-modal'])}
            visible={visible}
            onClose={onCloseModal}
            scrollable
        >
            <CModalHeader>
                {
                    isLoadingEmployeeDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Сотрудник №
                                {employeeDetailData?.employee_id}
                                {' '}
                                -
                                {' '}
                                {employeeDetailData?.last_name}
                                {' '}
                                {employeeDetailData?.first_name}
                                {' '}
                                {employeeDetailData?.middle_name || ''}
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
                <div />
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
                            Закрыть
                        </Text>
                    </Button>
                    <Button
                        theme={ButtonTheme.ERROR}
                        className={classNames(cls.footerBtn, {}, [cls.redBtn])}
                        onClick={() => { onDeleteHandler(employeeDetailData!); }}
                        disabled={
                            isLoadingEmployeeDetail
                            || !!errorEmployeeDetail
                        }
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
                        className={cls.footerBtn}
                        onClick={() => { onEditHandler(employeeId); }}
                        disabled={
                            isLoadingEmployeeDetail
                            || !!errorEmployeeDetail
                        }
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Редактировать
                        </Text>
                        <CIcon icon={cilPen} className={cls.btnIcon} />
                    </Button>
                </div>
            </CModalFooter>
        </CModal>
    );
};
