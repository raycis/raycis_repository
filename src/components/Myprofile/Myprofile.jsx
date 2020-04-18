import React from 'react';
import s from './Myprofile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Myprofile = () =>{
	return(
		<div className={s.content}>
			
			<div className={s.info}>
				<div className={s.profile}>
					<ProfileInfo />
				</div>
				<div className={s.post} >
					<Posts messsge='Posts one'/>
					<Posts messsge='Posts tu'/>
					<Posts messsge='Posts 3'/>
					<Posts messsge='Posts 4'/>
					<Posts name='Перейдите на страницу пользователя, чтобы посмотреть публикации или отправить сообщение.О себе: YouTube. 84M likes. The latest and greatest music videos, trends and channels from YouTube.'/>
					
				</div>
				
			</div>
       	</div>
		
		);
}

export default Myprofile;