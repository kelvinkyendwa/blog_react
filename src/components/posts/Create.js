import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class AddPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.createPost = this.createPost.bind(this);
	}
	handleChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
		});
	}
	createPost(e) {
		e.preventDefault();
		//push to db

		let title = this.state.title;
		let description = this.state.description;

		axios
			.post(
				`http://localhost:5000/posts`,
				{ title, description },
				{
					headers: {
						"auth-token":
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFjZjczY2U4MzFjYzA5YTJkMGEwNjMiLCJpYXQiOjE2MTI1MTEwNTd9.uMkUSG8eSxpO0On845qXPlJd0lHisG6DnHgjMVmyYH0",
					},
				},
			)
			.then(() => this.props.history.push("/posts"));
	}
	render() {
		return (
			<div>
				<form className="form" onSubmit={this.createPost}>
					<input
						type="text"
						name="title"
						placeholder="post title"
						onChange={this.handleChange}
					/>
					<br />
					<textarea
						name="description"
						placeholder="description"
						onChange={this.handleChange}
					/>
					<button type="submit" onClick={this.createPost}>
						Create
					</button>
				</form>
			</div>
		);
	}
}
export default withRouter(AddPost);
