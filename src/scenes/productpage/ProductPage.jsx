import { useContext } from 'react';
import { useSort } from '../../hooks/useSort';
import { usePagination } from '../../hooks/usePagination';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box';
import { Text } from '../../components/text';
import { Image } from '../../components/image';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { ButtonGP, ButtonGroup } from '../../components/ButtonGroup';
import ProductList from '../productlist/ProductList';
import { AnimatePresence } from 'framer-motion';

function ProductPage() {
	const { products } = useContext(AppContext);

	const { sortState: productsSorted, sortElements } = useSort(products.data);
	const {
		data: productList,
		totalItems,
		currentItems,
		nextPage,
		prevPage,
		currentPage,
	} = usePagination(productsSorted.data, 16);

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
				width='80%'
				padding='24px 0px'
				borderBottom='1px solid #D9D9D9'
			>
				<Text
					padding='0px 24px'
					borderRight='1px solid #D9D9D9'
					color='#616161'
				>
					{`${currentItems} of ${totalItems} products`}
				</Text>
				<Text padding='0 0 0 24px' color='#616161'>
					Sort by:
				</Text>
				<Box flex={1}>
					<ButtonGroup
						activeColor='#ffffff'
						activeBgColor='#0AD4FA'
						hoverGroup
						focus
					>
						<ButtonGP
							onClick={() => sortElements('default')}
							fontSize='20px'
							margin='0px 24px'
							defaultActive
						>
							Most Recent
						</ButtonGP>
						<ButtonGP
							onClick={() => sortElements('ascending')}
							fontSize='20px'
							marginRight='24px'
						>
							Lowest Price
						</ButtonGP>
						<ButtonGP
							onClick={() => sortElements('descending')}
							fontSize='20px'
							marginRight='24px'
						>
							Highest Price
						</ButtonGP>
					</ButtonGroup>
				</Box>
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
			<ProductList productList={productList} />
			<Box
				mgBottom='64px'
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

export default ProductPage;
