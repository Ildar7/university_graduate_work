import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import React, {
    ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import {
    CButton,
    CForm,
    CFormCheck,
    CFormInput,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CToaster,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilWarning } from '@coreui/icons';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
    fetchEducationalModules,
    getEduModulesData,
    getEduModulesError,
    getEduModulesIsLoading,
} from 'entities/EducationalModules';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    addStandardCurriculumActions,
    AddStandardCurriculumData,
    CurriculumStructureModeType,
    getAddStandardCurriculumNewModuleModalData,
    NewModuleFields,
} from 'features/StandardCurriculum/AddStandardCurriculum';
import {
    editStandardCurriculumActions,
    getEditStandardCurriculumNewModuleModalData,
} from 'features/StandardCurriculum/EditStandardCurriculum';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AddStandardCurriculumModuleModal.module.scss';

type ModalMode = 'add' | 'edit';

interface AddStandardCurriculumModuleModalProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    data?: AddStandardCurriculumData;
    mode: ModalMode;
    structureMode: CurriculumStructureModeType;
    qualId: number;
}
export const AddStandardCurriculumModuleModal = (props: AddStandardCurriculumModuleModalProps) => {
    const {
        className,
        visible,
        setVisible,
        data,
        mode,
        structureMode,
        qualId,
    } = props;

    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const eduModulesData = useSelector(getEduModulesData);
    const eduModulesIsLoading = useSelector(getEduModulesIsLoading);
    const eduModulesError = useSelector(getEduModulesError);

    const newModuleData = useSelector(
        mode === 'add'
            ? getAddStandardCurriculumNewModuleModalData
            : getEditStandardCurriculumNewModuleModalData,
    );

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onCancelAdding = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.clearNewModuleData());
        } else {
            dispatch(editStandardCurriculumActions.clearNewModuleData());
        }
    };

    const onChangeNewEduModuleId = (value: string, columnName: string) => {
        const filteredModule = eduModulesData!.filter((module) => module.name === value)[0];

        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeNewModuleField([String(filteredModule.module_id), columnName as NewModuleFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeNewModuleField([String(filteredModule.module_id), columnName as NewModuleFields]));
        }
    };

    const onChangeNewEduModuleField = (value: string, columnName: string) => {
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeNewModuleField([value, columnName as NewModuleFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeNewModuleField([value, columnName as NewModuleFields]));
        }
    };

    const onChangeNewEduModuleCheckbox = (value: boolean, columnName: string) => {
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeNewModuleCheck([value, columnName as NewModuleFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeNewModuleCheck([value, columnName as NewModuleFields]));
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            if (newModuleData?.educational_module_id && newModuleData.sort) {
                let foundModule;

                if (structureMode === 'general_modules') {
                    foundModule = data?.structure.general_modules
                        .filter((module) => module.educational_module_id === newModuleData.educational_module_id);
                } else {
                    const filteredQualifications = data?.structure.qualifications
                        .filter((qualification) => qualification.qualification_id === qualId)[0];
                    foundModule = filteredQualifications?.modules
                        .filter((module) => module.educational_module_id === newModuleData.educational_module_id);
                }

                if (foundModule && foundModule.length) {
                    addToast(Toast.error('Данный модуль уже присутствует в списке'));
                    return;
                }

                if (mode === 'add') {
                    if (structureMode === 'general_modules') {
                        dispatch(addStandardCurriculumActions.addModuleToGeneralModules(newModuleData));
                    } else {
                        dispatch(addStandardCurriculumActions.addModuleToQualificationStructure([qualId, newModuleData]));
                    }
                } else if (mode === 'edit') {
                    if (structureMode === 'general_modules') {
                        dispatch(editStandardCurriculumActions.addModuleToGeneralModules(newModuleData));
                    } else {
                        dispatch(editStandardCurriculumActions.addModuleToQualificationStructure([qualId, newModuleData]));
                    }
                }
                addToast(Toast.success('Модуль добавлен'));
                onCancelAdding();
            } else {
                setFormWithErrors(true);
            }
        }
    };

    useEffect(() => {
        dispatch(fetchEducationalModules());
    }, [dispatch]);

    useEffect(() => {
        if (structureMode === 'qualifications') {
            onChangeNewEduModuleCheckbox(true, 'has_in_basic_education');
            onChangeNewEduModuleCheckbox(true, 'has_in_general_education');
        } else {
            onChangeNewEduModuleCheckbox(true, 'has_in_basic_education');
            onChangeNewEduModuleCheckbox(false, 'has_in_general_education');
        }
        // eslint-disable-next-line
    }, [dispatch, visible, qualId, structureMode]);

    let modalContent;

    if (eduModulesIsLoading) {
        modalContent = (
            <Skeleton width="100%" height={400} />
        );
    } else if (eduModulesError) {
        modalContent = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        modalContent = (
            <div className={cls.tab}>
                <div className={cls.tabBlock}>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Образовательный модуль*</h6>
                            <SearchSelect
                                className={cls.selectField}
                                options={eduModulesData && eduModulesData.length ? eduModulesData.map((module) => (
                                    module.name
                                )) : ['']}
                                optionValue={newModuleData?.educational_module_id
                                    ? eduModulesData!.filter((module) => (
                                        module.module_id === newModuleData.educational_module_id
                                    ))[0].name
                                    : 'null'}
                                onClickOption={onChangeNewEduModuleId}
                                columnName="educational_module_id"
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <h6 className={cls.newAddFieldTitle}>Индекс сортировки*</h6>
                            <CFormInput
                                type="number"
                                placeholder="100"
                                min={100}
                                step={100}
                                value={String(newModuleData?.sort) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewEduModuleField(e.target.value, 'sort');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                    {structureMode === 'general_modules' && (
                        <>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <CFormCheck
                                        label={(
                                            <h6>Присутствует на базе основного среднего образования (9 классов)</h6>
                                        )}
                                        className={cls.checkbox}
                                        checked={newModuleData?.has_in_basic_education}
                                        onChange={
                                            (e: React.ChangeEvent<HTMLInputElement>) => {
                                                onChangeNewEduModuleCheckbox(e.target.checked, 'has_in_basic_education');
                                            }
                                        }
                                        id="has_in_basic_education"
                                    />
                                </div>
                            </div>
                            <div className={cls.settings}>
                                <div className={cls.newAddField}>
                                    <CFormCheck
                                        label={(
                                            <h6>Присутствует на базе общего среднего образования (11 классов)</h6>
                                        )}
                                        className={cls.checkbox}
                                        checked={newModuleData?.has_in_general_education}
                                        onChange={
                                            (e: React.ChangeEvent<HTMLInputElement>) => {
                                                onChangeNewEduModuleCheckbox(e.target.checked, 'has_in_general_education');
                                            }
                                        }
                                        id="has_in_general_education"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            <CModal
                className={classNames(cls.AddStandardCurriculumModuleModal, {}, [className])}
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
                        <CModalTitle>Добавление модуля</CModalTitle>
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
