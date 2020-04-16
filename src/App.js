import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Content from './components/Content.js';

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
