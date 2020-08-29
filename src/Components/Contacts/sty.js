import styled from 'styled-components';

export const Telefons = styled.div`
    padding-bottom: 20px;
    text-transform: uppercase;
    color: #fff;
`;

export const TelefonsItem = styled.div`
    padding-bottom: 5px;
    font-size: 1.4rem;
    @media (max-width: 415px) {
        font-size: 0.8rem;
    }
`;
export const TelefonLink = styled.a`
    color: #ec1c24;
    text-decoration: none;
    font-size: 1.4rem;
    &:hover {
        color: #fa7075;
    }

    @media (max-width: 415px) {
        font-size: 0.8rem;
    }
`;
