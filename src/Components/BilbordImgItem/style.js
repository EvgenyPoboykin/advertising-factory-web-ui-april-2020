import styled from 'styled-components';

const animation = 'transition: all 300ms ease-in-out';

export const ContainerImage = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    overflow: hidden;
    padding: 2px;

    @media only screen and (max-width: 835px) {
        padding: 1px;
    }

    &:hover {
        opacity: 0.9;
    }
`;
export const WrapperImage = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
        transform: scale(1.2);
    }

    ${animation}
`;
