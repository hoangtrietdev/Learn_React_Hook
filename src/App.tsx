import React, { useState } from "react";

import "./App.scss";
import TodoList, { Todo } from "./components/TodoList";

const App = () => {
	const [todoList, setTodoList] = useState([
		{ id: 0, title: "React Hook 0" },
		{ id: 1, title: "React Hook 1" },
		{ id: 2, title: "React Hook 2" },
	]);

	const handleTodoClick = (todo: Todo) => {
		console.log(todo);
		const index = todoList.findIndex((x: Todo) => x.id === todo.id);
		if (index < 0) return;

		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	};

	const onSubmitForm = (formValues: any) => {
		const newTodoList = [...todoList];
		newTodoList.push({ id: newTodoList.length, ...formValues });
		setTodoList(newTodoList);
	};

	return (
		<div className="app">
			<h1>Welcome to React Hooks - Todo List</h1>
			<TodoList
				todos={todoList}
				onTodoClick={handleTodoClick}
				onSubmitForm={onSubmitForm}
			/>
		</div>
	);
};

export default App;
