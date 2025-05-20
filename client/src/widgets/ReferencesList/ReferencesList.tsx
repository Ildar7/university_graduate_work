import {
    memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ArrowDown from 'shared/assets/icons/arrow-down.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useOutsideAlerter } from 'shared/lib/hooks/useOutsideDetect/useOutsideDetect';
import { useLocation } from 'react-router-dom';
import cls from './ReferencesList.module.scss';

export enum ReferencesListBorder {
    FULL = 'full',
    PARTIAL = 'partial',
}
interface ReferencesListItems {
    id: number;
    name: string;
    pathname?: string;
    items: ReferencesListItems[] | null;
    active: boolean;
}

interface ReferencesListProps {
    className?: string;
    title: string;
    items: ReferencesListItems[];
    border?: ReferencesListBorder;
}

export const ReferencesList = memo((props: ReferencesListProps) => {
    const {
        className,
        title,
        items,
        border = ReferencesListBorder.PARTIAL,
    } = props;
    const selectRef = useRef<HTMLDivElement | null>(null);
    const [visibleItems, setVisibleItems] = useState(false);
    const [secondLevelListActiveId, setSecondLevelListActiveId] = useState(0);
    const { pathname } = useLocation();

    useOutsideAlerter(selectRef, setVisibleItems);

    const onToggleVisibleItems = useCallback(() => {
        setVisibleItems((prevState) => !prevState);
    }, []);

    const changeSecondLevelListActiveId = useCallback((id: number) => {
        if (secondLevelListActiveId === id) {
            setSecondLevelListActiveId(0);
        } else {
            setSecondLevelListActiveId(id);
        }
    }, [secondLevelListActiveId]);

    useEffect(() => {
        if (!visibleItems) {
            setSecondLevelListActiveId(0);
        }
    }, [visibleItems]);

    return (
        <div
            className={classNames(cls.ReferencesList, {
                [cls.selectVisible]: visibleItems,
                [cls.secondListVisible]: secondLevelListActiveId !== 0,
            }, [className, cls[border]])}
            ref={selectRef}
        >
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.titleWrapper}
                onClick={onToggleVisibleItems}
            >
                <Text
                    size={TextSize.XS}
                    weight={TextWeight.SEMIBOLD}
                    className={cls.title}
                >
                    {title}
                </Text>
                <Icon className={classNames('', { [cls.arrowUp]: visibleItems }, [])} Svg={ArrowDown} />
            </Button>

            <div
                className={classNames(cls.selectItems, { [cls.visibleItems]: visibleItems }, [])}
            >
                {items?.map((item) => (
                    item.items || !item.pathname
                        ? (
                            <div
                                key={item.id}
                                className={cls.listWrapper}
                            >
                                <Button
                                    theme={ButtonTheme.CLEAR}
                                    className={cls.selectItem}
                                    onClick={() => { changeSecondLevelListActiveId(item.id); }}
                                >
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                        className={cls.title}
                                    >
                                        {item.name}
                                    </Text>
                                    <Icon
                                        className={classNames(
                                            '',
                                            {
                                                [cls.arrowRight]: secondLevelListActiveId !== item.id,
                                                [cls.arrowLeft]: secondLevelListActiveId === item.id,
                                            },
                                            [],
                                        )}
                                        Svg={ArrowDown}
                                    />
                                </Button>
                                <div className={classNames(
                                    cls.selectItems,
                                    {
                                        [cls.secondLevelListActive]: secondLevelListActiveId === item.id,
                                    },
                                    [cls.secondLevelList],
                                )}
                                >
                                    {
                                        item.items?.map((subItem) => (
                                            subItem.pathname === pathname
                                                ? (
                                                    <div
                                                        key={subItem.id}
                                                        className={classNames(cls.selectItem, {}, [cls.selectItemActive])}
                                                    >
                                                        <Text
                                                            size={TextSize.XS}
                                                            weight={TextWeight.SEMIBOLD}
                                                            className={cls.title}
                                                        >
                                                            {subItem.name}
                                                        </Text>
                                                    </div>
                                                )
                                                : (
                                                    <AppLink
                                                        key={subItem.id}
                                                        className={cls.selectItem}
                                                        to={subItem.pathname!}
                                                    >
                                                        <Text
                                                            size={TextSize.XS}
                                                            weight={TextWeight.SEMIBOLD}
                                                            className={cls.title}
                                                        >
                                                            {subItem.name}
                                                        </Text>
                                                    </AppLink>
                                                )
                                        ))
                                    }
                                </div>
                            </div>
                        )
                        : (
                            item.pathname === pathname
                                ? (
                                    <div
                                        key={item.id}
                                        className={classNames(cls.selectItem, {}, [cls.selectItemActive])}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                            className={cls.title}
                                        >
                                            {item.name}
                                        </Text>
                                    </div>
                                )
                                : (
                                    <AppLink
                                        key={item.id}
                                        className={cls.selectItem}
                                        to={item.pathname!}
                                    >
                                        <Text
                                            size={TextSize.XS}
                                            weight={TextWeight.SEMIBOLD}
                                            className={cls.title}
                                        >
                                            {item.name}
                                        </Text>
                                    </AppLink>
                                )
                        )
                ))}
            </div>
        </div>
    );
});
