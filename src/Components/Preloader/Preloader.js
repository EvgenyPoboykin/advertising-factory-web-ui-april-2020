import React from 'react';
import { Wrapper, Image } from './style';
import preloderUrl from '../../assets/preloder.gif';

const Preloader = () => (
    <Wrapper>
        <Image src={preloderUrl} alt='' />
    </Wrapper>
);

export default Preloader;
