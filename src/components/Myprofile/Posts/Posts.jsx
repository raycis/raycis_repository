import React from 'react';
import sPost from './Posts.module.css';


const Posts = (props) =>{


	return(

		<div className={sPost.post}>
			<div className={sPost.item}>
			
		{props.message}

			</div>
			
		</div>
		);
}

export default Posts;