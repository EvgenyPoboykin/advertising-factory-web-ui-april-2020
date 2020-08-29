import React from 'react';

const A = React.lazy(() => import('./style').then((mod) => ({ default: mod.A })));
const B = React.lazy(() => import('./style').then((mod) => ({ default: mod.B })));
const Rec = React.lazy(() => import('./style').then((mod) => ({ default: mod.Rec })));
const TitleWrapper = React.lazy(() => import('./style').then((mod) => ({ default: mod.TitleWrapper })));
const Title = React.lazy(() => import('./style').then((mod) => ({ default: mod.Title })));

const BaseTitle = ({ title, blue }) => (
    <A>
        <B>
            <Rec blue={blue} />
            <TitleWrapper>
                <Title>{title}</Title>
            </TitleWrapper>
        </B>
    </A>
);

export default React.memo(BaseTitle);
