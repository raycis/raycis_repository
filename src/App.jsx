import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Foto from './components/Foto/Foto.jsx';
import Friends from'./components/Friends/Friends.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
    return (
      <BrowserRouter>
      <div className='app-wrapper'>
       	<Header />
       	<Nav />
       	  <div className='app-wrapper__click'>
                  <Route path='/content' component={Content} />
                  <Route path='/dialogs'component={Dialogs} />
                  <Route path='/foto'component={Foto} />
                  <Route path='/friends'component={Friends} />
       	  </div>
		
      </div>
      </BrowserRouter>
      );
}

export default App;
