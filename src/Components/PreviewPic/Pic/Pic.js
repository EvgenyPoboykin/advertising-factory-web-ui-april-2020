import React, { lazy, memo } from 'react';

const ContainerImage = lazy(() => import('./style').then((mod) => ({ default: mod.ContainerImage })));
const Preview = lazy(() => import('./style').then((mod) => ({ default: mod.Preview })));

const Pic = ({ children, item }) => {
    return (
        <ContainerImage>
            <Preview src={item.url} alt=''></Preview>
            {children}
        </ContainerImage>
    );
};
export default memo(Pic);
