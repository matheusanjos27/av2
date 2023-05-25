import './style.css';
import Card from '../../components/Card';
import Xp from '../../components/Xp';
import { useState } from 'react';

const Game = () => {
  const [cards, setCards] = useState([
    {
      front: "Gato",
      back: "Cat"
    },
    {
      front: "Vaca",
      back: "Cow"
    },
    {
      front: "Cachorro",
      back: "Dog"
    }
  ]);
  const [points, setPoints] = useState(0);

  const handleUpdatePoints = () => {
    setPoints(points + 10);
  };

  return (
    <>
      <div id="container-topo">
        <div className='titulo'>FlashCard Challenge Certo +10 </div>
        <Xp total={points} />
      </div>
      <div id="container-cards">
        {cards.map((card, index) => (
          <Card key={index} content={card} updatePoints={handleUpdatePoints} />
        ))}
      </div>
    </>
  );
};

export default Game;
