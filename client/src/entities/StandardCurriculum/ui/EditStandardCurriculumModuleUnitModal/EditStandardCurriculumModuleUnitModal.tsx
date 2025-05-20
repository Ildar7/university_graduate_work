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
import { cilSave, cilWarning } from '@coreui/icons';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    addStandardCurriculumActions,
    AddStandardCurriculumData,
    CurriculumStructureModeType,
    getAddEditStandardCurriculumModuleUnitData,
    NewModuleFields,
} from 'features/StandardCurriculum/AddStandardCurriculum';
import { clearObject } from 'shared/lib/helpers/clearObject/clearObject';
import { isEmptyObject } from 'shared/lib/helpers/isEmptyObject/isEmptyObject';
import {
    editStandardCurriculumActions,
    getEditEditStandardCurriculumModuleUnitData,
} from 'features/StandardCurriculum/EditStandardCurriculum';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './EditStandardCurriculumModuleUnitModal.module.scss';

type ModalMode = 'add' | 'edit';

interface EditStandardCurriculumModuleUnitModalProps {
    className?: string;
    visible: boolean;
    setVisible: (value: boolean) => void;
    mode: ModalMode;
    qualId: number;
    moduleId: number;
    unitId: number;
    data?: AddStandardCurriculumData;
    structureMode: CurriculumStructureModeType;
}
export const EditStandardCurriculumModuleUnitModal = (props: EditStandardCurriculumModuleUnitModalProps) => {
    const {
        className,
        visible,
        setVisible,
        mode,
        qualId,
        moduleId,
        unitId,
        data,
        structureMode,
    } = props;

    const dispatch = useAppDispatch();
    const [validated, setValidated] = useState<boolean>(false);
    const [formWithErrors, setFormWithErrors] = useState<boolean>(false);
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const editData = useSelector(
        mode === 'add'
            ? getAddEditStandardCurriculumModuleUnitData
            : getEditEditStandardCurriculumModuleUnitData,
    );

    const onCloseModal = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const addingAndEditingPageSetNeedItem = () => {
        let filteredUnit;
        if (structureMode === 'general_modules') {
            // eslint-disable-next-line prefer-destructuring
            filteredUnit = data!.structure.general_modules
                .filter((module) => module.educational_module_id === moduleId)[0].units
                .filter((unit) => unit.educational_modules_unit_id === unitId)[0];
        } else {
            // eslint-disable-next-line prefer-destructuring
            filteredUnit = data!.structure.qualifications
                .filter((qualification) => qualification.qualification_id === qualId)[0].modules
                .filter((module) => module.educational_module_id === moduleId)[0].units
                .filter((unit) => unit.educational_modules_unit_id === unitId)[0];
        }

        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.setEditUnitItem(filteredUnit));
        } else {
            dispatch(editStandardCurriculumActions.setEditUnitItem(filteredUnit));
        }
    };

    const onCancelHandler = () => {
        onCloseModal();
        setValidated(false);
        setFormWithErrors(false);
        addingAndEditingPageSetNeedItem();
    };

    const onChangeNewEduModuleField = (value: string, columnName: string) => {
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeEditUnitField([value, columnName as NewModuleFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeEditUnitField([value, columnName as NewModuleFields]));
        }
    };

    const onChangeNewEduModuleCheckbox = (value: boolean, columnName: string) => {
        if (mode === 'add') {
            dispatch(addStandardCurriculumActions.changeEditUnitCheck([value, columnName as NewModuleFields]));
        } else {
            dispatch(editStandardCurriculumActions.changeEditUnitCheck([value, columnName as NewModuleFields]));
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
            const data = clearObject(editData?.data, editData?.newFields);

            if (isEmptyObject(data)) {
                addToast(Toast.error('Для сохранения вы должны внести изменения!'));
            } else {
                if (mode === 'add') {
                    if (structureMode === 'general_modules') {
                        dispatch(addStandardCurriculumActions.saveEditUnitChangesGeneralModules(([moduleId, unitId, editData!.newFields!])));
                    } else {
                        dispatch(addStandardCurriculumActions.saveEditUnitChangesQualificationsStructure(([
                            qualId, moduleId, unitId, editData!.newFields!,
                        ])));
                    }
                } else if (mode === 'edit') {
                    if (structureMode === 'general_modules') {
                        dispatch(editStandardCurriculumActions.saveEditUnitChangesGeneralModules(([moduleId, unitId, editData!.newFields!])));
                    } else {
                        dispatch(editStandardCurriculumActions.saveEditUnitChangesQualificationsStructure(([
                            qualId, moduleId, unitId, editData!.newFields!,
                        ])));
                    }
                }
                addToast(Toast.success('Информация о модульной единице успешно обновлена'));
                onCancelHandler();
            }
        }
    };

    useEffect(() => {
        if (data && moduleId && unitId && visible) {
            addingAndEditingPageSetNeedItem();
        }
        // eslint-disable-next-line
    }, [data, dispatch, moduleId, qualId, structureMode, unitId, visible]);

    return (
        <>
            <CModal
                className={classNames(cls.EditStandardCurriculumModuleUnitModal, {}, [className])}
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
                        <CModalTitle>Редактирование модульной единицы</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className={cls.tab}>
                            <div className={cls.tabBlock}>
                                <div className={cls.settings}>
                                    <div className={cls.newAddField}>
                                        <h6 className={cls.newAddFieldTitle}>Индекс сортировки</h6>
                                        <CFormInput
                                            type="number"
                                            placeholder="100"
                                            min={100}
                                            step={100}
                                            value={String(editData?.newFields?.sort) || ''}
                                            onChange={
                                                (e: React.ChangeEvent<HTMLInputElement>) => {
                                                    onChangeNewEduModuleField(e.target.value, 'sort');
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
                                            checked={editData?.newFields?.has_in_basic_education}
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
                                            checked={editData?.newFields?.has_in_general_education}
                                            onChange={
                                                (e: React.ChangeEvent<HTMLInputElement>) => {
                                                    onChangeNewEduModuleCheckbox(e.target.checked, 'has_in_general_education');
                                                }
                                            }
                                            id="has_in_general_education"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                type="submit"
                                className={classNames(cls.footerBtn, {}, [cls.greenBtn])}
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
