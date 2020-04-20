import React from 'react';
import s from './NewPost.module.css';



const NewPost = (props) =>{
	
	let newPostData = React.createRef();
	
	let addPost = ()=>{
	 let text = newPostData.current.value;
	 alert(text); 
	};



	return(


		<div>
		<div className={s.logo}>Что у вас нового?</div>
			<div className={s.new}>

			<textarea className={s.textarea} ref={newPostData} ></textarea>
			<button className={s.btn} onClick={addPost}>Отправить</button>
			</div>
		</div>

		)
};



export default NewPost;