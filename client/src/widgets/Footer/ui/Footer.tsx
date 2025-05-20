import React, { memo } from 'react';
import { CFooter } from '@coreui/react';

export const Footer = memo(() => (
    <CFooter>
        <div>
            <span>LMS WhitePaper</span>
            <span className="ms-1">&copy; 2025.</span>
        </div>
        <div className="ms-auto">
            <span className="me-1">Powered by</span>
            <span>Best developers</span>
        </div>
    </CFooter>
));
