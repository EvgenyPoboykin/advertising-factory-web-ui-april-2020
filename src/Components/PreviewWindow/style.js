import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    left: 0;
    top: 0;
    background-color: #000;
    overflow: hidden;
    display: ${(props) => (props.showPreview ? 'flex' : 'none')};
`;
export const Container = styled.div`
    position: fixed;
    right: 0;
    padding-right: 20px;
    padding-top: 10px;
    z-index: 100;
`;
export const Close = styled.div`
    color: ${(props) =>
        props.itemCategory === 'showContacts' || props.itemCategory === 'showCompany' ? '#000' : '#fff'};
    cursor: pointer;
    font-size: 50px;

    @media (max-width: 415px) {
        font-size: 25px;
    }

    &:hover {
        opacity: 1;
        color: #ec1c24;
    }
`;
