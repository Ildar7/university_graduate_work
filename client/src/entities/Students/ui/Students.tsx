import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { format } from 'date-fns';
import { DeleteStudent } from 'features/Students/DeleteStudent';
import { EditStudent } from 'features/Students/EditStudent';
import { ViewStudent } from 'features/Students/ViewStudent';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchStudents } from 'entities/Students';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { studentsRender } from 'entities/Students/const/studentsRender';
import { capitalizeFirstLetter } from 'shared/lib/helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import { StudentsTableFieldsType } from 'features/Students/StudentsTableFields';
import { formatPassportValue } from 'shared/lib/helpers/formatPassportValue/formatPassportValue';
import { getStudentsIsLoading } from '../model/selectors/getStudentsIsLoading/getStudentsIsLoading';
import { getStudentsError } from '../model/selectors/getStudentsError/getStudentsError';
import cls from './Students.module.scss';
import { StudentsType } from '../model/types/students';

interface StudentsProps {
    className?: string;
    data: StudentsType[];
    visibleCells: StudentsTableFieldsType | undefined;
    exportDisabled: boolean;
}

export const Students = (props: StudentsProps) => {
    const {
        className,
        data,
        visibleCells,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getStudentsIsLoading);
    const error = useSelector(getStudentsError);
    const [deleteUser, setDeleteUser] = useState<StudentsType>();
    const [studentDetailId, setStudentDetailId] = useState<string>();

    const [visibleDeleteStudent, setVisibleDeleteStudent] = useState(false);
    const [visibleEditStudent, setVisibleEditStudent] = useState(false);
    const [visibleViewStudent, setVisibleViewStudent] = useState(false);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const onShowDeleteStudentModal = useCallback((student: StudentsType) => {
        setVisibleDeleteStudent(true);
        setDeleteUser(student);
    }, []);

    const onShowEditStudentModal = (id: string) => {
        setVisibleEditStudent(true);
        setStudentDetailId(id);
    };

    const onShowViewStudentModal = (id: string) => {
        setVisibleViewStudent(true);
        setStudentDetailId(id);
    };

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchStudents());
    }, [dispatch]);

    let studentsTable;

    if (isLoading) {
        studentsTable = (
            <Skeleton height={400} />
        );
    } else if (error) {
        studentsTable = (
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
        studentsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('students_id'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'students_id' }, [])
                                    }
                                />
                            </Button>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellFio])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ФИО
                                </Text>
                            </div>
                            {
                                studentsRender.map((studentInfo) => (
                                    visibleCells?.[studentInfo.dataBaseName] && (
                                        <Button
                                            key={studentInfo.dataBaseName}
                                            theme={ButtonTheme.CLEAR}
                                            className={cls.tableCell}
                                            onClick={() => { onClickSortCell(studentInfo.dataBaseName); }}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                weight={TextWeight.SEMIBOLD}
                                            >
                                                {studentInfo.name}
                                            </Text>
                                            <Icon
                                                Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                                className={
                                                    classNames(
                                                        cls.tableSortIcon,
                                                        {
                                                            [cls.active]: sortByField === studentInfo.dataBaseName,
                                                        },
                                                        [],
                                                    )
                                                }
                                            />
                                        </Button>
                                    )
                                ))
                            }
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((student) => (
                                <div className={cls.tableRow} key={student.students_id}>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {student.students_id}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellFio])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {student.fio}
                                        </Text>
                                    </div>
                                    {visibleCells?.student_govid && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {formatPassportValue(student.student_govid)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_gender && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {student.gender && (student.gender.gender)[0].toUpperCase()}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_nationality && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.nationality && (student.nationality.nationality)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_edu_speciality && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.specialty && (student.specialty.speciality)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_edu_classifier && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.qualification && (student.qualification.qualification)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_edu_lang && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.languageofedu && (student.languageofedu.languageofedu)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_edu_form && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={
                                                    // eslint-disable-next-line no-nested-ternary
                                                    student.student_edu_form === 1
                                                        ? TextTheme.BG_ORANGE
                                                        : student.student_edu_form === 3
                                                            ? TextTheme.BG_BLUE
                                                            : TextTheme.BG_BLUE_ORANGE
                                                }
                                            >
                                                {student.typeoftraining && (capitalizeFirstLetter(student.typeoftraining.typeoftraining))}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.id_group && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {student.group ? student.group.code : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_has_access_to_exams && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={student.student_is_has_access_to_exams ? TextTheme.BG_GREEN : TextTheme.BG_RED}
                                            >
                                                {student.student_is_has_access_to_exams ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_phone_number && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_phone_number}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_birth_date && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {
                                                    student.student_birth_date
                                                        ? format(new Date(student.student_birth_date), 'dd.MM.yyyy')
                                                        : ''
                                                }
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_arrival_date && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {
                                                    student.student_arrival_date
                                                        ? format(new Date(student.student_arrival_date), 'dd.MM.yyyy')
                                                        : ''
                                                }
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_study_duration && (

                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.durationoftraining && (student.durationoftraining.durationoftraining)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_study_course && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                                theme={TextTheme.BG_LIGHT}
                                            >
                                                {student.courseoftraining && (student.courseoftraining.courseoftraining)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_live_at_hostel && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_live_at_hostel ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}

                                    {visibleCells?.student_citizenship && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.citizenship && (student.citizenship.citizenship)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_enrollment_type && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.typeenrollment && (student.typeenrollment.typeenrollment)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_arrival_from && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.citizenship && (student.citizenship.citizenship)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_finished_edu_type && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.fromacceptedfinished && (student.fromacceptedfinished.fromacceptedfinished)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_residence_type && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.typeofareaofresidence && (student.typeofareaofresidence.typeofareaofresidence)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_residential_address && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_residential_address}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_temporary_residence_add && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_temporary_residence_address}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_need_hostel_type && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.needhostel && (student.needhostel.needhostel)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_financing_source_type && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.whopaying && (student.whopaying.whopaying)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_quota && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.kvotum && (student.kvotum.kvota)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_orphan && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_orphan ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_without_parental_care && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_without_parental_care ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_disabled_person && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_disabled_person ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_material_assistance_type && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.finimatpomosh && (student.finimatpomosh.finimatpomosh)}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_from_young_family && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_from_young_family ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_study_in_dual_system && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_study_in_dual_system ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_study_in_productive_employment && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_study_in_productive_employment ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_completed_training_at_competence_center && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_completed_training_at_competence_center ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_study_in_worldskills && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_study_in_worldskills ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}
                                    {visibleCells?.student_is_involved_in_social_activities && (
                                        <div
                                            className={cls.tableCell}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {student.student_is_involved_in_social_activities ? 'Да' : 'Нет'}
                                            </Text>
                                        </div>
                                    )}

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewStudentModal(student!.students_id!.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditStudentModal(student!.students_id!.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteStudentModal(student); }}
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
            {studentsTable}

            <ViewStudent
                visible={visibleViewStudent}
                setVisible={setVisibleViewStudent}
                studentId={studentDetailId!}
                onDeleteStudent={onShowDeleteStudentModal}
                onEditStudent={onShowEditStudentModal}
            />

            <EditStudent
                visible={visibleEditStudent}
                setVisible={setVisibleEditStudent}
                studentId={studentDetailId!}
                onDeleteStudent={onShowDeleteStudentModal}
            />

            <DeleteStudent
                visible={visibleDeleteStudent}
                setVisible={setVisibleDeleteStudent}
                student={deleteUser}
            />
        </div>
    );
};
