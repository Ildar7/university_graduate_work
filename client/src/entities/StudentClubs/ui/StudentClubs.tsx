import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import {
    CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
    cilPencil, cilSortAscending, cilSortDescending, cilTrash, cilUser,
} from '@coreui/icons';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { fetchStudentClubs } from 'entities/StudentClubs/model/services/fetchStudentClubs/fetchStudentClubs';
import { EditStudentClub } from 'features/StudentClubs/EditStudentClub';
import { DeleteStudentClub } from 'features/StudentClubs/DeleteStudentClub';
import { ViewStudentClub } from 'features/StudentClubs/ViewStudentClub';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './StudentClubs.module.scss';
import { getStudentClubsIsLoading } from '../model/selectors/getStudentClubsIsLoading/getStudentClubsIsLoading';
import { getStudentClubsError } from '../model/selectors/getStudentClubsError/getStudentClubsError';
import { StudentClubsType } from '../model/types/studentClubs';

interface StudentClubsProps {
    className?: string;
    data: StudentClubsType[];
    exportDisabled: boolean;
}
export const StudentClubs = (props: StudentClubsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getStudentClubsIsLoading);
    const error = useSelector(getStudentClubsError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteStudentClub, setDeleteStudentClub] = useState<StudentClubsType>();
    const [visibleViewStudentClub, setVisibleViewStudentClub] = useState(false);
    const [visibleEditStudentClub, setVisibleEditStudentClub] = useState(false);
    const [visibleDeleteStudentClub, setVisibleDeleteStudentClub] = useState(false);
    const [studentClubDetailId, setStudentClubDetailId] = useState<string>();

    const onShowEditStudentClubModal = (id: string) => {
        setVisibleEditStudentClub(true);
        setStudentClubDetailId(id);
    };

    const onShowDeleteStudentClubModal = useCallback((studentClub: StudentClubsType) => {
        setVisibleDeleteStudentClub(true);
        setDeleteStudentClub(studentClub);
    }, []);

    const onShowViewStudentClubModal = (id: string) => {
        setVisibleViewStudentClub(true);
        setStudentClubDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_clubs'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchStudentClubs());
    }, [dispatch]);

    let studentClubsTable;

    if (isLoading) {
        studentClubsTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        studentClubsTable = (
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
        studentClubsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-student-clubs-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_clubs'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID клуба
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_clubs' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('clubs'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Наименование
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'clubs' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((studentClub) => (
                                <div className={cls.tableRow} key={studentClub.id_clubs}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-student-clubs-${studentClub.id_clubs}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {studentClub.id_clubs}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {studentClub.clubs}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewStudentClubModal(studentClub.id_clubs.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditStudentClubModal(studentClub.id_clubs.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteStudentClubModal(studentClub); }}
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
            {studentClubsTable}

            <ViewStudentClub
                visible={visibleViewStudentClub}
                setVisible={setVisibleViewStudentClub}
                studentClubId={studentClubDetailId!}
                onDeleteStudentClub={onShowDeleteStudentClubModal}
                onEditStudentClub={onShowEditStudentClubModal}
            />

            <EditStudentClub
                visible={visibleEditStudentClub}
                setVisible={setVisibleEditStudentClub}
                studentClubId={studentClubDetailId!}
                onDeleteStudentClub={onShowDeleteStudentClubModal}
            />

            <DeleteStudentClub
                studentClub={deleteStudentClub}
                visible={visibleDeleteStudentClub}
                setVisible={setVisibleDeleteStudentClub}
            />
        </div>
    );
};
