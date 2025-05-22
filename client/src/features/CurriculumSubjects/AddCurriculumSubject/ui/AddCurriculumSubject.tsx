import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilWarning } from '@coreui/icons';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import React, {
    ReactElement, useCallback, useRef, useState,
} from 'react';
import { CFormInputWithMask } from 'shared/ui/InputMask/InputMask';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Toast } from 'shared/ui/Toast/Toast';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import {
    getEduModulesData,
    getEduModulesError,
    getEduModulesIsLoading,
    getEduUnitsData,
    getEduUnitsError,
    getEduUnitsIsLoading,
} from 'entities/EducationalModules';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AddCurriculumSubject.module.scss';
import {
    getAddCurriculumSubjectError,
} from '../model/selectors/getAddCurriculumSubjectError/getAddCurriculumSubjectError';
import { addCurriculumSubjectActions } from '../model/slice/addCurriculumSubjectSlice';
import { addCurriculumSubject } from '../model/services/addCurriculumSubject/addCurriculumSubject';
import { getAddCurriculumSubjectData } from '../model/selectors/getAddCurriculumSubjectData/getAddCurriculumSubjectData';

interface AddCurriculumSubjectProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
}
export const AddCurriculumSubject = (props: AddCurriculumSubjectProps) => {
    const {
        className,
        visible,
        setVisible,
    } = props;
    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const addCurriculumSubjectData = useSelector(getAddCurriculumSubjectData);
    const addCurriculumSubjectValidationErrors = useSelector(getAddCurriculumSubjectError);

    const eduModules = useSelector(getEduModulesData);
    const eduModulesIsLoading = useSelector(getEduModulesIsLoading);
    const eduModulesError = useSelector(getEduModulesError);

    const eduModuleUnits = useSelector(getEduUnitsData);
    const eduModuleUnitsIsLoading = useSelector(getEduUnitsIsLoading);
    const eduModuleUnitsError = useSelector(getEduUnitsError);

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onCancelAdding = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
    };

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addCurriculumSubjectActions.setName(event.target.value));
    };

    const onChangeSelectModuleId = (value: string, columnName: string) => {
        const filteredModule = eduModules!.filter((module) => module.name === value)[0];

        dispatch(addCurriculumSubjectActions.setModuleId(String(filteredModule.module_id)));
        dispatch(addCurriculumSubjectActions.setUnitId(null));
    };

    const onChangeSelectUnitId = (value: string, columnName: string) => {
        if (value !== 'Нет') {
            const filteredModuleUnit = eduModuleUnits!.filter((unit) => unit.name === value)[0];

            dispatch(addCurriculumSubjectActions.setUnitId(String(filteredModuleUnit.unit_id)));
        } else {
            dispatch(addCurriculumSubjectActions.setUnitId(null));
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
            if (addCurriculumSubjectData?.name
                && addCurriculumSubjectData.module_id
            ) {
                const result = await dispatch(addCurriculumSubject(addCurriculumSubjectData));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Дисциплина успешно добавлена'));
                    onCancelAdding();
                }

                if (result.meta.requestStatus === 'rejected') {
                    setFormWithErrors(true);
                }
            } else if (!addCurriculumSubjectData?.module_id) {
                addToast(Toast.error('Выберите модуль!'));
                setFormWithErrors(true);
            } else {
                setFormWithErrors(true);
            }
        }
    };

    let modalContent;

    if (eduModulesIsLoading || eduModuleUnitsIsLoading) {
        modalContent = (
            <Skeleton />
        );
    } else if (eduModulesError || eduModuleUnitsError) {
        modalContent = (
            <Text />
        );
    } else {
        modalContent = (
            <div className={cls.tab}>
                <div className={cls.tabBlock}>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Название*</h6>
                            <CFormInputWithMask
                                type="text"
                                placeholder="Физическая культура"
                                // @ts-ignore
                                feedbackValid={addCurriculumSubjectValidationErrors ? '' : 'Здорово!'}
                                invalid={!!addCurriculumSubjectValidationErrors}
                                feedbackInvalid="Введите корректные данные!"
                                value={addCurriculumSubjectData?.name || ''}
                                onChange={onChangeName}
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Модуль*</h6>
                            <SearchSelect
                                className={cls.selectField}
                                options={eduModules && eduModules.length ? eduModules.map((module) => (
                                    module.name
                                )) : ['']}
                                optionValue={addCurriculumSubjectData?.module_id
                                    ? eduModules!.filter((module) => (
                                        module.module_id === addCurriculumSubjectData.module_id
                                    ))[0].name
                                    : 'null'}
                                onClickOption={onChangeSelectModuleId}
                                columnName=""
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={classNames(
                            cls.newAddField,
                            { [cls.newAddFieldDisabled]: !addCurriculumSubjectData?.module_id },
                            [],
                        )}
                        >
                            <h6 className={cls.newAddFieldTitle}>Модульная единица</h6>
                            <SearchSelect
                                className={cls.selectField}
                                options={eduModuleUnits && eduModuleUnits.length
                                    ? ['Нет', ...eduModuleUnits
                                        .filter((unit) => (
                                            unit.module_id === addCurriculumSubjectData?.module_id
                                        ))
                                        .map((unit) => (
                                            unit.name
                                        ))]
                                    : ['Нет']}
                                optionValue={addCurriculumSubjectData?.unit_id
                                    ? eduModuleUnits!.filter((unit) => (
                                        unit.unit_id === addCurriculumSubjectData.unit_id
                                    ))[0].name
                                    : 'null'}
                                onClickOption={onChangeSelectUnitId}
                                columnName=""
                                disabled={!addCurriculumSubjectData?.module_id}
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
                className={classNames(cls.AddCurriculumSubject, {}, [className])}
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
                        <CModalTitle>Добавление дисциплины</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        {modalContent}
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
                                onClick={onCancelAdding}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Отмена
                                </Text>
                            </Button>
                            <Button
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Добавить
                                </Text>
                                <CIcon icon={cilPlus} className={cls.btnIcon} />
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
