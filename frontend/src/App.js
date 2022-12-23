import './App.css';
import './styles/select.css'
import './styles/result.css'
import { useState } from 'react';
import ReactModal from 'react-modal'

import SelectLevel from './components/SelectLevel';
import SelectInitialWord from './components/SelectInitialWord';
import SelectLength from './components/SelectLength';
import Result from './components/Result';


const renderPage = (page, level, word, length, setPage, setLevel, setWord, setLength) => {
  switch(page) {
    case 1:
      return <SelectLevel setPage={setPage} setLevel={setLevel} />
    case 2:
      return <SelectInitialWord setPage={setPage} setWord={setWord} />
    case 3:
      return <SelectLength setPage={setPage} setLength={setLength} />
    case 4:
      return <Result setPage={setPage} level={level} word={word} length={length} />
    default:
      return <SelectLevel setPage={setPage} setLevel={setLevel} />
  }
}

function App() {
  const [page, setPage] = useState(1);
  const [level, setLevel] = useState(5);
  const [word, setWord] = useState('');
  const [length, setLength] = useState(10);

  return (
    <div className="App">

      <h1>Markov Shakespeare</h1>
      <div className="wrapper">
        {renderPage(page, level, word, length, setPage, setLevel, setWord, setLength)}
      </div>
      
      <a className="step-button" style={{marginTop:"100px", textDecoration:"none"}} href="https://github.com/ricsign/markov-shakespeare/blob/main/README.md">
          <span>
            ?
          </span>
      </a>


      
    </div> 
  );
}

export default App;
