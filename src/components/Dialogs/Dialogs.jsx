import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Person from './Person/Person.jsx';
import Message from './Message/Message.jsx';
import NewMessage from './NewMessage/NewMessage.jsx';


const Dialogs = (props)=>{

	let personElements = props.infoName
		.map(el => <Person name={el.name} id={el.id}/>
		);

	let messageElements = props.infoMessage
		.map( el=> <Message message={el.message}/>
			);


	return(
		<div className={s.dislogs}>
			<div className={s.person}>
				{

					personElements

				}
			</div>
			<div className={s.message}>
				{

					messageElements

				}
				
			</div>
			<div className={s.new}>
				<NewMessage />
			</div>
		</div>
		)
}


 




export default Dialogs;