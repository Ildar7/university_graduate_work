import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { ChangeEvent } from 'react';
import { CFormInput } from '@coreui/react';
import { Text, TextWeight } from 'shared/ui/Text/Text';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';
import './StandardCurriculumGeneralInfo.scss';
import { useSelector } from 'react-redux';
import { getSpecialtiesData } from 'entities/Specialties';
import { SearchSelect } from 'shared/ui/SearchSelect/SearchSelect';
import cls from './StandardCurriculumGeneralInfo.module.scss';

interface StandardCurriculumGeneralInfoProps {
    className?: string;
    searchSelectActiveValue: string;
    onChangeSearchSelect: (value: string, columnName: string) => void;
    sortValue: string;
    onChangeSort: (event: ChangeEvent<HTMLInputElement>) => void;
    dateValue: Date | null;
    onChangeDate: (date: Date | null) => void;
}
export const StandardCurriculumGeneralInfo = (props: StandardCurriculumGeneralInfoProps) => {
    const {
        className,
        searchSelectActiveValue,
        sortValue,
        onChangeSearchSelect,
        onChangeSort,
        dateValue,
        onChangeDate,
    } = props;
    const specialities = useSelector(getSpecialtiesData);

    return (
        <div className={classNames(cls.StandardCurriculumGeneralInfo, {}, [className])}>
            <div className={cls.setting}>
                <Text
                    className={cls.title}
                    weight={TextWeight.MEDIUM}
                >
                    Специальность
                </Text>
                <SearchSelect
                    className={cls.selectField}
                    options={specialities && specialities.data.length ? specialities.data.map((speciality) => (
                        speciality.speciality
                    )) : ['']}
                    optionValue={searchSelectActiveValue}
                    onClickOption={onChangeSearchSelect}
                    columnName=""
                />
            </div>
            <div className={classNames(cls.setting, {}, [cls.settingShort])}>
                <Text
                    className={cls.title}
                    weight={TextWeight.MEDIUM}
                >
                    Индекс сортировки
                </Text>
                <CFormInput
                    type="number"
                    placeholder="100"
                    min={100}
                    step={100}
                    value={sortValue}
                    onChange={onChangeSort}
                    className={cls.sortInput}
                />
            </div>
            <div className={classNames(cls.setting, {}, [cls.settingShort])}>
                <Text
                    className={cls.title}
                    weight={TextWeight.MEDIUM}
                >
                    Дата приказа
                </Text>
                <DatePicker
                    className={cls.datepickerItem}
                    selected={dateValue}
                    onChange={onChangeDate}
                    maxDate={new Date()}
                    locale={ru}
                    dropdownMode="select"
                    dateFormat="dd.MM.yyyy"
                    showMonthDropdown
                    showYearDropdown
                    showWeekNumbers
                />
            </div>
        </div>
    );
};
