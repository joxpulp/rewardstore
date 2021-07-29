import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box';
import ProductCard from '../productcard/ProductCard';

function ProductList({productList}) {
	const {
		setRedeemId,
		fetchRedeem,
		setFetchRedeem,
		currentPoints,
		setCurrentPoints
	} = useContext(AppContext);

	const handleRedeem = (id, cost, currentPoints ) => {
		setRedeemId(id);
		setFetchRedeem(true);
		const userNewPoints = currentPoints - cost
		setCurrentPoints({points: userNewPoints})
	};

	useEffect(() => {
		fetchRedeem && setFetchRedeem(false);
	});

	return (
		<Box
			width='80%'
			display='grid'
			gridColumn='repeat(4, minmax(100px, 1fr))'
			gridGap='24px'
			padding='54px 0px'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			{productList.map((product) => (
				<ProductCard
					key={product._id}
					productId={product._id}
					productImg={product.img.url}
					productCat={product.category}
					productName={product.name}
					productCost={product.cost}
					currentPoints={currentPoints.points}
					onClick={() =>
						handleRedeem(product._id, product.cost, currentPoints.points)
					}
				/>
			))}
		</Box>
	);
}

export default ProductList;
