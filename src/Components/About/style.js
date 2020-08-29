import styled from 'styled-components';
const animation = 'transition: all 300ms ease-in-out';

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: space-around;

    @media (max-width: 835px) {
        width: 70%;
    }
`;
export const Input = styled.input`
    text-align: justify;
    font-size: 1.2 rem;
    color: #fff;
    overflow-y: scroll;
    width: 300px;
    padding: 10px;
    font-weight: 600;
    background-color: #121212;
    border: 1px solid #ec1c24;
    border-radius: 2px;

    @media (max-width: 835px) {
        width: 100%;
    }
`;
export const Btn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: #000;
    text-transform: uppercase;
    border: 1px solid #999;
    color: #999;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    outline: 0;
    border-radius: 2px;
    &:hover {
        color: #ec1c24;
        border: 1px solid #ec1c24;
    }
`;

export const MessageVeriContainer = styled.div`
    width: 100%;
    display: ${(props) => (props.vis ? 'flex' : 'none')};
    opacity: ${(props) => (props.vis ? '1.0' : '0')};
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    ${animation}
`;
export const MessageVeri = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    text-transform: uppercase;
    color: #fff;
    background-color: #ec1c24;
`;
