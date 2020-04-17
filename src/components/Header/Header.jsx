import React from 'react';
import sHeader from './Header.module.css'

	const Header = () =>{
		return(
		 	<header className={sHeader.header}>
		 		<div className={sHeader.item__1}><img src="https://avatars.mds.yandex.net/get-zen_doc/1648379/pub_5d618be5a06eaf00aeec32e9_5d61a0f4394b2a00ae8a09f2/scale_1200" alt=""/></div>
				<div className={sHeader.item__2}><span className={sHeader.logo}><span className={sHeader.logo__c}>С</span>оциальная сеть</span></div>
				<div className={sHeader.item__3}><span className={sHeader.ht}><span className={sHeader.ht__r}>#</span>лучшедома</span></div>
       		</header>
       		)
       }


export default Header;