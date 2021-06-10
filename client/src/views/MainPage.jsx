import { Link } from "@reach/router";
import React, { useState , useEffect }  from "react";
import axios from 'axios';
import '../App.css';
import List from "../components/List";

const MainPage = () => {
	const [pirates , setPirates] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8000/api/pirate')
			.then(res => {
				console.log(res.data)
				setPirates(res.data)
			})
			.catch(err => console.log(err))
	}, [] );

	return(
		<div >
			<h1>Pirates Crew</h1>


			<Link to='/pirate/new'>Add Pirate</Link>
			<div className="box">
				<List pirates={pirates} setPirates={setPirates}/>
			</div>
		</div>
	)
}

export default MainPage;