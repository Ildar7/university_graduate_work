import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import {
    ForwardedRef,
    forwardRef,
    memo, SVGProps, useMemo, VFC,
} from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    Text, TextAlign, TextSize, TextWeight,
} from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { useLocation } from 'react-router-dom';
import cls from './SubList.module.scss';

export interface SubListLinks {
    name: string;
    link: string;
    disabled?: boolean;
    icon?: VFC<SVGProps<SVGSVGElement>>;
}
interface SubListProps {
    className?: string;
    links?: SubListLinks[];
    visible?: boolean;
}

export const SubList = memo(forwardRef((props: SubListProps, ref: ForwardedRef<HTMLUListElement | null>) => {
    const {
        className,
        links,
        visible,
    } = props;
    const { pathname } = useLocation();

    const linksComponent = useMemo(() => (
        links?.map((link) => (
            pathname === link.link
                ? ''
                : (
                    <li
                        className={cls.item}
                        key={link.name + link.link}
                    >
                        <AppLink
                            to={link.link}
                            className={classNames(cls.link, { [cls.linkDisabled]: link.disabled }, [])}
                        >
                            <Text
                                size={TextSize.XS}
                                weight={TextWeight.SEMIBOLD}
                                align={TextAlign.LEFT}
                            >
                                {link.name}
                            </Text>
                            {link.icon && <Icon Svg={link.icon} className={cls.icon} />}
                        </AppLink>
                    </li>
                )
        ))
    ), [links, pathname]);

    const mods: Mods = {
        [cls.visible]: visible,
        [cls.linksList]: !!links?.length,
    };

    return (
        <ul className={classNames(cls.SubList, mods, [className])} ref={ref}>
            {links && linksComponent}
        </ul>
    );
}));
