import styled from 'styled-components';

export const ContainerImage = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Preview = styled.img`
    max-width: 1280px;
    max-height: 1080px;

    @media only screen and (max-width: 915px) {
        width: 100%;
    }
`;
