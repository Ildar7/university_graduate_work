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
    fetchEduFormDetail,
    getEduFormDetailData,
    getEduFormDetailError,
    getEduFormDetailIsLoading,
} from 'entities/EduFormDetail';
import { EduFormsType } from 'entities/EduForms';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewEduForm.module.scss';

interface ViewEduFormProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    eduFormId: string;
    onDeleteEduForm: (eduForm: EduFormsType) => void;
    onEditEduForm: (id: string) => void;
}
export const ViewEduForm = (props: ViewEduFormProps) => {
    const {
        className,
        visible,
        setVisible,
        eduFormId,
        onDeleteEduForm,
        onEditEduForm,
    } = props;
    const dispatch = useAppDispatch();

    const eduFormDetailData = useSelector(getEduFormDetailData);
    const isLoadingEduFormDetail = useSelector(getEduFormDetailIsLoading);
    const errorEduFormDetail = useSelector(getEduFormDetailError);

    useEffect(() => {
        if (eduFormId) {
            dispatch(fetchEduFormDetail(eduFormId));
        }
    }, [dispatch, eduFormId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (eduForm: EduFormsType) => {
        onDeleteEduForm(eduForm);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditEduForm(id);
        onCloseModal();
    };

    let content;

    if (isLoadingEduFormDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorEduFormDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID формы обучения</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {eduFormDetailData?.id_typeoftraining}
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
                                {eduFormDetailData?.typeoftraining}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewEduForm, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingEduFormDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Форма обучения №
                                {eduFormDetailData?.id_typeoftraining}
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
                        onClick={() => { onDeleteHandler(eduFormDetailData!); }}
                        disabled={
                            isLoadingEduFormDetail
                            || !!errorEduFormDetail
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
                        onClick={() => { onEditHandler(eduFormId); }}
                        disabled={
                            isLoadingEduFormDetail
                            || !!errorEduFormDetail
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
