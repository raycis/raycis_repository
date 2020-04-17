import React from 'react';
import sCont from './Content.module.css';
import Posts from './Posts/Posts.jsx';

const Content = () =>{
	return(
		<div className={sCont.content}>
			
			<div className={sCont.info}>
				<div className={sCont.ava}>
					<img src="https://avatars.mds.yandex.net/get-pdb/2854883/73c8efc1-f6dd-4fb7-8112-44f9207f29c3/s1200?webp=false" alt=""/>
				</div>
				<div className={sCont.avaInfo}>
					<span className={sCont.name}>Валерий Евлошевский</span>
					<br/>
					<input className={sCont.status} placeholder="Статус..." type="text"/>
					<br/>
				</div>
				<div className={sCont.post} >
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

export default Content;