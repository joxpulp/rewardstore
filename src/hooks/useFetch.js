import { useState, useEffect } from "react";

export const useFetch = (url) => {
    
	const [data, setData] = useState({
		data: [],
		fetched: false,
	});


	useEffect(() => {

		const getData = async () => {
			try {
				const response = await fetch(url);
				if (response.status === 200) {
					const data = await response.json();
					setData({ data: data, fetched: true });
				}
			} catch (error) {
				throw console.log(error);
			}
		};

		url && getData();

	},[url]);

	return { data, setData };
};
