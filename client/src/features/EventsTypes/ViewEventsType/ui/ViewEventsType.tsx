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
    fetchEventsTypeDetail,
    getEventsTypeDetailData,
    getEventsTypeDetailError,
    getEventsTypeDetailIsLoading,
} from 'entities/EventsTypeDetail';
import { EventsTypesType } from 'entities/EventsTypes';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewEventsType.module.scss';

interface ViewEventsTypeProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    eventsTypeId: string;
    onDeleteEventsType: (eventsType: EventsTypesType) => void;
    onEditEventsType: (id: string) => void;
}
export const ViewEventsType = (props: ViewEventsTypeProps) => {
    const {
        className,
        visible,
        setVisible,
        eventsTypeId,
        onDeleteEventsType,
        onEditEventsType,
    } = props;
    const dispatch = useAppDispatch();

    const eventsTypeDetailData = useSelector(getEventsTypeDetailData);
    const isLoadingEventsTypeDetail = useSelector(getEventsTypeDetailIsLoading);
    const errorEventsTypeDetail = useSelector(getEventsTypeDetailError);

    useEffect(() => {
        if (eventsTypeId) {
            dispatch(fetchEventsTypeDetail(eventsTypeId));
        }
    }, [dispatch, eventsTypeId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (eventsType: EventsTypesType) => {
        onDeleteEventsType(eventsType);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditEventsType(id);
        onCloseModal();
    };

    let content;

    if (isLoadingEventsTypeDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorEventsTypeDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID типа соревнования</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {eventsTypeDetailData?.id_typeofevent}
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
                                {eventsTypeDetailData?.typeofevent}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewEventsType, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingEventsTypeDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Тип соревнования №
                                {eventsTypeDetailData?.id_typeofevent}
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
                        onClick={() => { onDeleteHandler(eventsTypeDetailData!); }}
                        disabled={
                            isLoadingEventsTypeDetail
                            || !!errorEventsTypeDetail
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
                        onClick={() => { onEditHandler(eventsTypeId); }}
                        disabled={
                            isLoadingEventsTypeDetail
                            || !!errorEventsTypeDetail
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
