import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 60px;
    position: fixed;
    background-color: #000;
    z-index: 200;
    display: flex;
    flex-basis: 33.33vw;
    justify-content: center;
    font-family: 'MyriadPro-Bold';
`;
export const MessageContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 20px;
    position: fixed;
    background-color: #ec1c24;
    z-index: 199;
    display: flex;
    flex-basis: 33.33vw;
    justify-content: center;
    font-family: 'MyriadPro-Bold';
    font-size: 1.2rem;
    color: #fff;
    align-self: center;
    transition: all 300ms ease-in-out;
    text-align: center;

    top: ${(props) => (props.message ? '60px' : '-60px')};
`;
export const Container = styled.div`
    max-width: 980px;
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    color: #f2f2f2;
    font-size: 14px;
`;
export const Botton = styled.div`
    opacity: 0.9;
    cursor: pointer;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 425px) {
        font-size: 0.8rem;
        width: 120px;
    }

    @media only screen and (max-width: 375px) {
    }
`;
export const BottonLink = styled.a`
    font-size: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-basis: 100%;
    opacity: 0.9;
    cursor: pointer;
    text-decoration: none;
    color: #fff;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 800px) {
        font-size: 18px;
        flex-direction: column;
    }
    @media only screen and (max-width: 425px) {
        flex-basis: 50%;
    }

    @media only screen and (max-width: 375px) {
        font-size: 18px;
    }
`;

export const Code = styled.div`
    opacity: 0.7;
    padding-right: 10px;

    @media only screen and (max-width: 800px) {
        text-align: center;
        padding-right: 0px;
        font-size: 14px;
    }

    @media only screen and (max-width: 425px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 375px) {
        font-size: 10px;
    }
`;
export const Tel = styled.div`
    @media only screen and (max-width: 800px) {
        text-align: center;
        padding-right: 0px;
    }

    @media only screen and (max-width: 425px) {
        font-size: 20px;
    }
`;
