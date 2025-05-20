import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { CForm, CToaster } from '@coreui/react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    editCurriculumSubject,
    editCurriculumSubjectActions,
    getEditCurriculumSubjectIsLoading,
    getEditCurriculumSubjectNewFieldsData,
} from 'features/CurriculumSubjects/EditCurriculumSubject';
import {
    fetchCurriculumSubjectsDetail,
    getCurriculumSubjectsDetailData,
    getCurriculumSubjectsDetailError,
    getCurriculumSubjectsDetailIsLoading,
} from 'entities/CurriculumSubjectsDetail';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import { Toast } from 'shared/ui/Toast/Toast';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import CheckIcon from 'shared/assets/icons/check.svg';
import cls from './EditDiscipline.module.scss';
import { workingCurriculumExtractActions } from '../../../../model/slice/workingCurriculumExtractSlice';
import {
    WorkingCurriculumExtractModules,
    WorkingCurriculumExtractQualifications,
    WorkingCurriculumExtractUnits,
} from '../../../../model/types/workingCurriculumExtractQualifications';

interface EditDisciplineProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    qualification?: WorkingCurriculumExtractQualifications;
    moduleDetail?: WorkingCurriculumExtractModules;
    unitDetail?: WorkingCurriculumExtractUnits;
    curriculumSubjectsId?: string;
}

export const EditDiscipline = memo((props: EditDisciplineProps) => {
    const {
        className,
        onClose,
        isOpen,
        qualification,
        moduleDetail,
        unitDetail,
        curriculumSubjectsId,
    } = props;
    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const curriculumSubjectDetailData = useSelector(getCurriculumSubjectsDetailData);
    const isLoadingCurriculumSubjectDetail = useSelector(getCurriculumSubjectsDetailIsLoading);
    const errorCurriculumSubjectDetail = useSelector(getCurriculumSubjectsDetailError);

    const isLoadingEditCurriculumSubject = useSelector(getEditCurriculumSubjectIsLoading);
    const editCurriculumSubjectNewFieldsData = useSelector(getEditCurriculumSubjectNewFieldsData);

    const onCancelHandler = useCallback(() => {
        onClose();
        setValidated(false);
        dispatch(editCurriculumSubjectActions.clearNewFields());
    }, [dispatch, onClose]);

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editCurriculumSubjectActions.setName(event.target.value));
    };

    const handleSubmit = async () => {
        if (!editCurriculumSubjectNewFieldsData?.name) {
            addToast(Toast.error('Заполните название'));
            return;
        }

        const data = clearObject(curriculumSubjectDetailData, editCurriculumSubjectNewFieldsData);

        if (isEmptyObject(data)) {
            addToast(Toast.error('Для сохранения вы должны внести изменения!'));
        } else {
            const result = await dispatch(editCurriculumSubject(curriculumSubjectsId!));

            if (result.meta.requestStatus === 'fulfilled') {
                addToast(Toast.success('Информация о дисциплине успешно обновлена'));
                dispatch(workingCurriculumExtractActions.changeSubjectName([
                    qualification?.standard_curriculum_qualification_id || null,
                    moduleDetail?.module_id,
                    unitDetail?.educational_modules_unit_id,
                    Number(curriculumSubjectsId),
                    editCurriculumSubjectNewFieldsData!.name!,
                ]));
                onCancelHandler();
            }

            if (result.meta.requestStatus === 'rejected') {
                addToast(Toast.error('Произошла ошибка при редактировании, попробуйте снова!'));
            }
        }
    };

    useEffect(() => {
        if (curriculumSubjectsId) {
            dispatch(fetchCurriculumSubjectsDetail(curriculumSubjectsId));
        }
    }, [dispatch, curriculumSubjectsId]);

    let content;

    if (isLoadingCurriculumSubjectDetail || isLoadingEditCurriculumSubject) {
        content = (
            <Skeleton width="100%" height={300} />
        );
    } else if (errorCurriculumSubjectDetail) {
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
            <>
                <Input
                    label="Название"
                    placeholder="Физическая культура"
                    value={editCurriculumSubjectNewFieldsData?.name || ''}
                    onChange={onChangeName}
                    required
                />

                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.BACKGROUND_DARK}
                        className={cls.footerBtn}
                        onClick={onCancelHandler}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Отмена
                        </Text>
                        <Icon Svg={CloseBorderedIcon} />
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.footerBtn}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Сохранить
                        </Text>
                        <Icon Svg={CheckIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                contentClassName={classNames(cls.EditDiscipline, {}, [className])}
                onClose={onCancelHandler}
                isOpen={isOpen}
                title="Редактировать дисциплину"
            >
                <div className={cls.form}>
                    {content}
                </div>
            </Modal>
            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
