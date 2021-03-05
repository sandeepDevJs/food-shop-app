import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { getShopDataAction } from "../actions/shopActions";
import TableData from "../components/TableData";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { DELETE_SHOP_RESET } from "../constants/shopConstants";

const HomeScreen = ({ history }) => {
	const dispatch = useDispatch();
	const { loading, error, data } = useSelector((state) => state.allShopData);
	const { loading: delLoading, error: delError, success } = useSelector(
		(state) => state.deleteShopData
	);

	useEffect(() => {
		if (success) {
			dispatch({ type: DELETE_SHOP_RESET });
		}
		dispatch(getShopDataAction());
	}, [dispatch, success]);

	return (
		<div>
			{(loading || delLoading) && <Loader />}
			{(error || delError) && <Message>{error || delError}</Message>}
			<Row>
				<Col md={10}>
					{" "}
					<h1>Shop Items</h1>{" "}
				</Col>
				<Col md={2}>
					{" "}
					<Button variant="success" onClick={() => history.push("/add")}>
						Add
					</Button>{" "}
				</Col>
			</Row>
			<br />
			<TableData history={history} data={data} />
		</div>
	);
};

export default HomeScreen;
