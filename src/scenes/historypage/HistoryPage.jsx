import { useContext } from 'react';
import { usePagination } from '../../hooks/usePagination';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box';
import { Title } from '../../components/title';
import { Text } from '../../components/text';
import { Image } from '../../components/image';
import HistoryList from '../historylist/HistoryList';
import { AnimatePresence } from 'framer-motion';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

function HistoryPage() {
	const { history } = useContext(AppContext);
	const historyReversed = [...history.data].reverse();
	const {
		data: historyList,
		totalItems,
		currentItems,
		nextPage,
		prevPage,
		currentPage,
	} = usePagination(historyReversed, 16);
	return (
		<Box
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			width='100%'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
			exit={{ x: '-100%', transition: { ease: 'easeInOut' } }}
		>
			<Box
				alignItems='center'
				flexDirection={['column', 'column', 'row']}
				width='80%'
				padding='24px 0px'
				borderBottom='1px solid #D9D9D9'
			>
				<Text
					padding='0px 24px'
					borderRight={['none', 'none', '1px solid #D9D9D9']}
					color='#616161'
				>
					{`${currentItems} of ${totalItems} products`}
				</Text>
				<Box flex={1} justifyContent='center'>
					<Title color='#838383'>User History of Redeemed Products</Title>
				</Box>
				<Box marginTop={['10px', null]}>
					<AnimatePresence>
						{currentPage > 1 && (
							<Image
								marginRight='10px'
								pointer
								onClick={() => prevPage()}
								src={arrowLeft}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						)}
					</AnimatePresence>
					<Image pointer onClick={() => nextPage()} src={arrowRight} />
				</Box>
			</Box>
			<HistoryList historyList={historyList} />
			<Box
				marginBottom='64px'
				justifyContent='space-between'
				alignItems='center'
				width='80%'
				padding='24px 0px'
				borderBottom='1px solid #D9D9D9'
			>
				<Text padding='0px 24px' color='#616161'>
					{`${currentItems} of ${totalItems} products`}
				</Text>
				<Box>
					<AnimatePresence>
						{currentPage > 1 && (
							<Image
								marginRight='10px'
								pointer
								onClick={() => prevPage()}
								src={arrowLeft}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						)}
					</AnimatePresence>
					<Image pointer onClick={() => nextPage()} src={arrowRight} />
				</Box>
			</Box>
		</Box>
	);
}

export default HistoryPage;
