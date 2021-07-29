import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { AnimatePresence } from 'framer-motion';
import { HeaderStyles, Nav } from './headerstyles';
import { Title } from '../../components/title';
import { Button } from '../../components/buttons';
import { Image } from '../../components/image';
import { Box } from '../../components/box';
import { colors } from '../../globalstyles/colors';
import aerolablogo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/icons/coin.svg';
import banner from '../../assets/header-x1.png';
import Points from '../points/Points';

function Header() {
	const { user, points, pointsModal, setPointsModal, setUserModal } =
		useContext(AppContext);

	return (
		<HeaderStyles>
			<AnimatePresence>{pointsModal && <Points />}</AnimatePresence>
			<Nav>
				<Image
					initial={{ x: -100, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: {
							delay: 0.2,
						},
					}}
					src={aerolablogo}
					alt='aerolablogo'
				/>
				<Box
					height='48px'
					alignItems='center'
					justifyContent='flex-end'
					color='#616161'
				>
					<Button
						width='150px'
						height='48px'
						bgColor='transparent'
						focusColor={colors.whiteColor}
						margin='0 10px'
						color='#616161'
						focusScale
						onClick={() => setUserModal(true)}
					>
						{user.data.name}
					</Button>
					<Button
						width='130px'
						height='48px'
						borderRadius='20.5px'
						color='#616161'
						fontSize='22px'
						focusColor={colors.backgroundSecunday}
						hover
						onClick={() => setPointsModal(!pointsModal)}
					>
						{points.fetched ? points.data['New Points'] : user.data.points}
						<Image mgL='6px' src={coin} alt='coin' />
					</Button>
				</Box>
			</Nav>
			<Box position='relative' color='white'>
				<Image width='100%' src={banner} alt='banner' />
				<Title position='absolute' fontSize='72px' left='132px' bottom='46px'>
					Electronics
				</Title>
			</Box>
		</HeaderStyles>
	);
}

export default Header;
