import React, { useState } from 'react';
import NewCard from './components/NewCard/NewCard';
import Cards from './components/Card/Cards';


const App = () => {
  const [cards, setCards] = useState([]);

  const addCardHandler = (cardData) => {
    console.log('In App.js');
    console.log(cardData); // Log the card data received from NewCard
    setCards((prevCards) => [cardData, ...prevCards]);
  };

  const updateCardDifficulty = (id, newDifficulty) => {
    setCards((prevCards) => 
      prevCards.map(card =>
        card.id === id ? { ...card, difficulty: newDifficulty } : card
      )
    );
  };

  return (
    <div>
      <NewCard onAddCard={addCardHandler} />
      <div>
        {cards.map(card => (
          <Cards
            key={card.id}
            question={card.question}
            answer={card.answer}
            difficulty={card.difficulty}
            onUpdateDifficulty={(newDifficulty) => updateCardDifficulty(card.id, newDifficulty)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;