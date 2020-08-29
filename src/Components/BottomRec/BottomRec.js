import React, { lazy, memo } from 'react';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Rec = lazy(() => import('./style').then((mod) => ({ default: mod.Rec })));
const Button = lazy(() => import('./style').then((mod) => ({ default: mod.Button })));

const BottomRec = ({ blue, bil, onClickMore, textButton }) => (
    <Wrapper bil={bil}>
        {bil ? <Button onClick={onClickMore}>{textButton}</Button> : null}
        <Container>
            <Rec blue={blue} />
        </Container>
    </Wrapper>
);

export default memo(BottomRec);
