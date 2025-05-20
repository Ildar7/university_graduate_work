import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { EditQualification } from 'features/Qualifications/EditQualification';
import { ViewQualification } from 'features/Qualifications/ViewQualification';
import { DeleteQualification } from 'features/Qualifications/DeleteQualification/ui/DeleteQualification';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import {
    fetchSpecialties, getSpecialtiesData, getSpecialtiesError, getSpecialtiesIsLoading,
} from 'entities/Specialties';
import { fetchQualifications } from '../model/services/fetchQualifications/fetchQualifications';
import { getQualificationsError } from '../model/selectors/getQualificationsError/getQualificationsError';
import { getQualificationsIsLoading } from '../model/selectors/getQualificationsIsLoading/getQualificationsIsLoading';
import { QualificationsType } from '../model/types/qualifications';
import cls from './Qualifications.module.scss';

interface QualificationsProps {
    className?: string;
    data: QualificationsType[];
    exportDisabled: boolean;
}
export const Qualifications = (props: QualificationsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getQualificationsIsLoading);
    const error = useSelector(getQualificationsError);

    const specialtiesData = useSelector(getSpecialtiesData);
    const specialtiesIsLoading = useSelector(getSpecialtiesIsLoading);
    const specialtiesError = useSelector(getSpecialtiesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteQualifications, setDeleteQualifications] = useState<QualificationsType>();
    const [visibleViewQualifications, setVisibleViewQualifications] = useState(false);
    const [visibleEditQualifications, setVisibleEditQualifications] = useState(false);
    const [visibleDeleteQualifications, setVisibleDeleteQualifications] = useState(false);
    const [qualificationsDetailId, setQualificationsDetailId] = useState<string>();

    const onShowEditQualificationsModal = (id: string) => {
        setVisibleEditQualifications(true);
        setQualificationsDetailId(id);
    };

    const onShowDeleteQualificationsModal = useCallback((qualifications: QualificationsType) => {
        setVisibleDeleteQualifications(true);
        setDeleteQualifications(qualifications);
    }, []);

    const onShowViewQualificationsModal = (id: string) => {
        setVisibleViewQualifications(true);
        setQualificationsDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_qual'));
        dispatch(tableSortActions.setSort('id_spec'));
        dispatch(fetchSpecialties());
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchQualifications());
    }, [dispatch]);

    let qualificationsTable;

    if (isLoading || specialtiesIsLoading) {
        qualificationsTable = (
            <Skeleton height={250} />
        );
    } else if (error || specialtiesError) {
        qualificationsTable = (
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
        qualificationsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <>
                    <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                        <div className={cls.tableHead}>
                            <div className={cls.tableRow}>
                                {!exportDisabled && (
                                    <Checkbox
                                        className={cls.checkbox}
                                        id="checkbox-qualifications-all"
                                    />
                                )}
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    onClick={() => {
                                        onClickSortCell('id_qual');
                                    }}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        ID
                                    </Text>
                                    <Icon
                                        Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                        className={
                                            classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_qual' }, [])
                                        }
                                    />
                                </Button>
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    className={cls.tableCell}
                                    onClick={() => {
                                        onClickSortCell('shifr_qual');
                                    }}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        Код
                                    </Text>
                                    <Icon
                                        Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                        className={
                                            classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'shifr_qual' }, [])
                                        }
                                    />
                                </Button>
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    className={cls.tableCell}
                                    onClick={() => {
                                        onClickSortCell('qualification');
                                    }}
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
                                            classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'qualification' }, [])
                                        }
                                    />
                                </Button>
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    className={cls.tableCell}
                                    onClick={() => {
                                        onClickSortCell('sort');
                                    }}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        Сортировка
                                    </Text>
                                    <Icon
                                        Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                        className={
                                            classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'sort' }, [])
                                        }
                                    />
                                </Button>
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    className={cls.tableCell}
                                    onClick={() => {
                                        onClickSortCell('specialty_id');
                                    }}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        Специальность
                                    </Text>
                                    <Icon
                                        Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                        className={
                                            classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'specialty_id' }, [])
                                        }
                                    />
                                </Button>
                                <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                            </div>
                        </div>
                        <div className={cls.tableBody}>
                            {
                                data?.map((qualifications) => (
                                    <div className={cls.tableRow} key={qualifications.id_qual}>
                                        {!exportDisabled && (
                                            <Checkbox
                                                className={cls.checkbox}
                                                id={`checkbox-qualifications-${qualifications.id_qual}`}
                                            />
                                        )}
                                        <div
                                            className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                        >
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {qualifications.id_qual}
                                            </Text>
                                        </div>
                                        <div className={cls.tableCell}>
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {qualifications.shifr_qual}
                                            </Text>
                                        </div>
                                        <div className={cls.tableCell}>
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {qualifications.qualification}
                                            </Text>
                                        </div>
                                        <div className={cls.tableCell}>
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {qualifications.sort}
                                            </Text>
                                        </div>
                                        <div className={cls.tableCell}>
                                            <Text
                                                size={TextSize.XS}
                                            >
                                                {
                                                    specialtiesData?.data.filter((specialty) => (
                                                        specialty.id_spec === qualifications.specialty_id
                                                    ))[0].speciality
                                                }
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
                                                    onShowViewQualificationsModal(qualifications.id_qual.toString());
                                                }}
                                            >
                                                <Icon Svg={UserIcon} />
                                            </Button>
                                            <Button
                                                theme={ButtonTheme.CLEAR}
                                                title="Редактировать"
                                                className={cls.editBtn}
                                                onClick={() => {
                                                    onShowEditQualificationsModal(qualifications.id_qual.toString());
                                                }}
                                            >
                                                <Icon Svg={EditIcon} />
                                            </Button>
                                            <Button
                                                theme={ButtonTheme.CLEAR}
                                                title="Удалить"
                                                className={cls.editBtn}
                                                onClick={() => {
                                                    onShowDeleteQualificationsModal(qualifications);
                                                }}
                                            >
                                                <Icon Svg={TrashIcon} />
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <ViewQualification
                        visible={visibleViewQualifications}
                        setVisible={setVisibleViewQualifications}
                        qualificationId={qualificationsDetailId!}
                        onDeleteQualification={onShowDeleteQualificationsModal}
                        onEditQualification={onShowEditQualificationsModal}
                    />

                    <EditQualification
                        visible={visibleEditQualifications}
                        setVisible={setVisibleEditQualifications}
                        qualificationId={qualificationsDetailId!}
                        onDeleteQualification={onShowDeleteQualificationsModal}
                    />

                    <DeleteQualification
                        qualification={deleteQualifications}
                        visible={visibleDeleteQualifications}
                        setVisible={setVisibleDeleteQualifications}
                        setQualificationsDetailId={setQualificationsDetailId}
                    />
                </>
            )
        );
    }

    const mods: Mods = {
        [cls.error]: !!error,
    };

    return (
        <div className={classNames(cls.TableBlock, mods, [className])}>
            {qualificationsTable}
        </div>
    );
};
