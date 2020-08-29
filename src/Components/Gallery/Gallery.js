import React, { lazy, memo } from 'react';

const GalleryStaff = lazy(() => import('./GalleryStaff'));
const GalleryProduct = lazy(() => import('./GalleryProduct'));

const Gallery = ({ category, partName }) => {
    if (category) {
        return <GalleryStaff partName={partName} />;
    } else {
        return <GalleryProduct partName={partName} />;
    }
};

export default memo(Gallery);
