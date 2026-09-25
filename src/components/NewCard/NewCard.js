import React from 'react';

import CardForm from './CardForm';
import './NewCard.css';

const NewCard = (props) => {
    const passCardDataHandler = (enteredCardData) => {
        const cardData = {
            ...enteredCardData,
            id: Math.random().toString(), // Generate a random id for the card
        };
        props.onAddCard(cardData); // Pass the card data to the parent component
    };

    return (
        <div className='new-card'>
            <CardForm onPassCardData={passCardDataHandler} />
        </div>
    );
};

export default NewCard;
