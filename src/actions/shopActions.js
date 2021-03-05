import {
	GET_ALL_SHOP_REQUEST,
	GET_ALL_SHOP_SUCCESS,
	GET_ALL_SHOP_FAIL,
	POST_SHOP_REQUEST,
	POST_SHOP_SUCCESS,
	POST_SHOP_FAIL,
	PUT_SHOP_REQUEST,
	PUT_SHOP_SUCCESS,
	PUT_SHOP_FAIL,
	GET_BY_ID_SHOP_REQUEST,
	GET_BY_ID_SHOP_SUCCESS,
	GET_BY_ID_SHOP_FAIL,
	DELETE_SHOP_REQUEST,
	DELETE_SHOP_SUCCESS,
	DELETE_SHOP_FAIL,
} from "../constants/shopConstants";

import {
	getShopDataApi,
	postShopDataApi,
	putShopDataApi,
	deleteShopDataApi,
} from "../apis/shopapis";

export const getShopDataAction = () => async (dispatch) => {
	dispatch({ type: GET_ALL_SHOP_REQUEST });
	try {
		let { data } = await getShopDataApi();
		dispatch({ type: GET_ALL_SHOP_SUCCESS, payload: data.result });
	} catch (err) {
		dispatch({
			type: GET_ALL_SHOP_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const postShopDataAction = (data) => async (dispatch) => {
	dispatch({ type: POST_SHOP_REQUEST });
	try {
		let { data: rdata } = await postShopDataApi(data);

		if (rdata.status === "failed") {
			throw Error(rdata.message);
		}

		dispatch({ type: POST_SHOP_SUCCESS });
	} catch (err) {
		dispatch({
			type: POST_SHOP_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const putShopDataAction = (data) => async (dispatch) => {
	dispatch({ type: PUT_SHOP_REQUEST });
	try {
		await putShopDataApi(data);
		dispatch({ type: PUT_SHOP_SUCCESS });
	} catch (err) {
		dispatch({
			type: PUT_SHOP_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const getShopDataByIdAction = (id) => async (dispatch) => {
	dispatch({ type: GET_BY_ID_SHOP_REQUEST });
	try {
		let { data } = await getShopDataApi(id);
		dispatch({ type: GET_BY_ID_SHOP_SUCCESS, payload: data.result });
	} catch (err) {
		dispatch({
			type: GET_BY_ID_SHOP_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const deleteShopDataAction = (id) => async (dispatch) => {
	dispatch({ type: DELETE_SHOP_REQUEST });
	try {
		await deleteShopDataApi(id);
		dispatch({ type: DELETE_SHOP_SUCCESS });
	} catch (err) {
		dispatch({
			type: DELETE_SHOP_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
