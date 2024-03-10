import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OutputBar } from './components/OutputBar';

function App() {
  return (
    <div className="App">
      <Banner />
      {/* <InputBar /> */}
      <OutputBar />

    </div>
  );
}

export default App;
