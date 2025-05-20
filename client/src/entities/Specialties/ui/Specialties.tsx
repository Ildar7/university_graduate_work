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
import { EditSpeciality } from 'features/Specialties/EditSpeciality';
import { ViewSpeciality } from 'features/Specialties/ViewSpeciality';
import { DeleteSpeciality } from 'features/Specialties/DeleteSpeciality/ui/DeleteSpeciality';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { fetchSpecialties } from '../model/services/fetchSpecialties/fetchSpecialties';
import { getSpecialtiesError } from '../model/selectors/getSpecialtiesError/getSpecialtiesError';
import { getSpecialtiesIsLoading } from '../model/selectors/getSpecialtiesIsLoading/getSpecialtiesIsLoading';
import { SpecialtiesType } from '../model/types/specialties';
import cls from './Specialties.module.scss';

interface SpecialtiesProps {
    className?: string;
    data: SpecialtiesType[];
    exportDisabled: boolean;
}
export const Specialties = (props: SpecialtiesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getSpecialtiesIsLoading);
    const error = useSelector(getSpecialtiesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteSpecialties, setDeleteSpecialties] = useState<SpecialtiesType>();
    const [visibleViewSpecialties, setVisibleViewSpecialties] = useState(false);
    const [visibleEditSpecialties, setVisibleEditSpecialties] = useState(false);
    const [visibleDeleteSpecialties, setVisibleDeleteSpecialties] = useState(false);
    const [specialtiesDetailId, setSpecialtiesDetailId] = useState<string>();

    const onShowEditSpecialtiesModal = (id: string) => {
        setVisibleEditSpecialties(true);
        setSpecialtiesDetailId(id);
    };

    const onShowDeleteSpecialtiesModal = useCallback((specialties: SpecialtiesType) => {
        setVisibleDeleteSpecialties(true);
        setDeleteSpecialties(specialties);
    }, []);

    const onShowViewSpecialtiesModal = (id: string) => {
        setVisibleViewSpecialties(true);
        setSpecialtiesDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_spec'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchSpecialties());
    }, [dispatch]);

    let specialtiesTable;

    if (isLoading) {
        specialtiesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        specialtiesTable = (
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
        specialtiesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-specialties-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_spec'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID специальности
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_spec' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('speciality'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'speciality' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((specialties) => (
                                <div className={cls.tableRow} key={specialties.id_spec}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-specialties-${specialties.id_spec}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {specialties.id_spec}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {specialties.speciality}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewSpecialtiesModal(specialties.id_spec.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditSpecialtiesModal(specialties.id_spec.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteSpecialtiesModal(specialties); }}
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
            {specialtiesTable}

            <ViewSpeciality
                visible={visibleViewSpecialties}
                setVisible={setVisibleViewSpecialties}
                specialityId={specialtiesDetailId!}
                onDeleteSpeciality={onShowDeleteSpecialtiesModal}
                onEditSpeciality={onShowEditSpecialtiesModal}
            />

            <EditSpeciality
                visible={visibleEditSpecialties}
                setVisible={setVisibleEditSpecialties}
                specialityId={specialtiesDetailId!}
                onDeleteSpeciality={onShowDeleteSpecialtiesModal}
            />

            <DeleteSpeciality
                speciality={deleteSpecialties}
                visible={visibleDeleteSpecialties}
                setVisible={setVisibleDeleteSpecialties}
            />
        </div>
    );
};
