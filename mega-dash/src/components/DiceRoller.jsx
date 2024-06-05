import React, { useState } from 'react';
import '/home/codio/workspace/mega-dash/src/components/DiceRoller.css';

const Diceroller = () => {
    const [result, setResult] =
    useState(null);

    const rollDice = () => {
        const min = 1;
        const max= 6;
        const roll = Math.floor(Math.random() * (max - min + 1)) + min;
            setResult(roll);
    };

    return(
        <div className="dice-roller">
            <button onClick={rollDice}>Roll</button>
            {result !== null && <div className="result">Result: {result}</div>}
        </div>
    );
};

export default Diceroller;