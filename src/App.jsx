import GlobalStyle from './globalstyles/globalstyles';
import Header from './scenes/header/Header';
import ProductPage from './scenes/productpage/ProductPage';
import HistoryPage from './scenes/historypage/HistoryPage';
import { Box } from './components/box';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import RedeemModal from './scenes/redeemmodal/RedeemModal';

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<GlobalStyle />
			<RedeemModal />
			<Header />
			<Box as='main' width='100%' marginTop={[0, 0, '42px']}>
				<AnimatePresence exitBeforeEnter >
					<Switch location={location} key={location.key}>
						<Route exact path='/rewardstore'>
							<ProductPage />
						</Route>
						<Route path='/userhistory'>
							<HistoryPage />
						</Route>
					</Switch>
				</AnimatePresence>
			</Box>
		</div>
	);
}

export default App;
