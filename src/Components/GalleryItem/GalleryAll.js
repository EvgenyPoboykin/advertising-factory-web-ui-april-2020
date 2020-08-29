import React, { lazy, memo } from 'react';

const GalleryItem = lazy(() => import('./GalleryItem'));

const GalleryAll = ({ list, gridClassName, partName }) => {
    let number;

    if (gridClassName === 'staff') {
        number = 7;
    } else {
        number = 13;
    }

    return list
        .filter((item) => list.indexOf(item) < number)
        .map((item) => {
            return <GalleryItem gridClassName={gridClassName} list={list} partName={partName} url={item.url} id={list.indexOf(item) + 1} key={item.id} index={list.indexOf(item)} />;
        });
};

export default memo(GalleryAll);
