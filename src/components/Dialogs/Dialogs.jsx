import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props)=>{
	return(
		<div className={s.dislogs}>
			<div className={s.name}>
				<div className={s.name__item}>Игорь</div>
				<div className={s.name__item}>Валера</div>
				<div className={s.name__item}>Костя</div>
				<div className={s.name__item}>Вася</div>
				<div className={s.name__item}>Денис</div>
			</div>
			<div className={s.message}>
				<div className={s.massage__item}>Hi</div>
				<div className={s.massage__item}>How are yo</div>
				<div className={s.massage__item}>yo</div>
			</div>
		</div>
		)
}



export default Dialogs;