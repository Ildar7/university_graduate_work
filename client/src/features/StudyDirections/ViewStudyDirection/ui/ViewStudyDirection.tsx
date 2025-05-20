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
    fetchStudyDirectionDetail,
    getStudyDirectionDetailData,
    getStudyDirectionDetailError,
    getStudyDirectionDetailIsLoading,
} from 'entities/StudyDirectionDetail';
import { StudyDirectionsType } from 'entities/StudyDirections';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewStudyDirection.module.scss';

interface ViewStudyDirectionProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    studyDirectionId: string;
    onDeleteStudyDirection: (studyDirection: StudyDirectionsType) => void;
    onEditStudyDirection: (id: string) => void;
}
export const ViewStudyDirection = (props: ViewStudyDirectionProps) => {
    const {
        className,
        visible,
        setVisible,
        studyDirectionId,
        onDeleteStudyDirection,
        onEditStudyDirection,
    } = props;
    const dispatch = useAppDispatch();

    const studyDirectionDetailData = useSelector(getStudyDirectionDetailData);
    const isLoadingStudyDirectionDetail = useSelector(getStudyDirectionDetailIsLoading);
    const errorStudyDirectionDetail = useSelector(getStudyDirectionDetailError);

    useEffect(() => {
        if (studyDirectionId) {
            dispatch(fetchStudyDirectionDetail(studyDirectionId));
        }
    }, [dispatch, studyDirectionId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (studyDirection: StudyDirectionsType) => {
        onDeleteStudyDirection(studyDirection);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditStudyDirection(id);
        onCloseModal();
    };

    let content;

    if (isLoadingStudyDirectionDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorStudyDirectionDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID направления олимпиады</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {studyDirectionDetailData?.id_typeofdirection}
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
                                {studyDirectionDetailData?.typeofdirection}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewStudyDirection, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingStudyDirectionDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Направление олимпиады №
                                {studyDirectionDetailData?.id_typeofdirection}
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
                        onClick={() => { onDeleteHandler(studyDirectionDetailData!); }}
                        disabled={
                            isLoadingStudyDirectionDetail
                            || !!errorStudyDirectionDetail
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
                        onClick={() => { onEditHandler(studyDirectionId); }}
                        disabled={
                            isLoadingStudyDirectionDetail
                            || !!errorStudyDirectionDetail
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
