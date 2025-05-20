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
    fetchPracticeTypeDetail,
    getPracticeTypeDetailData,
    getPracticeTypeDetailError,
    getPracticeTypeDetailIsLoading,
} from 'entities/PracticeTypeDetail';
import { PracticeTypesType } from 'entities/PracticeTypes';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewPracticeType.module.scss';

interface ViewPracticeTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    practiceTypeId: string;
    onDeletePracticeType: (practiceType: PracticeTypesType) => void;
    onEditPracticeType: (id: string) => void;
}
export const ViewPracticeType = (props: ViewPracticeTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        practiceTypeId,
        onDeletePracticeType,
        onEditPracticeType,
    } = props;
    const dispatch = useAppDispatch();

    const practiceTypeDetailData = useSelector(getPracticeTypeDetailData);
    const isLoadingPracticeTypeDetail = useSelector(getPracticeTypeDetailIsLoading);
    const errorPracticeTypeDetail = useSelector(getPracticeTypeDetailError);

    useEffect(() => {
        if (practiceTypeId) {
            dispatch(fetchPracticeTypeDetail(practiceTypeId));
        }
    }, [dispatch, practiceTypeId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (practiceType: PracticeTypesType) => {
        onDeletePracticeType(practiceType);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditPracticeType(id);
        onCloseModal();
    };

    let content;

    if (isLoadingPracticeTypeDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorPracticeTypeDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID вида практики</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {practiceTypeDetailData?.id_practice}
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
                                {practiceTypeDetailData?.practice}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewPracticeType, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingPracticeTypeDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Вид практики №
                                {practiceTypeDetailData?.id_practice}
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
                        onClick={() => { onDeleteHandler(practiceTypeDetailData!); }}
                        disabled={
                            isLoadingPracticeTypeDetail
                            || !!errorPracticeTypeDetail
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
                        onClick={() => { onEditHandler(practiceTypeId); }}
                        disabled={
                            isLoadingPracticeTypeDetail
                            || !!errorPracticeTypeDetail
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
