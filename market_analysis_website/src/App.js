import React, { useRef } from 'react';

import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OutputBar } from './components/OutputBar';
import { Graph } from './components/Graph'; 


function App() {
  return (
    
    <div className="App">
      <Banner />
      <Graph />
      {/* <InputBar /> */}
      <OutputBar />

    </div>
  );
}

export default App;
