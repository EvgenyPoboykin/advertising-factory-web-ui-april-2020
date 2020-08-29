import { useCallback, useContext, useState, useEffect, useRef } from 'react';
import { FirebaseContext } from '../../state';

const Slider_Logic = () => {
    const { state } = useContext(FirebaseContext);

    const config = {
        delta: 10,
        preventDefaultTouchmoveEvent: false,
        trackTouch: true,
        trackMouse: false,
        rotationAngle: 0,
    };

    const [shift, UseShift] = useState(0);
    const [index, UseIndex] = useState(0);
    const [vis, UseVis] = useState(false);
    const [transition, UseTransition] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        UseIndex(state.prevImg);
        UseShift((100 / state.imageList.length) * state.prevImg * -1);
        setTimeout(() => UseVis(true), 400);
    }, [state.prevImg, state.imageList]);

    const timeing = 20;

    const onClickNext = useCallback(() => {
        let newIndex;

        if (index < state.imageList.length - 1) {
            UseTransition('all 500ms ease-in-out');
            newIndex = index + 1;
            UseIndex(newIndex);
            UseShift((100 / state.imageList.length) * newIndex * -1);
        } else if (index === state.imageList.length - 1) {
            setTimeout(() => {
                UseTransition('all 500ms ease-in-out');
                newIndex = state.imageList.length;
                UseShift((100 / state.imageList.length) * newIndex);

                setTimeout(() => {
                    UseTransition('none');
                    newIndex = 1;
                    UseIndex(newIndex);
                    UseShift((100 / state.imageList.length) * newIndex);

                    setTimeout(() => {
                        UseTransition('all 500ms ease-in-out');
                        newIndex = 0;
                        UseIndex(newIndex);
                        UseShift((100 / state.imageList.length) * newIndex * -1);
                    }, timeing);
                }, timeing);
            }, timeing);
        }
    }, [index, state.imageList]);

    const onClickPrev = useCallback(() => {
        let newIndex;

        if (index > 0 || index < 0) {
            UseTransition('all 500ms ease-in-out');
            newIndex = index - 1;
            UseIndex(newIndex);
            UseShift((100 / state.imageList.length) * newIndex * -1);
        } else if (index === 0) {
            setTimeout(() => {
                UseTransition('all 500ms ease-in-out');
                newIndex = 1;
                UseShift((100 / state.imageList.length) * newIndex * -1);

                setTimeout(() => {
                    UseTransition('none');
                    newIndex = state.imageList.length;
                    UseIndex(newIndex);
                    UseShift((100 / state.imageList.length) * newIndex * -1);

                    setTimeout(() => {
                        UseTransition('all 500ms ease-in-out');
                        newIndex = newIndex - 1;
                        UseIndex(newIndex);
                        UseShift((100 / state.imageList.length) * newIndex * -1);
                    }, timeing);
                }, timeing);
            }, timeing);
        }
    }, [index, state.imageList]);

    return [config, vis, shift, state, transition, ref, onClickNext, onClickPrev];
};
export default Slider_Logic;
