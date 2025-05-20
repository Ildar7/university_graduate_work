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
import { EditStudyDirection } from 'features/StudyDirections/EditStudyDirection';
import { ViewStudyDirection } from 'features/StudyDirections/ViewStudyDirection';
import { DeleteStudyDirection } from 'features/StudyDirections/DeleteStudyDirection/ui/DeleteStudyDirection';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { fetchStudyDirections } from '../model/services/fetchStudyDirections/fetchStudyDirections';
import { getStudyDirectionsError } from '../model/selectors/getStudyDirectionsError/getStudyDirectionsError';
import { getStudyDirectionsIsLoading } from '../model/selectors/getStudyDirectionsIsLoading/getStudyDirectionsIsLoading';
import { StudyDirectionsType } from '../model/types/studyDirections';
import cls from './StudyDirections.module.scss';

interface StudyDirectionsProps {
    className?: string;
    data: StudyDirectionsType[];
    exportDisabled: boolean;
}
export const StudyDirections = (props: StudyDirectionsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getStudyDirectionsIsLoading);
    const error = useSelector(getStudyDirectionsError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteStudyDirections, setDeleteStudyDirections] = useState<StudyDirectionsType>();
    const [visibleViewStudyDirections, setVisibleViewStudyDirections] = useState(false);
    const [visibleEditStudyDirections, setVisibleEditStudyDirections] = useState(false);
    const [visibleDeleteStudyDirections, setVisibleDeleteStudyDirections] = useState(false);
    const [studyDirectionsDetailId, setStudyDirectionsDetailId] = useState<string>();

    const onShowEditStudyDirectionsModal = (id: string) => {
        setVisibleEditStudyDirections(true);
        setStudyDirectionsDetailId(id);
    };

    const onShowDeleteStudyDirectionsModal = useCallback((studyDirections: StudyDirectionsType) => {
        setVisibleDeleteStudyDirections(true);
        setDeleteStudyDirections(studyDirections);
    }, []);

    const onShowViewStudyDirectionsModal = (id: string) => {
        setVisibleViewStudyDirections(true);
        setStudyDirectionsDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_typeofdirection'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchStudyDirections());
    }, [dispatch]);

    let studyDirectionsTable;

    if (isLoading) {
        studyDirectionsTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        studyDirectionsTable = (
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
        studyDirectionsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-study-directions-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_typeofdirection'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID направления олимпиады
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_typeofdirection' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('typeofdirection'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'typeofdirection' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((studyDirections) => (
                                <div className={cls.tableRow} key={studyDirections.id_typeofdirection}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-study-directions-${studyDirections.id_typeofdirection}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {studyDirections.id_typeofdirection}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {studyDirections.typeofdirection}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowViewStudyDirectionsModal(studyDirections.id_typeofdirection.toString());
                                            }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowEditStudyDirectionsModal(studyDirections.id_typeofdirection.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteStudyDirectionsModal(studyDirections); }}
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
            {studyDirectionsTable}

            <ViewStudyDirection
                visible={visibleViewStudyDirections}
                setVisible={setVisibleViewStudyDirections}
                studyDirectionId={studyDirectionsDetailId!}
                onDeleteStudyDirection={onShowDeleteStudyDirectionsModal}
                onEditStudyDirection={onShowEditStudyDirectionsModal}
            />

            <EditStudyDirection
                visible={visibleEditStudyDirections}
                setVisible={setVisibleEditStudyDirections}
                studyDirectionId={studyDirectionsDetailId!}
                onDeleteStudyDirection={onShowDeleteStudyDirectionsModal}
            />

            <DeleteStudyDirection
                studyDirection={deleteStudyDirections}
                visible={visibleDeleteStudyDirections}
                setVisible={setVisibleDeleteStudyDirections}
            />
        </div>
    );
};
