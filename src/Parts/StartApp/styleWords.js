import styled from 'styled-components';

export const ContainerText = styled.div`
    padding-top: 30px;

    @media only screen and (max-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const Line = styled.div`
    height: 4px;
    width: 300px;
    background-color: #000;
`;
export const Words = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 50px;
    cursor: pointer;

    @media only screen and (max-width: 1155px) {
    }

    @media only screen and (max-width: 800px) {
        align-items: center;
    }
`;
export const Word = styled.img`
    height: 60px;
    opacity: 1;

    &:hover {
        opacity: 0.7;
    }

    @media only screen and (max-width: 800px) {
        height: 40px;
    }
`;
