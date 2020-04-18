import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo =(props) =>{
	return(
		<div className={s.profile}>
			<div className={s.ava}>
				<img src="https://avatars.mds.yandex.net/get-pdb/2854883/73c8efc1-f6dd-4fb7-8112-44f9207f29c3/s1200?webp=false" alt=""/>
			</div>
			<div className={s.playerInfo}>
				<span className={s.name}>Валерий Евлошевский</span>
				<br/>
				<input className={s.status} placeholder="Статус..." type="text"/>
				<p>Возраст:<span> 29 лет</span></p>
				<p>Семейное положение: <span> Женат</span></p>
				<p>Друзья:<span> 5</span></p>
				<p>Фото:<span> 56</span></p>
				<p>Видео:<span> 9</span></p>
			</div>
		</div>
		)
}



export default ProfileInfo;