import React, { lazy, useContext } from 'react';
import { FirebaseContext } from '../../state';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));

const Block = lazy(() => import('../../Layout/Block/Block'));
const Logo = lazy(() => import('./Logotype'));
const Words = lazy(() => import('./WordsContainer'));

const StartApp = () => {
    const { ClickOnScroll } = useContext(FirebaseContext);
    return (
        <Block bgTrans vh>
            <Wrapper>
                <Container>
                    <Logo />
                    <Words ClickOnScroll={ClickOnScroll} />
                </Container>
            </Wrapper>
        </Block>
    );
};

export default StartApp;
