import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { DeleteCurriculumSubject } from 'features/CurriculumSubjects/DeleteCurriculumSubject';
import { EditCurriculumSubject } from 'features/CurriculumSubjects/EditCurriculumSubject';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import { CurriculumSubjectsType } from '../model/types/curriculumSubjects';
import { getCurriculumSubjectsError } from '../model/selectors/getCurriculumSubjectsError/getCurriculumSubjectsError';
import {
    getCurriculumSubjectsIsLoading,
} from '../model/selectors/getCurriculumSubjectsIsLoading/getCurriculumSubjectsIsLoading';
import cls from './CurriculumSubjects.module.scss';

interface CurriculumSubjectsProps {
    className?: string;
    data: CurriculumSubjectsType[];
    exportDisabled: boolean;
}
export const CurriculumSubjects = (props: CurriculumSubjectsProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const isLoading = useSelector(getCurriculumSubjectsIsLoading);
    const error = useSelector(getCurriculumSubjectsError);

    const [deleteCurriculumSubjects, setDeleteCurriculumSubjects] = useState<CurriculumSubjectsType>();
    const [visibleEditCurriculumSubjects, setVisibleEditCurriculumSubjects] = useState(false);
    const [visibleDeleteCurriculumSubjects, setVisibleDeleteCurriculumSubjects] = useState(false);
    const [curriculumSubjectsDetailId, setCurriculumSubjectsDetailId] = useState<string>();

    const onShowEditCurriculumSubjectsModal = (id: string) => {
        setVisibleEditCurriculumSubjects(true);
        setCurriculumSubjectsDetailId(id);
    };

    const onShowDeleteCurriculumSubjectsModal = useCallback((curriculumSubjects: CurriculumSubjectsType) => {
        setVisibleDeleteCurriculumSubjects(true);
        setDeleteCurriculumSubjects(curriculumSubjects);
    }, []);

    let curriculumSubjectsTable;

    if (isLoading) {
        curriculumSubjectsTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        curriculumSubjectsTable = (
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
        curriculumSubjectsTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-curriculum-subjects-all"
                                />
                            )}
                            <div
                                className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    ID
                                </Text>
                            </div>
                            <div
                                className={cls.tableCell}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Название
                                </Text>
                            </div>
                            <div
                                className={cls.tableCell}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Модуль
                                </Text>
                            </div>
                            <div
                                className={cls.tableCell}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Модульная единица
                                </Text>
                            </div>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((curriculumSubjects) => (
                                <div className={cls.tableRow} key={curriculumSubjects.subject_id}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-curriculum-subjects-${curriculumSubjects.subject_id}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {curriculumSubjects.subject_id}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {curriculumSubjects.name}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {curriculumSubjects.educational_module.name}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {
                                                curriculumSubjects.educational_modules_unit
                                                    ? curriculumSubjects.educational_modules_unit.name
                                                    : 'Нет'
                                            }
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Редактировать"
                                            className={cls.editBtn}
                                            onClick={() => {
                                                onShowEditCurriculumSubjectsModal(curriculumSubjects.subject_id.toString());
                                            }}
                                        >
                                            <Icon Svg={EditIcon} />
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteCurriculumSubjectsModal(curriculumSubjects); }}
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
            {curriculumSubjectsTable}

            <EditCurriculumSubject
                visible={visibleEditCurriculumSubjects}
                setVisible={setVisibleEditCurriculumSubjects}
                curriculumSubjectsId={curriculumSubjectsDetailId!}
                onDeleteCurriculumSubjects={onShowDeleteCurriculumSubjectsModal}
            />

            <DeleteCurriculumSubject
                curriculumSubjects={deleteCurriculumSubjects}
                visible={visibleDeleteCurriculumSubjects}
                setVisible={setVisibleDeleteCurriculumSubjects}
            />
        </div>
    );
};
