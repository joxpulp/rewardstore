import GlobalStyle from './globalstyles/globalstyles';
import Body from './scenes/body/Body';
import Header from './scenes/header/Header';

function App() {

	return (
		<div className='App'>
			<GlobalStyle />
			<Header />
			<Body />
		</div>
	);
}

export default App;
