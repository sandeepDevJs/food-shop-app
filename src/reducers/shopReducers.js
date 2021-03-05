import {
	GET_ALL_SHOP_REQUEST,
	GET_ALL_SHOP_SUCCESS,
	GET_ALL_SHOP_FAIL,
	POST_SHOP_REQUEST,
	POST_SHOP_SUCCESS,
	POST_SHOP_FAIL,
	POST_SHOP_RESET,
	PUT_SHOP_REQUEST,
	PUT_SHOP_SUCCESS,
	PUT_SHOP_FAIL,
	PUT_SHOP_RESET,
	GET_BY_ID_SHOP_REQUEST,
	GET_BY_ID_SHOP_SUCCESS,
	GET_BY_ID_SHOP_FAIL,
	GET_BY_ID_SHOP_RESET,
	DELETE_SHOP_REQUEST,
	DELETE_SHOP_SUCCESS,
	DELETE_SHOP_FAIL,
	DELETE_SHOP_RESET,
} from "../constants/shopConstants";

export const getShopDataReducer = (state = [], action) => {
	switch (action.type) {
		case GET_ALL_SHOP_REQUEST:
			return { loading: true };

		case GET_ALL_SHOP_SUCCESS:
			return { loading: false, data: action.payload };

		case GET_ALL_SHOP_FAIL:
			return { loading: false };

		default:
			return state;
	}
};

export const postShopDataReducer = (state = {}, action) => {
	switch (action.type) {
		case POST_SHOP_REQUEST:
			return { loading: true };

		case POST_SHOP_SUCCESS:
			return { loading: false, success: true };

		case POST_SHOP_FAIL:
			return { loading: false, error: action.payload };

		case POST_SHOP_RESET:
			return {};

		default:
			return state;
	}
};

export const putShopDataReducer = (state = {}, action) => {
	switch (action.type) {
		case PUT_SHOP_REQUEST:
			return { loading: true };

		case PUT_SHOP_SUCCESS:
			return { loading: false, success: true };

		case PUT_SHOP_FAIL:
			return { loading: false, error: action.payload };

		case PUT_SHOP_RESET:
			return {};

		default:
			return state;
	}
};

export const getShopDataByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_BY_ID_SHOP_REQUEST:
			return { loading: true };

		case GET_BY_ID_SHOP_SUCCESS:
			return { loading: false, data: action.payload };

		case GET_BY_ID_SHOP_FAIL:
			return { loading: false, error: action.payload };

		case GET_BY_ID_SHOP_RESET:
			return {};

		default:
			return state;
	}
};

export const deleteShopDataReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_SHOP_REQUEST:
			return { loading: true };

		case DELETE_SHOP_SUCCESS:
			return { loading: false, success: true };

		case DELETE_SHOP_FAIL:
			return { loading: false, error: action.payload };

		case DELETE_SHOP_RESET:
			return {};

		default:
			return state;
	}
};
