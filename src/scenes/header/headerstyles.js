import styled from 'styled-components';
import { colors } from '../../globalstyles/colors';

export const HeaderStyles = styled.header`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const Nav = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 0 42px;
	background-color: ${colors.whiteColor};

	@media (max-width: 40em) {
		flex-direction: column;
		padding: 10px 5px;
		height: auto;
		
	}
`;