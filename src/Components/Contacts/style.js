import styled from 'styled-components';

export const ContainerContacts = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    text-align: center;
    color: #fff;
`;
export const ContainerContent = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
`;

export const ImageContainer = styled.img`
    width: 100%;
    max-width: 800px;
    padding-bottom: 20px;
`;
export const AdressContainer = styled.div`
    padding-bottom: 20px;
`;

export const Adress = styled.div`
    font-size: 1.4rem;

    @media (max-width: 415px) {
        font-size: 0.8rem;
    }
`;

export const Office = styled.div`
    font-size: 1rem;
    color: #fff;
    padding-top: 10px;

    @media (max-width: 415px) {
        font-size: 0.6rem;
    }
`;

export const Email = styled.a`
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;

    &:hover {
        color: #ec1c24;
    }

    @media (max-width: 415px) {
        font-size: 0.8rem;
    }
`;

export const Social = styled.div`
    display: flex;
`;
