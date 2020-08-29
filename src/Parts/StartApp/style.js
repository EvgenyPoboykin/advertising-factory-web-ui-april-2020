import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 100%;
    padding-left: 30px;
    padding-right: 30px;
    z-index: 2;

    @media only screen and (max-width: 1155px) {
        padding-left: 50px;
        padding-right: 50px;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
