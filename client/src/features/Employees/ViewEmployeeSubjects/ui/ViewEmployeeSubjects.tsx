import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import {
    fetchEmployeeDetail,
    getEmployeeDetailData,
    getEmployeeDetailError,
    getEmployeeDetailIsLoading,
} from 'entities/EmployeeDetail';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { CToaster } from '@coreui/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { Toast } from 'shared/ui/Toast/Toast';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { deleteEmployeeSubject } from 'features/Employees/DeleteEmployeeSubject';
import { capitalizeFirstLetter } from 'shared/lib/helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import cls from './ViewEmployeeSubjects.module.scss';

interface ViewEmployeeSubjectsProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    employeeId: string;
    onShowAddSubjectModal: () => void;
}

export const ViewEmployeeSubjects = memo((props: ViewEmployeeSubjectsProps) => {
    const {
        className,
        onClose,
        isOpen,
        employeeId,
        onShowAddSubjectModal,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [loadingDelete, setLoadingDelete] = useState(false);

    const employeeDetail = useSelector(getEmployeeDetailData);
    const employeeDetailIsLoading = useSelector(getEmployeeDetailIsLoading);
    const employeeDetailError = useSelector(getEmployeeDetailError);

    const onDeleteSubject = (subjectId: string) => {
        setLoadingDelete(true);
        dispatch(deleteEmployeeSubject([employeeId, subjectId]))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    const employeeSubject = employeeDetail?.subjects
                        .filter((subject) => subject.subject_id === +subjectId)[0];
                    addToast(Toast.success(`Дисциплина "${employeeSubject?.name}" успешно отвязана от преподавателя`));
                    setLoadingDelete(false);
                } else if (res.meta.requestStatus === 'rejected') {
                    addToast(Toast.error('Произошла ошибка при удалении, попробуйте снова'));
                    setLoadingDelete(false);
                }
            });
    };

    const onOpenAddSubjectModal = useCallback(() => {
        onClose();
        onShowAddSubjectModal();
    }, [onClose, onShowAddSubjectModal]);

    useEffect(() => {
        if (employeeId) {
            dispatch(fetchEmployeeDetail(employeeId));
        }
    }, [dispatch, employeeId]);

    let content;

    if (employeeDetailIsLoading || loadingDelete) {
        content = (
            <Skeleton width="100%" height={150} />
        );
    } else if (employeeDetailError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <div className={cls.content}>
                <div className={cls.subjects}>
                    {
                        employeeDetail?.subjects.length
                            ? (
                                [...employeeDetail!.subjects]
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((subject, index) => (
                                        <div className={cls.subjectItem}>
                                            <Text
                                                key={subject.subject_id}
                                                weight={TextWeight.SEMIBOLD}
                                                size={TextSize.XS}
                                                className={cls.subjectText}
                                            >
                                                {`${index + 1})`}
                                                {' '}
                                                {capitalizeFirstLetter(subject.name)}
                                            </Text>
                                            <Button
                                                theme={ButtonTheme.CLEAR}
                                                title="Удалить"
                                                className={cls.deleteBtn}
                                                onClick={() => {
                                                    onDeleteSubject(String(subject.subject_id));
                                                }}
                                            >
                                                <Icon Svg={TrashIcon} />
                                            </Button>
                                        </div>
                                    ))
                            )
                            : (
                                <Text
                                    weight={TextWeight.SEMIBOLD}
                                    className={cls.subjectText}
                                    align={TextAlign.CENTER}
                                >
                                    У данного преподавателя отсутствуют дисциплины...
                                </Text>
                            )
                    }
                </div>

                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_DARK}
                        className={cls.footerBtn}
                        onClick={onClose}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Закрыть
                        </Text>
                        <Icon Svg={CloseBorderedIcon} />
                    </Button>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.footerBtn}
                        onClick={onOpenAddSubjectModal}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Добавить предмет
                        </Text>
                        <Icon Svg={PlusBorderedIcon} />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Modal
                contentClassName={classNames(cls.ViewEmployeeSubjects, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                title="Список дисциплин преподавателя"
            >
                {content}
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
