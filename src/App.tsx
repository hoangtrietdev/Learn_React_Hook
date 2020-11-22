import React, { useEffect, useState } from "react";
import queryString from "query-string";

import "./App.scss";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
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

	const [postList, setPostList] = useState([]);
	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 11,
	});
	const [filter, setFilter] = useState({
		_limit: 10,
		_page: 1,
		title_like: "",
	});

	const handlePageChange = (newPage: number) => {
		setFilter({
			...filter,
			_page: newPage,
		});
	};

	const handleFilterChange = (newFilter: any) => {
		setFilter({
			...filter,
			_page: 1,
			title_like: newFilter.searchTerm,
		});
	};

	useEffect(() => {
		const fetchPostList = async () => {
			try {
				const paramsString = queryString.stringify(filter);
				const reqUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
				const response = await fetch(reqUrl).then((res) => res.json());
				const { data, pagination } = response;
				setPostList(data);
				setPagination(pagination);
				console.log(response);
			} catch (error) {
				alert("Failed to fetch post list");
			}
		};
		fetchPostList();
	}, [filter]);

	return (
		<div className="app">
			<h1>Welcome to React Hooks - Todo List</h1>
			<PostList posts={postList} onFilter={handleFilterChange} />
			<Pagination pagination={pagination} onPageChange={handlePageChange} />
			{/* <TodoList
				todos={todoList}
				onTodoClick={handleTodoClick}
				onSubmitForm={onSubmitForm}
			/> */}
		</div>
	);
};

export default App;
