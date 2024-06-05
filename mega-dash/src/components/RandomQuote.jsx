import React, { useState } from 'react';
import '/home/codio/workspace/mega-dash/src/components/RandomQuote.css';

const quotes = [
    {text: "...", author: "..."},
    {text: "...", author: "..."},
    {text: "...", author: "..."},
    {text: "...", author: "..."},
    {text: "...", author: "..."},
    {text: "...", author: "..."},
];

const RandomQuote = () => {
    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div className="random-quote">
            <div className="quote-text">"{quote.text}</div>
            <div className="quote-author">-{quote.author}</div>
            <button onClick={getRandomQuote}>New Quote</button>
        </div>

    );
};

export default RandomQuote;