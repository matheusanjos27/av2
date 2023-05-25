import { useState } from 'react';
import './style.css';

export default function Card({ content, updatePoints }) {
  const [isOpened, setIsOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  
  const handleCardClick = () => {
    setIsOpened(!isOpened);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setUserInput('');
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleUserInputSubmit = () => {
    if (userInput.trim().toLowerCase() === content.back.toLowerCase()) {
      updatePoints(); // Atualiza os pontos no componente Game
    }
    setIsModalOpen(false);
    setUserInput('');
  };

  return (
    <div className={isOpened ? 'card card-opened' : 'card'} onClick={handleCardClick}>
      <div className="content">
        <div className="front">{content.front}</div>
        <div className="back">{content.back}</div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Digite a palavra</h2>
            <input type="text" value={userInput} onChange={handleUserInput} />
            <button onClick={handleUserInputSubmit}>Enviar</button>
            <button onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
