import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OutputBar } from './components/OutputBar';
import { Graph } from './components/Graph';
import {Banner_graph} from './components/Banner_graph';
import { ProjectEvaluation } from './components/ProjectEvaluation';

function App() {
  return (

    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <OutputBar />
          </>} />
          <Route path="/graph" element={<>
            <Banner_graph />
            <Graph />
          </>} />
          <Route path="/project" element={<>
            <ProjectEvaluation />
          </>} />
        </Routes>


      </div>
    </Router>
    
    
  );
}

export default App;