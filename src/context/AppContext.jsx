import { useState, createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const AppContext = createContext();

function AppProvider({ children }) {
	const [amount, setAmount] = useState(0);
	const [redeemId, setRedeemId] = useState('');
	const [pointsModal, setPointsModal] = useState(false);
	const [fetchPoints, setFetchPoints] = useState(false);
	const [fetchRedeem, setFetchRedeem] = useState(false);
	const [fetchHistory, setFetchHistory] = useState(true);
	const [currentPoints, setCurrentPoints] = useState({ points: 0 });
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTEwYTkwM2Q5ZmMzODAwMjFmNjM4NDIiLCJpYXQiOjE2Mjg0ODE3OTV9.S6hLJGnDXHgGJgSumGYKkKQ1IhQZcIGbgQOA7pKqIbQ',
	};

	const { data: user, loading: loadingUser } = useFetch(
		`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/me`,
		{ headers }
	);

	const { data: points, setData: setPoints } = useFetch(
		fetchPoints &&
			`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/points`,
		{ method: 'POST', headers, body: JSON.stringify({ amount: amount }) }
	);
	const {
		data: redeem,
		setData: setRedeem,
		loading: loadingRedeem,
	} = useFetch(
		fetchRedeem &&
			`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/redeem`,
		{ method: 'POST', headers, body: JSON.stringify({ productId: redeemId }) }
	);
	const { data: products } = useFetch(
		`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/products`,
		{ headers }
	);

	const { data: history } = useFetch(
		fetchHistory &&
			`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/history`,
		{ headers }
	);

	return (
		<AppContext.Provider
			value={{
				user,
				loadingUser,
				points,
				redeem,
				setRedeem,
				products,
				setAmount,
				setRedeemId,
				fetchPoints,
				setFetchPoints,
				fetchRedeem,
				setFetchRedeem,
				pointsModal,
				setPointsModal,
				currentPoints,
				setCurrentPoints,
				setPoints,
				history,
				fetchHistory,
				setFetchHistory,
				loadingRedeem,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
