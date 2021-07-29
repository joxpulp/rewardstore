import { Box } from '../../components/box';
import ProductPage from '../productpage/ProductPage';

function Body() {
	return (
		<Box
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			width='100%'
			marginTop='42px'
		>
			<ProductPage/>
		</Box>
	);
}

export default Body;
