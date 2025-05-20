import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback } from 'react';
import {
    CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
} from '@coreui/react';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useNavigate } from 'react-router-dom';
import { getRouteStandardCurriculum } from 'shared/const/router';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './StandardCurriculumReturnBackModal.module.scss';

interface StandardCurriculumReturnBackModalProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
}
export const StandardCurriculumReturnBackModal = (props: StandardCurriculumReturnBackModalProps) => {
    const {
        className,
        visible,
        setVisible,
    } = props;
    const navigate = useNavigate();

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onSuccessClick = useCallback(() => {
        navigate(getRouteStandardCurriculum());
    }, [navigate]);

    return (
        <CModal
            className={classNames(cls.AddStandardCurriculumModuleModal, {}, [className])}
            visible={visible}
            onClose={onCloseModal}
            size="lg"
            alignment="center"
        >
            <CModalHeader>
                <CModalTitle>
                    <Text
                        theme={TextTheme.ERROR}
                        size={TextSize.M}
                    >
                        Внимание!
                    </Text>
                </CModalTitle>
            </CModalHeader>
            <CModalBody>
                <div className={cls.tab}>
                    <div className={cls.tabBlock}>
                        <Text
                            size={TextSize.L}
                        >
                            Все несохраненные данные будут удалены.
                        </Text>
                        <Text
                            size={TextSize.L}
                        >
                            Подтверждаете ли вы данное действие?
                        </Text>
                    </div>
                </div>
            </CModalBody>
            <CModalFooter
                className={cls.footer}
            >
                <div className={cls.message} />
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
                        className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                        onClick={onSuccessClick}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Подтверждаю
                        </Text>
                    </Button>
                </div>
            </CModalFooter>
        </CModal>
    );
};
