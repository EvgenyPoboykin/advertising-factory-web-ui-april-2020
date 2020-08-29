import React, { lazy, memo } from 'react';

const Adress = lazy(() => import('./style').then((mod) => ({ default: mod.Adress })));
const AdressDesc = lazy(() => import('./style').then((mod) => ({ default: mod.AdressDesc })));
const AdressNumber = lazy(() => import('./style').then((mod) => ({ default: mod.AdressNumber })));
const AdressItem = lazy(() => import('./style').then((mod) => ({ default: mod.AdressItem })));

const Desc = ({ item }) => (
    <>
        <Adress>
            <AdressNumber>
                {item.number}
                {item.side}
            </AdressNumber>
            <AdressItem>{item.adress}</AdressItem>
        </Adress>
        <AdressDesc>формат {item.format} мм.</AdressDesc>
    </>
);

export default memo(Desc);
