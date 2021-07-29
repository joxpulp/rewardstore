import { useContext } from 'react';
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
	const { currentPage, nextPage, prevPage, currentItems, totalItems } =
		useContext(AppContext);

	return (
			<Box
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				width='100%'
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
								onClick={(event) => console.log(event.target.outerText)}
								fontSize='20px'
								margin='0px 24px'
							>
								Most Recent
							</ButtonGP>
							<ButtonGP
								onClick={(event) => console.log(event.target.outerText)}
								fontSize='20px'
								marginRight='24px'
							>
								Lowest Price
							</ButtonGP>
							<ButtonGP
								onClick={(event) => console.log(event.target.outerText)}
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
				<ProductList />
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
