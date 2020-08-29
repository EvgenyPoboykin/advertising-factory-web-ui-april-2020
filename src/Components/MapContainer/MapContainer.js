import React, { lazy, memo, useContext } from 'react';
import { FirebaseContext } from '../../state';

const WrapperMap = lazy(() => import('./style').then((mod) => ({ default: mod.WrapperMap })));

const MapC = lazy(() => import('react-yandex-maps').then((mod) => ({ default: mod.YMaps })));
const Map = lazy(() => import('react-yandex-maps').then((mod) => ({ default: mod.Map })));
const Pin = lazy(() => import('./Pin'));

const MapContainer = ({ partName }) => {
    const { lists } = useContext(FirebaseContext);

    return (
        <WrapperMap>
            <MapC>
                <Map defaultState={{ center: [57.950895315683354, 102.73884643710794], zoom: 14 }} width='100%' height='100%'>
                    {lists[partName] && lists[partName].map((item, index) => (item.side === 'А' || item.side === 'А1' || item.side === 'А1-А2' ? <Pin key={index} index={index} item={item} partName={partName} /> : null))}
                </Map>
            </MapC>
        </WrapperMap>
    );
};

export default memo(MapContainer);
