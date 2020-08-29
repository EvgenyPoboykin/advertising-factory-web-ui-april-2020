import React, { useContext, lazy, memo } from 'react';
import { FirebaseContext } from '../../state';

const PreviewPic = lazy(() => import('../../Components/PreviewPic/PreviewPic'));
const About = lazy(() => import('../../Components/About/About'));
const Contacts = lazy(() => import('../../Components/Contacts/Contacts'));

const ChuseWindow = () => {
    const { state } = useContext(FirebaseContext);

    if (state.category === 'showGallery' || state.category === 'bilboardGallery') {
        return <PreviewPic />;
    } else if (state.category === 'showCompany') {
        return <About />;
    } else if (state.category === 'showContacts') {
        return <Contacts />;
    }
};

export default memo(ChuseWindow);
