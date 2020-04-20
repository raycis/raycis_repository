import React from 'react';
import s from './Friend.module.css';
	const Friend = (props) =>{
		return(
			<div >
				<img src={props.ava} alt=""/> {props.id} {props.name} 

			</div>)
}



export default Friend;