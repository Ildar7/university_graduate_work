import React, { memo } from 'react';
import CIcon from '@coreui/icons-react';
import { cilBell } from '@coreui/icons';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}
export const Header = memo((props: HeaderProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <div className={classNames(cls.content, {}, ['app-container'])}>
                <div className={cls.logo}>
                    <Text
                        className={cls.logoTop}
                        theme={TextTheme.PRIMARY}
                        size={TextSize.XS}
                        weight={TextWeight.BOLD}
                    >
                        WhitePaper
                    </Text>
                    <Text
                        className={cls.logoBottom}
                        theme={TextTheme.PRIMARY}
                        size={TextSize.L}
                        weight={TextWeight.BOLD}
                    >
                        LMS
                    </Text>
                </div>
                <HeaderNavigation />
                <div className={cls.settings}>
                    <HeaderDropdown className={cls.dropdown} />
                </div>
            </div>
        </div>
    );
});
