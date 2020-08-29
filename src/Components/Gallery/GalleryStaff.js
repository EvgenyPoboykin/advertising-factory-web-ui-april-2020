import React, { useContext, lazy, memo } from 'react';
import { FirebaseContext } from '../../state';

const WrapperStaff = lazy(() => import('./style').then((mod) => ({ default: mod.WrapperStaff })));

const GalleryItem = lazy(() => import('../GalleryItem/GalleryItem'));
const GalleryAll = lazy(() => import('../GalleryItem/GalleryAll'));
const GalleryWithGif = lazy(() => import('../GalleryItem/GalleryWithGif'));

function GalleryStaff({ partName }) {
    const { lists } = useContext(FirebaseContext);
    let content;

    const list = lists[partName];

    if (list) {
        const newGIFs = list.filter((image) => {
            return image.url.split('%2F')[1].split('?alt')[0].split('.')[1] === 'gif';
        });

        const newIMAGEs = list.filter((image) => {
            return image.url.split('%2F')[1].split('?alt')[0].split('.')[1] !== 'gif';
        });

        if (newGIFs.length > 0) {
            content = (
                <WrapperStaff>
                    <GalleryItem gridClassName='staff' url={newGIFs[0].url} id={2} partName={partName} key={newGIFs[0].id} index={list.indexOf(newGIFs[0])} />
                    <GalleryWithGif list={newIMAGEs} gridClassName='staff' partName={partName} />
                </WrapperStaff>
            );
        } else {
            content = (
                <WrapperStaff>
                    <GalleryAll list={list} gridClassName='staff' partName={partName} />
                </WrapperStaff>
            );
        }
    } else {
        content = null;
    }

    return content;
}
export default memo(GalleryStaff);
