import styled from 'styled-components';
export const App = styled.div`
	background-color: rgba(1, 1, 1, 0);
	font-weight: 800;
	font-size: 50px;
	width: 100%;
	height: 100%;
`;

export const SkipLink = styled.a`
	position: absolute;
	display: none;
	top: -40px;
	left: 0;
	background: #000000;
	color: white;
	padding: 8px;
	z-index: 100;

	&:focus {
		top: 0;
	}
`;
