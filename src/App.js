import React from 'react';
import './App.css';
import { Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <HomePage />}/>
      <Route exact path='/techstack' render={() => <TechStack />} />
      <Route exact path='/projects' render={()=> <Projects/>}/>
      <Route exact path='/contact' render={()=> <Contact/>}/>
      <Footer />
    </div>
  );
}

export default App;
