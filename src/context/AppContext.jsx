import { useState, createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const AppContext = createContext();

function AppProvider({ children }) {
	const [amount, setAmount] = useState(0);
	const [redeemId, setRedeemId] = useState('');
	const [pointsModal, setPointsModal] = useState(false);
	const [fetchPoints, setFetchPoints] = useState(false);
	const [fetchRedeem, setFetchRedeem] = useState(false);
	const [fetchHistory, setFetchHistory] = useState(false)
	const [currentPoints, setCurrentPoints] = useState({ points: 0 });

	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRmMTU5MTY3Mjk2ZTAwMTk5NjQxMzYiLCJpYXQiOjE2MjUyMzI3ODV9.VtTEAHztgwB8UpIUoBf0pydVpIrEIRV8QoaqbXopJmQ',
	};

	const { data: user } = useFetch(
		`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/me`,
		{ headers }
	);

	const { data: points, setData: setPoints } = useFetch(
		fetchPoints &&
			`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/points`,
		{ method: 'POST', headers, body: JSON.stringify({ amount: amount }) }
	);
	const { data: redeem, setData: setRedeem } = useFetch(
		fetchRedeem &&
			`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/redeem`,
		{ method: 'POST', headers, body: JSON.stringify({ productId: redeemId }) }
	);
	const { data: products, setData: setProducts } = useFetch(
		`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/products`,
		{ headers }
	);

	const { data: history } = useFetch( fetchHistory &&
		`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/history`,
		{ headers }
	);

	return (
		<AppContext.Provider
			value={{
				user,
				points,
				redeem,
				setRedeem,
				products,
				setProducts,
				amount,
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
				setFetchHistory
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
