import "./App.css";
import ShowPosts from "./components/posts/Show";
import PostDetail from "./components/posts/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/posts" render={(...routeProps) => <ShowPosts />} />
				<Route
					exact
					path="/posts/:id"
					render={(...routeProps) => <PostDetail />}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
