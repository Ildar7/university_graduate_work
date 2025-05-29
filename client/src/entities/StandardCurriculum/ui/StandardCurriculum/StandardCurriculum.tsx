import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { DeleteStandardCurriculum } from 'features/StandardCurriculum/DeleteStandardCurriculum';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { getRouteEditStandardCurriculum } from 'shared/const/router';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import EditIcon from 'shared/assets/icons/edit.svg';
import TrashIcon from 'shared/assets/icons/trash.svg';
import cls from './StandardCurriculum.module.scss';
import {
    getStandardCurriculumIsLoading,
} from '../../model/selectors/getStandardCurriculumIsLoading/getStandardCurriculumIsLoading';
import { getStandardCurriculumError } from '../../model/selectors/getStandardCurriculumError/getStandardCurriculumError';
import { StandardCurriculumType } from '../../model/types/standardCurriculum';

interface StandardCurriculumProps {
    className?: string;
    data: StandardCurriculumType[];
    exportDisabled: boolean;
}
export const StandardCurriculum = (props: StandardCurriculumProps) => {
    const {
        className,
        data,
        exportDisabled,
    } = props;
    const navigate = useNavigate();
    const isLoading = useSelector(getStandardCurriculumIsLoading);
    const error = useSelector(getStandardCurriculumError);

    const [deleteStandardCurriculum, setDeleteStandardCurriculum] = useState<StandardCurriculumType>();
    const [visibleDeleteStandardCurriculum, setVisibleDeleteStandardCurriculum] = useState(false);

    const onShowDeleteStandardCurriculumModal = useCallback((standardCurriculum: StandardCurriculumType) => {
        setVisibleDeleteStandardCurriculum(true);
        setDeleteStandardCurriculum(standardCurriculum);
    }, []);

    const onEditHandler = useCallback((itemId: number) => {
        navigate(getRouteEditStandardCurriculum(String(itemId)));
    }, [navigate]);

    let standardCurriculumTable;

    if (isLoading) {
        standardCurriculumTable = (
            <Skeleton height={250} />
        );
    } else if (error) {
        standardCurriculumTable = (
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
        standardCurriculumTable = (
            !data.length ? (
                <Text>Ничего не найдено...</Text>
            ) : (
                <div className={classNames(cls.table, { [cls.tableWithCheckboxes]: !exportDisabled }, [])}>
                    <div className={cls.tableHead}>
                        <div className={cls.tableRow}>
                            {!exportDisabled && (
                                <Checkbox
                                    className={cls.checkbox}
                                    id="checkbox-standard-curriculum-all"
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
                                    Специальность
                                </Text>
                            </div>
                            <div
                                className={cls.tableCell}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Сортировка
                                </Text>
                            </div>
                            <div
                                className={cls.tableCell}
                            >
                                <Text
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Дата приказа
                                </Text>
                            </div>
                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtnsWrapper])} />
                        </div>
                    </div>
                    <div className={cls.tableBody}>
                        {
                            data?.map((standardCurriculum) => (
                                <div className={cls.tableRow} key={standardCurriculum.standard_curriculum_id}>
                                    {!exportDisabled && (
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-standard-curriculum-${standardCurriculum.standard_curriculum_id}`}
                                        />
                                    )}
                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellId])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {standardCurriculum.standard_curriculum_id}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {standardCurriculum.specialty.shifr_spec}
                                            {' '}
                                            -
                                            {' '}
                                            {standardCurriculum.specialty.speciality}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {standardCurriculum.sort}
                                        </Text>
                                    </div>
                                    <div className={cls.tableCell}>
                                        <Text
                                            size={TextSize.XS}
                                        >
                                            {
                                                standardCurriculum.date_of_order
                                                    ? format(new Date(standardCurriculum.date_of_order), 'dd.MM.yyyy')
                                                    : ''
                                            }
                                        </Text>
                                    </div>

                                    <div
                                        className={classNames(cls.tableCell, {}, [cls.tableCellBtns])}
                                    >
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            title="Удалить"
                                            className={cls.editBtn}
                                            onClick={() => { onShowDeleteStandardCurriculumModal(standardCurriculum); }}
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
            {standardCurriculumTable}

            <DeleteStandardCurriculum
                standardCurriculum={deleteStandardCurriculum}
                visible={visibleDeleteStandardCurriculum}
                setVisible={setVisibleDeleteStandardCurriculum}
            />
        </div>
    );
};
