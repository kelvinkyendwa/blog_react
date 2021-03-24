import React, { useEffect, useState } from "react";
import { Button, Card } from "antd/lib";
import axios from "axios";
import { withRouter, useHistory } from "react-router-dom";

const PostSpecs = (props) => {
	const [post, setPost] = useState([]);
	let history = useHistory();

	const handleBack = () => {
		history.push("/posts");
	};

	useEffect(() => {
		let postId = props.match.params.id;
		async function fetchPost() {
			const response = await axios.get(`http://localhost:5000/posts/${postId}`);
			console.log(response);
			setPost(response.data);
		}
		fetchPost();
	}, []);

	return (
		<div className="Detail">
			<Card title={post.title} bordered={false} style={{ width: 300 }}>
				<p>{post.description}</p>
				<Button type="success" style={{ marginLeft: 8 }} onClick={handleBack}>
					Go Back{" "}
				</Button>
			</Card>
			<h5>This is post with id:{post._id}</h5>
		</div>
	);
};

export default withRouter(PostSpecs);
