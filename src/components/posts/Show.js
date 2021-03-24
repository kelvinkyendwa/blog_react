// Shows all the posts in the database
import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Button, List, Space, Typography } from "antd/lib";
import "./Show.css";

function ShowPosts() {
	const [posts, setPosts] = useState([{}]);

	const history = useHistory();

	useEffect(() => {
		fetch("http://localhost:5000/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);
	const { Title } = Typography;
	return (
		<div className="Show">
			<Title>All Posts</Title>
			<Space>
				<List itemLayout="horizontal">
					{posts
						.map((post) => (
							<div key={post._id}>
								<List.Item>
									<List.Item.Meta description={post.title} />
									{post.description}
									<br />
									<Button
										type="primary"
										onClick={() => history.push(`/posts/${post._id}`)}
									>
										Go to Post
									</Button>
								</List.Item>
							</div>
						))
						.reverse()}
				</List>
			</Space>
		</div>
	);
}
export default withRouter(ShowPosts);
