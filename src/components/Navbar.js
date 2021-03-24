import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<div>
				<Link to="post/add">Create a post</Link>
			</div>
		);
	}
}
export default withRouter(Navbar);
