import React, { useState } from 'react';

const TextEditor = () => {

    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };
  
    return (
        <>
        <div>
            <textarea
                value={text}
                onChange={handleChange}
                rows="10"
                cols="50"
                placeholder="Text here..."
             />
            <div>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
            </>
    )
}

export default TextEditor;