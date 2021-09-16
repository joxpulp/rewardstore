import { useContext } from 'react';
import { useSort } from '../../hooks/useSort';
import { usePagination } from '../../hooks/usePagination';
import { AppContext } from '../../context/AppContext';
import { AnimatePresence } from 'framer-motion';
import { Box } from '../../components/box/box';
import { Text } from '../../components/text/text';
import { Image } from '../../components/image/image';
import ProductList from '../productlist/ProductList';
import ButtonFilters from '../buttonfilters/ButtonFilters';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

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
			animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
			exit={{ x: '-100%', transition: { ease: 'easeInOut' } }}
		>
			<Box
				as='section'
				alignItems='center'
				flexDirection={['column', 'column', 'row']}
				width={['95%', '80%']}
				py={['24px']}
				borderBottom='1px solid #D9D9D9'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.2 } }}
				exit={{ x: '-100%', transition: { ease: 'easeInOut' } }}
			>
				<Text
					padding='0px 24px'
					borderRight={['none', 'none', '1px solid #D9D9D9']}
					color='#616161'
				>
					{`${currentItems} of ${totalItems} products`}
				</Text>
				<Text
					display={['none', 'none', 'flex']}
					paddingLeft={[0, 0, '24px']}
					color='#616161'
				>
					Sort by:
				</Text>
				<ButtonFilters sortElements={sortElements}/>
				<Box>
					<AnimatePresence>
						{currentPage > 1 && (
							<Image
								marginRight='10px'
								pointer
								onClick={() => prevPage()}
								src={arrowLeft}
								alt='arrowLeft'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						)}
					</AnimatePresence>
					<Image
						pointer
						onClick={() => nextPage()}
						src={arrowRight}
						alt='arrowRight'
					/>
				</Box>
			</Box>
			<ProductList productList={productList} />
			<Box
				as='footer'
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
								alt='arrowLeft'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						)}
					</AnimatePresence>
					<Image
						pointer
						onClick={() => nextPage()}
						src={arrowRight}
						alt='arrowRight'
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default ProductPage;
