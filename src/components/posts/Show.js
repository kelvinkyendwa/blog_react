// Shows all the posts in the database
import React, { useState, useEffect } from "react";
import { withRouter, useHistory, Link } from "react-router-dom";
import { Button, List, Space, Typography } from "antd";

function ShowPosts() {
	const [posts, setPosts] = useState([{}]);
	const [params, setParams] = useState("id");
	const history = useHistory();

	useEffect(() => {
		fetch("http://localhost:5000/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data));
	});
	const { Title } = Typography;
	return (
		<div>
			<Title>All Posts</Title>
			<Space>
				<List itemLayout="horizontal">
					{posts.map((post) => (
						<List.Item>
							<List.Item.Meta description={post.title} />
							{post.description}

							<Button
								type="primary"
								onClick={() => history.push(`/posts/${post._id}`)}
							>
								Go to Post
							</Button>
						</List.Item>
					))}
				</List>
			</Space>
		</div>
	);
}
export default withRouter(ShowPosts);
