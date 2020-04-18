import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Name__item = (props)=>{
	return(
		<div className={s.name__item}>
					<NavLink to={'/dialogs/'+props.id} activeClassName={s.active}>{props.name}</NavLink>
				</div>
		)
}

const Message__item = (props)=>{
	return(
		<div className={s.massage__item}>{props.message}</div>

		)
}

const Dialogs = (props)=>{
	return(
		<div className={s.dislogs}>
			<div className={s.name}>
				<Name__item name='Игорь' id='1'/>
				<Name__item name='Валера' id='2'/>
				<Name__item name='Костя' id='3'/>
				<Name__item name='Вася' id='4'/>
				<Name__item name='Денис' id='5'/>
				<Name__item name='Света' id='6'/>
				<Name__item name='Катя' id='7'/>
				<Name__item name='Оля' id='8'/>
			</div>
			<div className={s.message}>
				<Message__item message='Hi'/>
				<Message__item message='ow are yo'/>
				<Message__item message='yo'/>
				<Message__item message='this is sparta'/>
			</div>
		</div>
		)
}



export default Dialogs;