import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box';
import { Text } from '../../components/text';
import { Title } from '../../components/title';

function RedeemModal() {
	const { redeem, setRedeem, fetchRedeem ,loadingRedeem, setFetchRedeem } =
		useContext(AppContext);
        
	const handleRedeem = () => {
		setFetchRedeem(false);
		setRedeem({ fetched: false });
	};
	return (fetchRedeem) && (
		<Box
			position='fixed'
			zIndex='2'
			bg='#dadada7a'
			width='100%'
			height='100%'
			justifyContent='center'
			alignItems='center'
			glass
			onClick={handleRedeem}
		>
			{loadingRedeem ? (
				<Box>
					<Title color='#646464eb'>Cargando...</Title>
				</Box>
			) : (
				<Box
					width={['90%', '90%', 'auto']}
					bg='#ffffffd8'
					borderRadius='20px'
					padding='20px'
					flexDirection='column'
					alignItems='center'
				>
					<Title color='#646464eb'>
						{redeem.fetched ? 'Congrats' : 'Ups...'}{' '}
					</Title>
					<Text color='#858585eb'>
						{redeem.fetched
							? 'Your Product was redeemed succesfully, click on the user name to checkout your redeemed products'
							: 'There was an error, get a cup of coffe, relax and try again'}
					</Text>
				</Box>
			)}
		</Box>
	);
}

export default RedeemModal;
