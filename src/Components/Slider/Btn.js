import React, { lazy, memo } from 'react';

const Button = lazy(() => import('./styleBtn').then((mod) => ({ default: mod.Button })));
const ImageBotton = lazy(() => import('./styleBtn').then((mod) => ({ default: mod.ImageBotton })));

const Btn = ({ onClick, next, url }) => {
    return (
        <Button onClick={onClick} next={next}>
            <ImageBotton src={url} alt='' />
        </Button>
    );
};
export default memo(Btn);
