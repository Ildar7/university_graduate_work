import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { CButton, CTableDataCell } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPencil, cilTrash, cilUser } from '@coreui/icons';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { fetchFinSources } from 'entities/FinSources/model/services/fetchFinSources/fetchFinSources';
import { EditFinSource } from 'features/FinSources/EditFinSource';
import { DeleteFinSource } from 'features/FinSources/DeleteFinSource';
import { ViewFinSource } from 'features/FinSources/ViewFinSource';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './FinSources.module.scss';
import { getFinSourcesIsLoading } from '../model/selectors/getFinSourcesIsLoading/getFinSourcesIsLoading';
import { getFinSourcesError } from '../model/selectors/getFinSourcesError/getFinSourcesError';
import { FinSourcesType } from '../model/types/finSources';

interface FinSourcesProps {
    className?: string;
    data: FinSourcesType[];
    exportDisabled: boolean;
}
export const FinSources = (props: FinSourcesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getFinSourcesIsLoading);
    const error = useSelector(getFinSourcesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteFinSource, setDeleteFinSource] = useState<FinSourcesType>();
    const [visibleViewFinSource, setVisibleViewFinSource] = useState(false);
    const [visibleEditFinSource, setVisibleEditFinSource] = useState(false);
    const [visibleDeleteFinSource, setVisibleDeleteFinSource] = useState(false);
    const [finSourceDetailId, setFinSourceDetailId] = useState<string>();

    const onShowEditFinSourceModal = (id: string) => {
        setVisibleEditFinSource(true);
        setFinSourceDetailId(id);
    };

    const onShowDeleteFinSourceModal = useCallback((finSource: FinSourcesType) => {
        setVisibleDeleteFinSource(true);
        setDeleteFinSource(finSource);
    }, []);

    const onShowViewFinSourceModal = (id: string) => {
        setVisibleViewFinSource(true);
        setFinSourceDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_whopaying'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchFinSources());
    }, [dispatch]);

    let finSourcesTable;

    if (isLoading) {
        finSourcesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        finSourcesTable = (
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
        finSourcesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-fin-sources-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_whopaying'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID финансовой помощи
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_whopaying' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('whopaying'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'whopaying' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((finSource) => (
                                <div className={cls.tableRow} key={finSource.id_whopaying}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-fin-sources-${finSource.id_whopaying}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {finSource.id_whopaying}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {finSource.whopaying}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewFinSourceModal(finSource.id_whopaying.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditFinSourceModal(finSource.id_whopaying.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteFinSourceModal(finSource); }}
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
            {finSourcesTable}

            <ViewFinSource
                visible={visibleViewFinSource}
                setVisible={setVisibleViewFinSource}
                finSourceId={finSourceDetailId!}
                onDeleteFinSource={onShowDeleteFinSourceModal}
                onEditFinSource={onShowEditFinSourceModal}
            />

            <EditFinSource
                visible={visibleEditFinSource}
                setVisible={setVisibleEditFinSource}
                finSourceId={finSourceDetailId!}
                onDeleteFinSource={onShowDeleteFinSourceModal}
            />

            <DeleteFinSource
                finSource={deleteFinSource}
                visible={visibleDeleteFinSource}
                setVisible={setVisibleDeleteFinSource}
            />
        </div>
    );
};
