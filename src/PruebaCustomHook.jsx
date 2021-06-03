import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function PruebaCustomHook() {
	const [searchClick, setSearchClick] = useState(false);
	const url = searchClick && `https://jsonplaceholder.typicode.com/users`;

	const { data, setData } = useFetch(url);
	const usersNoValid = useFetch(`https://jsonplaceholder.typicode.com/users`);

	const handleValidation = () => {
		setSearchClick(true);
	};

	const handleClick = () => {
		setData({ data: [] });
		setSearchClick(false);
	};

	return (
		<div className="App">
			<button onClick={handleValidation}>Validar para pedir fetch</button>
			<button onClick={handleClick}>Resetear</button>
			<div style={{ display: "flex" }}>
				<div style={{ width: "50%" }}>
					{data.data.map((text, index) => (
						<h5 key={index}>{text.email}</h5>
					))}
				</div>
				<div style={{ width: "50%" }}>
					{usersNoValid.data.data.map((user, index) => (
						<h5 key={index}>{user.username}</h5>
					))}
				</div>
			</div>
		</div>
	);
}

export default PruebaCustomHook;
