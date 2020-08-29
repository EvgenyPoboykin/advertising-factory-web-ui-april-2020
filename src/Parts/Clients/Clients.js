import React, { useContext, lazy, memo } from 'react';
import { FirebaseContext } from '../../state';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const ContainerImage = lazy(() => import('./style').then((mod) => ({ default: mod.ContainerImage })));
const Image = lazy(() => import('./style').then((mod) => ({ default: mod.Image })));

const Block = lazy(() => import('../../Layout/Block/Block'));
const BaseTitle = lazy(() => import('../../Components/BaseTitle/BaseTitle'));
const BottomRec = lazy(() => import('../../Components/BottomRec/BottomRec'));

const Clients = () => {
    const { lists } = useContext(FirebaseContext);

    return (
        <Block>
            <BaseTitle title='НАШИ КЛИЕНТЫ' />
            <Wrapper>
                {lists.logos &&
                    lists.logos.map((item) => (
                        <ContainerImage id={item.id} key={item.id}>
                            <Image src={item.url} alt='' />
                        </ContainerImage>
                    ))}
            </Wrapper>
            <BottomRec />
        </Block>
    );
};

export default memo(Clients);
