import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OutputBar } from './components/OutputBar';
import { Graph } from './components/Graph';
import { Pinterest } from 'react-bootstrap-icons';
import { Piechart } from './components/Piechart';

function App() {
  return (
   /*
    <div>
        <NavBar />
        <Banner />
        <OutputBar />
        <Piechart/>
    </div>
    */
    
    <Router>
      <div className="App">
        <NavBar />
        <Banner />

        <Routes>
          <Route path="/" element={<OutputBar />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>


      </div>
    </Router>
    
  );
}

export default App;
