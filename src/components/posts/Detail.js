import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";

class PostDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {},
		};
		this.getPost = this.getPost.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	getPost() {
		let postId = this.props.match.params.id;
		axios
			.get(`http://localhost:5000/posts/${postId}`)
			.then((response) => console.log(response.data));
	}
	handleBack() {
		this.props.history.push("/posts");
	}
	componentDidMount() {
		let postId = this.props.match.params.id;
		axios
			.get(`http://localhost:5000/posts/${postId}`)
			.then((response) => this.setState({ post: response.data }));
	}
	render() {
		this.postId = this.props.match.params.id;
		let post = this.state.post;
		return (
			<div>
				<h1>Post Detail</h1>
				<h5>This is post with id:{this.postId}</h5>
				<p>title {post.title}</p>
				<p>description {post.description}</p>
				<Button
					type="success"
					style={{ marginLeft: 8 }}
					onClick={this.handleBack}
				>
					Go back
				</Button>
			</div>
		);
	}
}
export default withRouter(PostDetail);
