import { useState, useEffect } from "react";

export const useFetch = (url) => {
    
	const [data, setData] = useState({
		data: [],
		fetched: false,
	});

	useEffect(() => {
        if (!url) return;
		fetch(url)
			.then((response) => response.status === 200 && response.json())
			.then((response) => {
				setData({
					data: response,
					fetched: true,
				});
			});
	}, [url]);

	return { data, setData };
};
