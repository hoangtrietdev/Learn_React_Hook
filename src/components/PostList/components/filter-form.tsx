import React, { FC, useRef, useState } from "react";

export const FilterForm: FC<{
	onFilter: any;
}> = ({ onFilter }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const typingTimeoutRef: any = useRef(null);

	const handleSearchTemp = (e: any) => {
		setSearchTerm(e.target.value);
		if (!onFilter) return;

		if (typingTimeoutRef.current) {
			clearTimeout(typingTimeoutRef.current);
		}

		typingTimeoutRef.current = setTimeout(() => {
			const formValue = {
				searchTerm,
			};

			onFilter(formValue);
		}, 300);
	};

	return (
		<form action="">
			<input type="text" value={searchTerm} onChange={handleSearchTemp} />
		</form>
	);
};

export default FilterForm;
