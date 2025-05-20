import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, {
    memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { useOutsideAlerter } from 'shared/lib/hooks/useOutsideDetect/useOutsideDetect';
import { importStudentsFieldSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import SearchIcon from 'shared/assets/icons/search.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import CheckIcon from 'shared/assets/icons/check.svg';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './SearchSelect.module.scss';

export enum SearchSelectTheme {
    DEFAULT = 'default',
    GRAY = 'gray',
}

interface SearchSelectProps {
    className?: string;
    activeItemClassName?: string;
    options: string[];
    optionValue: string | string[] | number[];
    onClickOption: (value: string, columnName: string) => void;
    columnName: string;
    disabled?: boolean;
    errorForm?: boolean;
    label?: string;
    searchDisabled?: boolean;
    placeholder?: string;
    multiSelect?: boolean;
    openModalText?: string;
    feedbackInvalid?: string;
    invalid?: boolean;
    onOpenModal?: () => void;
    closePrevModal?: () => void;
    theme?: SearchSelectTheme;
    disabledList?: (string | undefined)[];
}
export const SearchSelect = memo((props: SearchSelectProps) => {
    const {
        className,
        activeItemClassName,
        options,
        optionValue,
        onClickOption,
        columnName,
        disabled,
        errorForm,
        label,
        searchDisabled,
        placeholder,
        multiSelect,
        openModalText,
        feedbackInvalid,
        invalid,
        onOpenModal,
        closePrevModal,
        disabledList,
        theme = SearchSelectTheme.DEFAULT,
    } = props;
    const [listActive, setListActive] = useState(false);
    const blockRef = useRef<HTMLDivElement | null>(null);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const deafultSearchSelectActiveTitle = placeholder || 'Не выбрано';

    useOutsideAlerter(blockRef, setListActive);

    const onListHideHandler = () => {
        setListActive(false);
    };

    const onListToggleVisibilityHandler = () => {
        if (!disabled) {
            setListActive((prevState) => !prevState);
        }
    };

    const onClickItemHandler = (item: string, key: string) => {
        if (!disabled) {
            onClickOption(item, key);
            onListHideHandler();
        }
    };

    const onChangeSearchInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }, []);

    const openModalHandler = useCallback(() => {
        onOpenModal?.();
        closePrevModal?.();
    }, [closePrevModal, onOpenModal]);

    useEffect(() => {
        const filteredData = importStudentsFieldSearchFilter(searchValue, options);
        setFilteredOptions(filteredData || []);
    }, [searchValue, options]);

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    useEffect(() => {
        if (disabledList && disabledList.length) {
            const withoutDisabled = filteredOptions.filter((option) => !disabledList.includes(option));
            if (optionValue !== 'null') {
                setFilteredOptions([
                    String(optionValue),
                    ...withoutDisabled.filter((option) => option !== optionValue),
                    ...disabledList.filter((option) => option !== optionValue) as string[]]);
            } else {
                setFilteredOptions([...withoutDisabled, ...disabledList as string[]]);
            }
        } else if (disabledList && !disabledList.length) {
            if (optionValue !== 'null') {
                const withoutActive = filteredOptions.filter((option) => option !== optionValue);
                setFilteredOptions([String(optionValue), ...withoutActive]);
            }
        }
    }, [disabledList, optionValue]);

    return (
        <>
            <div
                className={classNames(
                    cls.SearchSelectWrapper,
                    { [cls.wrapperDisabled]: disabled },
                    [cls[theme], className],
                )}
                ref={blockRef}
            >
                {label && (
                    <Text
                        className={cls.label}
                        size={TextSize.XXS}
                    >
                        {label}
                    </Text>
                )}

                <div
                    className={classNames(
                        cls.searchSelectActive,
                        {
                            [cls.selectedItem]: optionValue !== 'null',
                            [cls.focused]: listActive,
                            [cls.error]: errorForm,
                            'form-select-invalid': invalid,
                        },
                        [activeItemClassName, 'form-select'],
                    )}
                    onClick={onListToggleVisibilityHandler}
                >
                    {
                        // eslint-disable-next-line no-nested-ternary
                        !multiSelect
                            ? optionValue === 'null' || !optionValue ? deafultSearchSelectActiveTitle : optionValue
                            : optionValue.length === 0 ? deafultSearchSelectActiveTitle : `Выбрано ${optionValue.length} элемента(-ов)`
                    }
                </div>

                <div
                    className={classNames(
                        cls.searchSelectList,
                        { [cls.active]: listActive },
                        ['search_select_list'],
                    )}
                >
                    <div className={cls.searchSelectListContent}>
                        {!searchDisabled && (
                            <div
                                className={classNames(
                                    cls.searchSelectItem,
                                    {},
                                    [cls.notHoverItem, cls.searchBlockItem],
                                )}
                            >
                                <Input
                                    placeholder="Введите требуемое поле"
                                    value={searchValue}
                                    onChange={onChangeSearchInput}
                                    disabled={disabled}
                                    className={cls.searchInput}
                                />

                                <Icon className={cls.asideIcon} Svg={SearchIcon} />
                            </div>
                        )}

                        {
                            openModalText && (
                                <Button
                                    theme={ButtonTheme.BACKGROUND}
                                    className={cls.openModalBtn}
                                    onClick={openModalHandler}
                                    size={ButtonSize.XS}
                                >
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                        align={TextAlign.CENTER}
                                        size={TextSize.XS}
                                    >
                                        {openModalText}
                                    </Text>
                                </Button>
                            )
                        }

                        <ul
                            className={cls.optionsItems}
                        >
                            {
                                filteredOptions && filteredOptions.length
                                    ? filteredOptions.map((option, index) => (
                                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                        <li
                                            className={cls.searchSelectItem}
                                            onClick={() => {
                                                if (disabledList?.find((item) => item === option)) {
                                                    return;
                                                }

                                                onClickItemHandler(option, columnName);
                                            }}
                                            key={option + index}
                                        >
                                            <div className={cls.selectItemTitle}>
                                                {disabledList && (
                                                    <div
                                                        className={classNames(
                                                            cls.canSelect,
                                                            {
                                                                [cls.canSelectUsing]: optionValue === option,
                                                                [cls.canSelectActive]: !disabledList?.find((item) => item === option),
                                                                [cls.canSelectDisabled]: optionValue !== option
                                                                && !!disabledList?.find((item) => item === option),
                                                            },
                                                            [],
                                                        )}
                                                    >
                                                        {optionValue !== option && disabledList?.find((item) => item === option) && (
                                                            <CloseBorderedIcon className={cls.closeIcon} />
                                                        )}
                                                    </div>
                                                )}
                                                <span>{option}</span>
                                            </div>
                                            {optionValue === option && !multiSelect && (
                                                <Icon className={cls.checkIcon} Svg={CheckIcon} />)}

                                            {multiSelect && (
                                                <Checkbox
                                                    checked={!!(optionValue as string[])
                                                        .filter((optionName) => optionName === option)[0]}
                                                />
                                            )}
                                        </li>
                                    ))
                                    : (
                                        <li
                                            className={classNames(
                                                cls.searchSelectItem,
                                                {},
                                                [cls.notHoverItem],
                                            )}
                                        >
                                            Ничего не найдено...
                                        </li>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {invalid && (
                <div className={classNames(cls.selecInvalidText, {}, ['select-invalid-feedback invalid-feedback'])}>
                    {feedbackInvalid}
                </div>
            )}
        </>
    );
});
