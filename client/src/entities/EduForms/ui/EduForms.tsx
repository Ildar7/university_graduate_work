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
import { fetchEduForms } from 'entities/EduForms/model/services/fetchEduForms/fetchEduForms';
import { EditEduForm } from 'features/EduForms/EditEduForm';
import { DeleteEduForm } from 'features/EduForms/DeleteEduForm';
import { ViewEduForm } from 'features/EduForms/ViewEduForm';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './EduForms.module.scss';
import { getEduFormsIsLoading } from '../model/selectors/getEduFormsIsLoading/getEduFormsIsLoading';
import { getEduFormsError } from '../model/selectors/getEduFormsError/getEduFormsError';
import { EduFormsType } from '../model/types/eduForms';

interface EduFormsProps {
    className?: string;
    data: EduFormsType[];
    exportDisabled: boolean;
}
export const EduForms = (props: EduFormsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEduFormsIsLoading);
    const error = useSelector(getEduFormsError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteEduForm, setDeleteEduForm] = useState<EduFormsType>();
    const [visibleViewEduForm, setVisibleViewEduForm] = useState(false);
    const [visibleEditEduForm, setVisibleEditEduForm] = useState(false);
    const [visibleDeleteEduForm, setVisibleDeleteEduForm] = useState(false);
    const [eduFormDetailId, setEduFormDetailId] = useState<string>();

    const onShowEditEduFormModal = (id: string) => {
        setVisibleEditEduForm(true);
        setEduFormDetailId(id);
    };

    const onShowDeleteEduFormModal = useCallback((eduForm: EduFormsType) => {
        setVisibleDeleteEduForm(true);
        setDeleteEduForm(eduForm);
    }, []);

    const onShowViewEduFormModal = (id: string) => {
        setVisibleViewEduForm(true);
        setEduFormDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_typeoftraining'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchEduForms());
    }, [dispatch]);

    let eduFormsTable;

    if (isLoading) {
        eduFormsTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        eduFormsTable = (
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
        eduFormsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-edu-forms-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_typeoftraining'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID формы обучения
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_typeoftraining' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('typeoftraining'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'typeoftraining' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((eduForm) => (
                                <div className={cls.tableRow} key={eduForm.id_typeoftraining}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-edu-forms-${eduForm.id_typeoftraining}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {eduForm.id_typeoftraining}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {eduForm.typeoftraining}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewEduFormModal(eduForm.id_typeoftraining.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditEduFormModal(eduForm.id_typeoftraining.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteEduFormModal(eduForm); }}
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
            {eduFormsTable}

            <ViewEduForm
                visible={visibleViewEduForm}
                setVisible={setVisibleViewEduForm}
                eduFormId={eduFormDetailId!}
                onDeleteEduForm={onShowDeleteEduFormModal}
                onEditEduForm={onShowEditEduFormModal}
            />

            <EditEduForm
                visible={visibleEditEduForm}
                setVisible={setVisibleEditEduForm}
                eduFormId={eduFormDetailId!}
                onDeleteEduForm={onShowDeleteEduFormModal}
            />

            <DeleteEduForm
                eduForm={deleteEduForm}
                visible={visibleDeleteEduForm}
                setVisible={setVisibleDeleteEduForm}
            />
        </div>
    );
};
