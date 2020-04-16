import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Content from './components/Content/Content.js';

const App = () => {
    return (
      <div className='app-wrapper'>
       	<Header />
       	<Nav />
       	<Content />
			
      </div>
      );
}

export default App;
