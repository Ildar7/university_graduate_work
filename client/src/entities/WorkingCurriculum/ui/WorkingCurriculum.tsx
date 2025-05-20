import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import TableIcon from 'shared/assets/icons/table.svg';
import FileIcon from 'shared/assets/icons/file.svg';
import { DeleteWorkingCurriculum } from 'features/WorkingCurriculum/DeleteWorkingCurriculum';
import { EditWorkingCurriculum } from 'features/WorkingCurriculum/EditWorkingCurriculum/ui/EditWorkingCurriculum';
import { useNavigate } from 'react-router-dom';
import { getRouteWorkingCurriculumExtract, getRouteWorkingCurriculumTrainingSchedule } from 'shared/const/router';
import { getTableSortField, getTableSortOrderField, tableSortActions } from 'features/TableSort';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchWorkingCurriculum } from 'entities/WorkingCurriculum';
import SortIconAsc from 'shared/assets/icons/sort-asc.svg';
import SortIconDesc from 'shared/assets/icons/sort-desc.svg';
import cls from './WorkingCurriculum.module.scss';
import { WorkingCurriculumType } from '../model/types/workingCurriculum';
import {
    getWorkingCurriculumError,
    getWorkingCurriculumIsLoading,
} from '../model/selectors/getWorkingCurriculum/getWorkingCurriculum';

interface WorkingCurriculumProps {
    className?: string;
    data: WorkingCurriculumType[];
    exportDisabled: boolean;
}
export const WorkingCurriculum = (props: WorkingCurriculumProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(getWorkingCurriculumIsLoading);
    const error = useSelector(getWorkingCurriculumError);
    const [workingCurriculumDetailId, setWorkingCurriculumDetailId] = useState<string>();

    const sortByField = useSelector(getTableSortField);
    const sortOrderField = useSelector(getTableSortOrderField);

    const [deleteWorkingCurriculum, setDeleteWorkingCurriculum] = useState<WorkingCurriculumType>();
    const [visibleDeleteWorkingCurriculum, setVisibleDeleteWorkingCurriculum] = useState(false);
    const [visibleEditWorkingCurriculum, setVisibleEditWorkingCurriculum] = useState(false);

    const onShowDeleteWorkingCurriculumModal = useCallback((workingCurriculum: WorkingCurriculumType) => {
        setVisibleDeleteWorkingCurriculum(true);
        setDeleteWorkingCurriculum(workingCurriculum);
    }, []);

    const onCloseDeleteWorkingCurriculumModal = useCallback(() => {
        setVisibleDeleteWorkingCurriculum(false);
    }, []);

    const onShowEditWorkingCurriculumModal = useCallback((id: string) => {
        setWorkingCurriculumDetailId(id);
        setVisibleEditWorkingCurriculum(true);
    }, []);

    const onCloseEditWorkingCurriculumModal = useCallback(() => {
        setVisibleEditWorkingCurriculum(false);
    }, []);

    const navigateToTrainingSchedulePage = useCallback((id: string) => {
        navigate(getRouteWorkingCurriculumTrainingSchedule(id));
    }, [navigate]);

    const navigateToExtractPage = useCallback((id: string) => {
        navigate(getRouteWorkingCurriculumExtract(id));
    }, [navigate]);

    const onClickSortCell = useCallback((cellName: string) => {
        dispatch(tableSortActions.setSort(cellName));
        dispatch(fetchWorkingCurriculum());
    }, [dispatch]);

    let workingCurriculumTable;

    if (isLoading) {
        workingCurriculumTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        workingCurriculumTable = (
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
        workingCurriculumTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-working-curriculum-all"
                                />
                            )}
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                onClick={() => { onClickSortCell('working_curriculum_id'); }}
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
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'working_curriculum_id' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellCurriculaId])}
                                onClick={() => { onClickSortCell('standard_curriculum_id'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID ТУП
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'standard_curriculum_id' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellTitle])}
                                onClick={() => { onClickSortCell('title'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Название
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'title' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellIsActive])}
                                onClick={() => { onClickSortCell('is_active'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Активен
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'is_active' }, [])
                                    }
                                />
                            </Button>
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellSpecialty])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Специальность
                                </Text>
                            </div>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellEducationBase])}
                                onClick={() => { onClickSortCell('education_base_id'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    База образования
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'education_base_id' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellEduForm])}
                                onClick={() => { onClickSortCell('is_full_time_education'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Форма обучения
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'is_full_time_education' }, [])
                                    }
                                />
                            </Button>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                className={classNames(cls.tableCell, {}, [cls.tableCellAcademYear])}
                                onClick={() => { onClickSortCell('academic_year_from'); }}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Академический год
                                </Text>
                                <Icon
                                    Svg={sortOrderField === 'asc' ? SortIconAsc : SortIconDesc}
                                    className={
                                        classNames(cls.tableSortIcon, { [cls.active]: sortByField === 'academic_year_from' }, [])
                                    }
                                />
                            </Button>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((workingCurriculum) => (
                                <div className={cls.tableRow} key={workingCurriculum.working_curriculum_id}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-working-curriculum-${workingCurriculum.working_curriculum_id}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {workingCurriculum.working_curriculum_id}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellCurriculaId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {workingCurriculum.standard_curriculum_id}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellTitle])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            theme={TextTheme.BG_LIGHT}
                                        >
                                            {workingCurriculum.title}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellIsActive])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            theme={workingCurriculum.is_active ? TextTheme.BG_GREEN : TextTheme.BG_RED}
                                        >
                                            {workingCurriculum.is_active ? 'Да' : 'Нет'}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellSpecialty])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            theme={TextTheme.BG_LIGHT}
                                        >
                                            {workingCurriculum.standard_curricula.specialty.shifr_spec}
                                            {' '}
                                            -
                                            {' '}
                                            {workingCurriculum.standard_curricula.specialty.speciality}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellEducationBase])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            theme={TextTheme.BG_LIGHT}
                                        >
                                            {workingCurriculum.education_basis.short_name}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellEduForm])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            theme={
                                                workingCurriculum.is_full_time_education
                                                    ? TextTheme.BG_ORANGE : TextTheme.BG_BLUE
                                            }
                                        >
                                            {workingCurriculum.is_full_time_education ? 'Очная' : 'Заочная'}
                                        </Text>
                                    </div>
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellAcademYear])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {workingCurriculum.academic_year_from}
                                            {' '}
                                            -
                                            {' '}
                                            {workingCurriculum.academic_year_to}
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="График учебного процесса"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                navigateToTrainingSchedulePage(String(workingCurriculum.working_curriculum_id));
                                            }}
                                        >
                                            <Icon Svg={TableIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Выписка из РУП"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                navigateToExtractPage(String(workingCurriculum.working_curriculum_id));
                                            }}
                                        >
                                            <Icon Svg={FileIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowEditWorkingCurriculumModal(String(workingCurriculum.working_curriculum_id));
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteWorkingCurriculumModal(workingCurriculum); }}
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
            {workingCurriculumTable}

            <EditWorkingCurriculum
                onClose={onCloseEditWorkingCurriculumModal}
                isOpen={visibleEditWorkingCurriculum}
                workingCurriculumId={workingCurriculumDetailId!}
            />

            <DeleteWorkingCurriculum
                workingCurriculum={deleteWorkingCurriculum}
                isOpen={visibleDeleteWorkingCurriculum}
                onClose={onCloseDeleteWorkingCurriculumModal}
            />
        </div>
    );
};
