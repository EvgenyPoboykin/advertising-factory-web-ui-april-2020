import React, { lazy, memo } from 'react';

const Container = lazy(() => import('./styleRejimRaboty').then((mod) => ({ default: mod.Container })));
const Title = lazy(() => import('./styleRejimRaboty').then((mod) => ({ default: mod.Title })));
const Rabota = lazy(() => import('./styleRejimRaboty').then((mod) => ({ default: mod.Rabota })));
const Weekends = lazy(() => import('./styleRejimRaboty').then((mod) => ({ default: mod.Weekends })));

const RejimRaboty = () => {
    return (
        <Container>
            <Title>режим работы:</Title>
            <Rabota>пн - пт: 10.00 - 18.00</Rabota>
            <Weekends>сб, вс: выходной</Weekends>
        </Container>
    );
};

export default memo(RejimRaboty);
