import React from 'react';
import s from './Person.module.css';
import {NavLink} from 'react-router-dom';

const Person = (props)=>{
	return(
		<div className={s.person__item}>
					<NavLink to={'/dialogs/'+props.id} activeClassName={s.active}>{props.name}</NavLink>
				</div>
		)
}


export default Person;