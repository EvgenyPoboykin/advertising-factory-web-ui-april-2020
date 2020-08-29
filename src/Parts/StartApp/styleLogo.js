import styled from 'styled-components';

export const ContainerLogo = styled.div`
    display: flex;
    max-width: 1000px;
    justify-content: center;
    flex-direction: column;
`;

export const Logo = styled.img`
    width: 100%;
    object-fit: contain;
`;
export const Text = styled.div`
    padding-top: 20px;
    font-size: 24px;
    width: 100%;
    text-align: left;

    @media only screen and (max-width: 800px) {
        text-align: center;
    }

    @media only screen and (max-width: 415px) {
        font-size: 14px;
    }
`;
