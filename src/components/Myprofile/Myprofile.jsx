import React from 'react';
import s from './Myprofile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import NewPost from './NewPost/NewPost.jsx';
import Posts from './Posts/Posts.jsx';




const Myprofile = (props) =>{


let postElements = props.info.map(m => <Posts  message = {m.message} />);
	
	return(
		<div className={s.content}>
			
			<div className={s.info}>
				<div className={s.profile}>
					<ProfileInfo />
				</div>
				<div className='s.newPost'>
					<NewPost />
				</div>

				<div className={s.post} >
					{postElements}
				</div>
				
			</div>
       	</div>
		
		);
}

export default Myprofile;