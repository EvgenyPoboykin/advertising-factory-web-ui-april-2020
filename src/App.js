import React, { memo } from 'react';
import AppMain from './Layout/AppMain';
import App_Logic from './logic';
import { FirebaseProvider } from './state';

const App = () => {
    const [lists, state, message, onClickOpenTabPreview, closePreview, ClickOnScroll, closePreviewClickEsc, ShowMessage] = App_Logic();

    return (
        <FirebaseProvider value={{ lists, state, message, onClickOpenTabPreview, closePreview, ClickOnScroll, closePreviewClickEsc, ShowMessage }}>
            <AppMain />;
        </FirebaseProvider>
    );
};

export default memo(App);
