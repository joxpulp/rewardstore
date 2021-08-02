import { useState, useEffect } from 'react';

export const useSort = (data) => {
	const [sortState, setSortState] = useState({
		data: [],
	});
	const arrayToSort = [...data];

	useEffect(() => {
		sortState.data.length === 0 && setSortState({ data: data });
	}, [sortState.data.length, data]);

	const sortElements = (filter) => {
		const productFilters = {
			default: () => data,
			ascending: () => arrayToSort.sort((a, b) => a.cost - b.cost),
			descending: () => arrayToSort.sort((a, b) => b.cost - a.cost),
		};
		setSortState({ data: productFilters[filter]() });
	};

	return { sortElements, sortState };
};
