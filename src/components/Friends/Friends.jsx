import React from 'react';
import Friend from './Friend/Friend.jsx';
import s from './Friends.module.css';

const Friends = (props) =>{
	let friendsElements = props.infoName.map( el =><Friend ava={el.ava} name={el.name} id={el.id} />);

	return(
		<div className={s.friends}>
			{friendsElements}
		</div>
		)
}


export default Friends;