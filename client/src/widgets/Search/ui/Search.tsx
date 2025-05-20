import { cilX } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { StudentsError } from 'entities/Students';
import { EnrollmentTypesError } from 'entities/EnrollmentTypes';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import SearchIcon from 'shared/assets/icons/search.svg';
import cls from './Search.module.scss';

interface SearchProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    searchText: string;
    error?: StudentsError | EnrollmentTypesError | boolean;
    isLoading?: boolean;
}
export const Search = memo((props: SearchProps) => {
    const {
        className,
        value,
        onChange,
        searchText,
        error,
        isLoading,
    } = props;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onClearHandler = () => {
        onChange?.('');
    };

    let search;

    if (error) {
        search = (
            <div />
        );
    } else {
        search = (
            <div className={classNames(cls.Search, {}, [className, 'flex-nowrap'])}>
                <Input
                    placeholder={searchText}
                    aria-label={searchText}
                    aria-describedby="addon-wrapping"
                    value={value}
                    onChange={onChangeHandler}
                    disabled={isLoading}
                    className={cls.searchInput}
                />
                {value && (
                    <Button
                        className={classNames(cls.asideIcon, {}, [cls.searchCloseBtn])}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClearHandler}
                    >
                        <CIcon icon={cilX} className="close-icon" />
                    </Button>
                )}
                {!value && (
                    <Icon className={cls.asideIcon} Svg={SearchIcon} />
                )}
            </div>
        );
    }

    return search;
});
