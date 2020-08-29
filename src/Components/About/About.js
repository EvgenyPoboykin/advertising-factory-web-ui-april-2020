import React, { lazy, memo } from 'react';

import About_Logic from './logic';

const ReCaptcha = lazy(() => import('react-recaptcha-google').then((mod) => ({ default: mod.ReCaptcha })));
const Form = lazy(() => import('./style').then((mod) => ({ default: mod.Form })));
const Btn = lazy(() => import('./style').then((mod) => ({ default: mod.Btn })));
const Input = lazy(() => import('./style').then((mod) => ({ default: mod.Input })));
const MessageVeri = lazy(() => import('./style').then((mod) => ({ default: mod.MessageVeri })));
const MessageVeriContainer = lazy(() => import('./style').then((mod) => ({ default: mod.MessageVeriContainer })));

const PreviewInfo = lazy(() => import('../PreviewInfo/PreviewInfo'));
const ReactTelInput = lazy(() => import('react-telephone-input').then((mod) => ({ default: mod.ReactTelephoneInput })));

const About = () => {
    const { client, vis, message, recaptchaRef, Url, onChangeInputName, onChangeInputTel, verifyCallback } = About_Logic();

    return (
        <PreviewInfo>
            <Form>
                <Input placeholder='Имя' onChange={onChangeInputName} />
                <ReactTelInput defaultCountry='ru' onChange={onChangeInputTel} flagsImagePath={null} value={client.tel} onlyCountries={[{ name: 'Russia', iso2: 'ru', dialCode: '7', priority: 0, format: '+. (...) ...-....' }]} placeholder='+7 (000) 000-0000' />
                <ReCaptcha ref={recaptchaRef} size='visible' render='explicit' sitekey='6LeQCqQZAAAAAHCa4OELzbckPRfi8EvivLPln2Fm' data-theme='dark' verifyCallback={verifyCallback} />
                <MessageVeriContainer vis={vis}>
                    <MessageVeri>{message}</MessageVeri>
                </MessageVeriContainer>
                <Btn onClick={Url}>отправить</Btn>
            </Form>
        </PreviewInfo>
    );
};

export default memo(About);
