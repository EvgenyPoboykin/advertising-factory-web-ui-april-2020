import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-gap: 50px;

    @media only screen and (max-width: 1500px) {
        width: 1240px;
        grid-template-columns: 1fr auto;
    }
    @media only screen and (max-width: 1300px) {
        grid-template-rows: auto 1fr;
        grid-template-columns: 100%;
        width: 800px;
    }

    @media only screen and (max-width: 835px) {
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr;
        grid-gap: 0px;
        width: 100%;
    }
`;

export const Desc = styled.div`
    font-size: 1.2rem;
    padding-top: 30px;
    font-weight: 500;

    @media only screen and (max-width: 835px) {
        padding: 30px;
        padding-top: 0px;
        width: 100%;
        font-size: 1rem;
    }
`;
export const LeftSide = styled.div`
    width: 100%;
`;
