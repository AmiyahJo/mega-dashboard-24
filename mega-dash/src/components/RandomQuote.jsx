import React, { useState } from 'react';
import '/home/codio/workspace/mega-dash/src/components/RandomQuote.css';

const quotes = [
    {text: "The Secret of getting ahead, is getting started", author: "Mark Twain"},
    {text: "There is hope, even when your brain tells you there isn't", author: "John Green"},
    {text: "ALmost everything will work again if you unplug it for a few minutes, including you", author: "Anne Lamott"},
    {text: "Life is given to live, not survive", author: "Mobammad Natalie"},
    {text: "The biggest risk a person can take is do nothing", author: "Robert T. Kiyosaki"},
    {text: "Happiness is not by chance, but by choice", author: "Jim Rohn"},
];

const RandomQuote = () => {
    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div className="random-quote">
            <div className="quote-text">"{quote.text}"</div>
            <div className="quote-author">-{quote.author}</div>
            <button onClick={getRandomQuote}>New Quote</button>
        </div>

    );
};

export default RandomQuote;