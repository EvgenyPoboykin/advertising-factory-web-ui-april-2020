import React, { lazy, memo } from 'react';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Content = lazy(() => import('./style').then((mod) => ({ default: mod.Content })));

const Block = ({ children, bgGray, bgTrans, vh, partName }) => (
    <Wrapper gray={bgGray} image={bgTrans} vh={vh} id={partName}>
        <Container>
            <Content>{children}</Content>
        </Container>
    </Wrapper>
);

export default memo(Block);
