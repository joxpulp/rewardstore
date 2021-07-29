import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Box } from '../../components/box';
import ProductCard from '../productcard/ProductCard';

function ProductList() {
	const { productList, user } = useContext(AppContext);

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
					userPoints={user.data.points}
				/>
			))}
		</Box>
	);
}

export default ProductList;
