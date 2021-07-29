import { useState } from 'react';
import { Box } from '../../components/box';
import { Image } from '../../components/image';
import { Text } from '../../components/text';
import { Button } from '../../components/buttons';
import buyblue from '../../assets/icons/buy-blue.svg';
import buywhite from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';
import { AnimatePresence } from 'framer-motion';

function ProductCard({
	productId,
	productImg,
	productCat,
	productName,
	productCost,
	currentPoints,
	onClick
}) {
	const [isHover, setIsHover] = useState(null);

	return (
		<>
			<Box
				position='relative'
				flexDirection='column'
				alignItems='center'
				bgColor='white'
				width='100%'
				boxShadow='2px 2px 4px rgba(0, 0, 0, 0.1)'
				onHoverStart={() => setIsHover(productId)}
				onHoverEnd={() => setIsHover(null)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.6 } }}
			>
				{currentPoints >= productCost ? (
					<Image
						position='absolute'
						top='0'
						right='0'
						margin='12px'
						src={buyblue}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					/>
				) : (
					<Box
						position='absolute'
						top='0'
						right='0'
						margin='12px'
						padding='11px 20px'
						borderRadius='100px'
						alignItems='center'
						bgColor='rgb(97,97,97,.8)'
						color='white'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<Text marginRight='6px' fontSize='14px'>
							You need {productCost - currentPoints}
						</Text>
						<Image src={coin} />
					</Box>
				)}
				<Image width='85%' margin='45px 0px 0px 0px' src={productImg} />
				<Box
					width='80%'
					borderTop='1px solid #D9D9D9'
					flexDirection='column'
					padding='18px 0'
				>
					<Text color='#A3A3A3' fontSize='16px'>
						{productCat}
					</Text>
					<Text color='#616161' fontSize='18px'>
						{productName}
					</Text>
				</Box>
				<AnimatePresence>
					{isHover === productId && currentPoints > productCost && (
						<Box
							bgColor='linear-gradient(180deg, rgba(10, 212, 250, 0.7) 0%, rgba(37, 187, 241, 0.4) 100%)'
							width='100%'
							height='100%'
							flexDirection='column'
							justifyContent='center'
							alignItems='center'
							position='absolute'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							glass
						>
							<Image
								position='absolute'
								top='0'
								right='0'
								margin='12px'
								src={buywhite}
							/>
							<Box marginBottom='9px' justifyContent='center' width='100%'>
								<Text marginRight='12px' fontSize='36px' color='white'>
									{productCost}
								</Text>
								<Image src={coin} />
							</Box>
							<Button
								onClick={onClick}
								fontSize='18px'
								color='#616161'
								bgColor='white'
							>
								Redeem Now
							</Button>
						</Box>
					)}
				</AnimatePresence>
			</Box>
		</>
	);
}

export default ProductCard;
