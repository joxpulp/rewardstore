import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { Image } from '../../components/image/image';
import { Box } from '../../components/box/box';
import { Button } from '../../components/buttongroup/buttons';
import coin from '../../assets/icons/coin.svg';

function ButtonsPoints() {
	const { setAmount, fetchPoints, setFetchPoints, setPoints } = useContext(AppContext);

	const handlePoints = (points) => {
		const pointsType = {
			1000: 1000,
			5000: 5000,
			7500: 7500,
		};
		setAmount(pointsType[points]);
		setFetchPoints(true);
		setPoints({ fetched: false });
	};

	useEffect(() => {
		fetchPoints && setFetchPoints(false);
	});

	return (
		<Box justifyContent='center'>
			<Button
				onClick={() => handlePoints(1000)}
				bg='#ffffff21'
				color={['#686868', '#888888']}
				focusColor='rgb(68, 221, 248, .7)'
				marginRight='10px'
				padding='0'
				width='90px'
				borderRadius='10px'
				hover
				glass
				initial='normal'
				whileHover='animation'
			>
				1000
				<Image
					variants={{
						normal: { scale: 1 },
						animation: { scale: 1.1, transition: { yoyo: Infinity } },
					}}
					mgL='6px'
					src={coin}
					alt='coin'
				/>
			</Button>
			<Button
				onClick={() => handlePoints(5000)}
				bg='#ffffff21'
				color={['#686868', '#888888']}
				focusColor='rgb(68, 221, 248, .7)'
				marginRight='10px'
				padding='0'
				width='90px'
				borderRadius='10px'
				hover
				glass
				initial='normal'
				whileHover='animation'
			>
				5000
				<Image
					variants={{
						normal: { scale: 1 },
						animation: { scale: 1.1, transition: { yoyo: Infinity } },
					}}
					mgL='6px'
					src={coin}
					alt='coin'
				/>
			</Button>
			<Button
				onClick={() => handlePoints(7500)}
				bg='#ffffff21'
				color={['#686868', '#888888']}
				focusColor='rgb(68, 221, 248, .7)'
				marginRight='10px'
				padding='0'
				width='90px'
				borderRadius='10px'
				hover
				glass
				initial='normal'
				whileHover='animation'
			>
				7500
				<Image
					variants={{
						normal: { scale: 1 },
						animation: { scale: 1.1, transition: { yoyo: Infinity } },
					}}
					mgL='6px'
					src={coin}
					alt='coin'
				/>
			</Button>
		</Box>
	);
}

export default ButtonsPoints;
