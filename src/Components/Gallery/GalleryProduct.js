import React, { useContext, lazy, memo } from 'react';
import { FirebaseContext } from '../../state';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));

const GalleryItem = lazy(() => import('../GalleryItem/GalleryItem'));
const GalleryAll = lazy(() => import('../GalleryItem/GalleryAll'));
const GalleryWithGif = lazy(() => import('../GalleryItem/GalleryWithGif'));

const GalleryProduct = ({ partName }) => {
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
                <Wrapper>
                    <GalleryItem gridClassName='product' url={newGIFs[0].url} id={7} partName={partName} key={newGIFs[0].id} index={list.indexOf(newGIFs[0])} />

                    <GalleryItem url={newGIFs[1].url} id={4} partName={partName} key={newGIFs[1].id} index={list.indexOf(newGIFs[1])} gridClassName='product' />
                    <GalleryWithGif gridClassName='product' list={newIMAGEs} />
                </Wrapper>
            );
        } else {
            content = (
                <Wrapper>
                    <GalleryAll gridClassName='product' list={list} partName={partName} />
                </Wrapper>
            );
        }
    } else {
        content = null;
    }

    return content;
};

export default memo(GalleryProduct);
