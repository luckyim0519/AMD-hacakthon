import React, { useRef } from 'react';

import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OutputBar } from './components/OutputBar';
import { Graph } from './components/Graph'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      
      {/* <InputBar /> */}
      <Banner />
      <OutputBar />
      <Router>
        
        <Routes>
        <Route path="/graph" element={<Graph />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
