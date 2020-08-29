import React, { lazy, memo, useContext } from 'react';
import { FirebaseContext } from '../../state';

const Block = lazy(() => import('../../Layout/Block/Block'));
const BaseTitle = lazy(() => import('../../Components/BaseTitle/BaseTitle'));
const Gallery = lazy(() => import('../../Components/Gallery/Gallery'));
const BottomRec = lazy(() => import('../../Components/BottomRec/BottomRec'));

const ProductGallery = ({ galleryName, blue, bgGray, partName }) => {
    const { lists } = useContext(FirebaseContext);
    return (
        <Block bgGray={bgGray} partName={partName}>
            <BaseTitle title={galleryName} blue={blue} />
            <Gallery list={lists && lists[partName]} partName={partName} />
            <BottomRec blue={blue} />
        </Block>
    );
};

export default memo(ProductGallery);
