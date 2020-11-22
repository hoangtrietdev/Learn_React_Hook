import React, { FC } from "react";
import FilterForm from "./components/filter-form";

export type Post = {
	id: number;
	title: string;
};

export const PostList: FC<{
	posts: Post[];
	onFilter: any;
}> = ({ posts, onFilter }) => {
	return (
		<div>
			<FilterForm onFilter={onFilter} />
			<ul className="post-list">
				{posts.map((item) => {
					return <li key={item.id}>{item.title}</li>;
				})}
			</ul>
		</div>
	);
};

export default PostList;
