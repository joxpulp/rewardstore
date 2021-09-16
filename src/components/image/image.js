import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Image = styled(motion.img)`
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	width: ${(props) => props.width};
	min-width: ${(props) => props.minWidth};
	height: ${(props) => (props.height ? props.height : 'auto')};
	margin: ${(props) => props.margin};
	margin-left: ${(props) => props.mgL};
	margin-right: ${(props) => props.marginRight};
	padding: ${(props) => props.padding};
	background: ${(props) => props.bg};
	cursor: ${(props) => props.pointer && 'pointer'};
	opacity: ${(props) => props.opacity}
`;
