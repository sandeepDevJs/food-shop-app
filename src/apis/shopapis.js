import axios from "axios";
const config = {
	header: {
		"Content-Type": "application/json",
	},
};

const API_PREFIX = "http://localhost:3333";

export const getShopDataApi = (id = undefined) => {
	if (id) {
		return axios.get(`${API_PREFIX}/item/${id}`, config);
	} else {
		return axios.get(`${API_PREFIX}/item/listall`, config);
	}
};

export const postShopDataApi = (data) =>
	axios.post(`${API_PREFIX}/item/add`, data, config);

export const putShopDataApi = (data) =>
	axios.put(`${API_PREFIX}/item/update`, data, config);

export const deleteShopDataApi = (id) =>
	axios.delete(`${API_PREFIX}/item/delete`, config, { itemId: id });
