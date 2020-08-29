import React, { useCallback, useContext, lazy, memo } from 'react';
import { FirebaseContext } from '../../state';

const PinYMap = lazy(() => import('react-yandex-maps').then((mod) => ({ default: mod.Placemark })));

const Pin = ({ item, index, partName }) => {
    const { lists, onClickOpenTabPreview } = useContext(FirebaseContext);

    const clickOnImage = useCallback(() => onClickOpenTabPreview('bilboardGallery', index, lists[partName]), [onClickOpenTabPreview, index, partName, lists]);

    return <PinYMap onClick={clickOnImage} geometry={item.coord} properties={{ iconContent: `${item.number}` }} options={{ iconColor: '#0000ff' }} />;
};

export default memo(Pin);
