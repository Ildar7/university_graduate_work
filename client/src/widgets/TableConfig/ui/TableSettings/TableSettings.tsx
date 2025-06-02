import React, { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { StudentsError } from 'entities/Students';
import { EnrollmentTypesError } from 'entities/EnrollmentTypes';
import PrinterIcon from 'shared/assets/icons/printer.svg';
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
        printDisabled,
    } = props;
    return (
        <div className={classNames(cls.TableSettings, {}, [className])}>
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
