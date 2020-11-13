import React, { FC, useState } from "react";

export const TodoForm: FC<{ onSubmit: any }> = ({ onSubmit }) => {
	const [value, setValue] = useState("");
	const handleValueChange = (e: any) => {
		setValue(e.target.value);
	};
	const handleSubmit = (e: Event) => {
		e.preventDefault();
		if (!onSubmit) return;
		const formValues = {
			title: value,
		};
		onSubmit(formValues);

		setValue("");
	};
	return (
		<form onSubmit={(e: any) => handleSubmit(e)}>
			<input type="text" value={value} onChange={handleValueChange} />
		</form>
	);
};

export default TodoForm;
