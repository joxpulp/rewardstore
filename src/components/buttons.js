import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => (props.width ? props.width : '172px')};
	height: ${(props) => (props.height ? props.height : '48px')};
	margin: ${(props) => props.margin};
	margin-left: ${(props) => props.marginLeft};
	margin-right: ${(props) => props.marginRight};
	padding: ${(props) => (props.padding ? props.padding : '24px 24px')};
	background-color: ${(props) => (props.bgColor ? props.bgColor : '#EDEDED')};
	color: ${(props) => (props.color ? props.color : '#A3A3A3')};
	font-size: ${(props) => props.fontSize};
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : '20.5px'};
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	backdrop-filter: ${(props) => props.glass && 'blur( 30px)'};
	-webkit-backdrop-filter: ${(props) => props.glass && 'blur(30px)'};
	box-shadow: 0px 0px 4px 1px ${(props) => (props.focusActiveColor ? props.focusActiveColor : 'transparent')};
	

	&:focus {
		box-shadow: 0px 0px 4px 1px
			${(props) => (props.focusColor ? props.focusColor : 'rgb(29,31,39, .3)')};
		${(props) => props.focusScale && 'transform: scale(1.1);'}
	}

	&:hover {
		background-color: ${(props) =>
			props.hover ? props.focusColor : props.hoverGroup && props.hoverBgColor};
		color: ${(props) =>
			props.hover ? 'white' : props.hoverGroup && props.hoverColor};
	}
`;
