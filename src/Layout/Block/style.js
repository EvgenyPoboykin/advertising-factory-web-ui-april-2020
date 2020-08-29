import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    background-color: ${(props) => (props.gray ? '#f7f7f7' : props.image ? 'rgba(1, 1, 1, 0)' : '#fff')};
    height: ${(props) => (props.vh ? '100vh' : null)};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
`;
export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 130px;
    background-color: rgba(1, 1, 1, 0);

    @media only screen and (max-width: 835px) {
        padding-top: 60px;
        padding-bottom: 65px;
    }

    @media only screen and (max-width: 425px) {
        padding-top: 30px;
        padding-bottom: 35px;
    }
`;
export const Content = styled.div`
    display: flex;
    width: 1400px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(1, 1, 1, 0);

    @media only screen and (max-width: 1500px) {
        width: 1240px;
        padding: 0px;
    }

    @media only screen and (max-width: 1300px) {
        width: 800px;
    }

    @media only screen and (max-width: 835px) {
        width: 100%;
        padding: 0px;
    }
`;
