import React, { lazy, memo } from 'react';

const HoverContainer = lazy(() => import('./styleTitle').then((mod) => ({ default: mod.HoverContainer })));
const HoverText = lazy(() => import('./styleTitle').then((mod) => ({ default: mod.HoverText })));
const HoverColorPallet = lazy(() => import('./styleTitle').then((mod) => ({ default: mod.HoverColorPallet })));

const Title = ({ item }) => (
    <HoverContainer>
        <HoverText>{`${item.number}${item.side} - ${item.adress}`}</HoverText>
        <HoverColorPallet />
    </HoverContainer>
);

export default memo(Title);
