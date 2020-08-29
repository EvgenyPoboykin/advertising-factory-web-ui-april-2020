import styled from 'styled-components';

const animation = 'transition: all 300ms ease-in-out';

export const HoverContainer = styled.div`
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 25%;
    bottom: 0;

    ${animation}
`;
export const HoverColorPallet = styled.div`
    position: absolute;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.4;

    width: 100%;
    height: 100%;
    bottom: 0;

    z-index: 1;
`;

export const HoverText = styled.div`
    font-size: 0.8rem;
    text-align: center;
    z-index: 2;

    @media only screen and (max-width: 800px) {
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
    }
    @media only screen and (max-width: 415px) {
        font-size: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;
