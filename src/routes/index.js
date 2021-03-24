import React, { Component } from "react";
import ShowPosts from "../components/posts/Show";
import PostDetail from "../components/posts/Detail";
import AddPost from "../components/posts/Create";
import { Switch, Route } from "react-router-dom";
import PostSpecs from "../components/posts/PostSpecs";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={(...routeProps) => <ShowPosts />} />
				<Route exact path="/posts" render={(...routeProps) => <ShowPosts />} />
				<Route
					exact
					path="/posts/:id"
					render={(...routeProps) => <PostSpecs />}
				/>
				<Route exact path="/post/add" render={(...routeProps) => <AddPost />} />
			</Switch>
		);
	}
}
export default Routes;
