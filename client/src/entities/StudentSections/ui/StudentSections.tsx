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
import { fetchStudentSections } from 'entities/StudentSections/model/services/fetchStudentSections/fetchStudentSections';
import { EditStudentSection } from 'features/StudentSections/EditStudentSection';
import { DeleteStudentSection } from 'features/StudentSections/DeleteStudentSection';
import { ViewStudentSection } from 'features/StudentSections/ViewStudentSection';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './StudentSections.module.scss';
import { getStudentSectionsIsLoading } from '../model/selectors/getStudentSectionsIsLoading/getStudentSectionsIsLoading';
import { getStudentSectionsError } from '../model/selectors/getStudentSectionsError/getStudentSectionsError';
import { StudentSectionsType } from '../model/types/studentSections';

interface StudentSectionsProps {
    className?: string;
    data: StudentSectionsType[];
    exportDisabled: boolean;
}
export const StudentSections = (props: StudentSectionsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getStudentSectionsIsLoading);
    const error = useSelector(getStudentSectionsError);

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteStudentSection, setDeleteStudentSection] = useState<StudentSectionsType>();
    const [visibleViewStudentSection, setVisibleViewStudentSection] = useState(false);
    const [visibleEditStudentSection, setVisibleEditStudentSection] = useState(false);
    const [visibleDeleteStudentSection, setVisibleDeleteStudentSection] = useState(false);
    const [studentSectionDetailId, setStudentSectionDetailId] = useState<string>();

    const onShowEditStudentSectionModal = (id: string) => {
        setVisibleEditStudentSection(true);
        setStudentSectionDetailId(id);
    };

    const onShowDeleteStudentSectionModal = useCallback((studentSection: StudentSectionsType) => {
        setVisibleDeleteStudentSection(true);
        setDeleteStudentSection(studentSection);
    }, []);

    const onShowViewStudentSectionModal = (id: string) => {
        setVisibleViewStudentSection(true);
        setStudentSectionDetailId(id);
    };

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_sections'));
    }, [dispatch]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchStudentSections());
    }, [dispatch]);

    let studentSectionsTable;

    if (isLoading) {
        studentSectionsTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        studentSectionsTable = (
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
        studentSectionsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-student-sections-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('id_sections'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID секции
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'id_sections' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={cls.tableCell}
                                onClick={() => { onClickSortCell('sections'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'sections' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((studentSection) => (
                                <div className={cls.tableRow} key={studentSection.id_sections}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-student-sections-${studentSection.id_sections}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {studentSection.id_sections}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {studentSection.sections}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Просмотр"
                                            className={cls.editBtn}
                                            onClick={() => { onShowViewStudentSectionModal(studentSection.id_sections.toString()); }}
                                        >
                                            <Icon Svg={UserIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => { onShowEditStudentSectionModal(studentSection.id_sections.toString()); }}

                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteStudentSectionModal(studentSection); }}
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
            {studentSectionsTable}

            <ViewStudentSection
                visible={visibleViewStudentSection}
                setVisible={setVisibleViewStudentSection}
                studentSectionId={studentSectionDetailId!}
                onDeleteStudentSection={onShowDeleteStudentSectionModal}
                onEditStudentSection={onShowEditStudentSectionModal}
            />

            <EditStudentSection
                visible={visibleEditStudentSection}
                setVisible={setVisibleEditStudentSection}
                studentSectionId={studentSectionDetailId!}
                onDeleteStudentSection={onShowDeleteStudentSectionModal}
            />

            <DeleteStudentSection
                studentSection={deleteStudentSection}
                visible={visibleDeleteStudentSection}
                setVisible={setVisibleDeleteStudentSection}
            />
        </div>
    );
};
