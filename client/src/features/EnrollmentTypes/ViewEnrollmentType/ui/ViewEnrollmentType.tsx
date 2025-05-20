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
    fetchEnrollmentTypeDetail,
    getEnrollmentTypeDetailData,
    getEnrollmentTypeDetailError,
    getEnrollmentTypeDetailIsLoading,
} from 'entities/EnrollmentTypeDetail';
import { EnrollmentTypesType } from 'entities/EnrollmentTypes';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewEnrollmentType.module.scss';

interface ViewEnrollmentTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    enrollmentTypeId: string;
    onDeleteEnrollmentType: (enrollmentType: EnrollmentTypesType) => void;
    onEditEnrollmentType: (id: string) => void;
}
export const ViewEnrollmentType = (props: ViewEnrollmentTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        enrollmentTypeId,
        onDeleteEnrollmentType,
        onEditEnrollmentType,
    } = props;
    const dispatch = useAppDispatch();

    const enrollmentTypeDetailData = useSelector(getEnrollmentTypeDetailData);
    const isLoadingEnrollmentTypeDetail = useSelector(getEnrollmentTypeDetailIsLoading);
    const errorEnrollmentTypeDetail = useSelector(getEnrollmentTypeDetailError);

    useEffect(() => {
        if (enrollmentTypeId) {
            dispatch(fetchEnrollmentTypeDetail(enrollmentTypeId));
        }
    }, [dispatch, enrollmentTypeId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (enrollmentType: EnrollmentTypesType) => {
        onDeleteEnrollmentType(enrollmentType);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditEnrollmentType(id);
        onCloseModal();
    };

    let content;

    if (isLoadingEnrollmentTypeDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorEnrollmentTypeDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID типа зачисления</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {enrollmentTypeDetailData?.id_typeenrollment}
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
                                {enrollmentTypeDetailData?.typeenrollment}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewEnrollmentType, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingEnrollmentTypeDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Тип зачисления №
                                {enrollmentTypeDetailData?.id_typeenrollment}
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
                        onClick={() => { onDeleteHandler(enrollmentTypeDetailData!); }}
                        disabled={
                            isLoadingEnrollmentTypeDetail
                            || !!errorEnrollmentTypeDetail
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
                        onClick={() => { onEditHandler(enrollmentTypeId); }}
                        disabled={
                            isLoadingEnrollmentTypeDetail
                            || !!errorEnrollmentTypeDetail
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
