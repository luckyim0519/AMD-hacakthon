import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OutputBar } from './components/OutputBar';
import { Graph } from './components/Graph';


function App() {
  return (

    <Router>
      <div className="App">
      
        <Banner />
        <Routes>
          <Route path="/" element={<>
            <OutputBar />
          </>} />
          <Route path="/graph" element={<Graph /> } />
        </Routes>


      </div>
    </Router>
    
    
  );
}

export default App;