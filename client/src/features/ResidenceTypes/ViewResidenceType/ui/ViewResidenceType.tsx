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
    fetchResidenceTypeDetail,
    getResidenceTypeDetailData,
    getResidenceTypeDetailError,
    getResidenceTypeDetailIsLoading,
} from 'entities/ResidenceTypeDetail';
import { ResidenceTypesType } from 'entities/ResidenceTypes';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewResidenceType.module.scss';

interface ViewResidenceTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    residenceTypeId: string;
    onDeleteResidenceType: (residenceType: ResidenceTypesType) => void;
    onEditResidenceType: (id: string) => void;
}
export const ViewResidenceType = (props: ViewResidenceTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        residenceTypeId,
        onDeleteResidenceType,
        onEditResidenceType,
    } = props;
    const dispatch = useAppDispatch();

    const residenceTypeDetailData = useSelector(getResidenceTypeDetailData);
    const isLoadingResidenceTypeDetail = useSelector(getResidenceTypeDetailIsLoading);
    const errorResidenceTypeDetail = useSelector(getResidenceTypeDetailError);

    useEffect(() => {
        if (residenceTypeId) {
            dispatch(fetchResidenceTypeDetail(residenceTypeId));
        }
    }, [dispatch, residenceTypeId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (residenceType: ResidenceTypesType) => {
        onDeleteResidenceType(residenceType);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditResidenceType(id);
        onCloseModal();
    };

    let content;

    if (isLoadingResidenceTypeDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorResidenceTypeDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID местожительства</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {residenceTypeDetailData?.id_typeofareaofresidence}
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
                                {residenceTypeDetailData?.typeofareaofresidence}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewResidenceType, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingResidenceTypeDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Местожительство №
                                {residenceTypeDetailData?.id_typeofareaofresidence}
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
                        onClick={() => { onDeleteHandler(residenceTypeDetailData!); }}
                        disabled={
                            isLoadingResidenceTypeDetail
                            || !!errorResidenceTypeDetail
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
                        onClick={() => { onEditHandler(residenceTypeId); }}
                        disabled={
                            isLoadingResidenceTypeDetail
                            || !!errorResidenceTypeDetail
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
