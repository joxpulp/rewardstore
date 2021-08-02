import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Title = styled(motion.h1)`
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	display: ${(props) => props.display};
	align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
	flex-direction: ${(props) => props.flexDirection};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	border-radius: ${(props) => props.borderRadius};
	background-color: ${(props) => props.bg};
	color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize};
	transition: ${(props) => props.transition};
	cursor: ${(props) => props.cursor};
	box-shadow: ${(props) => props.boxShadow};
`;
