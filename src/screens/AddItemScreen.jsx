import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { POST_SHOP_RESET } from "../constants/shopConstants";
import { postShopDataAction } from "../actions/shopActions";

const AddItemScreen = ({ history }) => {
	const dispatch = useDispatch();

	const { loading, success, error } = useSelector(
		(state) => state.postShopData
	);

	const onSubmit = (values) => {
		console.log(values);
		dispatch(
			postShopDataAction({ ...values, itemId: parseInt(values.itemId) })
		);
	};

	const initialValues = {
		itemId: "",
		item: "",
		price: "",
	};

	useEffect(() => {
		if (success) {
			dispatch({ type: POST_SHOP_RESET });
			history.push("/");
		}
	}, [success, dispatch, history]);

	const validationSchema = Yup.object({
		itemId: Yup.number().required("Required!"),
		item: Yup.string().required("Required!"),
		price: Yup.number().required("Required!"),
	});

	return (
		<div>
			{loading && <Loader />}
			{error && <Message>{error}</Message>}
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<FormikControl control="input" label="Id" name="itemId" />
						<FormikControl control="input" label="item" name="item" />
						<FormikControl control="input" label="Price" name="price" />
						<Button type="submit">Add</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default AddItemScreen;
