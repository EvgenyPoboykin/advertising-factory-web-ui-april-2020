import styled from 'styled-components';

export const Content = styled.div`
    max-width: 600px;
    width: 100%;
    color: #cecece;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-height: 640px) {
        transform: scale(0.9);
    }

    @media (max-height: 568px) {
        transform: scale(0.8);
    }
`;

export const Logo = styled.img`
    padding-bottom: 20px;
    max-width: 500px;

    @media (max-width: 835px) {
        width: 70%;
    }
`;
