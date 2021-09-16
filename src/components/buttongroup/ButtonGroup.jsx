import { useState, cloneElement, useEffect } from 'react';
import { Button } from './buttons';

const ButtonGroup = ({
	children,
	activebg,
	defaultbg,
	activeColor,
	defaultColor,
	hoverGroup,
	focus,
}) => {
	const [activeButton, setActiveButton] = useState(null);

	return (
		<>
			{children.map((child, index) =>
				cloneElement(child, {
					setActiveButton: () => setActiveButton(index),
					key: index,
					bg: activeButton === index ? activebg : defaultbg,
					color: activeButton === index ? activeColor : defaultColor,
					focusActiveColor: activeButton === index ? activebg : defaultbg,
					activeColor: activeColor,
					activebg: activebg,
					hoverGroup: hoverGroup,
					focusColor: focus,
				})
			)}
		</>
	);
};

const ButtonGP = (props) => {
	const handleClick = (e) => {
		props.setActiveButton();
		props.onClick(e);
	};

	useEffect((e) => {
		if (props.defaultActive) {
			props.setActiveButton();
			props.onClick(e);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Button
			{...props}
			focusColor={props.focusColor && props.activebg}
			hoverbg={props.activebg}
			hoverColor={props.activeColor}
			onClick={(e) => handleClick(e)}
			defaultActive={props.defaultActive}
		>
			{props.children}
		</Button>
	);
};

export { ButtonGroup, ButtonGP };
