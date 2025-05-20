import React, {
    MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CloseBorderedIcon from 'shared/assets/icons/close-bordered.svg';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    contentClassName?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    title?: string;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        contentClassName,
        children,
        isOpen,
        onClose,
        lazy,
        title,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, ['app_modal'])}>
                <div className={cls.overlay}>
                    <div
                        className={classNames(cls.contentWrapper, {}, [className])}
                        onClick={onContentClick}
                    >
                        <div className={classNames(cls.content, {}, [contentClassName])}>
                            {title && (
                                <div className={cls.header}>
                                    <Text
                                        size={TextSize.XS}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        {title}
                                    </Text>
                                    <Button
                                        className={cls.closeBtn}
                                        theme={ButtonTheme.CLEAR}
                                        onClick={closeHandler}
                                    >
                                        <Icon className={cls.closeIcon} Svg={CloseBorderedIcon} />
                                    </Button>
                                </div>
                            )}
                            {!title && (
                                <Button
                                    className={classNames(cls.closeBtn, {}, [cls.closeBtnWithoutTitle])}
                                    theme={ButtonTheme.CLEAR}
                                    onClick={closeHandler}
                                >
                                    <Icon className={cls.closeIcon} Svg={CloseBorderedIcon} />
                                </Button>
                            )}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};
