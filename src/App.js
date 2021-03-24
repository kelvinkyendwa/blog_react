import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./routes";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

const { Header, Footer, Content } = Layout;

function App() {
	return (
		<Layout className="App">
			<Router>
				<Header>
					<Navbar />
				</Header>
				<Content>
					<Routes />
				</Content>
				<Footer>Mitau blog</Footer>
			</Router>
		</Layout>
	);
}

export default App;
