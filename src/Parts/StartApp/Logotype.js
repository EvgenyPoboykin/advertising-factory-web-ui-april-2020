import React, { lazy, memo } from 'react';
import logo from '../../assets/logo.svg';

const ContainerLogo = lazy(() => import('./styleLogo').then((mod) => ({ default: mod.ContainerLogo })));
const Logo = lazy(() => import('./styleLogo').then((mod) => ({ default: mod.Logo })));
const Text = lazy(() => import('./styleLogo').then((mod) => ({ default: mod.Text })));

const Logotype = () => (
    <ContainerLogo>
        <Logo src={logo} alt='logo fr' />
        <Text>г. Усть-Илимск</Text>
    </ContainerLogo>
);

export default memo(Logotype);
