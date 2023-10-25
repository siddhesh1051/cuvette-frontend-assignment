import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Home from './pages/Home';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rank,setRank] = useState(12890);
  const [percentile,setPercentile] = useState(37);
  const [correctAnswers,setCorrectAnswers] = useState(7);

  return (
    <div className="App">
      <Home setModalOpen={ setModalOpen } modalOpen={modalOpen} rank={rank} percentile={percentile} correctAnswers={correctAnswers} />
      {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} rank={rank} setRank={setRank} percentile={percentile} setPercentile={setPercentile} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} />}

    </div>
  );
}

export default App;
