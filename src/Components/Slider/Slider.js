import React, { lazy, memo } from 'react';
import { Swipeable } from 'react-swipeable';
import Slider_Logic from './logic';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const ContainerWrapper = lazy(() => import('./style').then((mod) => ({ default: mod.ContainerWrapper })));
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));

const BottonSlider = lazy(() => import('./Btn'));

const Slider = ({ children }) => {
    const [config, vis, shift, state, transition, ref, onClickNext, onClickPrev] = Slider_Logic();

    return (
        <Swipeable onSwipedLeft={onClickNext} onSwipedRight={onClickPrev} config={config} preventDefaultTouchmoveEvent={true} trackMouse={true}>
            <Wrapper>
                <BottonSlider onClick={onClickPrev} url='/angle-left.svg' />
                <ContainerWrapper vis={vis}>
                    <Container shift={shift} widthslider={state.imageList.length} transition={transition} ref={ref}>
                        {children}
                    </Container>
                </ContainerWrapper>

                <BottonSlider onClick={onClickNext} url='/angle-right.svg' next />
            </Wrapper>
        </Swipeable>
    );
};

export default memo(Slider);
