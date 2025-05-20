import React, {
    memo,
    ReactElement, useEffect, useRef, useState,
} from 'react';
import { Toast } from 'shared/ui/Toast/Toast';
import { CToaster } from '@coreui/react';

type ErrorType = string | { status: number; error: string };

interface TimeoutErrorToastProps {
    error: ErrorType;
}
export const TimeoutErrorToast = memo(({ error }: TimeoutErrorToastProps) => {
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof error === 'string' && error === 'timeout') {
            addToast(Toast.error('Соединение с сервером потеряно'));
        } else if (typeof error === 'object' && error.status === 500 && error.error === 'timeout') {
            addToast(Toast.error('Соединение с сервером потеряно'));
        }
    }, [error]);

    return (
        <CToaster
            ref={toaster}
            push={toast}
            placement="top-end"
        />
    );
});
