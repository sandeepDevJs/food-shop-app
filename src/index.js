import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./bootstrap.min.css";

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
