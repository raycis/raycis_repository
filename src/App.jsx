import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Myprofile from './components/Myprofile/Myprofile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Foto from './components/Foto/Foto.jsx';
import Friends from'./components/Friends/Friends.jsx';
import {BrowserRouter, Route} from 'react-router-dom';




const App = (props) => {

     
 
    return (
      <BrowserRouter>
      <div className='app-wrapper'>
            <div className='app-wrapper__header'>
       	    <Header />
            </div>
       	<Nav />
       	  <div className='app-wrapper__cont'>
                  <Route path='/myprofile' render={()=><Myprofile info={props.info.postMessage} />} />
                  <Route path='/dialogs'render={()=><Dialogs infoName={props.info.personData} infoMessage={props.info.messageData} />} />
                  <Route path='/foto'render={()=><Foto />} />
                  <Route path='/friends'render={()=><Friends infoName={props.info.personData}/>} />
       	  </div>
		
      </div>
      </BrowserRouter>
      );
}

export default App;
