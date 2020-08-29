import React, { useContext, lazy, memo, useCallback } from 'react';
import { FirebaseContext } from '../../state';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Close = lazy(() => import('./style').then((mod) => ({ default: mod.Close })));

const PreviewWindow = ({ children }) => {
    const { state, closePreviewClickEsc, closePreview } = useContext(FirebaseContext);
    const pressEsc = useCallback((e) => closePreviewClickEsc(e), [closePreviewClickEsc]);

    return (
        <Wrapper showPreview={state ? state.showPreview : false} itemCategory={state.category} onKeyDown={pressEsc}>
            <Container>
                <Close onClick={closePreview}>×</Close>
            </Container>
            {children}
        </Wrapper>
    );
};

export default memo(PreviewWindow);
