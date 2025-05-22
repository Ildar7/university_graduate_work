import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import CIcon from '@coreui/icons-react';
import { cilSave, cilTrash, cilWarning } from '@coreui/icons';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import React, {
    ReactElement, useEffect, useRef, useState,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import {
    CurriculumSubjectsType,
    getCurriculumSubjectsError,
    getCurriculumSubjectsIsLoading,
} from 'entities/CurriculumSubjects';
import {
    fetchCurriculumSubjectsDetail,
    getCurriculumSubjectsDetailData,
    getCurriculumSubjectsDetailError,
    getCurriculumSubjectsDetailIsLoading,
} from 'entities/CurriculumSubjectsDetail';
import { editCurriculumSubject, editCurriculumSubjectActions } from 'features/CurriculumSubjects/EditCurriculumSubject';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import {
    getEduModulesData,
    getEduModulesError,
    getEduModulesIsLoading,
    getEduUnitsData,
    getEduUnitsError,
    getEduUnitsIsLoading,
} from 'entities/EducationalModules';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './EditCurriculumSubject.module.scss';
import {
    getEditCurriculumSubjectIsLoading,
} from '../model/selectors/getEditCurriculumSubjectIsLoading/getEditCurriculumSubjectIsLoading';
import {
    getEditCurriculumSubjectNewFieldsData,
} from '../model/selectors/getEditCurriculumSubjectNewFieldsData/getEditCurriculumSubjectNewFieldsData';
import {
    getEditCurriculumSubjectError,
} from '../model/selectors/getEditCurriculumSubjectError/getEditCurriculumSubjectError';

interface EditCurriculumSubjectsProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    curriculumSubjectsId: string;
    onDeleteCurriculumSubjects: (curriculumSubjects: CurriculumSubjectsType) => void;
}
export const EditCurriculumSubject = (props: EditCurriculumSubjectsProps) => {
    const {
        className,
        visible,
        setVisible,
        curriculumSubjectsId,
        onDeleteCurriculumSubjects,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);

    const curriculumSubjectDetailData = useSelector(getCurriculumSubjectsDetailData);
    const isLoadingCurriculumSubjectDetail = useSelector(getCurriculumSubjectsDetailIsLoading);
    const errorCurriculumSubjectDetail = useSelector(getCurriculumSubjectsDetailError);

    const isLoadingEditCurriculumSubject = useSelector(getEditCurriculumSubjectIsLoading);
    const editCurriculumSubjectNewFieldsData = useSelector(getEditCurriculumSubjectNewFieldsData);
    const errorsEditCurriculumSubject = useSelector(getEditCurriculumSubjectError);

    const isLoadingCurriculumSubjects = useSelector(getCurriculumSubjectsIsLoading);
    const errorCurriculumSubjects = useSelector(getCurriculumSubjectsError);

    const eduModules = useSelector(getEduModulesData);
    const eduModulesIsLoading = useSelector(getEduModulesIsLoading);
    const eduModulesError = useSelector(getEduModulesError);

    const eduModuleUnits = useSelector(getEduUnitsData);
    const eduModuleUnitsIsLoading = useSelector(getEduUnitsIsLoading);
    const eduModuleUnitsError = useSelector(getEduUnitsError);

    useEffect(() => {
        if (curriculumSubjectsId) {
            dispatch(fetchCurriculumSubjectsDetail(curriculumSubjectsId));
        }
    }, [dispatch, curriculumSubjectsId]);

    const onCloseModal = () => {
        setVisible(false);
        setValidated(false);
        setFormWithErrors(false);
    };

    const onCancelHandler = () => {
        onCloseModal();
        dispatch(editCurriculumSubjectActions.clearNewFields());
    };

    const onDeleteHandler = (curriculumSubjects: CurriculumSubjectsType) => {
        onDeleteCurriculumSubjects(curriculumSubjects);
        onCloseModal();
    };

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editCurriculumSubjectActions.setName(event.target.value));
    };

    const onChangeSelectModuleId = (value: string, columnName: string) => {
        const filteredModule = eduModules!.filter((module) => module.name === value)[0];

        dispatch(editCurriculumSubjectActions.setModuleId(String(filteredModule.module_id)));
        dispatch(editCurriculumSubjectActions.setUnitId(null));
    };

    const onChangeSelectUnitId = (value: string, columnName: string) => {
        if (value !== 'Нет') {
            const filteredModuleUnit = eduModuleUnits!.filter((unit) => unit.name === value)[0];

            dispatch(editCurriculumSubjectActions.setUnitId(String(filteredModuleUnit.unit_id)));
        } else {
            dispatch(editCurriculumSubjectActions.setUnitId(null));
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            const data = clearObject(curriculumSubjectDetailData, editCurriculumSubjectNewFieldsData);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                const result = await dispatch(editCurriculumSubject(curriculumSubjectsId));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Информация о дисциплине успешно обновлена'));
                    onCancelHandler();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            }
        }
    };

    let content;

    if (
        isLoadingEditCurriculumSubject
        || isLoadingCurriculumSubjectDetail
        || isLoadingCurriculumSubjects
        || eduModulesIsLoading
        || eduModuleUnitsIsLoading
    ) {
        content = (
            <Skeleton width="100%" height={80} />
        );
    } else if (
        errorCurriculumSubjectDetail
        || errorCurriculumSubjects
        || eduModulesError
        || eduModuleUnitsError
    ) {
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
            <div className={cls.tab}>
                <div className={cls.tabBlock}>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Название</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="Физическая культура"
                                // @ts-ignore
                                feedbackValid={errorsEditCurriculumSubject ? '' : 'Здорово!'}
                                invalid={!!errorsEditCurriculumSubject}
                                feedbackInvalid="Введите корректные данные"
                                value={editCurriculumSubjectNewFieldsData?.name || ''}
                                onChange={onChangeName}
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Модуль</h6>
                            <SearchSelect
                                className={cls.selectField}
                                options={eduModules && eduModules.length ? eduModules.map((module) => (
                                    module.name
                                )) : ['']}
                                optionValue={editCurriculumSubjectNewFieldsData?.module_id
                                    ? eduModules!.filter((module) => (
                                        module.module_id === editCurriculumSubjectNewFieldsData.module_id
                                    ))[0].name
                                    : 'null'}
                                onClickOption={onChangeSelectModuleId}
                                columnName=""
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Модульная единица</h6>
                            <SearchSelect
                                className={cls.selectField}
                                options={
                                    eduModuleUnits && eduModuleUnits.length
                                        ? ['Нет', ...eduModuleUnits
                                            .filter((unit) => (
                                                unit.module_id === editCurriculumSubjectNewFieldsData?.module_id
                                            ))
                                            .map((unit) => (
                                                unit.name
                                            ))]
                                        : ['Нет']
                                }
                                optionValue={
                                    editCurriculumSubjectNewFieldsData?.unit_id
                                        ? eduModuleUnits!.filter((unit) => (
                                            unit.unit_id === editCurriculumSubjectNewFieldsData.unit_id
                                        ))[0].name
                                        : 'null'
                                }
                                onClickOption={onChangeSelectUnitId}
                                columnName=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <CModal
                className={classNames(cls.EditEnrollmentType, {}, [className])}
                visible={visible}
                onClose={onCloseModal}
                size="lg"
                alignment="center"
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <CModalHeader>
                        {
                            isLoadingEditCurriculumSubject || isLoadingCurriculumSubjectDetail
                                ? <Skeleton width={300} height={30} />
                                : (
                                    <CModalTitle>
                                        Редактирование дисциплины №
                                        {curriculumSubjectDetailData?.subject_id}
                                        {' '}
                                        -
                                        {' '}
                                        {curriculumSubjectDetailData?.name}
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
                        <div className={cls.message}>
                            {(formWithErrors) && (
                                <>
                                    <CIcon icon={cilWarning} customClassName={cls.messageIcon} />
                                    <Text
                                        size={TextSize.M}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        Форма заполнена некорректно
                                    </Text>
                                </>
                            )}
                        </div>
                        <div className={cls.footerBtns}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.footerBtn}
                                onClick={onCancelHandler}
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
                                onClick={() => { onDeleteHandler(curriculumSubjectDetailData!); }}
                                disabled={isLoadingCurriculumSubjectDetail
                                    || isLoadingEditCurriculumSubject
                                    || isLoadingCurriculumSubjects
                                    || !!errorCurriculumSubjectDetail
                                    || !!errorCurriculumSubjects}
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
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                                disabled={isLoadingCurriculumSubjectDetail
                                    || isLoadingEditCurriculumSubject
                                    || isLoadingCurriculumSubjects
                                    || !!errorCurriculumSubjectDetail
                                    || !!errorCurriculumSubjects}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Сохранить
                                </Text>
                                <CIcon icon={cilSave} className={cls.btnIcon} />
                            </Button>
                        </div>
                    </CModalFooter>
                </CForm>
            </CModal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
};
