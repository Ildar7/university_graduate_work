import React, {
    ReactElement, useEffect, useRef, useState,
} from 'react';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';

export const useErrorMessage = (error: any) => {
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (error) {
            addToast(Toast.error('Произошла ошибка при создании должности сотрудника'));
        }
    }, [error]);

    return (
        <CToaster
            ref={toaster}
            push={toast}
            placement="top-end"
        />
    );
};
