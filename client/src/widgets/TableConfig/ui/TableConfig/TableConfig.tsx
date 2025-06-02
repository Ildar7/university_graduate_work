import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { ReactNode, useCallback, useState } from 'react';
import { TableFilters } from 'features/TableFilters';
import { StudentsError } from 'entities/Students';
import { useNavigate } from 'react-router-dom';
import { EnrollmentTypesError } from 'entities/EnrollmentTypes';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SettingsIcon from 'shared/assets/icons/settings.svg';
import AddStudentIcon from 'shared/assets/icons/add-user.svg';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { ReferencesList } from 'widgets/ReferencesList/ReferencesList';
import { BreadcrumbList } from 'widgets/Breadcrumb';
import { TableFields } from 'widgets/TableFields';
import cls from './TableConfig.module.scss';

interface TableConfigProps {
    className?: string;
    onSaveFields?: () => void;
    onClearFields?: () => void;
    onlyAdding?: boolean;
    addingModalText?: string;
    secondBtnText?: string;
    addingModalIcon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    secondBtnIcon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    secondBtnHandler?: () => void;
    children: ReactNode;
    setVisibleAddNewField?: (value: boolean) => void;
    isLoading?: boolean;
    error?: StudentsError | EnrollmentTypesError;
    pathname?: string;
    references?: BreadcrumbList[];
    referencesTitle?: string;
    referencesPositionRight?: boolean;
    addingVisible?: boolean;
    filtersVisible?: boolean;
    TableFieldsContent?: React.MemoExoticComponent<(props: any) => JSX.Element>;
}
export const TableConfig = (props: TableConfigProps) => {
    const {
        children,
        className,
        onSaveFields,
        onClearFields,
        onlyAdding = false,
        setVisibleAddNewField,
        addingModalText,
        addingModalIcon,
        isLoading,
        error,
        pathname,
        references,
        referencesTitle = 'Справочники',
        referencesPositionRight,
        addingVisible = true,
        secondBtnHandler,
        secondBtnText,
        secondBtnIcon,
        filtersVisible = true,
        TableFieldsContent,
    } = props;

    const [visibleFiltersModal, setVisibleFiltersModal] = useState(false);
    const [visibleFieldsModal, setVisibleFieldsModal] = useState(false);
    const navigate = useNavigate();

    const onShowFieldsModal = useCallback(() => {
        setVisibleFieldsModal(true);
    }, []);

    const onShowAddNewFieldHandler = useCallback(() => {
        if (pathname) {
            navigate(pathname);
        } else {
            setVisibleAddNewField!(true);
        }
    }, [navigate, pathname, setVisibleAddNewField]);

    return (
        <div className={classNames(cls.TableConfig, {}, [className])}>
            <div className={cls.leftConfig}>
                {references && !referencesPositionRight && (
                    <ReferencesList
                        title={referencesTitle}
                        items={references}
                    />
                )}
                {!onlyAdding && (
                    <>
                        {TableFieldsContent && (
                            <Button
                                className={cls.btn}
                                disabled={!!error || isLoading}
                                onClick={onShowFieldsModal}
                                size={ButtonSize.M}
                            >
                                <Text size={TextSize.XS} weight={TextWeight.SEMIBOLD}>Поля таблиц</Text>
                                <Icon Svg={SettingsIcon} />
                            </Button>
                        )}
                    </>
                )}
            </div>
            {addingVisible && (
                <div className={cls.rightConfig}>
                    {references && referencesPositionRight && (
                        <ReferencesList
                            title={referencesTitle}
                            items={references}
                        />
                    )}
                    {secondBtnText && (
                        <Button
                            className={cls.btn}
                            onClick={secondBtnHandler}
                            size={ButtonSize.M}
                        >
                            <Text size={TextSize.XS} weight={TextWeight.SEMIBOLD}>{secondBtnText}</Text>
                            <Icon Svg={secondBtnIcon || AddStudentIcon} />
                        </Button>
                    )}
                    <Button
                        className={cls.btn}
                        onClick={onShowAddNewFieldHandler}
                        disabled={!!error || isLoading}
                        size={ButtonSize.M}
                    >
                        <Text size={TextSize.XS} weight={TextWeight.SEMIBOLD}>{addingModalText}</Text>
                        <Icon Svg={addingModalIcon || AddStudentIcon} />
                    </Button>
                </div>
            )}

            {!onlyAdding && (
                <>
                    {filtersVisible && (
                        <TableFilters
                            visible={visibleFiltersModal}
                            setVisible={setVisibleFiltersModal}
                        />
                    )}

                    {TableFieldsContent && (
                        <TableFields
                            visible={visibleFieldsModal}
                            setVisible={setVisibleFieldsModal}
                            onSaveFields={onSaveFields!}
                            onClearFields={onClearFields!}
                        >
                            <TableFieldsContent />
                        </TableFields>
                    )}
                </>
            )}

            {children}

        </div>
    );
};
