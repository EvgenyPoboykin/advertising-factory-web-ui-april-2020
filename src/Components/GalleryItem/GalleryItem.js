import React, { useContext, useCallback, lazy, memo } from 'react';
import { FirebaseContext } from '../../state';

const ContainerItem = lazy(() => import('./style').then((mod) => ({ default: mod.ContainerItem })));
const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const Image = lazy(() => import('./style').then((mod) => ({ default: mod.Image })));

function GalleryItem({ url, id, index, gridClassName, partName }) {
    const { lists, onClickOpenTabPreview } = useContext(FirebaseContext);

    const clickOnImage = useCallback(() => onClickOpenTabPreview('showGallery', index, lists[partName]), [index, partName, onClickOpenTabPreview, lists]);

    return (
        <ContainerItem name={gridClassName} number={id}>
            <Wrapper disableVendorPrefixes onClick={clickOnImage}>
                <Image src={url} alt={url} />
            </Wrapper>
        </ContainerItem>
    );
}

export default memo(GalleryItem);
