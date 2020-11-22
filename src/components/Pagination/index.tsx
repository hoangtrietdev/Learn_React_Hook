import React, { FC } from "react";

export type PageType = {
	_page: number;
	_limit: number;
	_totalRows: number;
};

export const Pagination: FC<{ pagination: PageType; onPageChange: any }> = ({
	pagination,
	onPageChange,
}) => {
	const { _page, _limit, _totalRows } = pagination;
	const totalPages = Math.ceil(_totalRows / _limit);
	const handlePageChange = (newPage: number) => {
		if (onPageChange) {
			onPageChange(newPage);
		}
	};
	return (
		<div>
			<button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
				Prev
			</button>
			<button
				disabled={_page >= totalPages}
				onClick={() => handlePageChange(_page + 1)}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
