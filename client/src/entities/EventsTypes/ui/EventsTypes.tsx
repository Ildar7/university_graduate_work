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
import { fetchEventsTypes } from 'entities/EventsTypes/model/services/fetchEventsTypes/fetchEventsTypes';
import { EditEventsType } from 'features/EventsTypes/EditEventsType';
import { DeleteEventsType } from 'features/EventsTypes/DeleteEventsType';
import { ViewEventsType } from 'features/EventsTypes/ViewEventsType';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './EventsTypes.module.scss';
import { getEventsTypesIsLoading } from '../model/selectors/getEventsTypesIsLoading/getEventsTypesIsLoading';
import { getEventsTypesError } from '../model/selectors/getEventsTypesError/getEventsTypesError';
import { EventsTypesType } from '../model/types/eventsTypes';

interface EventsTypesProps {
    className?: string;
    data: EventsTypesType[];
    exportDisabled: boolean;
}
export const EventsTypes = (props: EventsTypesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEventsTypesIsLoading);
    const error = useSelector(getEventsTypesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteEventsType, setDeleteEventsType] = useState<EventsTypesType>();
    const [visibleViewEventsType, setVisibleViewEventsType] = useState(false);
    const [visibleEditEventsType, setVisibleEditEventsType] = useState(false);
    const [visibleDeleteEventsType, setVisibleDeleteEventsType] = useState(false);
    const [eventsTypeDetailId, setEventsTypeDetailId] = useState<string>();

    const onShowEditEventsTypeModal = (id: string) => {
        setVisibleEditEventsType(true);
        setEventsTypeDetailId(id);
    };

    const onShowDeleteEventsTypeModal = useCallback((eventsType: EventsTypesType) => {
        setVisibleDeleteEventsType(true);
        setDeleteEventsType(eventsType);
    }, []);

    const onShowViewEventsTypeModal = (id: string) => {
        setVisibleViewEventsType(true);
        setEventsTypeDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_typeofevent'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchEventsTypes());
    }, [dispatch]);

    let eventsTypesTable;

    if (isLoading) {
        eventsTypesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        eventsTypesTable = (
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
        eventsTypesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-events-types-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_typeofevent'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID типа соревнования
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_typeofevent' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('typeofevent'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'typeofevent' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((eventsType) => (
                                <div className={cls.tableRow} key={eventsType.id_typeofevent}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-events-types-${eventsType.id_typeofevent}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {eventsType.id_typeofevent}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {eventsType.typeofevent}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewEventsTypeModal(eventsType.id_typeofevent.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditEventsTypeModal(eventsType.id_typeofevent.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteEventsTypeModal(eventsType); }}
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
            {eventsTypesTable}

            <ViewEventsType
                visible={visibleViewEventsType}
                setVisible={setVisibleViewEventsType}
                eventsTypeId={eventsTypeDetailId!}
                onDeleteEventsType={onShowDeleteEventsTypeModal}
                onEditEventsType={onShowEditEventsTypeModal}
            />

            <EditEventsType
                visible={visibleEditEventsType}
                setVisible={setVisibleEditEventsType}
                eventsTypeId={eventsTypeDetailId!}
                onDeleteEventsType={onShowDeleteEventsTypeModal}
            />

            <DeleteEventsType
                eventsType={deleteEventsType}
                visible={visibleDeleteEventsType}
                setVisible={setVisibleDeleteEventsType}
            />
        </div>
    );
};
