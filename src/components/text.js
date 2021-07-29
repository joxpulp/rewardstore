import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Text = styled(motion.p)`
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
	margin-right: ${(props) => props.marginRight};
	padding: ${(props) => props.padding};
	border-top: ${(props) => props.borderTop};
	border-right: ${(props) => props.borderRight};
	border-bottom: ${(props) => props.borderBottom};
	border-left: ${(props) => props.borderLeft};
	border-radius: ${(props) => props.borderRadius};
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize};
	transition: ${(props) => props.transition};
	cursor: ${(props) => props.cursor};
	box-shadow: ${(props) => props.boxShadow};
`;