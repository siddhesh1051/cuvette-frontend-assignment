import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Home from './pages/Home';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Home setModalOpen={ setModalOpen } modalOpen={modalOpen}/>
      {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />}

    </div>
  );
}

export default App;
