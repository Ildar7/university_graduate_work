import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import React, { ReactElement, useRef, useState } from 'react';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { EducationalUnitsData } from 'entities/EducationalModules';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './DeleteEduUnit.module.scss';
import { deleteEduUnit } from '../model/services/deleteEduUnit/deleteEduUnit';

interface DeleteEduUnitProps {
    className?: string;
    eduUnit: EducationalUnitsData | undefined;
    visible: boolean;
    setVisible: (value: boolean) => void;
}
export const DeleteEduUnit = (props: DeleteEduUnitProps) => {
    const {
        className,
        eduUnit,
        visible,
        setVisible,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [loadingDelete, setLoadingDelete] = useState(false);

    const onCloseModal = () => {
        setVisible(false);
    };

    const onDeleteEduUnit = (moduleId: string, unitId: string) => {
        setLoadingDelete(true);
        dispatch(deleteEduUnit([moduleId, unitId]))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success(`Модульная единица №${eduUnit?.unit_id} удалена`));
                    onCloseModal();
                    setLoadingDelete(false);
                } else if (res.meta.requestStatus === 'rejected') {
                    addToast(Toast.error('Произошла ошибка при удалении, попробуйте снова'));
                    setLoadingDelete(false);
                }
            });
    };

    return (
        <>
            <CModal
                className={classNames(cls.DeleteEduUnitType, {}, [className])}
                visible={visible}
                onClose={onCloseModal}
                size="lg"
                alignment="center"
            >
                <CModalHeader>
                    <CModalTitle>
                        Удаление модульной единицы №
                        {eduUnit?.unit_id}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <Text
                        size={TextSize.XM}
                        className={cls.deleteText}
                    >
                        Вы действительно хотите
                        удалить модульную единицу
                        {' '}
                        <span>
                            №
                            {eduUnit?.unit_id}
                            {' '}
                            -
                            {' '}
                            {`"${eduUnit?.name}"`}
                        </span>
                        {' '}
                        и все связанные с ней данные?
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
                            onClick={() => { onDeleteEduUnit(String(eduUnit!.module_id), String(eduUnit!.unit_id)); }}
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
