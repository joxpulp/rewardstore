import React from 'react';
import { Box } from '../../components/box';
import { Image } from '../../components/image';
import { Text } from '../../components/text';

function HistoryCard({ productImg, productCat, productName, productCost }) {
	return (
		<div>
			<Box
				position='relative'
				flexDirection='column'
				alignItems='center'
				bgColor='white'
				width='100%'
				boxShadow='2px 2px 4px rgba(0, 0, 0, 0.1)'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.6 } }}
			>
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
					<Text color='#616161' fontSize='18px'>
						Paid: {productCost}
					</Text>
				</Box>
			</Box>
		</div>
	);
}

export default HistoryCard;
