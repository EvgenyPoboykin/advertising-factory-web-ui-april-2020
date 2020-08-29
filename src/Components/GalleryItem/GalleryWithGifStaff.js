import React, { lazy, memo } from 'react';
const GalleryItem = lazy(() => import('./GalleryItem'));

const GalleryWithGifStaff = ({ list, partName }) => {
    return list.filter((item) => list.indexOf(item) + 1 < 7).map((item) => (list.indexOf(item) + 1 !== 2 ? <GalleryItem gridClassName='staff' url={item.url} id={list.indexOf(item) + 1} key={item.id} partName={partName} index={list.indexOf(item)} /> : <GalleryItem gridClassName='staff' url={item.url} id={7} key={item.id} index={list.indexOf(item)} partName={partName} />));
};

export default memo(GalleryWithGifStaff);
