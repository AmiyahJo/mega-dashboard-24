import React, { useState } from 'react';
import '/home/codio/workspace/mega-dash/src/components/textEditor.css';

const TextEditor = () => {

    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };
  
    return (
        <>
        <div className="email-editor">
            <div className="editor">
            <textarea
                value={text}
                onChange={handleChange}
                rows="10"
                cols="50"
                placeholder="Text here..."
             />
             </div>
            <div className="preview">
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
            </>
    );
};

export default TextEditor;