import React, { useContext, lazy, memo, useCallback } from 'react';
import { FirebaseContext } from '../../state';

const ContainerImage = lazy(() => import('./style').then((mod) => ({ default: mod.ContainerImage })));
const WrapperImage = lazy(() => import('./style').then((mod) => ({ default: mod.WrapperImage })));
const Image = lazy(() => import('./style').then((mod) => ({ default: mod.Image })));

const Title = lazy(() => import('./Title'));

const BilbordImgItem = ({ item, index, partName }) => {
    const { lists, onClickOpenTabPreview } = useContext(FirebaseContext);

    const clickOnImage = useCallback(() => onClickOpenTabPreview('bilboardGallery', index, lists[partName]), [onClickOpenTabPreview, index, partName, lists]);

    return (
        <ContainerImage>
            <WrapperImage onClick={clickOnImage}>
                <Title item={item} />
                <Image src={item.url} alt={item.url} />
            </WrapperImage>
        </ContainerImage>
    );
};

export default memo(BilbordImgItem);
