import React from 'react';
import './App.css';

import Menu from '../src/components/Menu';
import About from './components/About';
import Hero from '../src/components/Hero';
import Work from '../src/components/Work';
import Contact from '../src/components/Contact'

function App() {
  return (
    <div className="App">
      <Menu />
     
      <Hero/>
      <About/>
        <Work />
       <Contact/>
   
    </div>
  );
}

export default App;
