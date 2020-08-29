import styled from 'styled-components';

export const Adress = styled.div`
    color: #fff;
    display: flex;
    font-size: 1.2rem;
    padding-top: 20px;

    @media (max-width: 835px) {
        font-size: 1rem;
    }
`;
export const AdressNumber = styled.div`
    color: #fff;
    background-color: red;
    font-size: 1.2rem;
    padding: 2px 6px;
    border-radius: 2px;

    @media (max-width: 835px) {
        font-size: 1rem;
    }

    @media (max-width: 415px) {
        font-size: 0.8rem;
    }
`;
export const AdressItem = styled.div`
    color: #fff;
    font-size: 1px.2rem;
    padding: 2px 10px;
    border-radius: 2px;

    @media (max-width: 835px) {
        font-size: 1rem;
    }

    @media (max-width: 415px) {
        text-align: center;
        font-size: 0.8rem;
    }
`;
export const AdressDesc = styled.div`
    color: #fff;
    font-size: 1rem;
    opacity: 0.8;
    padding-top: 10px;

    @media (max-width: 835px) {
        font-size: 0.8rem;
    }

    @media (max-width: 415px) {
        font-size: 0.6rem;
    }
`;
