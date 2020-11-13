import React, { FC } from "react";
import { TodoForm } from "./components/form";

export type Todo = {
	id: number;
	title: string;
};

export const TodoList: FC<{
	todos: Todo[];
	onTodoClick: any;
	onSubmitForm: any;
}> = ({ todos, onTodoClick, onSubmitForm }) => {
	return (
		<div>
			<TodoForm onSubmit={(e: Event) => onSubmitForm(e)} />
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id} onClick={() => onTodoClick(todo)}>
							{todo.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;
