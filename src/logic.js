import { useEffect, useState, useReducer } from 'react';
import { db } from './state';
import { loadReCaptcha } from 'react-recaptcha-google';
import { initialState, Reducer } from './reducer';

const App_Logic = () => {
    const [lists, Uselists] = useState([]);
    const [state, dispatch] = useReducer(Reducer, initialState);
    const [message, UseMassage] = useState(false);

    useEffect(() => {
        db.ref()
            .once('value')
            .then((snap) => {
                Uselists(snap.val());
            });
        loadReCaptcha();
    }, []);

    const scrollWindow = () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };

    const closePreviewClickEsc = (e) => {
        if (e.keyCode === 27) {
            dispatch({ type: 'close-tab' });
        } else {
            return;
        }
    };

    const ClickOnScroll = (id) => {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    const closePreview = () => dispatch({ type: 'close-tab' });

    const onClickOpenTabPreview = (category, prevImg, imageList) => {
        dispatch({ type: 'open-tab', payload: { category, prevImg, imageList } });
    };

    const ShowMessage = () => {
        UseMassage(true);
        setTimeout(() => UseMassage(false), 3000);
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollWindow);
        document.addEventListener('keydown', closePreviewClickEsc);

        return () => {
            document.removeEventListener('scroll', scrollWindow);
            document.removeEventListener('keydown', closePreviewClickEsc);
        };
    }, [state.showPreview]);

    return [lists, state, message, onClickOpenTabPreview, closePreview, ClickOnScroll, closePreviewClickEsc, ShowMessage];
};

export default App_Logic;
