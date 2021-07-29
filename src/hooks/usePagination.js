import { useState } from 'react';

export const usePagination = (dataPassed = [], itemsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentItems, setCurrentItems] = useState(itemsPerPage);
	const totalPage = Math.ceil(dataPassed.length / itemsPerPage);
	const totalItems = dataPassed.length;
	const start = (currentPage - 1) * itemsPerPage;
	const data = dataPassed.slice(start, start + itemsPerPage);

	const nextPage = () => {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPage));
		setCurrentItems((currentItems) =>
			Math.min(currentItems + itemsPerPage, totalItems)
		);
	};

	const prevPage = () => {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
		setCurrentItems((currentItems) =>
			Math.max(currentItems - itemsPerPage, itemsPerPage)
		);
	};

	return { data, totalItems, currentItems, nextPage, prevPage, currentPage };
};
