import React from "react";
import { useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { deleteShopDataAction } from "../actions/shopActions";

const TableData = ({ data, history }) => {
	const dispatch = useDispatch();

	const deleteData = (id) => {
		dispatch(deleteShopDataAction(id));
	};

	return (
		<Table hover responsive>
			<thead>
				<tr>
					<th>Item Id</th>
					<th>Item</th>
					<th>Price</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map((shopdata) => (
						// due to problem in provided node server
						// we are using below line
						// { shopdata.id || shopdata.itemId }
						<tr key={shopdata.id || shopdata.itemId}>
							<td>{shopdata.id || shopdata.itemId}</td>
							<td>{shopdata.title || shopdata.item}</td>
							<td>{shopdata.price}</td>
							<td>
								<Button
									onClick={() =>
										history.push(`/edit/${shopdata.id || shopdata.itemId}`)
									}
								>
									Edit
								</Button>
							</td>
							<td>
								<Button
									variant="danger"
									onClick={() => {
										if (window.confirm("Are You Sure ?")) {
											deleteData(shopdata.id || shopdata.itemId);
										}
									}}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
			</tbody>
		</Table>
	);
};

export default TableData;
