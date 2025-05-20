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
    fetchArrivalSourceDetail,
    getArrivalSourceDetailData,
    getArrivalSourceDetailError,
    getArrivalSourceDetailIsLoading,
} from 'entities/ArrivalSourceDetail';
import { ArrivalSourcesType } from 'entities/ArrivalSources';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewArrivalSource.module.scss';

interface ViewArrivalSourceProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    arrivalSourceId: string;
    onDeleteArrivalSource: (arrivalSource: ArrivalSourcesType) => void;
    onEditArrivalSource: (id: string) => void;
}
export const ViewArrivalSource = (props: ViewArrivalSourceProps) => {
    const {
        className,
        visible,
        setVisible,
        arrivalSourceId,
        onDeleteArrivalSource,
        onEditArrivalSource,
    } = props;
    const dispatch = useAppDispatch();

    const arrivalSourceDetailData = useSelector(getArrivalSourceDetailData);
    const isLoadingArrivalSourceDetail = useSelector(getArrivalSourceDetailIsLoading);
    const errorArrivalSourceDetail = useSelector(getArrivalSourceDetailError);

    useEffect(() => {
        if (arrivalSourceId) {
            dispatch(fetchArrivalSourceDetail(arrivalSourceId));
        }
    }, [dispatch, arrivalSourceId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (arrivalSource: ArrivalSourcesType) => {
        onDeleteArrivalSource(arrivalSource);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditArrivalSource(id);
        onCloseModal();
    };

    useEffect(() => {
        if (errorArrivalSourceDetail === 'timeout') {
            console.log('Bla-bla-bla');
        }
    }, [errorArrivalSourceDetail]);

    let content;

    if (isLoadingArrivalSourceDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorArrivalSourceDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID места рождения</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {arrivalSourceDetailData?.id_comesfrom}
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
                                {arrivalSourceDetailData?.comesfrom}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewArrivalSource, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingArrivalSourceDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Место рождения №
                                {arrivalSourceDetailData?.id_comesfrom}
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
                        onClick={() => { onDeleteHandler(arrivalSourceDetailData!); }}
                        disabled={
                            isLoadingArrivalSourceDetail
                            || !!errorArrivalSourceDetail
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
                        onClick={() => { onEditHandler(arrivalSourceId); }}
                        disabled={
                            isLoadingArrivalSourceDetail
                            || !!errorArrivalSourceDetail
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
