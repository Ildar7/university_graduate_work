import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPen, cilTrash } from '@coreui/icons';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import React, { useEffect } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchStudentSectionDetail,
    getStudentSectionDetailData,
    getStudentSectionDetailError,
    getStudentSectionDetailIsLoading,
} from 'entities/StudentSectionDetail';
import { StudentSectionsType } from 'entities/StudentSections';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewStudentSection.module.scss';

interface ViewStudentSectionProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    studentSectionId: string;
    onDeleteStudentSection: (studentSection: StudentSectionsType) => void;
    onEditStudentSection: (id: string) => void;
}
export const ViewStudentSection = (props: ViewStudentSectionProps) => {
    const {
        className,
        visible,
        setVisible,
        studentSectionId,
        onDeleteStudentSection,
        onEditStudentSection,
    } = props;
    const dispatch = useAppDispatch();

    const studentSectionDetailData = useSelector(getStudentSectionDetailData);
    const isLoadingStudentSectionDetail = useSelector(getStudentSectionDetailIsLoading);
    const errorStudentSectionDetail = useSelector(getStudentSectionDetailError);

    useEffect(() => {
        if (studentSectionId) {
            dispatch(fetchStudentSectionDetail(studentSectionId));
        }
    }, [dispatch, studentSectionId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (studentSection: StudentSectionsType) => {
        onDeleteStudentSection(studentSection);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditStudentSection(id);
        onCloseModal();
    };

    let content;

    if (isLoadingStudentSectionDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorStudentSectionDetail) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.BOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <div className={cls.tab}>
                <div className={cls.tabBlock}>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>ID секции</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {studentSectionDetailData?.id_sections}
                            </Text>
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Наименование</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {studentSectionDetailData?.sections}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewStudentSection, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingStudentSectionDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Секция №
                                {studentSectionDetailData?.id_sections}
                            </CModalTitle>
                        )
                }
            </CModalHeader>
            <CModalBody>
                {content}
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
                        onClick={() => { onDeleteHandler(studentSectionDetailData!); }}
                        disabled={
                            isLoadingStudentSectionDetail
                            || !!errorStudentSectionDetail
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
                        color="primary"
                        className={cls.footerBtn}
                        onClick={() => { onEditHandler(studentSectionId); }}
                        disabled={
                            isLoadingStudentSectionDetail
                            || !!errorStudentSectionDetail
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
