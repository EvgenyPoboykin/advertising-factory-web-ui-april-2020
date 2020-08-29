import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    padding-top: 15px;
    justify-content: ${(props) => (props.bil ? 'space-between' : 'none')};

    @media (max-width: 835px) {
        padding-right: 15px;
        padding-left: 15px;
        height: ${(props) => (props.bil ? '60px' : '30px')};
    }
`;

export const Container = styled.div`
    display: flex;
`;
export const Button = styled.button`
    width: 50%;
    text-transform: uppercase;
    border: 1px solid #0000ff;
    color: #0000ff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    outline: 0;
    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 835px) {
        font-size: 0.8rem;
        width: 90%;
    }
`;

export const Rec = styled.div`
    width: 15px;
    height: 100%;
    background-color: ${(props) => (props.blue ? '#0000FF' : '#EC1C24')};
`;
