import React, { useContext, memo, lazy } from 'react';
import { FirebaseContext } from '../../state';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Botton = lazy(() => import('./style').then((mod) => ({ default: mod.Botton })));
const BottonLink = lazy(() => import('./style').then((mod) => ({ default: mod.BottonLink })));
const Code = lazy(() => import('./style').then((mod) => ({ default: mod.Code })));
const Tel = lazy(() => import('./style').then((mod) => ({ default: mod.Tel })));
const MessageContainer = lazy(() => import('./style').then((mod) => ({ default: mod.MessageContainer })));

const TopBar = () => {
    const { message, onClickOpenTabPreview } = useContext(FirebaseContext);
    const defaultImg = { value: 0, url: '' };
    const defaultArray = [];

    return (
        <>
            <Wrapper id='maincontent'>
                <Container>
                    <Botton onClick={() => onClickOpenTabPreview('showContacts', defaultImg, defaultArray)}>КОНТАКТЫ</Botton>

                    <BottonLink href='tel:+79016685095'>
                        <Code>+7 (901)</Code>
                        <Tel>668-50-95</Tel>
                    </BottonLink>

                    <Botton onClick={() => onClickOpenTabPreview('showCompany', defaultImg, defaultArray)}>Заказать звонок</Botton>
                </Container>
            </Wrapper>
            <MessageContainer message={message}>Спасибо! Мы скоро Вам перезвоним. Не скучайте!</MessageContainer>
        </>
    );
};

export default memo(TopBar);
