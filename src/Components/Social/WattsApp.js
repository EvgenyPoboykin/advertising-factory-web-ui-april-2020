import React from 'react';
import styled from 'styled-components';
import wattsLogo from '../../assets/whatsapp.svg';

export const WattsAppContainer = styled.a`
    cursor: pointer;
    padding: 20px 10px;
    &:hover {
        opacity: 0.7;
    }
`;
export const WattsAppImg = styled.img`
    width: 50px;

    @media (max-width: 415px) {
        width: 30px;
    }
`;

const WattsApp = () => {
    return (
        <WattsAppContainer href='https://wa.me/79016685095' target='_blank'>
            <WattsAppImg src={wattsLogo} alt='+79016685095' />
        </WattsAppContainer>
    );
};

export default WattsApp;
