import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { AnimatePresence } from 'framer-motion';
import { Title } from '../../components/title';
import { Button } from '../../components/buttons';
import { Image } from '../../components/image';
import { Box } from '../../components/box';
import Points from '../points/Points';
import aerolablogo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/icons/coin.svg';
import banner from '../../assets/header-x1.png';

function Header() {
	const {
		user,
		loadingUser,
		pointsModal,
		setPointsModal,
		currentPoints,
		setCurrentPoints,
		points,
		setFetchHistory,
		fetchHistory,
	} = useContext(AppContext);

	useEffect(() => {
		user.fetched && setCurrentPoints({ points: user.data.points });
		//eslint-disable-next-line
	}, [user.fetched]);

	useEffect(() => {
		points.fetched && setCurrentPoints({ points: points.data['New Points'] });
		fetchHistory && setFetchHistory(false);
		//eslint-disable-next-line
	}, [points.fetched, fetchHistory]);

	return (
		<Box
			as='header'
			position='relative'
			width='100%'
			height='100%'
			display='block'
		>
			<AnimatePresence>{pointsModal && <Points />}</AnimatePresence>
			<Box
				as='nav'
				position='relative'
				flexDirection={['column', 'column', 'row']}
				justify-content='space-between'
				alignItems='center'
				height={['auto', 'auto', '80px']}
				padding={['10px 5px', '10px 5px', '0 42px']}
				bg='white'
			>
				<Link to='/rewardstore'>
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
						focusScale
					/>
				</Link>
				<Box
					width='100%'
					height='48px'
					alignItems='center'
					justifyContent={['space-between', 'space-between', 'flex-end']}
					color='#616161'
				>
					{loadingUser ? (
						<Box px='10px'>
							<Skeleton width={150} height={40} />
						</Box>
					) : (
						<Link to='/userhistory'>
							<Button
								width='120px'
								height='48px'
								bg='transparent'
								focusColor='white'
								mx={[0, '10px']}
								borderRadius='none'
								padding='0'
								color='#616161'
								focusScale
								onClick={() => setFetchHistory(true)}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
							>
								{user.data.name}
							</Button>
						</Link>
					)}
					{loadingUser ? (
						<Skeleton width={150} height={50} />
					) : (
						<Button
							width='130px'
							height='48px'
							borderRadius='20.5px'
							color='#616161'
							fontSize='22px'
							focusColor='#0AD4FA'
							hover
							onClick={() => setPointsModal(!pointsModal)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							{currentPoints.points}
							<Image mgL='6px' src={coin} alt='coin' />
						</Button>
					)}
				</Box>
			</Box>
			<Box as='section' width='100%' position='relative' color='white'>
				<Image
					width='100%'
					height='100%'
					minWidth='100%'
					src={banner}
					alt='banner'
				/>
				<Title
					overflow='hidden'
					position='absolute'
					fontSize={['40px', '72px']}
					left={['20px', '20px', '132px']}
					bottom={['20px', '20px', '46px']}
				>
					Electronics
				</Title>
			</Box>
		</Box>
	);
}

export default Header;