import './App.css';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OutputBar } from './components/OutputBar';

function App() {
  return (
    <div className="App">
      <Banner />
      <OutputBar />

    </div>
  );
}

export default App;
