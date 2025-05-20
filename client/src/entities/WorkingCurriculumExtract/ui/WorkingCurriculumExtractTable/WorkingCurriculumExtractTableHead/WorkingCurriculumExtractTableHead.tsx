import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { ReactNode, useEffect, useState } from 'react';
import { TableCell, TableRow } from 'shared/ui/Table';
import { TableCellRotate } from 'shared/ui/Table/TableCell/TableCell';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import cls from './WorkingCurriculumExtractTableHead.module.scss';
import {
    getWorkingCurriculumExtractData,
} from '../../../model/selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';

interface WorkingCurriculumExtractTableHeadProps {
    className?: string;
}

interface TableExtractTreeCells {
    className: string;
    content: string | ReactNode;
}
interface TableExtractTreeBlockInfo {
    blockClassName: string[];
    cells: TableExtractTreeCells[];
}

export const WorkingCurriculumExtractTableHead = (props: WorkingCurriculumExtractTableHeadProps) => {
    const {
        className,
    } = props;
    const extractData = useSelector(getWorkingCurriculumExtractData);
    const [tableHeadTree, setTableHeadTree] = useState<TableExtractTreeBlockInfo[]>([
        {
            blockClassName: [''],
            cells: [
                {
                    className: 'indexCell',
                    content: '1',
                },
            ],
        },
        {
            blockClassName: [''],
            cells: [
                {
                    className: 'idCell',
                    content: '2',
                },
            ],
        },
        {
            blockClassName: [''],
            cells: [
                {
                    className: 'disciplinesNameCell',
                    content: '3',
                },
            ],
        },
        {
            blockClassName: [''],
            cells: [
                {
                    className: 'sortCell',
                    content: '4',
                },
            ],
        },
        {
            blockClassName: ['formControlCell', 'flex-row'],
            cells: [
                {
                    className: 'formControlExamCell',
                    content: '5',
                },
                {
                    className: 'formControlEasyExamCell',
                    content: '6',
                },
                {
                    className: 'formControlControlWorksCell',
                    content: '7',
                },
                {
                    className: 'formControlCourseWorksCell',
                    content: '8',
                },
            ],
        },
        {
            blockClassName: ['amountOfStudyTimeCell', 'flex-row'],
            cells: [
                {
                    className: 'amountOfStudyTimeCredits',
                    content: '9',
                },
                {
                    className: 'amountOfStudyTimeHours',
                    content: '10',
                },
                {
                    className: 'amountOfStudyTimeTheory',
                    content: '11',
                },
                {
                    className: 'amountOfStudyTimeLabs',
                    content: '12',
                },
                {
                    className: 'amountOfStudyTimeCourseProject',
                    content: '13',
                },
                {
                    className: 'amountOfStudyTimePractice',
                    content: '14',
                },
            ],
        },
        {
            blockClassName: ['distributionCell', 'flex-row'],
            cells: [],
        },
    ]);

    useEffect(() => {
        if (extractData) {
            const distributionBlockItem = { ...tableHeadTree[tableHeadTree.length - 1] };
            const filteredTree = [...tableHeadTree].slice(0, tableHeadTree.length - 1);

            for (let i = 0; i < extractData.meta.semestersCount; i++) {
                distributionBlockItem.cells.push({
                    className: '',
                    content: String(i + 15),
                });
            }

            setTableHeadTree([
                ...filteredTree,
                distributionBlockItem,
            ]);
        }
        // eslint-disable-next-line
    }, [extractData]);

    return (
        <TableRow
            className={classNames(cls.WorkingCurriculumExtractTableHead, {}, [className, 'workingCurriculumExtractTableHead'])}
        >
            <TableCell className="indexCell" rotate={TableCellRotate.ROTATED}>
                <Text
                    align={TextAlign.CENTER}
                    size={TextSize.S}
                    weight={TextWeight.SEMIBOLD}
                >
                    Индекс
                </Text>
            </TableCell>
            <TableCell className="idCell">
                <Text
                    align={TextAlign.CENTER}
                    size={TextSize.S}
                    weight={TextWeight.SEMIBOLD}
                >
                    ID
                </Text>
            </TableCell>
            <TableCell className="disciplinesNameCell">
                <Text
                    align={TextAlign.CENTER}
                    size={TextSize.S}
                    weight={TextWeight.SEMIBOLD}
                >
                    Наименование модулей и видов учебной деятельности
                </Text>
            </TableCell>
            <TableCell className="sortCell" rotate={TableCellRotate.ROTATED}>
                <Text
                    align={TextAlign.CENTER}
                    size={TextSize.S}
                    weight={TextWeight.SEMIBOLD}
                >
                    Сортировка
                </Text>
            </TableCell>
            <TableCell className="formControlCell">
                <TableCell className={classNames(cls.formControlNames, {}, [cls.cellMainTitle])}>
                    <Text
                        align={TextAlign.CENTER}
                        size={TextSize.S}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Форма контроля
                    </Text>
                </TableCell>
                <div className={cls.formControlNames}>
                    <TableCell
                        rotate={TableCellRotate.ROTATED}
                        className="formControlExamCell"
                    >
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Экзамен
                        </Text>
                    </TableCell>
                    <TableCell
                        rotate={TableCellRotate.ROTATED}
                        className="formControlEasyExamCell"
                    >
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Зачет
                        </Text>
                    </TableCell>
                    <TableCell
                        rotate={TableCellRotate.ROTATED}
                        className="formControlControlWorksCell"
                    >
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Кол-во контрольных работ
                        </Text>
                    </TableCell>
                    <TableCell
                        rotate={TableCellRotate.ROTATED}
                        className="formControlCourseWorksCell"
                    >
                        <Text
                            align={TextAlign.CENTER}
                            size={TextSize.XS}
                            weight={TextWeight.SEMIBOLD}
                        >
                            Кол-во курсовых работ
                        </Text>
                    </TableCell>
                </div>
            </TableCell>
            <TableCell className="amountOfStudyTimeCell">
                <TableCell className={cls.cellMainTitle}>
                    <Text
                        align={TextAlign.CENTER}
                        size={TextSize.S}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Объем учебного времени
                    </Text>
                </TableCell>
                <div className={cls.amountOfStudyTimeNames}>
                    <div className={cls.amountOfStudyTimeNamesLeft}>
                        <TableCell
                            rotate={TableCellRotate.ROTATED}
                            className="amountOfStudyTimeCredits"
                        >
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Кредиты
                            </Text>
                        </TableCell>
                        <TableCell
                            rotate={TableCellRotate.ROTATED}
                            className="amountOfStudyTimeHours"
                        >
                            <Text
                                align={TextAlign.CENTER}
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Всего часов
                            </Text>
                        </TableCell>
                    </div>
                    <div className={cls.amountOfStudyTimeNamesRight}>
                        <TableCell>
                            <Text
                                align={TextAlign.CENTER}
                                weight={TextWeight.SEMIBOLD}
                                className={cls.amountOfStudyTimeNamesRightTitle}
                            >
                                в том числе
                            </Text>
                        </TableCell>
                        <div className={cls.amountOfStudyTimeNamesRightNames}>
                            <TableCell
                                rotate={TableCellRotate.ROTATED}
                                className="amountOfStudyTimeTheory"
                            >
                                <Text
                                    align={TextAlign.CENTER}
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Теоретические
                                </Text>
                            </TableCell>
                            <TableCell
                                rotate={TableCellRotate.ROTATED}
                                className="amountOfStudyTimeLabs"
                            >
                                <Text
                                    align={TextAlign.CENTER}
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Лабораторно-практические
                                </Text>
                            </TableCell>
                            <TableCell
                                rotate={TableCellRotate.ROTATED}
                                className="amountOfStudyTimeCourseProject"
                            >
                                <Text
                                    align={TextAlign.CENTER}
                                    size={TextSize.XS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Курсовой проект
                                </Text>
                            </TableCell>
                            <TableCell
                                rotate={TableCellRotate.ROTATED}
                                className="amountOfStudyTimePractice"
                            >
                                <Text
                                    align={TextAlign.CENTER}
                                    size={TextSize.XXS}
                                    weight={TextWeight.SEMIBOLD}
                                >
                                    Произв. обучение и/или профессиональная практика
                                </Text>
                            </TableCell>
                        </div>
                    </div>
                </div>
            </TableCell>
            <TableCell className="distributionCell">
                <TableCell className={cls.cellMainTitle}>
                    <Text
                        align={TextAlign.CENTER}
                        size={TextSize.S}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Распределение по курсам и семестрам
                    </Text>
                </TableCell>
                <div className={cls.distributionCourses}>
                    {
                        [...new Array(extractData?.meta.coursesCount)].map((_, index) => (
                            <div
                                className={cls.distributionCourse}
                                key={index}
                            >
                                <TableCell className={cls.distributionCourseName}>
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                        className={cls.courseTitle}
                                    >
                                        {index + 1}
                                    </Text>
                                </TableCell>
                                <div className={cls.distributionSemesters}>
                                    <TableCell>
                                        <Text
                                            weight={TextWeight.SEMIBOLD}
                                            align={TextAlign.CENTER}
                                            className={cls.semesterTitle}
                                        >
                                            {(index + 1) * 2 - 1}
                                            {' '}
                                            сем.
                                        </Text>
                                    </TableCell>
                                    <TableCell>
                                        <Text
                                            weight={TextWeight.SEMIBOLD}
                                            align={TextAlign.CENTER}
                                            className={cls.semesterTitle}
                                        >
                                            {(index + 1) * 2}
                                            {' '}
                                            сем.
                                        </Text>
                                    </TableCell>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={cls.distributionWeeksWrapper}>
                    <TableCell className={cls.distributionWeeksName}>
                        <Text
                            weight={TextWeight.SEMIBOLD}
                            align={TextAlign.CENTER}
                        >
                            Недель
                        </Text>
                    </TableCell>
                    <div className={cls.distributionWeeks}>
                        {
                            [...new Array(extractData?.meta.semestersCount)].map((_, index) => (
                                <TableCell
                                    key={index}
                                    className="distributionWeek"
                                >
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                        className={cls.weekTitle}
                                    >
                                        18
                                    </Text>
                                </TableCell>
                            ))
                        }
                    </div>
                </div>
            </TableCell>
        </TableRow>
    );
};
