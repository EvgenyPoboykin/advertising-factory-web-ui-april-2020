import React, { lazy, memo } from 'react';
const GalleryItem = lazy(() => import('./GalleryItem'));

const GalleryWithGifProduct = ({ list, gridClassName, partName }) => {
    const newIMAGEs = list.filter((image) => {
        return image.url.split('.')[2] !== 'gif';
    });

    return newIMAGEs.filter((item) => newIMAGEs.indexOf(item) + 1 !== 7 && newIMAGEs.indexOf(item) + 1 !== 4 && newIMAGEs.indexOf(item) + 1 < 14).map((item) => <GalleryItem gridClassName={gridClassName} url={item.url} id={newIMAGEs.indexOf(item) + 1} key={item.id} index={list.indexOf(item)} partName={partName} />);
};

export default memo(GalleryWithGifProduct);
