import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navs from "./components/Navs";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import EditItemScreen from "./screens/EditItem";

const App = () => {
	return (
		<Router>
			<Navs />
			<Container>
				<div className="py-3">
					<Route exact path="/" component={HomeScreen} />
					<Route path="/add" component={AddItemScreen} />
					<Route path="/edit/:itemId" component={EditItemScreen} />
				</div>
			</Container>
		</Router>
	);
};

export default App;
