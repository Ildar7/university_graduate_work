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
import { fetchPracticeTypes } from 'entities/PracticeTypes/model/services/fetchPracticeTypes/fetchPracticeTypes';
import { EditPracticeType } from 'features/PracticeTypes/EditPracticeType';
import { DeletePracticeType } from 'features/PracticeTypes/DeletePracticeType';
import { ViewPracticeType } from 'features/PracticeTypes/ViewPracticeType';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './PracticeTypes.module.scss';
import { getPracticeTypesIsLoading } from '../model/selectors/getPracticeTypesIsLoading/getPracticeTypesIsLoading';
import { getPracticeTypesError } from '../model/selectors/getPracticeTypesError/getPracticeTypesError';
import { PracticeTypesType } from '../model/types/practiceTypes';

interface PracticeTypesProps {
    className?: string;
    data: PracticeTypesType[];
    exportDisabled: boolean;
}
export const PracticeTypes = (props: PracticeTypesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getPracticeTypesIsLoading);
    const error = useSelector(getPracticeTypesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deletePracticeType, setDeletePracticeType] = useState<PracticeTypesType>();
    const [visibleViewPracticeType, setVisibleViewPracticeType] = useState(false);
    const [visibleEditPracticeType, setVisibleEditPracticeType] = useState(false);
    const [visibleDeletePracticeType, setVisibleDeletePracticeType] = useState(false);
    const [practiceTypeDetailId, setPracticeTypeDetailId] = useState<string>();

    const onShowEditPracticeTypeModal = (id: string) => {
        setVisibleEditPracticeType(true);
        setPracticeTypeDetailId(id);
    };

    const onShowDeletePracticeTypeModal = useCallback((practiceType: PracticeTypesType) => {
        setVisibleDeletePracticeType(true);
        setDeletePracticeType(practiceType);
    }, []);

    const onShowViewPracticeTypeModal = (id: string) => {
        setVisibleViewPracticeType(true);
        setPracticeTypeDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_practice'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchPracticeTypes());
    }, [dispatch]);

    let practiceTypesTable;

    if (isLoading) {
        practiceTypesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        practiceTypesTable = (
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
        practiceTypesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-practice-types-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_practice'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID вида практики
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_practice' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('practice'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'practice' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((practiceType) => (
                                <div className={cls.tableRow} key={practiceType.id_practice}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-practice-types-${practiceType.id_practice}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {practiceType.id_practice}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {practiceType.practice}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewPracticeTypeModal(practiceType.id_practice.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditPracticeTypeModal(practiceType.id_practice.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeletePracticeTypeModal(practiceType); }}
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
            {practiceTypesTable}

            <ViewPracticeType
                visible={visibleViewPracticeType}
                setVisible={setVisibleViewPracticeType}
                practiceTypeId={practiceTypeDetailId!}
                onDeletePracticeType={onShowDeletePracticeTypeModal}
                onEditPracticeType={onShowEditPracticeTypeModal}
            />

            <EditPracticeType
                visible={visibleEditPracticeType}
                setVisible={setVisibleEditPracticeType}
                practiceTypeId={practiceTypeDetailId!}
                onDeletePracticeType={onShowDeletePracticeTypeModal}
            />

            <DeletePracticeType
                practiceType={deletePracticeType}
                visible={visibleDeletePracticeType}
                setVisible={setVisibleDeletePracticeType}
            />
        </div>
    );
};
