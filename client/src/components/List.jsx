import React from 'react';
import {Link} from '@reach/router';
import '../App.css';
import DeleteButton from './DeleteButton';

const List = ({ pirates , setPirates }) => {
	const removeFromDom = (id) => {
		setPirates(pirates.filter((pirate) => pirate._id !== id));
	};

	return(
		<div>
			{ pirates.length> 0 && pirates.sort((a, b) => a.name.localeCompare(b.name)).map((pirate , idx) => {
				return(
					<div key={idx}>
						<h1>{pirate.name}</h1>

						<p>
						<Link to={`/pirate/${pirate._id}`}><button class="btn btn-secondary">View Pirate</button></Link>
						&nbsp;
						<DeleteButton id={pirate._id} successCallBack={() => removeFromDom(pirate._id)}/>
						</p>
					</div>
				)
			})}
		</div>
	)

}

export default List;