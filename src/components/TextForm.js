import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success"); // Add alert type
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success"); // Add alert type
    };

    const handleNumClick = () => {
        let newText = text.match(/\d+/g);
        if (newText) {
            newText = newText.join(", ");
            setText(newText);
            props.showAlert("Extracted all numbers", "success"); // Add alert type
        } else {
            setText('No numbers found');
            props.showAlert("No numbers found", "warning"); // Add alert type
        }
    };
    const handleCopy = () => {
        // Copy the text inside the textarea to clipboard
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
      };

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        id="myBox"
                        rows="3"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleNumClick}>Extract All Numbers</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy To Clipboard</button>

            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(" ").filter(word => word !== "").length).toFixed(2)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
