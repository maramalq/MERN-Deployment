import axios from 'axios';
import React, { useState } from 'react';
import Form from '../components/Form';
import { Link, navigate } from '@reach/router';

const NewPirate = (props) => {
	const [formInputs , setFormInputs] = useState({
		name:'',
		image:'',
		treasure:0,
		catch:'',
		position:'',
		pegLeg: true,
		eyePatch: true,
		hookHand: true,
	});
	const [errors, setErrors] = useState([]);


	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8000/api/pirate',formInputs)
		.then((res) => {
			console.log("data for post:" , res.data)
			navigate(`/pirate/${res.data._id}`)
		})
		.catch(err => {
			const errorResponse = err.response.data.errors;
			const errorArr = [];
			for (const key of Object.keys(errorResponse)) {
			errorArr.push(errorResponse[key].message);
			}
			setErrors(errorArr);
		})
	}

	const handleChange = (e) => {
		
		if (e.target.name === "pegLeg") {
                        console.log("e.target.checked", e.target.checked);
                        setFormInputs({
                        ...formInputs,
                        [e.target.name]: e.target.checked,
                });
                }

                else if (e.target.name === "hookHand") {
                        console.log("e.target.checked", e.target.checked);
                        setFormInputs({
                        ...formInputs,
                        [e.target.name]: e.target.checked,
                        });
                } 

		else if (e.target.name === "eyePatch") {
                        console.log("e.target.checked", e.target.checked);
                        setFormInputs({
                        ...formInputs,
                        [e.target.name]: e.target.checked,
                });
                } 
		else {
                        setFormInputs({
                        ...formInputs,
                        [e.target.name]: e.target.value,
                })}
		console.log("e.target.name:", e.target.name);
		console.log("e.target.value:", e.target.value);
		console.log("e.target.type:", e.target.type);

	}

		

	return(
		<div>
			<Link to="/pirates">Crew Board</Link>
			<div>
				<h1>Add Pirate</h1>
				{errors.map((err, index) => (
				<p key={index}>{err}</p>
				))}
				<Form formInputs={formInputs} setFormInputs={setFormInputs} 
				errors={errors} setErrors={setErrors} buttonText={"Add Pirate"}
				handleSubmit={handleSubmit} handleChange={handleChange}/>
			</div>
		</div>
	);
}

export default NewPirate;