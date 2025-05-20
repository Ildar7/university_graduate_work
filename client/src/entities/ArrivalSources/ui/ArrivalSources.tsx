import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { fetchArrivalSources } from 'entities/ArrivalSources/model/services/fetchArrivalSources/fetchArrivalSources';
import { EditArrivalSource } from 'features/ArrivalSources/EditArrivalSource';
import { DeleteArrivalSource } from 'features/ArrivalSources/DeleteArrivalSource';
import { ViewArrivalSource } from 'features/ArrivalSources/ViewArrivalSource';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './ArrivalSources.module.scss';
import { getArrivalSourcesIsLoading } from '../model/selectors/getArrivalSourcesIsLoading/getArrivalSourcesIsLoading';
import { getArrivalSourcesError } from '../model/selectors/getArrivalSourcesError/getArrivalSourcesError';
import { ArrivalSourcesType } from '../model/types/arrivalSources';

interface ArrivalSourcesProps {
    className?: string;
    data: ArrivalSourcesType[];
    exportDisabled: boolean;
}
export const ArrivalSources = (props: ArrivalSourcesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArrivalSourcesIsLoading);
    const error = useSelector(getArrivalSourcesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteArrivalSource, setDeleteArrivalSource] = useState<ArrivalSourcesType>();
    const [visibleViewArrivalSource, setVisibleViewArrivalSource] = useState(false);
    const [visibleEditArrivalSource, setVisibleEditArrivalSource] = useState(false);
    const [visibleDeleteArrivalSource, setVisibleDeleteArrivalSource] = useState(false);
    const [arrivalSourceDetailId, setArrivalSourceDetailId] = useState<string>();

    const onShowEditArrivalSourceModal = (id: string) => {
        setVisibleEditArrivalSource(true);
        setArrivalSourceDetailId(id);
    };

    const onShowDeleteArrivalSourceModal = useCallback((arrivalSource: ArrivalSourcesType) => {
        setVisibleDeleteArrivalSource(true);
        setDeleteArrivalSource(arrivalSource);
    }, []);

    const onShowViewArrivalSourceModal = (id: string) => {
        setVisibleViewArrivalSource(true);
        setArrivalSourceDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_comesfrom'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchArrivalSources());
    }, [dispatch]);

    let arrivalSourcesTable;

    if (isLoading) {
        arrivalSourcesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        arrivalSourcesTable = (
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
        arrivalSourcesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-arrival-sources-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_comesfrom'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID места рождения
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_comesfrom' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('comesfrom'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'comesfrom' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((arrivalSource) => (
                                <div className={cls.tableRow} key={arrivalSource.id_comesfrom}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-arrival-sources-${arrivalSource.id_comesfrom}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {arrivalSource.id_comesfrom}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {arrivalSource.comesfrom}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewArrivalSourceModal(arrivalSource.id_comesfrom.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditArrivalSourceModal(arrivalSource.id_comesfrom.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteArrivalSourceModal(arrivalSource); }}
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
            {arrivalSourcesTable}

            <ViewArrivalSource
                visible={visibleViewArrivalSource}
                setVisible={setVisibleViewArrivalSource}
                arrivalSourceId={arrivalSourceDetailId!}
                onDeleteArrivalSource={onShowDeleteArrivalSourceModal}
                onEditArrivalSource={onShowEditArrivalSourceModal}
            />

            <EditArrivalSource
                visible={visibleEditArrivalSource}
                setVisible={setVisibleEditArrivalSource}
                arrivalSourceId={arrivalSourceDetailId!}
                onDeleteArrivalSource={onShowDeleteArrivalSourceModal}
            />

            <DeleteArrivalSource
                arrivalSource={deleteArrivalSource}
                visible={visibleDeleteArrivalSource}
                setVisible={setVisibleDeleteArrivalSource}
            />
        </div>
    );
};
