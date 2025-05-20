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
    fetchSpecialityDetail,
    getSpecialityDetailData,
    getSpecialityDetailError,
    getSpecialityDetailIsLoading,
} from 'entities/SpecialityDetail';
import { SpecialtiesType } from 'entities/Specialties';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewSpeciality.module.scss';

interface ViewSpecialityProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    specialityId: string;
    onDeleteSpeciality: (speciality: SpecialtiesType) => void;
    onEditSpeciality: (id: string) => void;
}
export const ViewSpeciality = (props: ViewSpecialityProps) => {
    const {
        className,
        visible,
        setVisible,
        specialityId,
        onDeleteSpeciality,
        onEditSpeciality,
    } = props;
    const dispatch = useAppDispatch();

    const specialityDetailData = useSelector(getSpecialityDetailData);
    const isLoadingSpecialityDetail = useSelector(getSpecialityDetailIsLoading);
    const errorSpecialityDetail = useSelector(getSpecialityDetailError);

    useEffect(() => {
        if (specialityId) {
            dispatch(fetchSpecialityDetail(specialityId));
        }
    }, [dispatch, specialityId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (speciality: SpecialtiesType) => {
        onDeleteSpeciality(speciality);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditSpeciality(id);
        onCloseModal();
    };

    let content;

    if (isLoadingSpecialityDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorSpecialityDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID специальности</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {specialityDetailData?.id_spec}
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
                                {specialityDetailData?.speciality}
                            </Text>
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Код специальности</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {specialityDetailData?.shifr_spec}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewSpeciality, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingSpecialityDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Специальность №
                                {specialityDetailData?.id_spec}
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
                        onClick={() => { onDeleteHandler(specialityDetailData!); }}
                        disabled={
                            isLoadingSpecialityDetail
                            || !!errorSpecialityDetail
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
                        onClick={() => { onEditHandler(specialityId); }}
                        disabled={
                            isLoadingSpecialityDetail
                            || !!errorSpecialityDetail
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
