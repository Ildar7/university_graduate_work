import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import { useSelector } from 'react-redux';
import { getStudentGroupsData } from 'entities/StudentGroups';
import { StudentsType } from 'entities/Students';
import { $api } from 'shared/api/api';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Search } from 'widgets/Search';
import { studentSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { studentsInGroupsActions } from 'entities/StudentsInGroups';
import cls from './StudentsInGroupsToColumn.module.scss';

interface Props {
    className?: string;
    value: string;
    onChangeValue: (value: string) => void;
    fromGroupCode?: string;
    studentsData: StudentsType[];
    setStudentsData: (students: StudentsType[]) => void;
}

export const StudentsInGroupsToColumn = memo((props: Props) => {
    const {
        className,
        value,
        onChangeValue,
        fromGroupCode,
        studentsData,
        setStudentsData,
    } = props;
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchedData, setSearchedData] = useState<StudentsType[]>([]);
    const dispatch = useAppDispatch();

    const studentGroups = useSelector(getStudentGroupsData);
    const studentGroupsCodes = useSelector(getStudentGroupsData)?.map((group) => (
        group.code
    ));

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onCheckboxChange = useCallback((checked: boolean, studentId: number) => {
        const needStudent = searchedData?.filter((student) => student.students_id === studentId)[0];
        if (!needStudent) return;

        needStudent.checked = checked;

        setSearchedData(
            [
                ...searchedData?.filter((student) => student.students_id !== studentId) || [],
                needStudent,
            ].sort((a, b) => (
                Number(b.checked) - Number(a.checked) || a.students_id - b.students_id
            )),
        );
    }, [searchedData]);

    const fetchFilteredGroups = async () => {
        setIsLoading(true);
        const groupIdFilter = {
            id_group: value.toLowerCase() === 'без группы'
                ? null
                : studentGroups?.filter((group) => (
                    group.code.toLowerCase() === value.toLowerCase()
                ))[0].id_group,
        };

        const filter = encodeURIComponent(JSON.stringify(groupIdFilter));

        try {
            const res = await $api.get(`/college/students?filter=${filter}`);
            setStudentsData((res.data.data as StudentsType[]).map((student) => (
                {
                    ...student,
                    fio: `${student.user.last_name} ${student.user.first_name} ${student.user.patronymic || ''}`,
                    checked: false,
                }
            )));
            dispatch(studentsInGroupsActions.setDataTo((res.data.data as StudentsType[]).map((student) => (
                {
                    ...student,
                    fio: `${student.user.last_name} ${student.user.first_name} ${student.user.patronymic || ''}`,
                    checked: false,
                }
            ))));
            setIsLoading(false);
        } catch (err) {
            setError(err as any);
        }
    };

    useEffect(() => {
        fetchFilteredGroups();

        // eslint-disable-next-line
    }, [studentGroups, value]);

    useEffect(() => {
        const filteredData = studentSearchFilter(searchValue, studentsData || [])
            .sort((a, b) => (
                Number(b.checked) - Number(a.checked) || a.students_id - b.students_id
            ));
        setSearchedData(filteredData || []);
    }, [searchValue, studentsData]);

    let content;

    if (isLoading) {
        content = (
            <Skeleton height={400} width="100%" />
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.XS}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <>
                <Search
                    value={searchValue}
                    onChange={onSearch}
                    searchText="Поиск по ФИО"
                    error={error}
                    isLoading={isLoading}
                    className={cls.search}
                />
                <div className={cls.studentsList}>
                    {searchedData && searchedData.length
                        ? searchedData.map((student, i) => (
                            <div
                                key={student.students_id}
                                className={cls.studentRow}
                            >
                                <Checkbox
                                    id={`students-in-groups-to-${student.students_id}`}
                                    checked={student.checked}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        onCheckboxChange(e.target.checked, student.students_id);
                                    }}
                                    label={student.fio}
                                    labelClassName={cls.studentLabel}
                                    index={i + 1}
                                />
                            </div>
                        ))
                        : 'Ничего не найдено...'}
                </div>
            </>
        );
    }

    return (
        <div className={classNames(cls.StudentsInGroupsFromColumn, {}, [className])}>
            <div className={cls.selectGroup}>
                <SearchSelect
                    options={[
                        ...studentGroupsCodes?.filter((groupCode) => (
                            fromGroupCode !== groupCode
                        )) || [],
                    ]}
                    optionValue={value}
                    onClickOption={onChangeValue}
                    label="Выбрать группу"
                    columnName=""
                />
            </div>

            <div className={cls.students}>
                {content}
            </div>
        </div>
    );
});
