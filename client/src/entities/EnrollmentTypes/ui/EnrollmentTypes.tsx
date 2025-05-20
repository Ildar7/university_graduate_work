import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { fetchEnrollmentTypes } from 'entities/EnrollmentTypes/model/services/fetchEnrollmentTypes/fetchEnrollmentTypes';
import { EditEnrollmentType } from 'features/EnrollmentTypes/EditEnrollmentType';
import { DeleteEnrollmentType } from 'features/EnrollmentTypes/DeleteEnrollmentType';
import { ViewEnrollmentType } from 'features/EnrollmentTypes/ViewEnrollmentType';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './EnrollmentTypes.module.scss';
import { getEnrollmentTypesIsLoading } from '../model/selectors/getEnrollmentTypesIsLoading/getEnrollmentTypesIsLoading';
import { getEnrollmentTypesError } from '../model/selectors/getEnrollmentTypesError/getEnrollmentTypesError';
import { EnrollmentTypesType } from '../model/types/enrollmentTypes';

interface EnrollmentTypesProps {
    className?: string;
    data: EnrollmentTypesType[];
    exportDisabled: boolean;
}
export const EnrollmentTypes = (props: EnrollmentTypesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEnrollmentTypesIsLoading);
    const error = useSelector(getEnrollmentTypesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteEnrollmentType, setDeleteEnrollmentType] = useState<EnrollmentTypesType>();
    const [visibleViewEnrollmentType, setVisibleViewEnrollmentType] = useState(false);
    const [visibleEditEnrollmentType, setVisibleEditEnrollmentType] = useState(false);
    const [visibleDeleteEnrollmentType, setVisibleDeleteEnrollmentType] = useState(false);
    const [enrollmentTypeDetailId, setEnrollmentTypeDetailId] = useState<string>();

    const onShowEditEnrollmentTypeModal = (id: string) => {
        setVisibleEditEnrollmentType(true);
        setEnrollmentTypeDetailId(id);
    };

    const onShowDeleteEnrollmentTypeModal = useCallback((enrollmentType: EnrollmentTypesType) => {
        setVisibleDeleteEnrollmentType(true);
        setDeleteEnrollmentType(enrollmentType);
    }, []);

    const onShowViewEnrollmentTypeModal = (id: string) => {
        setVisibleViewEnrollmentType(true);
        setEnrollmentTypeDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_typeenrollment'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchEnrollmentTypes());
    }, [dispatch]);

    let enrollmentTypesTable;

    if (isLoading) {
        enrollmentTypesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        enrollmentTypesTable = (
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
        enrollmentTypesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-enrollment-types-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_typeenrollment'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID типа зачисления
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_typeenrollment' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('typeenrollment'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'typeenrollment' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((enrollmentType) => (
                                <div className={cls.tableRow} key={enrollmentType.id_typeenrollment}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-enrollment-types-${enrollmentType.id_typeenrollment}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {enrollmentType.id_typeenrollment}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {enrollmentType.typeenrollment}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewEnrollmentTypeModal(enrollmentType.id_typeenrollment.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditEnrollmentTypeModal(enrollmentType.id_typeenrollment.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteEnrollmentTypeModal(enrollmentType); }}
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
            {enrollmentTypesTable}

            <ViewEnrollmentType
                visible={visibleViewEnrollmentType}
                setVisible={setVisibleViewEnrollmentType}
                enrollmentTypeId={enrollmentTypeDetailId!}
                onDeleteEnrollmentType={onShowDeleteEnrollmentTypeModal}
                onEditEnrollmentType={onShowEditEnrollmentTypeModal}
            />

            <EditEnrollmentType
                visible={visibleEditEnrollmentType}
                setVisible={setVisibleEditEnrollmentType}
                enrollmentTypeId={enrollmentTypeDetailId!}
                onDeleteEnrollmentType={onShowDeleteEnrollmentTypeModal}
            />

            <DeleteEnrollmentType
                enrollmentType={deleteEnrollmentType}
                visible={visibleDeleteEnrollmentType}
                setVisible={setVisibleDeleteEnrollmentType}
            />
        </div>
    );
};
