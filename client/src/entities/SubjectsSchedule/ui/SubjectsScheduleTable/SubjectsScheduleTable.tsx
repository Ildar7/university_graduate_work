import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import {
    CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem,
} from '@coreui/react';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import ListIcon from 'shared/assets/icons/list.svg';
import { useSelector } from 'react-redux';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { useNavigate } from 'react-router-dom';
import { getRouteSubjectsScheduleDetail, getRouteSubjectsScheduleWorkload } from 'shared/const/router';
import { Icon, IconNames } from 'shared/ui/Icon/Icon';
import cls from './SubjectsScheduleTable.module.scss';
import { getSubjectsScheduleData } from '../../model/selectors/getSubjectsSchedule/getSubjectsSchedule';

interface SubjectsScheduleTableProps {
    className?: string;
}

export const SubjectsScheduleTable = memo((props: SubjectsScheduleTableProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();
    const subjectScheduleData = useSelector(getSubjectsScheduleData);

    const navigateToDetailPage = (year: string, week: string) => {
        navigate(getRouteSubjectsScheduleDetail(year, week));
    };

    const navigateToWorkloadPage = (year: string, week: string) => {
        navigate(getRouteSubjectsScheduleWorkload(year, week));
    };

    return (
        <div className={classNames(cls.SubjectsScheduleTable, {}, [className, 'accordion-custom', 'accordion-custom-subjects-schedule'])}>
            <div className={cls.tableHeaderWrapper}>
                <Checkbox
                    className={cls.checkboxHeader}
                    id="checkbox-subject-schedule-month-"
                />
                <div className={classNames(cls.tableRow, {}, [cls.tableHeader])}>
                    <div className={classNames(cls.tableCell, {}, [cls.tableCellHeader, cls.tableCellMonth])}>
                        <Text
                            size={TextSize.M}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Месяц
                        </Text>
                    </div>
                    <div className={classNames(cls.tableCell, {}, [cls.tableCellHeader, cls.tableCellWeek])}>
                        <Text
                            size={TextSize.M}
                            weight={TextWeight.SEMIBOLD}
                            align={TextAlign.CENTER}
                        >
                            Учебная неделя
                        </Text>
                    </div>
                    <div
                        className={classNames(cls.tableCell, {}, [cls.tableCellHeader, cls.tableCellFullnessWeek])}
                    >
                        <Text
                            size={TextSize.M}
                            weight={TextWeight.SEMIBOLD}
                            align={TextAlign.CENTER}
                        >
                            Заполненность недели
                        </Text>
                    </div>
                    <div
                        className={classNames(cls.tableCell, {}, [cls.tableCellHeader, cls.tableCellFullnessMonth])}
                    >
                        <Text
                            size={TextSize.M}
                            weight={TextWeight.SEMIBOLD}
                            align={TextAlign.CENTER}
                        >
                            Заполненность месяца
                        </Text>
                    </div>
                    <div className={classNames(cls.tableCell, {}, [cls.tableCellHeader, cls.tableCellBtn])} />
                </div>
            </div>
            <div className={classNames(cls.tableBody, {}, [])}>
                {subjectScheduleData?.map((month) => (
                    <div
                        key={month.monthNum}
                        className={cls.accordionWrapper}
                    >
                        <Checkbox
                            className={cls.checkbox}
                            id={`checkbox-subject-schedule-month-${month.monthNum}`}
                        />
                        <CAccordion
                            className={classNames(cls.accordion, {}, [cls.tableRow, cls.tableBodyItem])}
                        >
                            <CAccordionItem
                                className={classNames(cls.accordionItem, {}, [])}
                            >
                                <CAccordionHeader
                                    className={classNames(cls.accordionHeader, {}, [])}
                                >
                                    <div className={classNames(cls.tableCell, {}, [cls.tableCellMonth])}>
                                        <Text
                                            size={TextSize.L}
                                            className={cls.accordionTitle}
                                        >
                                            {month.nameRu}
                                        </Text>
                                        {month.isNow && (
                                            <Text
                                                size={TextSize.L}
                                                weight={TextWeight.EXTRABOLD}
                                                theme={TextTheme.LIGHT}
                                            >
                                                Сейчас
                                            </Text>
                                        )}
                                    </div>
                                    <div className={classNames(cls.tableCell, {}, [cls.tableCellWeek])} />
                                    <div className={classNames(cls.tableCell, {}, [cls.tableCellFullnessWeek])} />
                                    <div className={classNames(cls.tableCell, {}, [cls.tableCellFullnessMonth])}>
                                        <div className={cls.fullnessMonthItems}>
                                            {[...new Array(month.progress.max)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={classNames(
                                                        cls.fullnessMonthItem,
                                                        { [cls.fullnessMonthItemActive]: i + 1 <= month.progress.current },
                                                        [],
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className={classNames(cls.tableCell, {}, [cls.tableCellBtn])} />
                                </CAccordionHeader>
                                {month.weeks.map((week) => (
                                    <CAccordionBody
                                        key={week.weekNum}
                                        className={classNames(cls.accordionBody, {}, [])}
                                    >
                                        <Checkbox
                                            className={cls.checkbox}
                                            id={`checkbox-subject-schedule-month-${month.monthNum}-week-${week.weekNum}`}
                                        />
                                        <div
                                            className={
                                                classNames(
                                                    cls.accordionHeader,
                                                    {},
                                                    [cls.accordionHeaderInner],
                                                )
                                            }
                                        >
                                            <div className={classNames(cls.tableCell, {}, [cls.tableCellMonth])}>
                                                <Text
                                                    size={TextSize.L}
                                                    weight={TextWeight.REGULAR}
                                                >
                                                    Неделя
                                                    {' '}
                                                    {week.weekNum}
                                                </Text>
                                                {week.isNow && (
                                                    <Text
                                                        size={TextSize.L}
                                                        weight={TextWeight.EXTRABOLD}
                                                        theme={TextTheme.LIGHT}
                                                    >
                                                        Сейчас
                                                    </Text>
                                                )}
                                            </div>
                                            <div className={classNames(cls.tableCell, {}, [cls.tableCellWeek])}>
                                                <Text
                                                    size={TextSize.L}
                                                    weight={TextWeight.REGULAR}
                                                    align={TextAlign.CENTER}
                                                >
                                                    {week.weekAcademicNum}
                                                </Text>
                                            </div>
                                            <div className={classNames(cls.tableCell, {}, [cls.tableCellFullnessWeek])}>
                                                <div className={cls.weekBar}>
                                                    <Text
                                                        weight={TextWeight.SEMIBOLD}
                                                        className={cls.weekBarText}
                                                    >
                                                        {week.progress.current}
                                                        /
                                                        {week.progress.max}
                                                    </Text>
                                                    <span
                                                        className={cls.weekBarProgress}
                                                        style={{ width: `${(week.progress.current / week.progress.max) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div className={classNames(cls.tableCell, {}, [cls.tableCellFullnessMonth])} />
                                            <div className={classNames(cls.tableCell, {}, [cls.tableCellBtn])}>
                                                <div className={cls.btns}>
                                                    <Button
                                                        theme={ButtonTheme.CLEAR}
                                                        className={cls.listBtn}
                                                        title="Расписание на неделю"
                                                        onClick={() => { navigateToDetailPage(String(week.year), String(week.weekAcademicNum)); }}
                                                    >
                                                        <ListIcon />
                                                    </Button>
                                                    <Button
                                                        theme={ButtonTheme.CLEAR}
                                                        className={cls.workloadBtn}
                                                        title="Учебная нагрузка"
                                                        onClick={() => { navigateToWorkloadPage(String(week.year), String(week.weekAcademicNum)); }}
                                                    >
                                                        <Icon name={IconNames.BAR_CHART} className={cls.barChartIcon} />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CAccordionBody>
                                ))}
                            </CAccordionItem>
                        </CAccordion>
                    </div>
                ))}
            </div>
        </div>
    );
});
