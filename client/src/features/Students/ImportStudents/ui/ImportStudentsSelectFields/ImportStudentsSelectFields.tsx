import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { CFormInput } from '@coreui/react';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cilArrowRight } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { importStudentsActions } from 'features/Students/ImportStudents';
import { importStudents } from 'features/Students/ImportStudents/model/services/importStudents/importStudents';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Button } from 'shared/ui/Button/Button';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import cls from './ImportStudentsSelectFields.module.scss';
import {
    getImportStudentsColumnsFromFile,
} from '../../model/selectors/getImportStudentsColumnsFromFile/getImportStudentsColumnsFromFile';
import {
    getImportStudentsDatabaseFields,
} from '../../model/selectors/getImportStudentsDatabaseFields/getImportStudentsDatabaseFields';
import {
    getImportStudentsMatchingFields,
} from '../../model/selectors/getImportStudentsMatchingFields/getImportStudentsMatchingFields';
import { ImportStudentsSendData } from '../../model/types/importStudents';

interface ImportStudentsSelectFieldsProps {
  className?: string;
  file: File;
  changeActiveTab: (value: number) => void;
}

interface ImportStudentsColumns {
    [key: string]: string;
}
export const ImportStudentsSelectFields = (props: ImportStudentsSelectFieldsProps) => {
    const {
        className,
        file,
        changeActiveTab,
    } = props;
    const dispatch = useAppDispatch();

    const columnsFromFile = useSelector(getImportStudentsColumnsFromFile);
    const databaseFields = useSelector(getImportStudentsDatabaseFields);
    const matchingFields = useSelector(getImportStudentsMatchingFields);

    const onChangeSelect = (value: string, columnName: string) => {
        dispatch(importStudentsActions.setMatchingFields([value, columnName]));
    };

    const onImportHandler = useCallback(() => {
        const dataToSend: ImportStudentsSendData = {
            columns: '',
            file,
        };

        const columnsObject: ImportStudentsColumns = {};

        Object.entries(matchingFields!).forEach(([key, value]) => {
            if (value !== 'null') {
                columnsObject[key] = value;
            }
        });

        dataToSend.columns = encodeURIComponent(JSON.stringify(columnsObject));

        dispatch(importStudents(dataToSend));
        changeActiveTab(3);
    }, [changeActiveTab, dispatch, file, matchingFields]);

    useEffect(() => {
        if (databaseFields) {
            dispatch(importStudentsActions.initMatchingFields(Object.keys(databaseFields)));
        }
    }, [databaseFields, dispatch]);

    return (

        <div className={classNames(cls.ImportStudentsSelectFields, {}, [className])}>
            <div className={cls.content}>
                <div className={classNames(cls.left, {}, ['import_students_left_block'])}>
                    <h6 className={cls.filterTitle}>Столбцы из CSV файла</h6>
                    {
                        Object.keys(databaseFields!).map((key) => (
                            <SearchSelect
                                className={cls.selectField}
                                options={columnsFromFile!}
                                optionValue={matchingFields?.[key] ? matchingFields[key] : 'null'}
                                onClickOption={onChangeSelect}
                                columnName={key}
                                key={key}
                            />
                        ))
                    }
                </div>
                <div className={cls.middle}>
                    <div className={cls.emptyTitle} />
                    {
                        Object.keys(databaseFields!).map((key) => (
                            <div
                                className={cls.iconBlock}
                                key={key}
                            >
                                <CIcon
                                    icon={cilArrowRight}
                                    className={cls.arrowIcon}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className={cls.right}>
                    <h6 className={cls.filterTitle}>Типы данных в системе</h6>
                    {
                        Object.keys(databaseFields!).map((key) => (
                            <CFormInput
                                className={cls.selectField}
                                key={key}
                                // @ts-ignore
                                value={databaseFields![key]}
                                readOnly
                            />
                        ))
                    }
                </div>
            </div>
            <Button
                className={cls.importBtn}
                onClick={onImportHandler}
            >
                <Text
                    weight={TextWeight.SEMIBOLD}
                    size={TextSize.M}
                >
                    Импортировать
                </Text>
            </Button>
        </div>
    );
};
