import React from 'react';
import axios from "axios";
import { navigate } from "@reach/router";

const DeleteButton = ({ id, successCallBack }) => {
	const clickFunction = (id) => {
		axios.delete(`http://localhost:8000/api/pirate/${id}`)
		.then((res) => {
		console.log(res);
		successCallBack();
		navigate("/pirates");
		})
		.catch((err) => console.log(err));
	};

	return (
		<>
			<button className="btn btn-danger" onClick={() => clickFunction(id)}>Walk the Plank</button>
		</>
	);
};

export default DeleteButton;