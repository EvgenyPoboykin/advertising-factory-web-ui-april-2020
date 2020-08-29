import React, { lazy, memo } from 'react';
import logo from './logo-black-bg.svg';

const Content = lazy(() => import('./style').then((mod) => ({ default: mod.Content })));
const Logo = lazy(() => import('./style').then((mod) => ({ default: mod.Logo })));

const ContentWrapper = lazy(() => import('../ContentWrapper/ContentWrapper'));

const PreviewInfo = ({ children }) => (
    <ContentWrapper>
        <Content>
            <Logo src={logo} alt='' />
            {children}
        </Content>
    </ContentWrapper>
);

export default memo(PreviewInfo);
