import React, { lazy, memo } from 'react';

const PreviewWindow = lazy(() => import('../../Components/PreviewWindow/PreviewWindow'));
const ChuseWindow = lazy(() => import('./ChuseWindow'));

const CustomWindow = () => {
    return (
        <PreviewWindow>
            <ChuseWindow />
        </PreviewWindow>
    );
};

export default memo(CustomWindow);
