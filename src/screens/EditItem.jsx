import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
	PUT_SHOP_RESET,
	GET_BY_ID_SHOP_RESET,
} from "../constants/shopConstants";
import {
	getShopDataByIdAction,
	putShopDataAction,
} from "../actions/shopActions";

const EditItemScreen = ({ history, match }) => {
	let itemId = match.params.itemId;
	const dispatch = useDispatch();

	const { loading, success, error } = useSelector((state) => state.putShopData);
	const { loading: getLoading, data, error: getError } = useSelector(
		(state) => state.getByIdShopData
	);

	const onSubmit = (values) => {
		console.log(values);
		dispatch(putShopDataAction(values));
	};

	const initialValues = {
		itemId: data ? (data.itemId ? data.itemId : data.id) : "",
		item: data ? (data.item ? data.item : data.title) : "",
		price: data ? data.price : "",
	};

	useEffect(() => {
		if (success) {
			dispatch({ type: PUT_SHOP_RESET });
			dispatch({ type: GET_BY_ID_SHOP_RESET });
			history.push("/");
		}
		dispatch(getShopDataByIdAction(itemId));
	}, [success, dispatch, history, itemId]);

	const validationSchema = Yup.object({
		itemId: Yup.number().required("Required!"),
		item: Yup.string().required("Required!"),
		price: Yup.number().required("Required!"),
	});

	return (
		<div>
			{(loading || getLoading) && <Loader />}
			{(error || getError) && <Message>{error || getError}</Message>}
			<h1>Edit Item</h1>
			<Formik
				enableReinitialize
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<FormikControl control="input" label="Id" name="itemId" />
						<FormikControl control="input" label="item" name="item" />
						<FormikControl control="input" label="Price" name="price" />
						<Button type="submit">Save</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default EditItemScreen;
