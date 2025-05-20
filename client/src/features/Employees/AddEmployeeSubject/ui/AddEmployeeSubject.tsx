import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { getEmployeeDetailData, getEmployeeDetailError, getEmployeeDetailIsLoading } from 'entities/EmployeeDetail';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { CForm, CToaster } from '@coreui/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import { Toast } from 'shared/ui/Toast/Toast';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useErrorMessage } from 'shared/lib/hooks/useErrorMessage/useErrorMessage';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import {
    fetchCurriculumSubjects,
    getCurriculumSubjectsData,
    getCurriculumSubjectsError,
    getCurriculumSubjectsIsLoading,
} from 'entities/CurriculumSubjects';
import { addEmployeeSubjectActions } from 'features/Employees/AddEmployeeSubject/model/slice/addEmployeeSubjectSlice';
import { addEmployeeSubject } from '../model/services/addEmployeeSubject/addEmployeeSubject';
import cls from './AddEmployeeSubject.module.scss';
import {
    getAddEmployeeSubjectData,
    getAddEmployeeSubjectErrors,
    getAddEmployeeSubjectIsLoading,
} from '../model/selectors/getAddEmployeeSubject/getAddEmployeeSubject';

interface AddEmployeeSubjectProps {
    className?: string;
    onClose: () => void;
    isOpen: boolean;
    onShowViewSubjectsModal: (id: string) => void;
}

export const AddEmployeeSubject = memo((props: AddEmployeeSubjectProps) => {
    const {
        className,
        onClose,
        isOpen,
        onShowViewSubjectsModal,
    } = props;
    const dispatch = useAppDispatch();
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);
    const [selectedSubjectName, setSelectedSubjectName] = useState('null');
    const [subjectsNames, setSubjectsNames] = useState<string[]>([]);

    const addEmployeeSubjectData = useSelector(getAddEmployeeSubjectData);
    const addEmployeeSubjectIsLoading = useSelector(getAddEmployeeSubjectIsLoading);
    const addEmployeeSubjectError = useSelector(getAddEmployeeSubjectErrors);

    useErrorMessage(addEmployeeSubjectError);

    const employeeDetail = useSelector(getEmployeeDetailData);
    const employeeDetailIsLoading = useSelector(getEmployeeDetailIsLoading);
    const employeeDetailError = useSelector(getEmployeeDetailError);

    const subjectsData = useSelector(getCurriculumSubjectsData);
    const subjectsIsLoading = useSelector(getCurriculumSubjectsIsLoading);
    const subjectsError = useSelector(getCurriculumSubjectsError);

    const onChangeSubjectId = useCallback((subjectName: string) => {
        setSelectedSubjectName(subjectName);
        const selectedSubjectId = subjectsData?.filter((subject) => subject.name === subjectName)[0].subject_id;
        if (selectedSubjectId) {
            dispatch(addEmployeeSubjectActions.setSubjectId(selectedSubjectId));
        }
    }, [dispatch, subjectsData]);

    const clearData = useCallback(() => {
        dispatch(addEmployeeSubjectActions.clearData());
        setSelectedSubjectName('null');
    }, [dispatch]);

    const onCancelHandler = useCallback(() => {
        onClose();
        onShowViewSubjectsModal(String(employeeDetail!.employee_id));
        clearData();
    }, [clearData, employeeDetail, onClose, onShowViewSubjectsModal]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        if (form.checkValidity()) {
            if (addEmployeeSubjectData?.subject_id) {
                const result = await dispatch(addEmployeeSubject(String(employeeDetail!.employee_id)));

                if (result.meta.requestStatus === 'fulfilled') {
                    addToast(Toast.success('Дисциплина успешно привязана к сотруднику'));
                    onCancelHandler();
                }
            } else {
                addToast(Toast.error('Выберите дисциплину!'));
            }
        }
    };

    useEffect(() => {
        dispatch(fetchCurriculumSubjects());
    }, [dispatch]);

    useEffect(() => {
        if (employeeDetail && !employeeDetailIsLoading && subjectsData && !subjectsIsLoading) {
            const filteredSubjects = subjectsData.filter((subject) => (
                !employeeDetail.subjects.some((subjectInner) => subjectInner.subject_id === subject.subject_id)
            ));
            setSubjectsNames(filteredSubjects.map((subject) => subject.name));
        }
    }, [employeeDetail, employeeDetailIsLoading, subjectsData, subjectsIsLoading]);

    const disabledButton = addEmployeeSubjectIsLoading;

    let content;

    if (employeeDetailIsLoading || subjectsIsLoading) {
        content = (
            <Skeleton width="100%" height={150} />
        );
    } else if (employeeDetailError || subjectsError) {
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
                <SearchSelect
                    className={cls.select}
                    options={subjectsNames}
                    optionValue={selectedSubjectName}
                    onClickOption={onChangeSubjectId}
                    columnName=""
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
                        type="submit"
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.footerBtn}
                        disabled={disabledButton}
                    >
                        <Text
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Добавить
                        </Text>
                        <Icon Svg={PlusBorderedIcon} />
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <Modal
                contentClassName={classNames(cls.AddEmployeeSubject, {}, [className])}
                onClose={onCancelHandler}
                isOpen={isOpen}
                title="Добавить предмет к преподавателю"
            >
                <CForm
                    className={classNames(cls.form, {}, ['needs-validation'])}
                    noValidate
                    onSubmit={handleSubmit}
                >
                    {content}
                </CForm>
            </Modal>

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
