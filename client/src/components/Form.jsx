import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = ({ formInputs, setFormInputs, buttonText, handleSubmit, handleChange,handleCheckBox }) => {
	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-group row">
					<p>Pirate Name:{" "}
					<input type="text" className="form-control" name="name" value={formInputs.name} onChange={handleChange}/></p>
					<p> { formInputs.name.length !== 0 && formInputs.name.length < 3 ? 
					<span style={{color:'red'}}>Pirate Name must be at least 3 characters..</span> : ''} </p>	
				</div>

				<div class="form-group row">
					<p> Image URL:
					<input type="text" className="form-control" name="image" value={formInputs.image} onChange={handleChange}/></p>
					<p> { formInputs.image.length !== 0 && formInputs.image.length < 25 ? 
					<span style={{color:'red'}}>Image URL must be valid</span> : ''} </p>
				</div>

				<div class="form-group row">
					<p> of treasure Chests:
					<input type="number" name="treasure" value={formInputs.treasure} onChange={handleChange}/>
					</p>
					<p> { formInputs.treasure.length === 0 ? 
					<span style={{color:'red'}}>Number of treasure is required !!</span>: ''} </p>
				</div>

				<div class="form-group row">
					<p>Pirate catch phrase:
					<input type="text" className="form-control" name="catch" value={formInputs.catch} onChange={handleChange}/></p>
					<p> { formInputs.catch.length !== 0 && formInputs.catch.length < 3 ? 
					<span style={{color:'red'}}>Pirate catch must be at least 3 characters..</span> : ''} </p>
				</div>

				<div>
					<label>Crew Position: </label>
					<select value={formInputs.position} name="position" onChange={handleChange}>
					<option value="captain" selected>Captain</option>
					<option value="first_mate">First Mate</option>
					<option value="quarter_master">Quarter Master</option>
					<option value="boatswain">Boatswain</option>
					<option value="powder_monkey">Powder Monkey</option>
					</select>	
					<p> { formInputs.position.length === 0  ? 
					<span style={{color:'red'}}>Pirate position is required !</span> : ''} </p>

				</div >

				<div class="form-group row">
					<p><input type="checkbox" id="ckeck" name="pegLeg" value={formInputs.pegLeg} onChange={handleChange} defaultChecked/>
					Peg Leg</p>
					

				</div>

				<div class="form-group row">
					<p><input type="checkbox" id="ckeck" name="eyePatch" value={formInputs.eyePatch} onChange={handleChange} defaultChecked/>
					Eye Patch</p>
				</div>
				
				<div class="form-group row">
					<p><input type="checkbox" id="ckeck" name="hookHand" value={formInputs.hookHand} onChange={handleChange} defaultChecked/>
					Hook Hand</p>
				</div>

				<div>
					<button type="submit" className="btn btn-success">{buttonText}</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
