import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PirateInfo = ({id}) => {
    const [pirate , setPirate] = useState({
        name:'',
	image:'',
	treasure:0,
	catch:'',
	position:'',
	pegLeg: true,
	eyePatch:true,
	hookHand:true,
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.log(err))
    }, [id])

    return(
        <div>
            <h1>{pirate.name}</h1>

            <div>
                <img src={pirate.image} alt={pirate.name} style={{ width: "300px" }} />

            </div>
            <div>
                <h1> About </h1>
                <h3>Position: {pirate.position} </h3>
                <h3>Treasures: {pirate.treasure} </h3>
                <h3>Peg Leg: {pirate.pegLeg ? <button class="btn btn-primary">YES</button> : <button class="btn btn-primary">NO</button>}</h3>
                <h3>Eye Patch: {pirate.eyePatch ? <button class="btn btn-primary">YES</button> : <button class="btn btn-primary">NO</button>}</h3>
                <h3>Hook Hand: {pirate.hookHand ? <button class="btn btn-primary">YES</button> : <button class="btn btn-primary">NO</button>}</h3>
            </div>
            
        </div>
    )
}

export default PirateInfo;