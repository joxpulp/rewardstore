import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box';
import { Text } from '../../components/text';
import { Title } from '../../components/title';
import { AnimatePresence } from 'framer-motion';

function RedeemModal() {
	const { redeem, setRedeem, fetchRedeem, loadingRedeem, setFetchRedeem } =
		useContext(AppContext);

	const handleRedeem = () => {
		setFetchRedeem(false);
		setRedeem({ fetched: false });
	};
	return (
		<AnimatePresence exitBeforeEnter>
			{fetchRedeem && (
				<Box
					initial={{ opacity: 0, transition: { duration: 0.1 } }}
					animate={{ opacity: 1, transition: { duration: 0.1 } }}
					exit={{ opacity: 0, transition: { duration: 0.1 } }}
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
						<Box
							key='loading'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<Title color='#474747eb'>Cargando...</Title>
						</Box>
					) : (
						<Box
							key='loaded'
							width={['90%', '90%', 'auto']}
							bg='#ffffffd8'
							borderRadius='20px'
							padding='20px'
							flexDirection='column'
							alignItems='center'
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
						>
							<Title color={redeem.fetched ? '#4d9eb3' : '#9c2d2deb'}>
								{redeem.fetched ? 'Congrats 🎊' : 'Ups... 😥'}
							</Title>
							<Text color={redeem.fetched ? '#4fb8d3' : '#976363eb'}>
								{redeem.fetched
									? 'Your product was redeemed succesfully, click on the user name to view your purchases 😁'
									: 'There was an error, get a cup of ☕, relax and try again later'}
							</Text>
						</Box>
					)}
				</Box>
			)}
		</AnimatePresence>
	);
}

export default RedeemModal;
