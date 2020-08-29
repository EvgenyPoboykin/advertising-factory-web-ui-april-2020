import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 200px);
	grid-template-rows: repeat(3, 200px);
	max-width: 1400px;
	height: auto;

	@media (max-width: 1500px) {
		grid-template-columns: repeat(6, 16.66%);
		grid-template-rows: repeat(4, 25%);
		width: 1240px;
		height: 800px;
	}
	@media (max-width: 1300px) {
		grid-template-columns: repeat(4, 25%);
		grid-template-rows: repeat(4, 25%);
		width: 800px;
		height: 800px;
	}
	@media (max-width: 835px) {
		grid-template-columns: repeat(3, 33.3333vw);
		grid-template-rows: repeat(4, 33.3333vw);
		width: 100%;
		height: 100%;
	}
`;
export const WrapperStaff = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 200px);
	grid-template-rows: repeat(3, 200px);
	max-width: 1000px;

	@media (max-width: 1500px) {
		grid-template-columns: repeat(4, 150px);
		grid-template-rows: repeat(3, 150px);
	}
	@media (max-width: 1300px) {
		grid-template-columns: repeat(4, 200px);
		grid-template-rows: repeat(3, 200px);
	}
	@media (max-width: 835px) {
		grid-template-columns: repeat(3, 33.3333vw);
		grid-template-rows: repeat(3, 33.3333vw);
	}
`;
