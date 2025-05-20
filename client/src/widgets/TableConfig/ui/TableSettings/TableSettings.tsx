import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { getRouteImportStudents } from 'shared/const/router';
import { exportStudents } from 'features/Students/ExportStudents';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { StudentsError } from 'entities/Students';
import { EnrollmentTypesError } from 'entities/EnrollmentTypes';
import PrinterIcon from 'shared/assets/icons/printer.svg';
import ImportIcon from 'shared/assets/icons/import.svg';
import ExportIcon from 'shared/assets/icons/export.svg';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import cls from './TableSettings.module.scss';

interface TableSettingsProps {
    className?: string;
    onlyExport?: boolean;
    isLoading?: boolean;
    error?: StudentsError | EnrollmentTypesError;
    exportDisabled?: boolean;
    importDisabled?: boolean;
    printDisabled?: boolean;
}

export const TableSettings = memo((props: TableSettingsProps) => {
    const {
        className,
        onlyExport,
        isLoading,
        error,
        importDisabled,
        exportDisabled,
        printDisabled,
    } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const routeToImportStudentsPage = useCallback(() => {
        navigate(getRouteImportStudents());
    }, [navigate]);

    const exportStudentsHandler = useCallback(() => {
        dispatch(exportStudents());
    }, [dispatch]);

    return (
        <div className={classNames(cls.TableSettings, {}, [className])}>
            {!onlyExport && (
                <Button
                    className={cls.btn}
                    onClick={routeToImportStudentsPage}
                    disabled={importDisabled}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Импорт
                    </Text>
                    <Icon Svg={ImportIcon} />
                </Button>
            )}
            <Button
                className={cls.btn}
                onClick={exportStudentsHandler}
                disabled={!!error || isLoading || exportDisabled}
            >
                <Text
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                >
                    Экспорт
                </Text>
                <Icon Svg={ExportIcon} />
            </Button>
            {!onlyExport && (
                <Button
                    className={cls.btn}
                    disabled={printDisabled}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Печать
                    </Text>
                    <Icon Svg={PrinterIcon} />
                </Button>
            )}
        </div>
    );
});
