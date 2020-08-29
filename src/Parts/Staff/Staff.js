import React, { lazy, useContext, memo } from 'react';
import staffCompany from './textStaff';
import { FirebaseContext } from '../../state';

const Wrapper = lazy(() => import('./style').then((mod) => ({ default: mod.Wrapper })));
const LeftSide = lazy(() => import('./style').then((mod) => ({ default: mod.LeftSide })));
const Desc = lazy(() => import('./style').then((mod) => ({ default: mod.Desc })));

const Block = lazy(() => import('../../Layout/Block/Block'));
const BaseTitle = lazy(() => import('../../Components/BaseTitle/BaseTitle'));
const Gallery = lazy(() => import('../../Components/Gallery/Gallery'));

const Staff = ({ partName }) => {
    const { lists } = useContext(FirebaseContext);

    return (
        <Block>
            <Wrapper>
                <LeftSide>
                    <BaseTitle title='о компании' />
                    <Desc>&emsp; {staffCompany}</Desc>
                </LeftSide>
                <Gallery list={lists && lists.staff} category partName={partName} />
            </Wrapper>
        </Block>
    );
};

export default memo(Staff);
