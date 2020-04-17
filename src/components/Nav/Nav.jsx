import React from 'react';
import sNav from './Nav.module.css';


const Nav = () =>{
	return(
	<nav className = {sNav.nav}>
       		<div className={sNav.item}>
                            <a href="/content">Моя страница</a>
                     </div>
       		<div className={sNav.item}>
                            <a href="/friends">Друзья</a>
                     </div>
       		<div className={sNav.item}>
                            <a href="/dialogs">Сообщения</a>
                     </div>
       		<div className={sNav.item}>
                            <a href="#">Музыка</a>
                     </div>
       		<div className={sNav.item}>
                            <a href="#">Видео</a>
                     </div>
       		<div className={sNav.item}>
                            <a href="/foto">Фото</a>
                     </div>
       		<div className={sNav.item}>
                            <a href="#">Настройки</a>
                     </div>
       	</nav>
       	)
}

export default Nav;