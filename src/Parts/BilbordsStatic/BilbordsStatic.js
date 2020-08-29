import React, { lazy, memo } from 'react';
import Bilbords_Logic from './logic';
const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));

const Block = lazy(() => import('../../Layout/Block/Block'));
const BaseTitle = lazy(() => import('../../Components/BaseTitle/BaseTitle'));
const BottomRec = lazy(() => import('../../Components/BottomRec/BottomRec'));
const BilbordImgItem = lazy(() => import('../../Components/BilbordImgItem/BilbordImgItem'));
const MapContainer = lazy(() => import('../../Components/MapContainer/MapContainer'));

const BilbordsStatic = ({ partName }) => {
    const [hide, list, textButton, onClickMore, onClickOpenTabPreview] = Bilbords_Logic();
    return (
        <Block bgGray>
            <BaseTitle title='БИЛБОРДЫ' blue />

            <MapContainer partName={partName} />

            <Wrapper hide={hide}>{list && list.map((item, index) => <BilbordImgItem key={index} item={item} partName={partName} index={list.indexOf(item)} onClickOpenTabPreview={onClickOpenTabPreview} />)}</Wrapper>

            <BottomRec bil blue onClickMore={onClickMore} textButton={textButton} />
        </Block>
    );
};

export default memo(BilbordsStatic);
