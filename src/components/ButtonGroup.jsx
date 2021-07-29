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
	const {
		setActiveButton,
		onClick,
		defaultActive,
		children,
		focusColor,
		activeBgColor,
		activeColor,
	} = props;

	const handleClick = (e) => {
		setActiveButton();
		onClick(e);
	};

	useEffect((e) => {
		if (defaultActive) {
			setActiveButton();
			onClick(e);
		}
	}, [defaultActive, setActiveButton, onClick])

	return (
		<Button
			{...props}
			focusColor={focusColor && activeBgColor}
			hoverBgColor={activeBgColor}
			hoverColor={activeColor}
			onClick={(e) => handleClick(e)}
			defaultActive={defaultActive}
		>
			{children}
		</Button>
	);
};

export { ButtonGroup, ButtonGP };
