import styled from 'styled-components';
import {
	space,
	color,
	typography,
	layout,
	flexbox,
	position,
} from 'styled-system';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
	box-sizing: border-box;
	${space}
	${color}
	${typography}
	${layout}
	${flexbox}
	${position}
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	-webkit-justify-content: center;
	width: ${(props) => (props.width ? props.width : '172px')};
	height: ${(props) => (props.height ? props.height : '48px')};
	padding: ${(props) => (props.padding ? props.padding : '0 24px')};
	background-color: ${(props) => (props.bg ? props.bg : '#EDEDED')};
	color: ${(props) => (props.color ? props.color : '#A3A3A3')};
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : '20.5px'};
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	backdrop-filter: ${(props) => props.glass && 'blur( 30px)'};
	-webkit-backdrop-filter: ${(props) => props.glass && 'blur(30px)'};
	box-shadow: 0px 0px 4px 1px
		${(props) =>
			props.focusActiveColor ? props.focusActiveColor : 'transparent'};

	&:focus {
		box-shadow: 0px 0px 4px 1px
			${(props) => (props.focusColor ? props.focusColor : 'rgb(29,31,39, .3)')};
		${(props) => props.focusScale && 'transform: scale(1.1);'}
	}

	&:hover {
		background-color: ${(props) =>
			props.hover ? props.focusColor : props.hoverGroup && props.hoverbg};
		color: ${(props) =>
			props.hover ? 'white' : props.hoverGroup && props.hoverColor};
		${(props) => props.focusScale && 'transform: scale(1.2);'}
	}
`;
