import React, { lazy, useCallback, memo } from 'react';

import word_1 from '../../assets/word_1.svg';
import word_2 from '../../assets/word_2.svg';
import word_3 from '../../assets/word_3.svg';

const ContainerText = lazy(() => import('./styleWords').then((mod) => ({ default: mod.ContainerText })));
const Line = lazy(() => import('./styleWords').then((mod) => ({ default: mod.Line })));
const Words = lazy(() => import('./styleWords').then((mod) => ({ default: mod.Words })));
const Word = lazy(() => import('./styleWords').then((mod) => ({ default: mod.Word })));

const WordsContainer = ({ ClickOnScroll }) => {
    const Viveski = useCallback(() => ClickOnScroll('viveski'), [ClickOnScroll]);
    const Banners = useCallback(() => ClickOnScroll('banners'), [ClickOnScroll]);
    const Poly = useCallback(() => ClickOnScroll('poly'), [ClickOnScroll]);
    return (
        <ContainerText>
            <Line></Line>
            <Words>
                <Word src={word_1} alt='вывески' onClick={Viveski} />
                <Word src={word_2} alt='баннера' onClick={Banners} />
                <Word src={word_3} alt='полиграфия' onClick={Poly} />
            </Words>
        </ContainerText>
    );
};

export default memo(WordsContainer);
