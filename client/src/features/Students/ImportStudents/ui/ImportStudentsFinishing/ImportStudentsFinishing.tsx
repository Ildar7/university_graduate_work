import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteImportStudents, getRouteStudents } from 'shared/const/router';
import { Button } from 'shared/ui/Button/Button';
import cls from './ImportStudentsFinishing.module.scss';
import { getImportStudentsData } from '../../model/selectors/getImportStudentsData/getImportStudentsData';
import { getImportStudentsError } from '../../model/selectors/getImportStudentsError/getImportStudentsError';

interface ImportStudentsFinishingProps {
    className?: string;
}
export const ImportStudentsFinishing = (props: ImportStudentsFinishingProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();
    const importData = useSelector(getImportStudentsData);
    const errorImport = useSelector(getImportStudentsError);

    const goToStudentsPage = useCallback(() => {
        navigate(getRouteStudents());
    }, [navigate]);

    const goToFirstStep = useCallback(() => {
        window.location.replace(getRouteImportStudents());
    }, []);

    let content;

    if (errorImport) {
        content = (
            <>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Во время импорта данных возникла ошибка:
                </Text>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.REGULAR}
                    className={cls.errorText}
                >
                    {errorImport}
                </Text>
                <div className={cls.buttons}>
                    <Button
                        onClick={goToFirstStep}
                    >
                        <Text
                            weight={TextWeight.SEMIBOLD}
                        >
                            Попробовать снова
                        </Text>
                    </Button>
                    <Button
                        onClick={goToStudentsPage}
                        className={cls.button}
                    >
                        <Text
                            weight={TextWeight.SEMIBOLD}
                        >
                            Вернуться на таблицу студентов
                        </Text>
                    </Button>
                </div>
            </>
        );
    } else {
        content = (
            <>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Успешно добавлено
                    {' '}
                    {importData!.count}
                    {' '}
                    студентов
                </Text>
                <Button
                    onClick={goToStudentsPage}
                    className={cls.button}
                >
                    <Text
                        weight={TextWeight.SEMIBOLD}
                    >
                        Открыть таблицу студентов
                    </Text>
                </Button>
            </>
        );
    }

    return (
        <div className={classNames(cls.ImportStudentsFinishing, {}, [className])}>
            {content}
        </div>
    );
};
