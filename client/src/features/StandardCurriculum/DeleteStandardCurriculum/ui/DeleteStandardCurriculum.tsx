import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import React, { ReactElement, useRef, useState } from 'react';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { StandardCurriculumType } from 'entities/StandardCurriculum';
import { useNavigate } from 'react-router-dom';
import { getRouteStandardCurriculum } from 'shared/const/router';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './DeleteStandardCurriculum.module.scss';
import { deleteStandardCurriculum } from '../model/services/deleteStandardCurriculum/deleteStandardCurriculum';

interface DeleteStandardCurriculumProps {
    className?: string;
    standardCurriculum: StandardCurriculumType | undefined;
    visible: boolean;
    setVisible: (value: boolean) => void;
    withReturnBack?: boolean;
}
export const DeleteStandardCurriculum = (props: DeleteStandardCurriculumProps) => {
    const {
        className,
        standardCurriculum,
        visible,
        setVisible,
        withReturnBack,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const navigate = useNavigate();

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteUser = (id: string) => {
        setLoadingDelete(true);
        dispatch(deleteStandardCurriculum(id))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success(`ТУП №${standardCurriculum?.standard_curriculum_id} удален`));
                    onCloseModal();
                    setLoadingDelete(false);
                    if (withReturnBack) {
                        navigate(getRouteStandardCurriculum());
                    }
                } else if (res.meta.requestStatus === 'rejected') {
                    addToast(Toast.error('Произошла ошибка при удалении, попробуйте снова'));
                    setLoadingDelete(false);
                }
            });
    };

    return (
        <>
            <CModal
                className={classNames(cls.DeleteStandardCurriculum, {}, [className])}
                visible={visible}
                onClose={onCloseModal}
                size="lg"
                alignment="center"
            >
                <CModalHeader>
                    <CModalTitle>
                        Удаление ТУП №
                        {standardCurriculum?.standard_curriculum_id}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <Text
                        size={TextSize.XM}
                        className={cls.deleteText}
                    >
                        Вы действительно хотите
                        удалить типовой учебный план
                        {' '}
                        <span>
                            №
                            {standardCurriculum?.standard_curriculum_id}
                        </span>
                        {' '}
                        и все связанные с ним данные?
                    </Text>
                </CModalBody>
                <CModalFooter
                    className={cls.footer}
                >
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
                                Отмена
                            </Text>
                        </Button>
                        <Button
                            theme={ButtonTheme.ERROR}
                            className={classNames(cls.footerBtn, {}, [cls.redBtn])}
                            onClick={() => { onDeleteUser(standardCurriculum!.standard_curriculum_id.toString()); }}
                            disabled={loadingDelete}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Удалить
                            </Text>
                            <CIcon icon={cilTrash} className={cls.btnIcon} />
                        </Button>
                    </div>
                </CModalFooter>
            </CModal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
