import styled from "styled-components";

export const A = styled.div`
    width: 100%;
    padding-bottom: 30px;

    @media (max-width: 835px) {
        padding-left: 15px;
    }
`;

export const B = styled.div`
    display: grid;
    grid-template-columns: 15px 1fr;
    align-items: center;
`;

export const Rec = styled.div`
    width: 15px;
    height: 100%;
    background-color: ${(props) => (props.blue ? "#0000FF" : "#EC1C24")};

    @media (max-width: 425px) {
        height: 45px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: left;
    padding-left: 0px;
    font-size: 50px;

    @media (max-width: 1300px) {
        font-size: 40px;
    }

    @media (max-width: 835px) {
        padding-left: 15px;
        font-size: 35px;
    }
    @media (max-width: 411px) {
        font-size: 14px;
        padding-left: 5px;
    }
`;

export const Title = styled.div`
    text-transform: uppercase;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    padding-left: 25px;
    font-size: 50px;

    @media (max-width: 1300px) {
        font-size: 40px;
        padding-left: 25px;
    }

    @media (max-width: 835px) {
        font-size: 35px;
        padding-left: 15px;
    }

    @media (max-width: 425px) {
        font-size: 25px;
        padding-left: 10px;
    }
`;
