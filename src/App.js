import Navbar from "./components/navbar.js";
import './App.css';
import React from 'react';

import Main from './components/main.js'
import Home from './components/home.js'
import Marvel from './components/marvel.js'
import Dc from './components/dc.js'
import SciFi from './components/sci-fi.js'
import {HashRouter as Router,Routes,Route} from 'react-router-dom';

function App() {



  return (
    <>
  
    <Router>
    <Navbar/>
    <Routes>
   
     <Route exact path='/' element={<Main/>}/>
     <Route exact path='/home' element={<Home/>}/>
     <Route exact path='/marvel' element={<Marvel/>}/>
     <Route exact path='/dc' element={<Dc/>}/>
     <Route exact path='/sci-fi' element={<SciFi/>}/>
      
      
 
    </Routes>
   
    </Router>
    </>
  );

}

export default App;