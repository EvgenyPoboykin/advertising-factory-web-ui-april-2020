import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(2, 1fr);
	width: 1400px;
	padding-top: 30px;
	padding-bottom: 30px;
	grid-gap: 30px;
	justify-content: center;

	@media only screen and (max-width: 1500px) {
		width: 1240px;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	@media only screen and (max-width: 1300px) {
		width: 800px;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}

	@media only screen and (max-width: 835px) {
		width: 100%;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}

	@media only screen and (max-width: 589px) {
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
`;

export const ContainerImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media only screen and (max-width: 1500px) {
		${(props) => props.id === 11 && `display: none;`}
		${(props) => props.id === 12 && `display: none;`}
	}
	@media only screen and (max-width: 1300px) {
		${(props) => props.id === 11 && `display: flex;`}
		${(props) => props.id === 12 && `display: flex;`}
	}
`;
export const Image = styled.img`
	width: 70%;
`;
