import React, { lazy, memo } from 'react';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));

const ContentWrapper = ({ children }) => (
    <Wrapper>
        <Container>{children}</Container>
    </Wrapper>
);

export default memo(ContentWrapper);
