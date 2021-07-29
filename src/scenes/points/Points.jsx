import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box';
import { Button } from '../../components/buttons';
import { Text } from '../../components/text';
import ButtonsPoints from '../buttonspoints/ButtonsPoints';

function Points() {
	const { setPointsModal } = useContext(AppContext);

	return (
		<Box
			width='100%'
			position='absolute'
			top='85px'
			justifyContent='flex-end'
			zIndex='1'
			padding='0 20px'
			overflow='hidden'
		>
			<Box
				width='350px'
				height='200px'
				bgColor='#fafafab3'
				flexDirection='column'
				justifyContent='space-around'
				borderRadius='10px'
				alignItems='center'
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: '100%', opacity: 0 }}
				glass
			>
				<Text color='#888888'>Select the amount of points!!</Text>
				<ButtonsPoints />
				<Box margin='0px 20px' justifyContent='space-around'>
					<Button
						width='170px'
						fontSize='15px'
						bgColor='#00d7fdba'
						color='white'
						onClick={() => setPointsModal(false)}
						glass
					>
						Cash Later / Close
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default Points;
