import { IMaskMixin } from 'react-imask';
import { CFormInput } from '@coreui/react';
import { memo } from 'react';

export const CFormInputWithMask = memo(IMaskMixin(({ inputRef, ...props }: any) => (
    <CFormInput
        {...props}
        // @ts-ignore
        ref={inputRef}
    />
)));
