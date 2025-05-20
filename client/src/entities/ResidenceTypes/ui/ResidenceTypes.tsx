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
import { fetchResidenceTypes } from 'entities/ResidenceTypes/model/services/fetchResidenceTypes/fetchResidenceTypes';
import { EditResidenceType } from 'features/ResidenceTypes/EditResidenceType';
import { DeleteResidenceType } from 'features/ResidenceTypes/DeleteResidenceType';
import { ViewResidenceType } from 'features/ResidenceTypes/ViewResidenceType';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './ResidenceTypes.module.scss';
import { getResidenceTypesIsLoading } from '../model/selectors/getResidenceTypesIsLoading/getResidenceTypesIsLoading';
import { getResidenceTypesError } from '../model/selectors/getResidenceTypesError/getResidenceTypesError';
import { ResidenceTypesType } from '../model/types/residenceTypes';

interface ResidenceTypesProps {
    className?: string;
    data: ResidenceTypesType[];
    exportDisabled: boolean;
}
export const ResidenceTypes = (props: ResidenceTypesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getResidenceTypesIsLoading);
    const error = useSelector(getResidenceTypesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteResidenceType, setDeleteResidenceType] = useState<ResidenceTypesType>();
    const [visibleViewResidenceType, setVisibleViewResidenceType] = useState(false);
    const [visibleEditResidenceType, setVisibleEditResidenceType] = useState(false);
    const [visibleDeleteResidenceType, setVisibleDeleteResidenceType] = useState(false);
    const [residenceTypeDetailId, setResidenceTypeDetailId] = useState<string>();

    const onShowEditResidenceTypeModal = (id: string) => {
        setVisibleEditResidenceType(true);
        setResidenceTypeDetailId(id);
    };

    const onShowDeleteResidenceTypeModal = useCallback((residenceType: ResidenceTypesType) => {
        setVisibleDeleteResidenceType(true);
        setDeleteResidenceType(residenceType);
    }, []);

    const onShowViewResidenceTypeModal = (id: string) => {
        setVisibleViewResidenceType(true);
        setResidenceTypeDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_typeofareaofresidence'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchResidenceTypes());
    }, [dispatch]);

    let residenceTypesTable;

    if (isLoading) {
        residenceTypesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        residenceTypesTable = (
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
        residenceTypesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-residence-types-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_typeofareaofresidence'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID местожительства
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_typeofareaofresidence' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('typeofareaofresidence'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'typeofareaofresidence' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((residenceType) => (
                                <div className={cls.tableRow} key={residenceType.id_typeofareaofresidence}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-residence-types-${residenceType.id_typeofareaofresidence}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {residenceType.id_typeofareaofresidence}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {residenceType.typeofareaofresidence}
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
                                                onShowViewResidenceTypeModal(
                                                    residenceType.id_typeofareaofresidence.toString(),
                                                );
                                            }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowEditResidenceTypeModal(residenceType.id_typeofareaofresidence.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteResidenceTypeModal(residenceType); }}
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
            {residenceTypesTable}

            <ViewResidenceType
                visible={visibleViewResidenceType}
                setVisible={setVisibleViewResidenceType}
                residenceTypeId={residenceTypeDetailId!}
                onDeleteResidenceType={onShowDeleteResidenceTypeModal}
                onEditResidenceType={onShowEditResidenceTypeModal}
            />

            <EditResidenceType
                visible={visibleEditResidenceType}
                setVisible={setVisibleEditResidenceType}
                residenceTypeId={residenceTypeDetailId!}
                onDeleteResidenceType={onShowDeleteResidenceTypeModal}
            />

            <DeleteResidenceType
                residenceType={deleteResidenceType}
                visible={visibleDeleteResidenceType}
                setVisible={setVisibleDeleteResidenceType}
            />
        </div>
    );
};
