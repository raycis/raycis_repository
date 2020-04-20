import React from 'react';
import s from './NewMessage.module.css';



const NewMessage = (props) =>{

	let newMessageData = React.createRef();
	
	let addMessage = ()=>{
	 let text = newMessageData.current.value;
	 alert(text); 
	};


	return(
		<div className={s.area}>
			<textarea className={s.textarea} ref={newMessageData} ></textarea>
			<button className={s.btn} onClick={addMessage}>Отправить</button>
		</div>

		)
}

export default NewMessage;