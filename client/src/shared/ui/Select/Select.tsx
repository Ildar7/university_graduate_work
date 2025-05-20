import {
    memo, useCallback, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextWeight } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ArrowDownIcon from 'shared/assets/icons/arrow-down.svg';
import CloseIcon from 'shared/assets/icons/close.svg';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useOutsideAlerter } from 'shared/lib/hooks/useOutsideDetect/useOutsideDetect';
import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
    items: string[];
    value: string;
    onChange: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        items,
        value,
        onChange,
    } = props;
    const [selectedItem, setSelectedItem] = useState(value);
    const [itemsListVisible, setItemsListVisible] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    useOutsideAlerter(selectRef, setItemsListVisible);

    const showItemsList = useCallback(() => {
        setItemsListVisible(true);
    }, []);

    const hideItemsList = useCallback(() => {
        setItemsListVisible(false);
    }, []);

    const selectItemHandler = useCallback((item: string) => {
        onChange(item);
        setSelectedItem(item);
        hideItemsList();
    }, [hideItemsList, onChange]);

    return (
        <div
            className={classNames(cls.Select, {}, [className])}
            ref={selectRef}
        >
            {!itemsListVisible && (
                <Button
                    className={cls.selectedItem}
                    theme={ButtonTheme.CLEAR}
                    onClick={showItemsList}
                >
                    <Text
                        weight={TextWeight.SEMIBOLD}
                        className={cls.title}
                    >
                        {selectedItem}
                    </Text>
                    <Icon
                        Svg={ArrowDownIcon}
                    />
                </Button>
            )}

            <div
                className={
                    classNames(
                        cls.itemsList,
                        { [cls.visible]: itemsListVisible },
                        [],
                    )
                }
                style={{ top: `${items.indexOf(selectedItem) * (-40)}px` }}
            >
                {
                    items.map((item) => (
                        selectedItem === item
                            ? (
                                <div
                                    className={classNames(cls.item, {}, [cls.selected])}
                                    key={item}
                                >
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                        className={cls.title}
                                    >
                                        {item}
                                    </Text>

                                    <Button
                                        theme={ButtonTheme.CLEAR}
                                        className={cls.closeBtn}
                                        onClick={hideItemsList}
                                    >
                                        <Icon Svg={CloseIcon} />
                                    </Button>
                                </div>
                            )
                            : (
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    className={cls.item}
                                    size={ButtonSize.XS}
                                    onClick={() => { selectItemHandler(item); }}
                                    key={item}
                                >
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                        className={cls.title}
                                    >
                                        {item}
                                    </Text>
                                </Button>
                            )
                    ))
                }
            </div>
        </div>
    );
});
