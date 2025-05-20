import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { DeleteFinishedEduType } from 'features/FinishedEduTypes/DeleteFinishedEduType';
import { EditFinishedEduType } from 'features/FinishedEduTypes/EditFinishedEduType';
import { ViewFinishedEduType } from 'features/FinishedEduTypes/ViewFinishedEduType';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { fetchFinishedEduTypes } from '../model/services/fetchFinishedEduTypes/fetchFinishedEduTypes';
import { FinishedEduTypesType } from '../model/types/finishedEduTypes';
import { getFinishedEduTypesError } from '../model/selectors/getFinishedEduTypesError/getFinishedEduTypesError';
import {
    getFinishedEduTypesIsLoading,
} from '../model/selectors/getFinishedEduTypesIsLoading/getFinishedEduTypesIsLoading';
import cls from './FinishedEduTypes.module.scss';

interface FinishedEduTypesProps {
    className?: string;
    data: FinishedEduTypesType[];
    exportDisabled: boolean;
}
export const FinishedEduTypes = (props: FinishedEduTypesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getFinishedEduTypesIsLoading);
    const error = useSelector(getFinishedEduTypesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteFinishedEduTypes, setDeleteFinishedEduTypes] = useState<FinishedEduTypesType>();
    const [visibleViewFinishedEduTypes, setVisibleViewFinishedEduTypes] = useState(false);
    const [visibleEditFinishedEduTypes, setVisibleEditFinishedEduTypes] = useState(false);
    const [visibleDeleteFinishedEduTypes, setVisibleDeleteFinishedEduTypes] = useState(false);
    const [finishedEduTypesDetailId, setFinishedEduTypesDetailId] = useState<string>();

    const onShowEditFinishedEduTypesModal = (id: string) => {
        setVisibleEditFinishedEduTypes(true);
        setFinishedEduTypesDetailId(id);
    };

    const onShowDeleteFinishedEduTypesModal = useCallback((finishedEduTypes: FinishedEduTypesType) => {
        setVisibleDeleteFinishedEduTypes(true);
        setDeleteFinishedEduTypes(finishedEduTypes);
    }, []);

    const onShowViewFinishedEduTypesModal = (id: string) => {
        setVisibleViewFinishedEduTypes(true);
        setFinishedEduTypesDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_fromacceptedfinished'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchFinishedEduTypes());
    }, [dispatch]);

    let finishedEduTypesTable;

    if (isLoading) {
        finishedEduTypesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        finishedEduTypesTable = (
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
        finishedEduTypesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-finished-edu-types-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_fromacceptedfinished'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID типа окончания обучения
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_fromacceptedfinished' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('fromacceptedfinished'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'fromacceptedfinished' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((finishedEduTypes) => (
                                <div className={cls.tableRow} key={finishedEduTypes.id_fromacceptedfinished}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-finished-edu-types-${finishedEduTypes.id_fromacceptedfinished}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {finishedEduTypes.id_fromacceptedfinished}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {finishedEduTypes.fromacceptedfinished}
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
                                                onShowViewFinishedEduTypesModal(finishedEduTypes.id_fromacceptedfinished.toString());
                                            }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowEditFinishedEduTypesModal(finishedEduTypes.id_fromacceptedfinished.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteFinishedEduTypesModal(finishedEduTypes); }}
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
            {finishedEduTypesTable}

            <ViewFinishedEduType
                visible={visibleViewFinishedEduTypes}
                setVisible={setVisibleViewFinishedEduTypes}
                finishedEduTypeId={finishedEduTypesDetailId!}
                onDeleteFinishedEduType={onShowDeleteFinishedEduTypesModal}
                onEditFinishedEduType={onShowEditFinishedEduTypesModal}
            />

            <EditFinishedEduType
                visible={visibleEditFinishedEduTypes}
                setVisible={setVisibleEditFinishedEduTypes}
                finishedEduTypeId={finishedEduTypesDetailId!}
                onDeleteFinishedEduType={onShowDeleteFinishedEduTypesModal}
            />

            <DeleteFinishedEduType
                finishedEduType={deleteFinishedEduTypes}
                visible={visibleDeleteFinishedEduTypes}
                setVisible={setVisibleDeleteFinishedEduTypes}
            />
        </div>
    );
};
