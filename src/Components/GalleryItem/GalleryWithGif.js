import React, { lazy, memo } from 'react';

const GalleryWithGifStaff = lazy(() => import('./GalleryWithGifStaff'));
const GalleryWithGifProduct = lazy(() => import('./GalleryWithGifProduct'));

const GalleryWithGif = ({ list, gridClassName, partName }) => {
    return gridClassName === 'staff' ? <GalleryWithGifStaff list={list} partName={partName} /> : <GalleryWithGifProduct list={list} partName={partName} />;
};

export default memo(GalleryWithGif);
