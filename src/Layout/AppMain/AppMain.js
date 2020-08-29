import React, { lazy, Suspense } from 'react';
import Preloader from '../../Components/Preloader';
import { App, SkipLink } from './style';

const TopBar = lazy(() => import('../../Components/TopBar/TopBar'));
const StartApp = lazy(() => import('../../Parts/StartApp/StartApp'));
const BottomBar = lazy(() => import('../../Components/BottomBar/BottomBar'));

const CustomWindow = lazy(() => import('../../Parts/CustomWindow/CustomWindow'));
const Staff = lazy(() => import('../../Parts/Staff/Staff'));

const ProductGallery = lazy(() => import('../../Parts/ProductGallery/ProductGallery'));
const Bilbords = lazy(() => import('../../Parts/BilbordsStatic/BilbordsStatic'));
const Clients = lazy(() => import('../../Parts/Clients/Clients'));

function AppMain() {
    return (
        <App>
            <SkipLink href='#maincontent'>Skip to main</SkipLink>

            <Suspense fallback={<Preloader />}>
                <TopBar />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <CustomWindow />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <StartApp />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <Staff partName='staff' />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <ProductGallery partName='viveski' galleryName='ВЫВЕСКИ' bgGray blue />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <ProductGallery galleryName='БАННЕРА' partName='banners' />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <ProductGallery galleryName='СТЕНДЫ / ТАБЛИЧКИ / ПЕЧАТИ' partName='stendy' bgGray blue />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <ProductGallery galleryName='ПОЛИГРАФИЯ' partName='poly' />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <Bilbords partName='bilbords' />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <Clients />
            </Suspense>

            <Suspense fallback={<Preloader />}>
                <BottomBar />
            </Suspense>
        </App>
    );
}

export default AppMain;
