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
    fetchStudentClubDetail,
    getStudentClubDetailData,
    getStudentClubDetailError,
    getStudentClubDetailIsLoading,
} from 'entities/StudentClubDetail';
import { StudentClubsType } from 'entities/StudentClubs';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ViewStudentClub.module.scss';

interface ViewStudentClubProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    studentClubId: string;
    onDeleteStudentClub: (studentClub: StudentClubsType) => void;
    onEditStudentClub: (id: string) => void;
}
export const ViewStudentClub = (props: ViewStudentClubProps) => {
    const {
        className,
        visible,
        setVisible,
        studentClubId,
        onDeleteStudentClub,
        onEditStudentClub,
    } = props;
    const dispatch = useAppDispatch();

    const studentClubDetailData = useSelector(getStudentClubDetailData);
    const isLoadingStudentClubDetail = useSelector(getStudentClubDetailIsLoading);
    const errorStudentClubDetail = useSelector(getStudentClubDetailError);

    useEffect(() => {
        if (studentClubId) {
            dispatch(fetchStudentClubDetail(studentClubId));
        }
    }, [dispatch, studentClubId]);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteHandler = (studentClub: StudentClubsType) => {
        onDeleteStudentClub(studentClub);
        onCloseModal();
    };

    const onEditHandler = (id: string) => {
        onEditStudentClub(id);
        onCloseModal();
    };

    let content;

    if (isLoadingStudentClubDetail) {
        content = (
            <Skeleton width="100%" height={120} />
        );
    } else if (errorStudentClubDetail) {
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
                            <h6 className={cls.newAddFieldTitle}>ID студенческого клуба</h6>
                            <Text
                                size={TextSize.S}
                                weight={TextWeight.BOLD}
                            >
                                {studentClubDetailData?.id_clubs}
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
                                {studentClubDetailData?.clubs}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <CModal
            className={classNames(cls.ViewStudentClub, {}, [className, 'view-student-modal'])}
            visible={visible}
            onClose={onCloseModal}
            alignment="center"
        >
            <CModalHeader>
                {
                    isLoadingStudentClubDetail
                        ? <Skeleton width={200} height={30} />
                        : (
                            <CModalTitle>
                                Студенческий клуб №
                                {studentClubDetailData?.id_clubs}
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
                        onClick={() => { onDeleteHandler(studentClubDetailData!); }}
                        disabled={
                            isLoadingStudentClubDetail
                            || !!errorStudentClubDetail
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
                        onClick={() => { onEditHandler(studentClubId); }}
                        disabled={
                            isLoadingStudentClubDetail
                            || !!errorStudentClubDetail
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
