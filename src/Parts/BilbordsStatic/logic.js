import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../../state';

const Bilbords_Logic = () => {
    const { lists, onClickOpenTabPreview } = useContext(FirebaseContext);
    const [textButton, UseTextButton] = useState('показать больше');
    const [list, UseLists] = useState([]);
    const [hide, UseHide] = useState(false);

    useEffect(() => {
        UseLists(lists.bilbords && lists.bilbords.slice(0, 16));
    }, [lists]);

    const onClickMore = () => {
        if (hide === false) {
            UseLists(lists.bilbords);
            UseTextButton('спрятать');
            UseHide(true);
        } else {
            UseLists(lists.bilbords && lists.bilbords.slice(0, 16));
            UseTextButton('показать больше');
            UseHide(false);
        }
    };

    return [hide, list, textButton, onClickMore, onClickOpenTabPreview];
};
export default Bilbords_Logic;
