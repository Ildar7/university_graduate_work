import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { CModal, CModalBody } from '@coreui/react';
import React from 'react';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
    getExportStudentsIdsWithErrors,
} from 'features/Students/ExportStudents/model/selectors/getExportStudentsIdsWithErrors/getExportStudentsIdsWithErrors';
import { Button } from 'shared/ui/Button/Button';
import cls from './ExportStudents.module.scss';
import { getExportStudentsFileLink } from '../model/selectors/getExportStudentsFileLink/getExportStudentsFileLink';

interface ExportStudentsProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
}
export const ExportStudents = (props: ExportStudentsProps) => {
    const {
        className,
        visible,
        setVisible,
    } = props;
    const exportStudentsFileLink = useSelector(getExportStudentsFileLink);
    const exportStudentsIdsWithError = useSelector(getExportStudentsIdsWithErrors);

    const onCloseModal = () => {
        setVisible(false);
    };

    return (
        <CModal
            className={classNames(cls.ExportStudents, {}, [className])}
            visible={visible}
            onClose={onCloseModal}
            scrollable
            size={exportStudentsIdsWithError?.length ? 'lg' : 'sm'}
            alignment="center"
        >
            <CModalBody
                className={cls.body}
            >
                <Text
                    size={TextSize.L}
                    weight={TextWeight.BOLD}
                >
                    {
                        !exportStudentsIdsWithError?.length
                            ? 'Экспорт завершен'
                            : 'Экспорт завершен, не все данные удалось экспортировать'
                    }
                </Text>
                {exportStudentsIdsWithError?.length ? (
                    <div>
                        <Text
                            size={TextSize.M}
                        >
                            ID студентов, которых не удалось экспортировать:
                            {' '}
                        </Text>
                        <Text
                            size={TextSize.M}
                            weight={TextWeight.SEMIBOLD}
                        >
                            {
                                exportStudentsIdsWithError.map((id) => (
                                    <span>
                                        {id}
                                        ,
                                        {' '}
                                    </span>
                                ))
                            }
                        </Text>
                    </div>
                ) : ''}
                <a href={exportStudentsFileLink} target="_blank" rel="noreferrer">
                    <Button>
                        <Text
                            weight={TextWeight.SEMIBOLD}
                        >
                            Скачать файл
                        </Text>
                    </Button>
                </a>
            </CModalBody>
        </CModal>
    );
};
