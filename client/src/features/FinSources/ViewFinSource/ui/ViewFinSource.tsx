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
    fetchFinSourceDetail,
    getFinSourceDetailData,
    getFinSourceDetailError,
    getFinSourceDetailIsLoading,
} from 'entities/FinSourceDetail';
import { FinSourcesType } from 'entities/FinSources';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewFinSource.module.scss';

interface ViewFinSourceProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    finSourceId: string;
    onDeleteFinSource: (finSource: FinSourcesType) => void;
    onEditFinSource: (id: string) => void;
}
export const ViewFinSource = (props: ViewFinSourceProps) => {
    const {
        className,
        visible,
        setVisible,
        finSourceId,
        onDeleteFinSource,
        onEditFinSource,
    } = props;
    const dispatch = useAppDispatch();

    const finSourceDetailData = useSelector(getFinSourceDetailData);
    const isLoadingFinSourceDetail = useSelector(getFinSourceDetailIsLoading);
    const errorFinSourceDetail = useSelector(getFinSourceDetailError);

    useEffect(() => {
        if (finSourceId) {
            dispatch(fetchFinSourceDetail(finSourceId));
        }
    }, [dispatch, finSourceId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (finSource: FinSourcesType) => {
        onDeleteFinSource(finSource);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditFinSource(id);
        onCloseModal();
    };

    let content;

    if (isLoadingFinSourceDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorFinSourceDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID финансовой помощи</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {finSourceDetailData?.id_whopaying}
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
                                {finSourceDetailData?.whopaying}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewFinSource, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingFinSourceDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Финансовая помощь №
                                {finSourceDetailData?.id_whopaying}
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
                        onClick={() => { onDeleteHandler(finSourceDetailData!); }}
                        disabled={
                            isLoadingFinSourceDetail
                            || !!errorFinSourceDetail
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
                        onClick={() => { onEditHandler(finSourceId); }}
                        disabled={
                            isLoadingFinSourceDetail
                            || !!errorFinSourceDetail
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
