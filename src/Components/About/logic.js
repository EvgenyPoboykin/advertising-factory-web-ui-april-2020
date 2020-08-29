import { useContext, useState, createRef } from 'react';
import { db, FirebaseContext } from '../../state';

const About_Logic = () => {
    const recaptchaRef = createRef();
    const [ShowMessage, closePreview] = useContext(FirebaseContext);
    const [client, UseClient] = useState({ name: '', tel: '' });
    const [capcha, UseCapcha] = useState('');
    const [vis, UseVisMessage] = useState(false);
    const [message, UseMessage] = useState('пройдите проверку!');

    const onChangeInputName = (e) => {
        UseClient({ ...client, name: e.target.value });
    };
    const onChangeInputTel = (number) => {
        if (number.length <= 17) {
            UseClient({ ...client, tel: number });
        }
    };

    const verifyCallback = (recaptchaToken) => {
        UseCapcha(recaptchaToken);
    };

    const Url = (e) => {
        e.preventDefault();

        if (client.name === '' || client.tel === '') {
            let newMessage;
            if (client.name === '') {
                newMessage = 'поле ИМЯ не заполнено!';
            } else if (client.tel === '') {
                newMessage = 'поле ТЕЛЕФОН не заполнено!';
            }
            UseMessage(newMessage);
            UseVisMessage(true);
            setTimeout(() => UseVisMessage(false), 2000);
        } else {
            if (capcha) {
                const date = new Date();
                const id = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`;
                const now = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
                const data = { name: client.name, tel: client.tel, id: id, timestamp: now };
                db.ref('report-calls').push(data);
                closePreview(false);
                ShowMessage();
            }

            UseMessage('пройдите проверку!');
            UseVisMessage(true);
            setTimeout(() => UseVisMessage(false), 2000);
        }
    };

    return [client, vis, message, recaptchaRef, Url, onChangeInputName, onChangeInputTel, verifyCallback];
};

export default About_Logic;
