import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import React, {
    ReactElement, ReactNode, useRef, useState,
} from 'react';
import { Toast } from 'shared/ui/Toast/Toast';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import cls from './TableFields.module.scss';

interface TableFieldsProps {
    children: ReactNode;
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    onSaveFields: () => void;
    onClearFields: () => void;
}
export const TableFields = ({
    className, visible, setVisible, onSaveFields, onClearFields, children,
}: TableFieldsProps) => {
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const onCloseModal = () => {
        setVisible(false);
    };

    return (
        <>
            <CModal
                className={classNames(cls.Filters, {}, [className])}
                visible={visible}
                onClose={onCloseModal}
                size="lg"
                scrollable
            >
                <CModalHeader>
                    <CModalTitle>Поля таблицы</CModalTitle>
                </CModalHeader>
                <CModalBody className={cls.modalBody}>
                    {children}
                </CModalBody>
                <CModalFooter>
                    <Button
                        onClick={() => {
                            onSaveFields();
                            addToast(Toast.success('Изменения успешно сохранены'));
                            onCloseModal();
                        }}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Сохранить
                        </Text>
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={() => {
                            onClearFields();
                            addToast(Toast.success('Изменения успешно сохранены'));
                        }}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Сбросить
                        </Text>
                    </Button>
                </CModalFooter>
            </CModal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
