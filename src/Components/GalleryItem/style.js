import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    object-fit: cover;

    &:hover {
        transition: all ease-in-out 300ms;
        transform: scale(1.2);
    }
`;

export const Adress = styled.div`
    font-size: 16px;
    padding-bottom: 10px;
`;

const staff = (props) => {
    if (props.number === 1) {
        return `grid-column: 1 / 2;
		grid-row: 1 / 2;`;
    } else if (props.number === 2) {
        return `grid-column: 2 / 4;
		grid-row: 1 / 3;`;
    } else if (props.number === 3) {
        return `grid-column: 4 / 5;
		grid-row: 1 / 2;`;
    } else if (props.number === 4) {
        return `grid-column: 1 / 2;
		grid-row: 2 / 3;`;
    } else if (props.number === 5) {
        return `grid-column: 4 / 5;
		grid-row: 2 / 3;`;
    } else if (props.number === 6) {
        return `grid-column: 1 / 3;
		grid-row: 3 / 4;`;
    } else if (props.number === 7) {
        return `grid-column: 3 / 5;
		grid-row: 3 / 4;`;
    }
};
const staff_835 = (props) => {
    if (props.number === 1) {
        return `grid-column: 1 / 2;
		grid-row: 1 / 2;`;
    } else if (props.number === 2) {
        return `grid-column: 2 / 4;
		grid-row: 1 / 3;`;
    } else if (props.number === 3) {
        return `display: none;`;
    } else if (props.number === 4) {
        return `grid-column: 1 / 2;
		grid-row: 2 / 3;`;
    } else if (props.number === 5) {
        return `grid-column: 1 / 2;
		grid-row: 3 / 4;`;
    } else if (props.number === 6) {
        return `grid-column: 2 / 3;
		grid-row: 3 / 4;`;
    } else if (props.number === 7) {
        return `grid-column: 3 / 4;
		grid-row: 3 / 4;`;
    }
};
const product = (props) => {
    if (props.number === 1) {
        return `grid-column: 1 / 2;
		grid-row: 1 / 2;`;
    } else if (props.number === 2) {
        return `grid-column: 2 / 3;
		grid-row: 1 / 2;`;
    } else if (props.number === 3) {
        return `grid-column: 3 / 5;
		grid-row: 1 / 2;`;
    } else if (props.number === 4) {
        return `grid-column: 5 / 7;
		grid-row: 1 / 3;`;
    } else if (props.number === 5) {
        return `grid-column: 7 / 8;
		grid-row: 1 / 2;`;
    } else if (props.number === 6) {
        return `grid-column: 1 / 2;
		grid-row: 2 / 3;`;
    } else if (props.number === 7) {
        return `grid-column: 2 / 4;
		grid-row: 2 / 4;`;
    } else if (props.number === 8) {
        return `grid-column: 4 / 5;
		grid-row: 2 / 3;`;
    } else if (props.number === 9) {
        return `grid-column: 7 / 8;
		grid-row: 2 / 3;`;
    } else if (props.number === 10) {
        return `grid-column: 1 / 2;
		grid-row: 3 / 4;`;
    } else if (props.number === 11) {
        return `grid-column: 4 / 6;
		grid-row: 3 / 4;`;
    } else if (props.number === 12) {
        return `grid-column: 6 / 7;
		grid-row: 3 / 4;`;
    } else if (props.number === 13) {
        return `grid-column: 7 / 8;
		grid-row: 3 / 4;`;
    }
};

const product_1500 = (props) => {
    if (props.number === 1) {
        return `grid-column: 1 / 2;
		grid-row: 1 / 2;`;
    } else if (props.number === 2) {
        return `grid-column: 2 / 3;
		grid-row: 1 / 2;`;
    } else if (props.number === 3) {
        return `grid-column: 3 / 5;
		grid-row: 1 / 2;`;
    } else if (props.number === 4) {
        return `grid-column: 5 / 7;
		grid-row: 2 / 4;`;
    } else if (props.number === 5) {
        return `grid-column: 1 / 3;
		grid-row: 4 / 5;`;
    } else if (props.number === 6) {
        return `grid-column: 3 / 4;
		grid-row: 2 / 3;`;
    } else if (props.number === 7) {
        return `grid-column: 1 / 3;
		grid-row: 2 / 4;`;
    } else if (props.number === 8) {
        return `grid-column: 4 / 5;
		grid-row: 2 / 3;`;
    } else if (props.number === 9) {
        return `grid-column: 3 / 5;
		grid-row: 4 / 5;`;
    } else if (props.number === 10) {
        return `grid-column: 5 / 6;
		grid-row: 4 / 5;`;
    } else if (props.number === 11) {
        return `grid-column: 3 / 5;
		grid-row: 3 / 4;`;
    } else if (props.number === 12) {
        return `grid-column: 6 / 7;
		grid-row: 4 / 5;`;
    } else if (props.number === 13) {
        return `grid-column: 5 / 7;
		grid-row: 1 / 2;`;
    }
};

const product_1300 = (props) => {
    if (props.number === 1) {
        return `grid-column: 1 / 2;
		grid-row: 1 / 2;`;
    } else if (props.number === 2) {
        return `grid-column: 2 / 3;
		grid-row: 1 / 2;`;
    } else if (props.number === 3) {
        return `grid-column: 3 / 5;
		grid-row: 1 / 2;`;
    } else if (props.number === 4) {
        return `display: none;`;
    } else if (props.number === 5) {
        return `grid-column: 1 / 2;
		grid-row: 4 / 5;`;
    } else if (props.number === 6) {
        return `grid-column: 3 / 4;
		grid-row: 2 / 3;`;
    } else if (props.number === 7) {
        return `grid-column: 1 / 3;
		grid-row: 2 / 4;`;
    } else if (props.number === 8) {
        return `grid-column: 4 / 5;
		grid-row: 2 / 3;`;
    } else if (props.number === 9) {
        return `grid-column: 2 / 3;
		grid-row: 4 / 5;`;
    } else if (props.number === 10) {
        return `display: none;`;
    } else if (props.number === 11) {
        return `grid-column: 3 / 4;
		grid-row: 3 / 4;`;
    } else if (props.number === 12) {
        return `grid-column: 4 / 5;
		grid-row: 3 / 4;`;
    } else if (props.number === 13) {
        return `grid-column: 3 / 5;
		grid-row: 4 / 5;`;
    }
};
const product_835 = (props) => {
    if (props.number === 1) {
        return `grid-column: 1 / 2;
		grid-row: 1 / 2;`;
    } else if (props.number === 2) {
        return `grid-column: 2 / 3;
		grid-row: 1 / 2;`;
    } else if (props.number === 3) {
        return `grid-column: 3 / 4;
		grid-row: 1 / 2;`;
    } else if (props.number === 4) {
        return `display: none;`;
    } else if (props.number === 5) {
        return `grid-column: 1 / 2;
		grid-row: 4 / 5;`;
    } else if (props.number === 6) {
        return `grid-column: 3 / 4;
		grid-row: 2 / 3;`;
    } else if (props.number === 7) {
        return `grid-column: 1 / 3;
		grid-row: 2 / 4;`;
    } else if (props.number === 8) {
        return `grid-column: 4 / 5;
		grid-row: 2 / 3;`;
    } else if (props.number === 9) {
        return `grid-column: 2 / 3;
		grid-row: 4 / 5;`;
    } else if (props.number === 10) {
        return `display: none;`;
    } else if (props.number === 11) {
        return `grid-column: 3 / 4;
		grid-row: 3 / 4;`;
    } else if (props.number === 12) {
        return `grid-column: 4 / 5;
		grid-row: 3 / 4;`;
    } else if (props.number === 13) {
        return `grid-column: 3 / 4;
		grid-row: 4 / 5;`;
    }
};

export const ContainerItem = styled.div`
    padding: 2px;

    ${(props) => (props.name === 'staff' ? staff(props) : product(props))}

    @media only screen and (max-width: 1500px) {
        ${(props) => (props.name === 'staff' ? null : product_1500(props))}
    }
    @media only screen and (max-width: 1300px) {
        ${(props) => (props.name === 'staff' ? null : product_1300(props))}
    }
    @media only screen and (max-width: 835px) {
        ${(props) => (props.name === 'staff' ? staff_835(props) : product_835(props))};
        padding: 1px;
    }
`;
