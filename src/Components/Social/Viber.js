import React from 'react';
import styled from 'styled-components';
import viderLogo from '../../assets/viber.svg';

export const ViberContainer = styled.a`
    cursor: pointer;
    padding: 20px 10px;
    &:hover {
        opacity: 0.7;
    }
`;
export const ViberImg = styled.img`
    width: 50px;

    @media (max-width: 415px) {
        width: 30px;
    }
`;

const Viber = () => {
    return (
        <ViberContainer href='viber://chat?number=+79016685095'>
            <ViberImg src={viderLogo} alt='+79016685095' />
        </ViberContainer>
    );
};

export default Viber;
