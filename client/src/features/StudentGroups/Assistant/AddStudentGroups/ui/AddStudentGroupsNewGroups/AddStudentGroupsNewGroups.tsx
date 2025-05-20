import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { ChangeEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addStudentGroupsAssistantActions } from 'features/StudentGroups/Assistant/AddStudentGroups';
import {
    getAddStudentGroupsGeneratedGroupsData,
    getAddStudentGroupsGeneratedGroupsError,
    getAddStudentGroupsGeneratedGroupsIsLoading,
} from '../../model/selectors/getAddStudentGroupsGeneratedGroups/getAddStudentGroupsGeneratedGroups';
import cls from './AddStudentGroupsNewGroups.module.scss';
import {
    createGroupsBatch,
} from '../../model/services/createGroupsBatch/createGroupsBatch';

interface AddStudentGroupsNewGroupsProps {
    className?: string;
    changeActiveTab: (value: number) => void;
    returnToStudentGroupsPage: () => void;
}

export const AddStudentGroupsNewGroups = memo((props: AddStudentGroupsNewGroupsProps) => {
    const {
        className,
        changeActiveTab,
        returnToStudentGroupsPage,
    } = props;
    const dispatch = useAppDispatch();

    const newGroups = useSelector(getAddStudentGroupsGeneratedGroupsData);
    const isLoadingNewGroups = useSelector(getAddStudentGroupsGeneratedGroupsIsLoading);
    const errorNewGroups = useSelector(getAddStudentGroupsGeneratedGroupsError);

    const onNextHandler = useCallback(() => {
        changeActiveTab(4);
        dispatch(createGroupsBatch());
    }, [changeActiveTab, dispatch]);

    const onChangeChecked = (checked: boolean, groupTempIndex: number | undefined) => {
        dispatch(addStudentGroupsAssistantActions.changeCheckedGroup([groupTempIndex || 1, checked]));
    };

    const disabledNextButton = !newGroups?.length
        || newGroups.filter((group) => group.checked).length === 0;

    let table;

    if (isLoadingNewGroups) {
        table = (
            <Skeleton height={500} width="100%" />
        );
    } else if (errorNewGroups) {
        table = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        table = (
            <div className={classNames(cls.table, {}, [])}>
                {newGroups?.length
                    ? (
                        <>
                            <div className={cls.tableHead}>
                                <div className={cls.tableRow}>
                                    <div
                                        className={classNames(cls.checkbox, {}, [cls.mainCheckbox])}
                                    />
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellName])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            Название
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellSpecialty])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            Специальность
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellEnrollmentYear])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            Год поступления
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellCourse])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            Курс
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellLang])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            Язык обучения
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellEduBase])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            База образования
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellEduForm])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                        >
                                            Форма обучения
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className={cls.tableBody}>
                                {
                                    newGroups?.map((studentGroup) => (
                                        <div className={cls.tableRow} key={studentGroup.tempIndex}>
                                            <Checkbox
                                                className={cls.checkbox}
                                                checked={studentGroup.checked}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                    onChangeChecked(e.target.checked, studentGroup.tempIndex);
                                                }}
                                                id={`checkbox-add-student-groups-assistant-${studentGroup.tempIndex}`}
                                            />
                                            <div
                                                className={classNames(cls.tableCell, {}, [cls.tableCellName])}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                    theme={TextTheme.BG_LIGHT}
                                                >
                                                    {studentGroup.name}
                                                </Text>
                                            </div>
                                            <div
                                                className={classNames(cls.tableCell, {}, [cls.tableCellSpecialty])}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                    theme={TextTheme.BG_LIGHT}
                                                >
                                                    {studentGroup.humanReadable.specialtyName}
                                                </Text>
                                            </div>
                                            <div
                                                className={classNames(cls.tableCell, {}, [cls.tableCellEnrollmentYear])}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                >
                                                    {studentGroup.enrollment_year}
                                                </Text>
                                            </div>
                                            <div
                                                className={classNames(cls.tableCell, {}, [cls.tableCellCourse])}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                >
                                                    {studentGroup.course}
                                                </Text>
                                            </div>
                                            <div
                                                className={classNames(cls.tableCell, {}, [cls.tableCellLang])}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                >
                                                    {studentGroup.humanReadable.languageName}
                                                </Text>
                                            </div>
                                            <div
                                                className={classNames(cls.tableCell, {}, [cls.tableCellEduBase])}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                    theme={TextTheme.BG_LIGHT}
                                                >
                                                    {studentGroup.humanReadable.educationBaseName}
                                                </Text>
                                            </div>
                                            <div
                                                className={classNames(cls.tableCell, {}, [cls.tableCellEduForm])}
                                            >
                                                <Text
                                                    size={TextSize.XS}
                                                    theme={
                                                        studentGroup.is_full_time
                                                            ? TextTheme.BG_ORANGE : TextTheme.BG_BLUE
                                                    }
                                                >
                                                    {studentGroup.is_full_time ? 'Очная' : 'Заочная'}
                                                </Text>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
                    : (
                        <Text
                            size={TextSize.L}
                            weight={TextWeight.SEMIBOLD}
                            align={TextAlign.CENTER}
                        >
                            Отсутствуют предлагаемые группы студентов
                        </Text>
                    )}

            </div>
        );
    }

    return (
        <>
            <div className={classNames(cls.AddStudentGroupsNewGroups, {}, [className])}>
                <Text
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Предлагаемые группы
                </Text>
                <Text
                    size={TextSize.XM}
                    weight={TextWeight.MEDIUM}
                    className={cls.descr}
                >
                    Ниже перечислены предлагаемые ассистентом новые
                    группы студентов. Пожалуйста, проверьте результат
                    и отметьте галочками те группы, которые необходимо создать.
                </Text>

                {table}
            </div>

            <div className={cls.settings}>
                <Button
                    theme={ButtonTheme.ERROR}
                    className={cls.backBtn}
                    onClick={returnToStudentGroupsPage}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Отмена
                    </Text>
                </Button>
                <Button
                    className={cls.nextBtn}
                    onClick={onNextHandler}
                    disabled={disabledNextButton}
                    title={disabledNextButton ? 'Выберите группы для продолжения' : undefined}
                >
                    <Text
                        size={TextSize.XS}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Далее
                    </Text>
                </Button>
            </div>
        </>
    );
});
