import logo from './logo.svg';
import logoPng from './logo192.png';
import './App.css';
import { ReactSVG } from "react-svg";


import HtmlToCanvas from './capturers/HtmlToCanvas';
import DomToImage from './capturers/DomToImage';
import HtmlToImage from './capturers/HtmlToImage';

import ReportModal from './components/ReportModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoPng} className="App-logo-png" alt="logo" />
        <ReactSVG className='App-logo-react-svg' src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HtmlToCanvas />
        <DomToImage />
        <HtmlToImage />
        <ReportModal />
      </header>
    </div>
  );
}

export default App;
