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
    fetchEducationalUnits,
    getEduUnitsData,
    getEduUnitsError,
    getEduUnitsIsLoading,
} from 'entities/EducationalModules';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    addStandardCurriculumActions,
    AddStandardCurriculumData,
    CurriculumStructureModeType,
    getAddStandardCurriculumNewModuleUnitModalData,
} from 'features/StandardCurriculum/AddStandardCurriculum';
import { NewUnitFields } from 'features/StandardCurriculum/AddStandardCurriculum/model/types/addStandardCurriculum';
import {
    editStandardCurriculumActions,
    getEditStandardCurriculumNewModuleUnitModalData,
} from 'features/StandardCurriculum/EditStandardCurriculum';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AddStandardCurriculumModuleUnitModal.module.scss';

type ModalMode = 'add' | 'edit';
interface AddStandardCurriculumModuleUnitModalProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    moduleId: number;
    data?: AddStandardCurriculumData;
    mode: ModalMode;
    structureMode: CurriculumStructureModeType;
    qualId: number;
}
export const AddStandardCurriculumModuleUnitModal = (props: AddStandardCurriculumModuleUnitModalProps) => {
    const {
        className,
        visible,
        setVisible,
        moduleId,
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

    const eduModuleUnitsData = useSelector(getEduUnitsData)?.filter((unit) => unit.module_id === moduleId);
    const eduModuleUnitsIsLoading = useSelector(getEduUnitsIsLoading);
    const eduModuleUnitsError = useSelector(getEduUnitsError);

    const newUnitData = useSelector(
        mode === 'add'
            ? getAddStandardCurriculumNewModuleUnitModalData
            : getEditStandardCurriculumNewModuleUnitModalData,
    );

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const onChangeNewEduUnitId = (value: string, columnName: string) => {
        const filteredUnit = eduModuleUnitsData!.filter((unit) => unit.name === value)[0];

        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeNewUnitField([String(filteredUnit.unit_id), columnName as NewUnitFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeNewUnitField([String(filteredUnit.unit_id), columnName as NewUnitFields]));
        }
    };

    const onChangeNewEduUnitField = (value: string, columnName: string) => {
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeNewUnitField([value, columnName as NewUnitFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeNewUnitField([value, columnName as NewUnitFields]));
        }
    };

    const onChangeNewEduUnitCheckbox = (value: boolean, columnName: string) => {
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeNewUnitCheck([value, columnName as NewUnitFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeNewUnitCheck([value, columnName as NewUnitFields]));
        }
    };

    const onCancelAdding = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
        if (mode === 'add') {
            if (structureMode === 'general_modules') {
                dispatch(addStandardCurriculumActions.clearNewUnitData());
                onChangeNewEduUnitCheckbox(true, 'has_in_basic_education');
                onChangeNewEduUnitCheckbox(false, 'has_in_general_education');
            } else {
                dispatch(addStandardCurriculumActions.clearNewUnitData());
                onChangeNewEduUnitCheckbox(true, 'has_in_basic_education');
                onChangeNewEduUnitCheckbox(true, 'has_in_general_education');
            }
        } else if (mode === 'edit') {
            if (structureMode === 'general_modules') {
                dispatch(editStandardCurriculumActions.clearNewUnitData());
                onChangeNewEduUnitCheckbox(true, 'has_in_basic_education');
                onChangeNewEduUnitCheckbox(false, 'has_in_general_education');
            } else {
                dispatch(editStandardCurriculumActions.clearNewUnitData());
                onChangeNewEduUnitCheckbox(true, 'has_in_basic_education');
                onChangeNewEduUnitCheckbox(true, 'has_in_general_education');
            }
        }
    };

    useEffect(() => {
        dispatch(fetchEducationalModules());
        dispatch(fetchEducationalUnits());
    }, [dispatch]);

    useEffect(() => {
        if (structureMode === 'qualifications') {
            onChangeNewEduUnitCheckbox(true, 'has_in_basic_education');
            onChangeNewEduUnitCheckbox(true, 'has_in_general_education');
        } else {
            onChangeNewEduUnitCheckbox(true, 'has_in_basic_education');
            onChangeNewEduUnitCheckbox(false, 'has_in_general_education');
        }
        // eslint-disable-next-line
    }, [structureMode, visible]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setFormWithErrors(!form.checkValidity());
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            if (newUnitData?.educational_modules_unit_id && newUnitData.sort) {
                let dataFiltered;

                if (structureMode === 'general_modules') {
                    dataFiltered = data?.structure.general_modules
                        .filter((module) => module.educational_module_id === moduleId);
                } else {
                    const filteredQualification = data?.structure.qualifications.filter((qualification) => (
                        qualification.qualification_id === qualId
                    ))[0];
                    dataFiltered = filteredQualification?.modules
                        .filter((module) => module.educational_module_id === moduleId);
                }

                const foundUnit = dataFiltered && dataFiltered.length ? dataFiltered[0].units
                    .filter((unit) => unit.educational_modules_unit_id === newUnitData.educational_modules_unit_id) : [];
                if (foundUnit && foundUnit.length) {
                    addToast(Toast.error('Данная модульная единица уже присутствует в списке'));
                    return;
                }

                if (mode === 'add') {
                    if (structureMode === 'general_modules') {
                        dispatch(addStandardCurriculumActions.addUnitToGeneralModulesModule([moduleId, newUnitData]));
                    } else {
                        dispatch(addStandardCurriculumActions.addUnitToQualificationModuleStructure([qualId, moduleId, newUnitData]));
                    }
                } else if (mode === 'edit') {
                    if (structureMode === 'general_modules') {
                        dispatch(editStandardCurriculumActions.addUnitToGeneralModulesModule([moduleId, newUnitData]));
                    } else {
                        dispatch(editStandardCurriculumActions.addUnitToQualificationModuleStructure([qualId, moduleId, newUnitData]));
                    }
                }
                addToast(Toast.success('Модульная единица добавлена'));
                onCancelAdding();
            } else {
                setFormWithErrors(true);
            }
        }
    };

    let modalContent;

    if (eduModuleUnitsIsLoading) {
        modalContent = (
            <Skeleton width="100%" height={400} />
        );
    } else if (eduModuleUnitsError) {
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
                            <h6 className={cls.newAddFieldTitle}>Модульная единица*</h6>
                            <SearchSelect
                                className={cls.selectField}
                                options={eduModuleUnitsData && eduModuleUnitsData.length ? eduModuleUnitsData.map((unit) => (
                                    unit.name
                                )) : ['']}
                                optionValue={newUnitData?.educational_modules_unit_id
                                    ? eduModuleUnitsData!.filter((unit) => (
                                        unit.unit_id === newUnitData.educational_modules_unit_id
                                    ))[0].name
                                    : 'null'}
                                onClickOption={onChangeNewEduUnitId}
                                columnName="educational_modules_unit_id"
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
                                value={String(newUnitData?.sort) || ''}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewEduUnitField(e.target.value, 'sort');
                                    }
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className={cls.settings}>
                        <div className={cls.newAddField}>
                            <CFormCheck
                                label={(
                                    <h6>Присутствует на базе основного среднего образования (9 классов)</h6>
                                )}
                                className={cls.checkbox}
                                checked={newUnitData?.has_in_basic_education}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewEduUnitCheckbox(e.target.checked, 'has_in_basic_education');
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
                                checked={newUnitData?.has_in_general_education}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        onChangeNewEduUnitCheckbox(e.target.checked, 'has_in_general_education');
                                    }
                                }
                                id="has_in_general_education"
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
                className={classNames(cls.AddStandardCurriculumModuleUnitModal, {}, [className])}
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
                        <CModalTitle>Добавление модульной единицы</CModalTitle>
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
