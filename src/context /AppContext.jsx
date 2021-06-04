import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const AppContext = createContext();

function AppProvider({ children }) {

	const headers = {
		"Content-Type": "application/json",
		Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI5NmE0MTliNzc4MTAwMjA5YzVhYmIiLCJpYXQiOjE2MjI3NjQwOTd9.tcjES7spkZwOQmw-xh8mhY3CrFQN9vr1uM7lkYxPUFE"
	};
    
	const { data } = useFetch(`https://private-eaac9f-aerolabchallenge.apiary-mock.com/user/me`, headers);

	console.log(data.data);

	return <AppContext.Provider value>{children}</AppContext.Provider>;
}

export default AppProvider;
