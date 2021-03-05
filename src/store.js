import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	getShopDataReducer,
	postShopDataReducer,
	putShopDataReducer,
	getShopDataByIdReducer,
	deleteShopDataReducer,
} from "./reducers/shopReducers";

const rootReducer = combineReducers({
	allShopData: getShopDataReducer,
	postShopData: postShopDataReducer,
	putShopData: putShopDataReducer,
	getByIdShopData: getShopDataByIdReducer,
	deleteShopData: deleteShopDataReducer,
});

export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
