import { useState, cloneElement, useEffect } from 'react';
import { Button } from './buttons';

const ButtonGroup = ({
	children,
	activeBgColor,
	defaultBgColor,
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
					bgColor: activeButton === index ? activeBgColor : defaultBgColor,
					color: activeButton === index ? activeColor : defaultColor,
					focusActiveColor:
						activeButton === index ? activeBgColor : defaultBgColor,
					activeColor: activeColor,
					activeBgColor: activeBgColor,
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
			focusColor={props.focusColor && props.activeBgColor}
			hoverBgColor={props.activeBgColor}
			hoverColor={props.activeColor}
			onClick={(e) => handleClick(e)}
			defaultActive={props.defaultActive}
		>
			{props.children}
		</Button>
	);
};

export { ButtonGroup, ButtonGP };
