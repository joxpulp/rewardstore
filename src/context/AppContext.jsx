import { useState, createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { usePagination } from '../hooks/usePagination';

export const AppContext = createContext();

function AppProvider({ children }) {
	const [amount, setAmount] = useState(0);
	const [pointsModal, setPointsModal] = useState(false);
	const [fetchPoints, setFetchPoints] = useState(false);

	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRmMTU5MTY3Mjk2ZTAwMTk5NjQxMzYiLCJpYXQiOjE2MjUyMzI3ODV9.VtTEAHztgwB8UpIUoBf0pydVpIrEIRV8QoaqbXopJmQ',
	};

	const { data: user, setData: setUser } = useFetch(
		`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/me`,
		{ headers }
	);

	const { data: points } = useFetch(
		fetchPoints &&
			`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/user/points`,
		{ method: 'POST', headers, body: JSON.stringify({ amount: amount }) }
	);
	const { data: redeem, setData: setRedeem } = useFetch(
		`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/redeem`,
		{ method: 'POST', headers }
	);
	const { data: products, setData: setProducts } = useFetch(
		`https://private-eaac9f-aerolabchallenge.apiary-proxy.com/products`,
		{ headers }
	);

	const { data: productList, totalItems, currentItems, nextPage, prevPage, currentPage } = usePagination(products.data, 16);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				points,
				redeem,
				setRedeem,
				productList,
				setProducts,
				amount,
				setAmount,
				setFetchPoints,
				fetchPoints,
				pointsModal,
				setPointsModal,
				totalItems,
				currentItems,
				nextPage,
				prevPage,
				currentPage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
