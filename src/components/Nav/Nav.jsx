import React from 'react';
import sNav from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () =>{
	return(
	<nav className = {sNav.nav}>
       		<div className={sNav.item}>
                            <NavLink to="/myprofile" activeClassName={sNav.active}>Моя страница</NavLink>
                     </div>
       		<div className={sNav.item}>
                            <NavLink to="/friends" activeClassName={sNav.active}>Друзья</NavLink>
                     </div>
       		<div className={sNav.item}>
                            <NavLink to="/dialogs" activeClassName={sNav.active}>Сообщения</NavLink>
                     </div>
       		<div className={sNav.item}>
                            <a href="#">Музыка</a>
                     </div>
       		<div className={sNav.item}>
                            <a href="#">Видео</a>
                     </div>
       		<div className={sNav.item}>
                            <NavLink to="/foto" activeClassName={sNav.active}>Фото</NavLink>
                     </div>
       		<div className={sNav.item}>
                            <a href="#">Настройки</a>
                     </div>
       	</nav>
       	)
}

export default Nav;