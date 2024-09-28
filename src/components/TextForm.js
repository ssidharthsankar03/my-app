import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase");
    };

    const handleNumClick = () => {
        // Extract all numbers from the text
        let newText = text.match(/\d+/g);
        if (newText) {
            newText = newText.join(", "); // Join numbers as a string
            setText(newText);
            props.showAlert("Extracted all numbers");
        } else {
            setText('No numbers found'); // Handle case when no numbers are present
            props.showAlert("No numbers found");
        }
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
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}
                        id="myBox"
                        rows="3"
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleNumClick}>Extract All Numbers</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p> 
                <p>{(0.008 * text.split(" ").filter(word => word !== "").length).toFixed(2)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
