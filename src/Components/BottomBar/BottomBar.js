import React, { lazy, memo } from 'react';

const Copyrights = lazy(() => import('./style').then((mod) => ({ default: mod.Copyrights })));
const Iam = lazy(() => import('./style').then((mod) => ({ default: mod.Iam })));
const AHREF = lazy(() => import('./style').then((mod) => ({ default: mod.AHREF })));

const Block = lazy(() => import('../../Layout/Block/Block'));

const BottomBar = () => (
    <Block bgTrans>
        <Copyrights>Copyright © 2020 - Фабрика Рекламы, г. Усть-Илимск</Copyrights>

        <AHREF href='https://vk.com/evgenypoboykin' target='blank'>
            <Iam>Full-stack developer: Evgeny Poboykin, Novosibirsk</Iam>
        </AHREF>
    </Block>
);

export default memo(BottomBar);
