import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import React, { ReactElement, useRef, useState } from 'react';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { StudentSectionsType } from 'entities/StudentSections';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './DeleteStudentSection.module.scss';
import { deleteStudentSection } from '../model/services/deleteStudentSection/deleteStudentSection';

interface DeleteStudentSectionProps {
    className?: string;
    studentSection: StudentSectionsType | undefined;
    visible: boolean;
    setVisible: (value: boolean) => void;
}
export const DeleteStudentSection = (props: DeleteStudentSectionProps) => {
    const {
        className,
        studentSection,
        visible,
        setVisible,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [loadingDelete, setLoadingDelete] = useState(false);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteUser = (id: string) => {
        setLoadingDelete(true);
        dispatch(deleteStudentSection(id))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success(`Секция №${studentSection?.id_sections} удалена`));
                    onCloseModal();
                    setLoadingDelete(false);
                } else if (res.meta.requestStatus === 'rejected') {
                    addToast(Toast.error('Произошла ошибка при удалении, попробуйте снова'));
                    setLoadingDelete(false);
                }
            });
    };

    return (
        <>
            <CModal
                className={classNames(cls.DeleteStudentSection, {}, [className])}
                visible={visible}
                onClose={onCloseModal}
                size="lg"
                alignment="center"
            >
                <CModalHeader>
                    <CModalTitle>
                        Удаление секции №
                        {studentSection?.id_sections}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <Text
                        size={TextSize.XM}
                        className={cls.deleteText}
                    >
                        Вы действительно хотите
                        удалить секцию
                        {' '}
                        <span>
                            №
                            {studentSection?.id_sections}
                            {' '}
                            -
                            {' '}
                            {`"${studentSection?.sections}"`}
                        </span>
                        {' '}
                        и все связанные с ним данные?
                    </Text>
                </CModalBody>
                <CModalFooter
                    className={cls.footer}
                >
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
                            onClick={() => { onDeleteUser(studentSection!.id_sections.toString()); }}
                            disabled={loadingDelete}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Удалить
                            </Text>
                            <CIcon icon={cilTrash} className={cls.btnIcon} />
                        </Button>
                    </div>
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
