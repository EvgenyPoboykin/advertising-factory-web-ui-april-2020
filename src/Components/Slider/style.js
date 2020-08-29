import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    opacity: ${(props) => (props.vis ? `1.0` : `0.0`)};
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;
export const Container = styled.div`
    display: flex;
    position: absolute;
    height: 100vh;

    width: ${(props) => props.widthslider && `${props.widthslider}00%`};
    transform: ${(props) => (props.shift ? `translateX(${props.shift}%)` : `translateX(0)`)};
    align-items: center;

    transition: ${(props) => (props.transition ? props.transition : null)};
`;

export const Button = styled.div`
    display: flex;
    position: absolute;
    align-self: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;

    cursor: pointer;
    color: #fff;
    opacity: 0.7;
    z-index: 10;

    ${(props) => (props.next ? 'right: 0;' : 'left: 0;')}

    &:hover {
        opacity: 1;
    }

    @media (max-width: 1280px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media (max-width: 700px) and (orientation: landscape) {
        display: none;
    }
    @media (max-width: 425px) {
        display: none;
    }
`;
export const ImageBotton = styled.img`
    width: 35px;

    @media (max-width: 1280px) {
        width: 25px;
    }
`;
