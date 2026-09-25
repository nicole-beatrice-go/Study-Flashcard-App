import React, { useState } from 'react';
import './Cards.css';

const Card = ({ question, answer, difficulty, onUpdateDifficulty }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false); // Add state to toggle answer visibility
    const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    const handleSave = () => {
        onUpdateDifficulty(selectedDifficulty); // Update parent state
        setIsEditing(false);
    };

    return (
        <div className={`card ${selectedDifficulty}`}>
            <h3>{question}</h3>
            {showAnswer && <p>{answer}</p>} {/* Conditionally render answer */}
            <p>Difficulty: {selectedDifficulty}</p>
            <button onClick={() => setShowAnswer(!showAnswer)}> {/* Toggle answer visibility */}
                {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel' : 'Edit Difficulty'}
            </button>
            {isEditing && (
                <div className="difficulty-selector">
                    <select value={selectedDifficulty} onChange={handleDifficultyChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
};

export default Card;
