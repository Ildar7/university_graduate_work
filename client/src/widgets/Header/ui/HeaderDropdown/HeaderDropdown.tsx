import React, { memo, useCallback } from 'react';
import {
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react';
import {
    cilArrowThickToLeft, cilBell, cilLockLocked, cilSettings, cilUser,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import UserAvatar from 'shared/assets/icons/user.png';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { shortFirstAndLastName } from 'shared/lib/helpers/shortFirstAndLastName/shortFirstAndLastName';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { getRouteLogin } from 'shared/const/router';
import { USER_FULLNAME_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import cls from './HeaderDropdown.module.scss';

interface HeaderDropdownProps {
    className?: string;
}

const AppHeaderDropdown = memo((props: HeaderDropdownProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userName = localStorage.getItem(USER_FULLNAME_LOCALSTORAGE_KEY);

    const logoutHandler = useCallback(() => {
        dispatch(userActions.logout());
        navigate(getRouteLogin());
    }, [dispatch, navigate]);

    return (
        <CDropdown variant="nav-item" className={classNames(cls.HeaderDropdown, {}, [className])}>
            <CDropdownToggle
                // @ts-ignore
                placement="bottom-end"
                className="py-0"
                caret={false}
            >
                <div className={cls.user}>
                    {
                        userName
                            ? (
                                <Button
                                    className={cls.userBtn}
                                    size={ButtonSize.XS}
                                >
                                    <Text
                                        className={cls.userName}
                                        size={TextSize.XS}
                                    >
                                        {shortFirstAndLastName(userName)}
                                    </Text>
                                </Button>
                            )
                            : ''
                    }
                    <div className={cls.avatar}>
                        <img src={UserAvatar} alt="user-avatar" />
                    </div>
                </div>
            </CDropdownToggle>
            <CDropdownMenu
                // @ts-ignore
                placement="bottom-end"
            >
                <CDropdownItem onClick={logoutHandler}>
                    <CIcon icon={cilArrowThickToLeft} className="me-2" />
                    Выйти из системы
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    );
});

export default AppHeaderDropdown;
