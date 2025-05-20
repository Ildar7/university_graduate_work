import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { EditEduLanguage } from 'features/EduLanguages/EditEduLanguage';
import { ViewEduLanguage } from 'features/EduLanguages/ViewEduLanguage';
import { DeleteEduLanguage } from 'features/EduLanguages/DeleteEduLanguage/ui/DeleteEduLanguage';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { fetchEduLanguages } from '../model/services/fetchEduLanguages/fetchEduLanguages';
import { getEduLanguagesError } from '../model/selectors/getEduLanguagesError/getEduLanguagesError';
import { getEduLanguagesIsLoading } from '../model/selectors/getEduLanguagesIsLoading/getEduLanguagesIsLoading';
import { EduLanguagesType } from '../model/types/eduLanguages';
import cls from './EduLanguages.module.scss';

interface EduLanguagesProps {
    className?: string;
    data: EduLanguagesType[];
    exportDisabled: boolean;
}
export const EduLanguages = (props: EduLanguagesProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEduLanguagesIsLoading);
    const error = useSelector(getEduLanguagesError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteEduLanguages, setDeleteEduLanguages] = useState<EduLanguagesType>();
    const [visibleViewEduLanguages, setVisibleViewEduLanguages] = useState(false);
    const [visibleEditEduLanguages, setVisibleEditEduLanguages] = useState(false);
    const [visibleDeleteEduLanguages, setVisibleDeleteEduLanguages] = useState(false);
    const [eduLanguagesDetailId, setEduLanguagesDetailId] = useState<string>();

    const onShowEditEduLanguagesModal = (id: string) => {
        setVisibleEditEduLanguages(true);
        setEduLanguagesDetailId(id);
    };

    const onShowDeleteEduLanguagesModal = useCallback((eduLanguages: EduLanguagesType) => {
        setVisibleDeleteEduLanguages(true);
        setDeleteEduLanguages(eduLanguages);
    }, []);

    const onShowViewEduLanguagesModal = (id: string) => {
        setVisibleViewEduLanguages(true);
        setEduLanguagesDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_languageofedu'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchEduLanguages());
    }, [dispatch]);

    let eduLanguagesTable;

    if (isLoading) {
        eduLanguagesTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        eduLanguagesTable = (
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
        eduLanguagesTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-edu-langs-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_languageofedu'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID языка обучения
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_languageofedu' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('languageofedu'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'languageofedu' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((eduLanguages) => (
                                <div className={cls.tableRow} key={eduLanguages.id_languageofedu}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-edu-langs-${eduLanguages.id_languageofedu}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {eduLanguages.id_languageofedu}
                                        </Text>
                                    </div>
                                    <div
                                        className={cls.tableCell}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {eduLanguages.languageofedu}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewEduLanguagesModal(eduLanguages.id_languageofedu.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditEduLanguagesModal(eduLanguages.id_languageofedu.toString()); }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteEduLanguagesModal(eduLanguages); }}
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
            {eduLanguagesTable}

            <ViewEduLanguage
                visible={visibleViewEduLanguages}
                setVisible={setVisibleViewEduLanguages}
                eduLanguageId={eduLanguagesDetailId!}
                onDeleteEduLanguage={onShowDeleteEduLanguagesModal}
                onEditEduLanguage={onShowEditEduLanguagesModal}
            />

            <EditEduLanguage
                visible={visibleEditEduLanguages}
                setVisible={setVisibleEditEduLanguages}
                eduLanguageId={eduLanguagesDetailId!}
                onDeleteEduLanguage={onShowDeleteEduLanguagesModal}
            />

            <DeleteEduLanguage
                eduLanguage={deleteEduLanguages}
                visible={visibleDeleteEduLanguages}
                setVisible={setVisibleDeleteEduLanguages}
            />
        </div>
    );
};
