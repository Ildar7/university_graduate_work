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
    fetchPerformanceTypeDetail,
    getPerformanceTypeDetailData,
    getPerformanceTypeDetailError,
    getPerformanceTypeDetailIsLoading,
} from 'entities/PerformanceTypeDetail';
import { PerformanceTypesType } from 'entities/PerformanceTypes';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewPerformanceType.module.scss';

interface ViewPerformanceTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    performanceTypeId: string;
    onDeletePerformanceType: (performanceType: PerformanceTypesType) => void;
    onEditPerformanceType: (id: string) => void;
}
export const ViewPerformanceType = (props: ViewPerformanceTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        performanceTypeId,
        onDeletePerformanceType,
        onEditPerformanceType,
    } = props;
    const dispatch = useAppDispatch();

    const performanceTypeDetailData = useSelector(getPerformanceTypeDetailData);
    const isLoadingPerformanceTypeDetail = useSelector(getPerformanceTypeDetailIsLoading);
    const errorPerformanceTypeDetail = useSelector(getPerformanceTypeDetailError);

    useEffect(() => {
        if (performanceTypeId) {
            dispatch(fetchPerformanceTypeDetail(performanceTypeId));
        }
    }, [dispatch, performanceTypeId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (performanceType: PerformanceTypesType) => {
        onDeletePerformanceType(performanceType);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditPerformanceType(id);
        onCloseModal();
    };

    let content;

    if (isLoadingPerformanceTypeDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorPerformanceTypeDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID категории успеваемости</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {performanceTypeDetailData?.id_academicperformancesemester}
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
                                {performanceTypeDetailData?.academicperformancesemester}
                            </Text>
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Сумма</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {performanceTypeDetailData?.perfomance_value}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewPerformanceType, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingPerformanceTypeDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Категория успеваемости №
                                {performanceTypeDetailData?.id_academicperformancesemester}
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
                        onClick={() => { onDeleteHandler(performanceTypeDetailData!); }}
                        disabled={
                            isLoadingPerformanceTypeDetail
                            || !!errorPerformanceTypeDetail
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
                        onClick={() => { onEditHandler(performanceTypeId); }}
                        disabled={
                            isLoadingPerformanceTypeDetail
                            || !!errorPerformanceTypeDetail
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
