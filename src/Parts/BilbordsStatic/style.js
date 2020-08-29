import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    @media only screen and (max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, 1fr);

        & > div:nth-of-type(16) {
            display: ${(props) => (props.hide ? 'flex' : 'none')};
        }
    }

    @media only screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(5, 1fr);

        & > div:nth-of-type(16) {
            display: flex;
        }
    }
`;
