import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from 'shared/ui/Icon/Icon';
import EditIcon from 'shared/assets/icons/edit.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { DeleteStudentGroups } from 'features/StudentGroups/DeleteStudentGroups';
import { EditStudentGroups } from 'features/StudentGroups/EditStudentGroups';
import { StudentGroupsListModal } from 'entities/StudentGroups/ui/StudentGroupsListModal/StudentGroupsListModal';
import cls from './StudentGroups.module.scss';
import { StudentGroupsType } from '../../model/types/studentGroups';
import { getStudentGroupsError, getStudentGroupsIsLoading } from '../../model/selectors/getStudentGroups/getStudentGroups';
import { fetchStudentGroups } from '../../model/services/fetchStudentGroups/fetchStudentGroups';

interface StudentGroupsProps {
    className?: string;
    data: StudentGroupsType[];
    exportDisabled: boolean;
}

export const StudentGroups = (props: StudentGroupsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getStudentGroupsIsLoading);
    const error = useSelector(getStudentGroupsError);
    const [deleteGroup, setDeleteGroup] = useState<StudentGroupsType>();
    const [studentGroupDetailId, setStudentGroupDetailId] = useState<string>();

    const [visibleDeleteStudentGroup, setVisibleDeleteStudentGroup] = useState(false);
    const [visibleEditStudentGroup, setVisibleEditStudentGroup] = useState(false);
    const [visibleStudentListGroupModal, setVisibleStudentListGroupModal] = useState(false);

    const onShowDeleteStudentGroupModal = useCallback((studentGroup: StudentGroupsType) => {
        setVisibleDeleteStudentGroup(true);
        setDeleteGroup(studentGroup);
    }, []);

    const onCloseDeleteStudentGroupModal = () => {
        setVisibleDeleteStudentGroup(false);
    };

    const onShowEditStudentGroupModal = (id: string) => {
        setVisibleEditStudentGroup(true);
        setStudentGroupDetailId(id);
    };

    const onCloseEditStudentGroupModal = () => {
        setVisibleEditStudentGroup(false);
    };

    const onShowStudentListGroupModal = (id: string) => {
        setVisibleStudentListGroupModal(true);
        setStudentGroupDetailId(id);
    };

    const onCloseStudentListGroupModal = () => {
        setVisibleStudentListGroupModal(false);
    };

    useEffect(() => {
        dispatch(fetchStudentGroups());
    }, [dispatch]);

    let studentGroupsTable;

    if (isLoading) {
        studentGroupsTable = (
            <Skeleton height={400} />
        );
    } else if (error) {
        studentGroupsTable = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке Данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        studentGroupsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-student-groups-all"
                                />
                            )}
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellId])}>
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID
                                </Text>
                            </div>
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
                                className={classNames(cls.tableCell, {}, [cls.tableCellCode])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Код
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
                                className={classNames(cls.tableCell, {}, [cls.tableCellStudentsCount])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Студентов
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
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((studentGroup) => (
                                <div className={cls.tableRow} key={studentGroup.id_group}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-student-group-${studentGroup.id_group}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {studentGroup.id_group}
                                        </Text>
                                    </div>
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
                                        className={classNames(cls.tableCell, {}, [cls.tableCellCode])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {studentGroup.code}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellSpecialty])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            theme={TextTheme.BG_LIGHT}
                                        >
                                            {studentGroup.specialty.shifr_spec}
                                            {' - '}
                                            {studentGroup.specialty.speciality}
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
                                            {studentGroup.language.language}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellStudentsCount])}
                                    >
                                        {studentGroup.studentsCount >= 1 && (
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {studentGroup.studentsCount}
                                                {' '}
                                                чел.
                                            </Text>
                                        )}
                                        {studentGroup.studentsCount === 0 && (
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_RED}
                                            >
                                                Нет
                                            </Text>
                                        )}
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellEduBase])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            theme={TextTheme.BG_LIGHT}
                                        >
                                            {studentGroup.education_basis.short_name}
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

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Студенты группы"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowStudentListGroupModal(studentGroup!.id_group!.toString());
                                            }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowEditStudentGroupModal(studentGroup!.id_group!.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowDeleteStudentGroupModal(studentGroup);
                                            }}
                                        >
                                            <Icon Svg={TrashIcon} />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        );
    }

    const mods: Mods = {
        [cls.error]: !!error,
    };

    return (
        <div className={classNames(cls.TableBlock, mods, [className])}>
            {studentGroupsTable}

            <EditStudentGroups
                isOpen={visibleEditStudentGroup}
                onClose={onCloseEditStudentGroupModal}
                studentGroupId={studentGroupDetailId!}
            />

            <DeleteStudentGroups
                onClose={onCloseDeleteStudentGroupModal}
                isOpen={visibleDeleteStudentGroup}
                studentGroup={deleteGroup}
            />

            <StudentGroupsListModal
                onClose={onCloseStudentListGroupModal}
                isOpen={visibleStudentListGroupModal}
                groupId={studentGroupDetailId!}
            />
        </div>
    );
};
