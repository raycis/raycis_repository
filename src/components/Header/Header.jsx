import React from 'react';
import s from './Header.module.css'

	const Header = () =>{
		return(
		 	<header className={s.header}>
		 		<div className={s.item__1}><img src="https://avatars.mds.yandex.net/get-zen_doc/1648379/pub_5d618be5a06eaf00aeec32e9_5d61a0f4394b2a00ae8a09f2/scale_1200" alt=""/></div>
				<div className={s.item__2}><span className={s.logo}><span className={s.logo__c}>С</span>оциальная сеть</span></div>
				<div className={s.item__3}><span className={s.ht}><span className={s.ht__r}>#</span>лучшедома</span></div>
       		</header>
       		)
       }


export default Header;